import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

/*
  Klien Supabase sisi server untuk PANEL ADMIN: sesi login Google
  disimpan di cookie, sehingga semua tulisan lewat akun admin dan
  tetap diperiksa Row Level Security (bukan kunci secret).
*/

export async function buatKlienServer(): Promise<SupabaseClient> {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(daftar) {
          try {
            daftar.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // dipanggil dari Server Component (tidak boleh set cookie):
            // aman diabaikan karena pembaruan sesi ditangani route callback.
          }
        },
      },
    },
  );
}
