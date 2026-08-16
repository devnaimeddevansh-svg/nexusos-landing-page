import { NextRequest, NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase";
import { isValidEmail, normalizeEmail, FOUNDING_MEMBER_LIMIT } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = normalizeEmail(body.email ?? "");
    const referralSource = (body.referralSource ?? "direct").slice(0, 100);

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabase();

    const { count: existingCount } = await supabase
      .from("registrations")
      .select("id", { count: "exact", head: true })
      .eq("email", email);

    if (existingCount && existingCount > 0) {
      return NextResponse.json(
        {
          success: false,
          alreadyRegistered: true,
          message:
            "You're already on the list! We'll notify you when NexusOS launches.",
        },
        { status: 200 }
      );
    }

    const { count: foundingCount } = await supabase
      .from("registrations")
      .select("id", { count: "exact", head: true })
      .eq("is_founding_member", true);

    const isFoundingMember = (foundingCount ?? 0) < FOUNDING_MEMBER_LIMIT;

    const { data, error } = await supabase
      .from("registrations")
      .insert({
        email,
        referral_source: referralSource,
        is_founding_member: isFoundingMember,
      })
      .select("id, is_founding_member")
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            alreadyRegistered: true,
            message:
              "You're already on the list! We'll notify you when NexusOS launches.",
          },
          { status: 200 }
        );
      }
      throw error;
    }

    const { count: totalCount } = await supabase
      .from("registrations")
      .select("id", { count: "exact", head: true });

    const { count: newFoundingCount } = await supabase
      .from("registrations")
      .select("id", { count: "exact", head: true })
      .eq("is_founding_member", true);

    return NextResponse.json({
      success: true,
      isFoundingMember: data.is_founding_member,
      message: data.is_founding_member
        ? "Welcome, Founding Member! You've secured your free month of NexusOS Pro."
        : "You're on the list! We'll notify you when NexusOS launches.",
      registrationCount: totalCount ?? 0,
      foundingSpotsRemaining: Math.max(
        0,
        FOUNDING_MEMBER_LIMIT - (newFoundingCount ?? 0)
      ),
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
