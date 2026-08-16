import { NextRequest, NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const referrer = request.headers.get("referer") ?? body.referrer ?? null;
    const userAgent = request.headers.get("user-agent") ?? null;

    const supabase = createServerSupabase();

    const { error } = await supabase.from("page_visits").insert({
      referrer: referrer?.slice(0, 500) ?? null,
      user_agent: userAgent?.slice(0, 500) ?? null,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Track visit error:", error);
    return NextResponse.json(
      { error: "Failed to track visit" },
      { status: 500 }
    );
  }
}
