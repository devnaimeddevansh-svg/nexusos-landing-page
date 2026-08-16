import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase";
import { FOUNDING_MEMBER_LIMIT } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createServerSupabase();

    const [registrationsResult, visitsResult, foundingResult] =
      await Promise.all([
        supabase.from("registrations").select("id", { count: "exact", head: true }),
        supabase.from("page_visits").select("id", { count: "exact", head: true }),
        supabase
          .from("registrations")
          .select("id", { count: "exact", head: true })
          .eq("is_founding_member", true),
      ]);

    if (registrationsResult.error) throw registrationsResult.error;
    if (visitsResult.error) throw visitsResult.error;
    if (foundingResult.error) throw foundingResult.error;

    const registrationCount = registrationsResult.count ?? 0;
    const visitCount = visitsResult.count ?? 0;
    const foundingCount = foundingResult.count ?? 0;
    const foundingSpotsRemaining = Math.max(
      0,
      FOUNDING_MEMBER_LIMIT - foundingCount
    );

    return NextResponse.json({
      registrationCount,
      visitCount,
      foundingCount,
      foundingSpotsRemaining,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
