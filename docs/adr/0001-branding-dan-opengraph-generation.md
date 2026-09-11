# 0001: Pembangkitan Gambar Pratinjau Open Graph dan Integrasi Identitas UPNVJ

## Konteks

Saat tautan website dibagikan ke aplikasi perpesanan seperti WhatsApp atau media sosial, aplikasi tersebut memerlukan gambar pratinjau (Open Graph image) beresolusi 1200x630 pixel dan metadata yang valid agar tidak menampilkan kartu kosong. Selain itu, logo pada antarmuka sebelumnya masih berupa huruf "P" placeholder yang mengurangi kredibilitas situs.

## Keputusan

1. Kami menggunakan fitur bawaan Next.js `ImageResponse` (`next/og`) pada route `src/app/opengraph-image.tsx` untuk menghasilkan banner Open Graph 1200x630 secara dinamis di edge CDN Vercel.
2. Kami menyematkan lambang resmi UPN Veteran Jakarta pada Navbar (`src/components/layout/Navbar.tsx`) dan favicon browser (`src/app/icon.png`) bersumber langsung dari aset vektor resolusi tinggi `.assets/logo-upnvj.png`.
3. Kami mengonfigurasi `metadataBase`, `openGraph`, dan `twitter` di `src/app/layout.tsx` secara terpusat.

## Alasan

Menggunakan `next/og` menghindari penyimpanan berkas gambar statis berukuran besar di repositori Git, memastikan kualitas teks dan lambang selalu tajam di berbagai rasio layar, serta secara otomatis menginjeksi tag `<meta property="og:image">` yang dikenali oleh WhatsApp dan Twitter tanpa konfigurasi manual yang rawan usang.
