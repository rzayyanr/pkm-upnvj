import type { Bidang } from "./types";

/*
  Sumber: PKM-KI-2026_fix.pdf (Panduan Pelaksanaan PKM-Karya Inovatif 2026,
  Direktorat Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks
  panduan. Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmKi: Bidang = {
  slug: "pkm-ki",
  kode: "KI",
  nama: "PKM Karya Inovatif",
  skema: "pendanaan",
  intiKegiatan:
    "Menghasilkan karya fungsional inovatif solutif skala penuh berbasis iptek, siap diproduksi massal.",
  deskripsi: [
    "PKM-Karya Inovatif (PKM-KI) adalah bidang yang berfokus pada pengembangan karya fungsional dan solutif. Paradigma keilmuannya berada pada ranah rekayasa solusi berbasis teknologi terapan: kegiatan ini bukan untuk menemukan pengetahuan baru, melainkan mengintegrasikan, mengadaptasi, atau meningkatkan teknologi yang sudah ada menjadi solusi fungsional siap pakai bagi penggunanya. PKM-KI 2026 berstatus tematik dan mengacu pada 10 tema PKM yang berkaitan dengan pemecahan permasalahan masyarakat serta program prioritas pemerintah, seperti kemandirian pangan, energi, dan air; kesehatan dan gizi masyarakat; pemberantasan kemiskinan; hingga pelestarian seni budaya dan ekonomi kreatif.",
    "Ciri utama luaran PKM-KI adalah produk dalam skala penuh (1:1), bukan sekadar prototipe, tetapi benar-benar fungsional, siap dioperasikan oleh target pengguna, dan memungkinkan diproduksi secara massal. Dua aspek utama yang harus dipenuhi: memiliki target pengguna akhir yang jelas dan spesifik yang memanfaatkan produk secara langsung dan berulang, serta produk fungsional skala penuh yang dibuktikan melalui hasil pengujian. Wujudnya dapat berupa produk mekanik siap pakai berdimensi dan fungsi final, produk elektronik yang beroperasi stabil pada kondisi pengguna, produk IoT yang sudah terpasang dan mampu berkomunikasi di lingkungan nyata, atau produk digital yang langsung dapat digunakan.",
    "Ruang lingkup mencakup semua bidang keilmuan selama topik selaras dengan keahlian dan kombinasi kepakaran tim, dengan orientasi dekat proses hilirisasi: siap dioperasikan, mudah diproduksi massal, dapat ditawarkan ke industri, dan dibutuhkan masyarakat. Kegiatan dilaksanakan secara luring, terutama pada tahap manufaktur yang dapat dilakukan di laboratorium, bengkel, atau studio di kampus dengan izin pihak berwenang; bagian produk boleh dikonstruksi terpisah oleh anggota tim atau diproduksi sebagian oleh pihak ketiga lalu dirakit menjadi produk akhir. Seluruh pelaksanaan wajib didokumentasikan, diunggah ke Logbook simbelmawa/pkm, serta dipublikasikan dan/atau dipromosikan melalui media sosial.",
  ],
  ketentuanTim: [
    "Tim 3–5 mahasiswa aktif D-3/D-4/S-1 terdaftar di PDDikti: 1 ketua + 2–4 anggota; yang sudah bergelar (D-3, D-4, S-1) atau sedang mengikuti pendidikan profesi/koas (farmasi, kedokteran, kedokteran hewan, kedokteran gigi, dan lainnya) tidak diperbolehkan mengusulkan.",
    "Nama pengusul ditulis lengkap sesuai terdaftar di PDDikti; boleh beda prodi asal satu PT.",
    "Bidang kajian tidak harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul.",
    "Anggota disarankan dari minimal 2 angkatan berbeda agar ada pembinaan dan kesinambungan pengusulan tahun berikutnya.",
    "Tidak boleh sekaligus mengusulkan PPK Ormawa dan P2MW di tahun yang sama.",
  ],
  pendanaan: {
    utama: "Rp 6–8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt: "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang)",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra lainnya (tunai dan/atau barang)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman)",
    "Laporan akhir (bagian inti maksimum 10 halaman)",
    "Produk inovatif skala penuh yang fungsional dan dapat dioperasionalkan penggunanya, disertai Dokumen Teknis Produk",
    "Akun media sosial khusus topik PKM (aktif, publik)",
  ],
  catatanLuaran:
    "Dokumen Teknis Produk memuat deskripsi produk dan fungsi, diagram sistem, spesifikasi teknis, daftar komponen (bill of materials), proses produksi, hasil uji dan validasi, serta petunjuk penggunaan. Wajib ada 3 unggahan ber-iklan (Ads) serentak (Sabtu 23 Mei Pengenalan Program, 20 Juni Konten Program, 8 Agustus Hasil Program PKM, tahun 2026; pukul 12.00 WIB, 13.00 WITA, 14.00 WIT) dengan total anggaran Ads maksimum Rp 500 ribu; setiap unggahan memuat logo Kemdiktisaintek & logo PKM serta tagar #pkm, #pkm2026, #pkmpendanaan2026, dan unggahan Instagram menandai @kemahasiswaan.dikti, @belmawa.dikti, @ditjen.dikti, @kemdiktisaintek.ri. Sebelum PKP2 tim wajib mengunggah draf dokumen desain teknis sebagai lampiran terakhir laporan kemajuan; kegagalan memenuhi luaran media sosial berdampak pada penilaian PKP2.",
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
      "BAB 1 Pendahuluan — permasalahan faktual masyarakat/dunia usaha/dunia pendidikan beserta tingkat urgensinya, target pengguna, dan luaran; konsep ilmu dan teknologi untuk manufaktur harus sudah dikenali dan tersedia, tanpa riset dan proses trial and error",
      "BAB 2 Tinjauan Pustaka — pustaka terkait permasalahan; ulasan produk sejenis dan perbedaannya untuk menunjukkan keaslian/keunikan karya; regulasi dan standar industri yang harus dipenuhi",
      "BAB 3 Tahap Pelaksanaan — dari penemuan ide, karakterisasi produk, desain teknis, sampai produksi dan pengujian yang dilakukan secara luring; metode, material, perangkat, serta fasilitas laboratorium/bengkel/studio seizin pihak terkait",
      "BAB 4 Biaya dan Jadwal Kegiatan — RAB (minimum 80% operasional, maksimum 20% administrasi; bahan habis pakai maksimum 60%, sewa/jasa maksimum 15%, transportasi lokal maksimum 30%, lain-lain maksimum 15%; ads media sosial maksimum Rp 500 ribu) + jadwal bar chart 3–4 bulan",
      "Daftar Pustaka — Harvard style, alfabetis",
      "Lampiran — biodata ketua/anggota dan dosen pendamping, justifikasi anggaran, susunan tim dan pembagian tugas, surat pernyataan ketua, gambaran konsep karya inovatif, hasil uji similaritas",
    ],
    catatanKhas: [
      "RAB wajib memuat alokasi dana publikasi dan/atau promosi kegiatan di media sosial (maksimum Rp 500.000,00); biaya perjalanan seefisien mungkin (at cost); sewa laboratorium/peralatan yang bersifat wajib tidak melebihi Rp 1.000.000,00; kertas tidak lebih dari 2 rim.",
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah, sewa komputer PC-laptop-printer-ponsel-kamera-tempat/ruangan, pembelian alat/bahan lebih dari Rp 1 juta per item, penyimpanan data (flashdisk/hard disk), kuota internet lebih dari Rp 100 ribu/bulan per tim, sewa lisensi lebih dari 6 bulan, penjilidan laporan (kecuali PTS/PTN yang mewajibkan hardcopy), biaya seminar/publikasi jurnal ilmiah.",
      "Wajib melampirkan hasil uji similaritas (Turnitin, iThenticate, atau sejenisnya) bagian inti proposal dengan indeks similaritas maksimum 25%.",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas isi utama diberi nama namaketua_namaPT_PKM-KI.pdf tanpa halaman sampul dan pengesahan. Surat pernyataan ketua bermaterai Rp 10.000; penggunaan AI mengikuti Panduan GenAI Direktorat Pembelajaran dan Kemahasiswaan.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, lembar pengesahan, ringkasan, atau abstrak",
      "Tanda tangan pada biodata/surat pernyataan berupa hasil pemotongan lokal, bukan tanda tangan basah yang dipindai utuh satu halaman",
    ],
  },
  filePanduan: "/panduan/PKM-KI-2026_fix.pdf",
};
