import type { Bidang } from "./types";

/*
  Sumber: PKM-PI-2026_fix.pdf (Panduan Pelaksanaan PKM-PI 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmPi: Bidang = {
  slug: "pkm-pi",
  kode: "PI",
  nama: "PKM Penerapan Iptek",
  skema: "pendanaan",
  intiKegiatan:
    "Menerapkan solusi iptek (teknologi atau manajemen) bagi mitra komersial.",
  deskripsi: [
    "PKM Penerapan Iptek (PKM-PI) adalah program penerapan IPTEK yang sudah siap diterapkan untuk menyelesaikan permasalahan mitra produktif (profit-oriented). Solusi berfokus pada permasalahan proses bisnis inti mitra, pengelolaan bahan baku, produksi, keuangan, sumber daya manusia, pemasaran, hingga pengiriman produk ke konsumen, sehingga berdampak pada peningkatan keuntungan dan perkembangan usaha. Mahasiswa wajib melakukan observasi dan analisis kondisi mitra agar solusi tepat guna, bukan sekadar teknologi tinggi yang tidak relevan. PKM-PI tidak memuat penelitian maupun pengujian ilmiah berbasis hipotesis atau desain eksperimental; yang diperbolehkan hanya uji fungsi (functional test/commissioning), uji operasional pada kondisi kerja mitra, atau uji adopsi sebagai bagian dari implementasi.",
    "Mitra profit mencakup pengusaha berskala mikro atau kecil (toko, industri rumahan, pedagang kaki lima, koperasi), industri menengah hingga besar bidang jasa atau produksi, kelompok tani, kelompok nelayan, dan sektor informal lainnya. Lingkup bantuan IPTEK meliputi efisiensi proses produksi, peningkatan mutu produk, sistem jaminan mutu (SNI dan/atau ISO), keselamatan dan kesehatan kerja, penanganan limbah yang terkait proses produksi, diversifikasi produk, perluasan kanal pemasaran, hingga bantuan manajemen seperti pembukuan, peningkatan kompetensi SDM, dan perolehan status legal usaha (PIRT, sertifikat halal, SNI, ISO, kekayaan intelektual). PKM-PI terbuka bagi semua bidang ilmu, termasuk sosial humaniora dan seni, serta tahun 2026 menjadi PKM tematik yang mengacu pada 10 tema PKM.",
    "Usulan harus lahir dari diskusi dengan calon mitra: tim mengidentifikasi persoalan atau kebutuhan prioritas mitra, menawarkan solusi, lalu kesepakatan dituangkan dalam Surat Pernyataan Kesediaan Bekerja Sama dari Mitra yang wajib dilampirkan dalam proposal. Pelaksanaan dilakukan secara luring penuh di lokasi mitra dengan jarak kampus-mitra maksimum 200 km yang dibuktikan lewat Google Maps pada lampiran. Selama program, seluruh kegiatan dan pengeluaran dana didokumentasikan pada Logbook kegiatan dan Logbook keuangan di simbelmawa/pkm, serta wajib dipublikasikan dan/atau dipromosikan di media sosial.",
  ],
  ketentuanTim: [
    "Tim 3-5 mahasiswa aktif D-3/D-4/S-1 terdaftar di PDDikti: 1 ketua + 2-4 anggota; yang sudah bergelar atau sedang koas/pendidikan profesi tidak diperbolehkan.",
    "Topik PKM yang diangkat harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul.",
    "Nama pengusul ditulis lengkap sesuai terdaftar di PDDikti; boleh beda prodi asal satu PT.",
    "Keanggotaan disarankan dari minimal 2 angkatan berbeda agar ada pembinaan dan kesinambungan pengusulan tahun berikutnya.",
    "Tidak boleh sekaligus mengusulkan PPK Ormawa dan P2MW di tahun yang sama.",
    "Usulan merupakan hasil diskusi dengan calon mitra sebelum proposal disusun; wajib melampirkan Surat Pernyataan Kesediaan Bekerja Sama dari Mitra yang ditandatangani mitra, yang juga menyatakan tidak ada ikatan kekeluargaan maupun ikatan usaha antara mitra dan tim pelaksana.",
    "Mitra harus mitra produktif (profit-oriented), pengusaha mikro/kecil, industri menengah/besar, kelompok tani, kelompok nelayan, atau sektor informal; jarak lokasi mitra dari kampus maksimum 200 km dan dibuktikan dengan Google Maps yang dimasukkan dalam lampiran.",
  ],
  pendanaan: {
    utama: "Rp 6-8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt: "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang)",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra (opsional)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman) + konsep Buku Pedoman Mitra",
    "Laporan akhir (bagian inti maksimum 10 halaman) + Buku Pedoman Mitra final",
    "Buku Pedoman Mitra, manual pengoperasian IPTEK yang diterapkan agar mitra dapat melanjutkan sendiri setelah kegiatan selesai",
    "Akun media sosial khusus topik PKM (aktif, publik)",
  ],
  catatanLuaran:
    "Buku Pedoman Mitra berformat bebas dan minimal berisi deskripsi masalah mitra, spesifikasi IPTEK, SOP penggunaan, perawatan & troubleshooting, serta kontak lanjutan; naskahnya wajib diunggah sebelum PKP2. Wajib ada 3 unggahan ber-iklan (Ads) serentak (Sabtu 23 Mei, 20 Juni, dan 8 Agustus 2026, pukul 12.00 WIB/13.00 WITA/14.00 WIT) dengan total anggaran Ads maksimum Rp 500 ribu; setiap unggahan memuat logo Kemdiktisaintek & logo PKM serta tagar #pkm, #pkm2026, #pkmpendanaan2026, dan unggahan Instagram wajib menandai @kemahasiswaan.dikti, @belmawa.dikti, @ditjen.dikti, dan @kemdiktisaintek.ri. Kegagalan memenuhi luaran media sosial berdampak pada penilaian PKP2.",
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata, tanpa akronim/singkatan tidak baku, menonjolkan kata kunci kegiatan dan hasil utamanya, huruf kapital, Bahasa Indonesia.",
    format: [
      "Times New Roman 12 (termasuk nomor halaman)",
      "Spasi 1,15, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan-atas-bawah 3 cm",
      "Daftar isi pakai angka romawi (kanan bawah); bagian inti & lampiran angka arab mulai 1 (kanan atas)",
    ],
    struktur: [
      "BAB 1 Pendahuluan, identitas mitra (nama, alamat, bidang usaha, produk/jasa), proses identifikasi masalah bersama mitra, fokus satu persoalan prioritas (hulu, proses, atau hilir), uraian permasalahan dan solusi IPTEK yang ditawarkan, rencana keberlanjutan, profil usaha dan kinerja mitra secara kuantitatif, rumusan masalah, tujuan, target luaran, manfaat bagi mitra",
      "BAB 2 Tinjauan Pustaka, kajian teori yang mendukung solusi kepada mitra; solusi boleh karya orisinal atau karya pihak lain; jika solusi sudah pernah dipublikasikan pihak lain, hal itu wajib dijelaskan di tinjauan pustaka",
      "BAB 3 Metode Pelaksanaan, dasar kegiatan dari kondisi riil mitra, langkah mengukur kebutuhan mitra, langkah strategis merealisasikan gagasan, rancangan pengukuran capaian, solusi inti kegiatan, serta pihak pembantu implementasi beserta peran dan kontribusinya",
      "BAB 4 Biaya dan Jadwal Kegiatan, RAB (komposisi minimum 80% operasional, maksimum 20% administrasi; bahan habis pakai maks 60%, sewa/jasa maks 15%, transport lokal maks 30%, lain-lain maks 15%) wajib memuat alokasi dana publikasi/promosi di Sosial Media + jadwal bar chart 3-4 bulan",
      "Daftar Pustaka, Harvard style, alfabetis",
      "Lampiran, biodata, justifikasi anggaran, pembagian tugas, surat pernyataan ketua, surat pernyataan kesediaan bekerja sama dari mitra, gambaran IPTEK yang diterapkan, denah lokasi mitra + Google Maps jarak kampus, hasil uji similaritas (indeks maksimum 25%)",
    ],
    catatanKhas: [
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah, sewa komputer-laptop-printer-ponsel-kamera-ruangan, pembelian alat/bahan > Rp 1 juta per item, flashdisk/penyimpanan data, kuota internet > Rp 100 ribu/bulan/tim, lisensi > 6 bulan, penjilidan laporan (kecuali PTS/PTN yang mewajibkan hardcopy), biaya seminar/publikasi jurnal.",
      "Rekomendasi item RAB khas PKM-PI: kertas maksimum 2 rim, biaya publikasi/promosi di Sosial Media maksimum Rp 500 ribu, sewa laboratorium (jika wajib) maksimum Rp 1 juta, transport lokal seefisien mungkin dengan batas maksimum 30%.",
      "Mitra komersial: usulan lahir dari komunikasi dan diskusi dengan calon mitra, fokus satu persoalan prioritas mitra, dan proposal wajib memuat Surat Pernyataan Kesediaan Bekerja Sama dari Mitra (tanpa ikatan kekeluargaan/ikatan usaha dengan tim).",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas diberi nama namaketua_namaPT_PKM-PI.pdf.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, pengesahan, ringkasan, atau abstrak",
      "Tanda tangan hasil pemotongan lokal pada biodata, surat pernyataan ketua, atau surat pernyataan mitra",
      "Indeks uji periksa similaritas (Turnitin/iThenticate/sejenis, wajib dilampirkan) melebihi maksimum 25%",
    ],
  },
  filePanduan: "/panduan/PKM-PI-2026_fix.pdf",
};
