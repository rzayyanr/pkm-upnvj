import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), "public", "logo-upnvj.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#006030",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #0e9650 0%, #006030 55%, #003d1f 100%)",
          padding: "56px 64px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Baris Atas: Logo dan Badge Kampus */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="Lambang UPNVJ"
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                }}
              >
                UPN VETERAN JAKARTA
              </span>
              <span style={{ fontSize: "14px", color: "#a5e0c4" }}>
                Kementerian Pendidikan Tinggi, Sains, dan Teknologi
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5ea8a",
              color: "#171717",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 800,
            }}
          >
            PANDUAN RESMI 2026
          </div>
        </div>

        {/* Tengah: Judul Besar dan Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            PKM UPNVJ
          </div>
          <div
            style={{
              fontSize: "27px",
              lineHeight: 1.35,
              color: "#d8f1e4",
              maxWidth: "920px",
            }}
          >
            Pusat Informasi dan Panduan Lengkap Program Kreativitas Mahasiswa:
            10 Bidang, Alur Pendaftaran, Tips Proposal, dan Agenda Nasional.
          </div>
        </div>

        {/* Baris Bawah: 3 Badge Informasi dan Alamat Web */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              10 Bidang PKM
            </div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Skema Pendanaan dan Insentif
            </div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Menuju PIMNAS 39
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#a5e0c4",
              letterSpacing: "-0.01em",
            }}
          >
            pkm-upnvj.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
