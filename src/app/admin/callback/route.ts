import { NextResponse } from "next/server";
import { buatKlienServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  if (code) {
    const klien = await buatKlienServer();
    const { error } = await klien.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}/admin`);
    }
  }
  return NextResponse.redirect(`${origin}/admin/login?gagal=1`);
}
