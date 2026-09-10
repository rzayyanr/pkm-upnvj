import type { Bidang } from "./types";

/*
  Sumber: PKM-RSH-2026_fix.pdf (Panduan Pelaksanaan PKM-RSH 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmRsh: Bidang = {
  slug: "pkm-rsh",
  kode: "RSH",
  nama: "PKM Riset Sosial Humaniora",
  skema: "pendanaan",
  intiKegiatan:
    "Pengamatan mendalam berbasis iptek untuk mengungkap fenomena sosial dan perilaku manusia dalam kehidupan masyarakat.",
  deskripsi: [
    "PKM-Riset Sosial Humaniora (PKM-RSH) menggabungkan dua bidang: sosial, fenomena interaksi masyarakat seperti ekonomi, psikologi, pendidikan, manajemen, dan politik, dan humaniora, aspek dasar perilaku seperti perkembangan budaya, seni, filsafat, adat istiadat, sejarah, kepercayaan/agama, hukum, dan nilai-nilai.",
    "Paradigma risetnya beragam: hubungan sebab-akibat, deskriptif konklusif, fenomenologi, hermeneutik, pascakolonial, positivistik, historis, struktural, hingga riset pengembangan. Strategi pendekatannya bisa berupa eksperimen, survei, studi kasus, riset aksi, etnografi, riset arsip/penggalian basis data, dan lainnya.",
    "Data riset boleh primer (kuesioner/survei, wawancara, observasi, partisipasi aktif, eksperimen terhadap responden, narasumber, artefak, memori kolektif masyarakat) maupun sekunder (arsip, kepustakaan, laporan BPS/perusahaan, data digital media sosial atau big data, undang-undang/peraturan). Pengumpulan data daring maupun luring; pelaksanaan riset dilakukan secara luring.",
  ],
  bidangKajian: [
    {
      klaster: "Riset Sosial",
      contoh:
        "Fenomena interaksi sosial masyarakat: ekonomi, psikologi, sosial, pendidikan, manajemen, politik",
    },
    {
      klaster: "Riset Humaniora",
      contoh:
        "Aspek dasar perilaku masyarakat: budaya, seni, filsafat, adat istiadat, sejarah, kepercayaan (agama), hukum, nilai-nilai",
    },
  ],
  ketentuanTim: [
    "Tim 3-5 mahasiswa aktif D-3/D-4/S-1 terdaftar di PDDikti: 1 ketua + 2-4 anggota; yang sudah bergelar atau sedang koas/pendidikan profesi tidak diperbolehkan.",
    "Topik harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota; bidang multidisiplin diperbolehkan sesuai ilmu yang ditekuni.",
    "Nama pengusul ditulis lengkap sesuai terdaftar di PDDikti; boleh beda prodi asal satu PT.",
    "Anggota disarankan dari minimal 2 angkatan berbeda agar ada pembinaan dan kesinambungan.",
    "Tidak boleh sekaligus mengusulkan PPK Ormawa dan P2MW di tahun yang sama.",
  ],
  pendanaan: {
    utama: "Rp 6-8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt: "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang)",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra (opsional)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman)",
    "Laporan akhir (bagian inti maksimum 10 halaman)",
    "Artikel ilmiah, wajib semua tim didanai, dari data primer hasil riset",
    "Akun media sosial khusus topik PKM (aktif, publik)",
  ],
  catatanLuaran:
    "Dosen pendamping menjadi penulis korespondensi pada urutan terakhir artikel ilmiah. Wajib ada 3 unggahan ber-iklan (Ads) serentak (23 Mei, 20 Juni, 8 Agustus 2026) dengan total anggaran Ads maksimum Rp 500 ribu; setiap unggahan memuat logo Kemdiktisaintek & logo PKM serta tagar #pkm, #pkm2026, #pkmpendanaan2026.",
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata, tanpa akronim/singkatan tidak baku, menonjolkan kata kunci kegiatan dan hasil utama, huruf kapital, Bahasa Indonesia.",
    format: [
      "Times New Roman 12 (termasuk nomor halaman)",
      "Spasi 1,15, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan-atas-bawah 3 cm",
      "Daftar isi pakai angka romawi (kanan bawah); bagian inti & lampiran angka arab mulai 1 (kanan atas)",
    ],
    struktur: [
      "BAB 1 Pendahuluan, latar belakang, masalah, kebaruan, tujuan, manfaat, luaran",
      "BAB 2 Tinjauan Pustaka, teori relevan untuk menjawab permasalahan riset",
      "BAB 3 Metode Penelitian, lokasi, desain (kualitatif/kuantitatif/mixed method), objek/variabel, teknik penentuan partisipan/sampel, instrumen, analisis data",
      "BAB 4 Biaya dan Jadwal, RAB (komposisi minimum 80% operasional, maksimum 20% administrasi) + jadwal bar chart",
      "Daftar Pustaka, Harvard style, alfabetis",
      "Lampiran, biodata, justifikasi anggaran, pembagian tugas, surat pernyataan, hasil uji similaritas",
    ],
    catatanKhas: [
      "Metode survei dilengkapi kuesioner lengkap di lampiran; metode wawancara dilengkapi pedoman wawancara.",
      "Mixed method: jelaskan desain terpilih (sequential explanatory/exploratory, convergent), tahapan pengumpulan data, dan strategi triangulasi/integrasi.",
      "Kualitas data: uji validitas-reliabilitas (kuantitatif) atau trustworthiness, triangulasi, member checking, audit trail, refleksivitas (kualitatif).",
      "Etika riset sosial wajib ada bila melibatkan manusia/data pribadi: informed consent, kerahasiaan/anonimitas, keamanan data, hak berhenti berpartisipasi.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, pengesahan, ringkasan, atau abstrak",
      "Daftar pustaka tidak mengikuti Harvard style",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate/sejenis wajib dilampirkan)",
    ],
  },
  filePanduan: "/panduan/PKM-RSH-2026_fix.pdf",
};
