import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pkm-upnvj.vercel.app"),
  title: {
    default: "PKM UPNVJ, Semua yang Perlu Kamu Tahu tentang PKM",
    template: "%s | PKM UPNVJ",
  },
  description:
    "Pusat informasi Program Kreativitas Mahasiswa (PKM) untuk mahasiswa UPN Veteran Jakarta: 10 bidang PKM, tahapan, tema, tips proposal, dan panduan resmi 2026.",
  openGraph: {
    title: "PKM UPNVJ, Semua yang Perlu Kamu Tahu tentang PKM",
    description:
      "Pusat informasi Program Kreativitas Mahasiswa (PKM) untuk mahasiswa UPN Veteran Jakarta: 10 bidang PKM, tahapan, tema, tips proposal, dan panduan resmi 2026.",
    url: "https://pkm-upnvj.vercel.app",
    siteName: "PKM UPNVJ",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PKM UPNVJ, Semua yang Perlu Kamu Tahu tentang PKM",
    description:
      "Pusat informasi Program Kreativitas Mahasiswa (PKM) untuk mahasiswa UPN Veteran Jakarta: 10 bidang PKM, tahapan, tema, tips proposal, dan panduan resmi 2026.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Semua halaman statis dengan ISR 5 menit, konten dinamis segar,
// dan halaman tetap tersaji dari cache saat database mati (FR-11).
export const revalidate = 300;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-veteran-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Langsung ke konten utama
        </a>
        <Navbar />
        <main id="konten-utama" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
