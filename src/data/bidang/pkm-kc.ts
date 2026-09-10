import type { Bidang } from "./types";

/*
  Sumber: PKM-KC-2026_fix.pdf (Panduan Pelaksanaan PKM-KC 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmKc: Bidang = {
  slug: "pkm-kc",
  kode: "KC",
  nama: "PKM Karsa Cipta",
  skema: "pendanaan",
  intiKegiatan:
    "Mewujudkan karya berupa hasil konstruksi karsa yang fungsional.",
  deskripsi: [
    "PKM-Karsa Cipta (PKM-KC) adalah wahana bagi mahasiswa untuk mewujudkan ide konstruktif berbasis karsa dan nalar, meskipun belum sepenuhnya mencapai nilai fungsional sempurna atau kemanfaatan langsung bagi pihak lain. Produk PKM-KC minimal berada pada skala prototipe yang siap diuji coba serta menekankan keaslian ide atau sekurang-kurangnya modifikasi produk yang telah ada, bukan sekadar menggunakan atau menerapkan karya yang tersedia. Yang dinilai adalah tingkat kreativitas produk atau prototipe, level teknologi, keterbaruan, metode pembuatan produk, serta prediksi kemanfaatan jika karyanya direalisasikan. Tahun 2026 PKM-KC menjadi PKM tematik yang mengacu pada 10 tema PKM berfokus pada pemecahan permasalahan masyarakat dan mendukung program prioritas pemerintah.",
    "Kegiatan dan produk PKM-KC meliputi semua bidang keilmuan dan disarankan sesuai atau relevan dengan kepakaran tim, baik mono maupun multi disiplin ilmu. Sumber inspirasinya antara lain hasil riset yang baru sampai tahap desain teknis dan belum menghasilkan prototipe siap uji coba, solusi atas persoalan masyarakat, pemerintah, atau dunia usaha, serta pengembangan atau penyempurnaan fungsi produk yang ada dengan menunjukkan letak perbedaannya secara jelas. Proses konstruksi ide berjalan melalui fase inspirasi, fase konstruksi, dan fase implementasi; jika produk belum fungsional, paling tidak fase konstruksi harus tercapai disertai uji coba. Pelaksanaan dilakukan secara luring di dalam maupun luar kampus, wajib didokumentasikan dan dipromosikan di media sosial, dengan uraian dan bukti kegiatan diunggah pada Logbook kegiatan dan Logbook keuangan di simbelmawa/pkm.",
    "Karya PKM-KC dapat berwujud sistem, desain, model atau barang, prototipe, produk kesenian kontemporer, aplikasi, produk literasi, atau jasa layanan bagi masyarakat luas, instansi pemerintah, atau dunia usaha, dan dapat menjadi landasan pengusulan PKM-K, PKM-PM, PKM-PI, ataupun PKM-KI pada tahun-tahun berikutnya. Pada penilaian proposal, bobot terbesar diberikan pada kontribusi produk terhadap solusi permasalahan dan perkembangan IPTEK (25), kreativitas gagasan yang orisinal (20), kemutakhiran IPTEK yang diadopsi (20), kesesuaian tahap pelaksanaan (15), potensi publikasi artikel ilmiah atau Kekayaan Intelektual (10), penjadwalan kegiatan dan personalia (5), serta penyusunan anggaran biaya (5).",
  ],
  ketentuanTim: [
    "Tim pengusul terdiri dari 3-5 mahasiswa aktif D-3/D-4/S-1 dari perguruan tinggi di bawah Kemdiktisaintek yang terdaftar di PDDikti, dengan susunan 1 ketua dan 2-4 anggota; yang sudah menyandang gelar atau sedang mengikuti pendidikan profesi dan koas (farmasi, kedokteran, kedokteran hewan, kedokteran gigi, akuntansi, notariat, dan lainnya) tidak diperbolehkan mengusulkan proposal PKM.",
    "Topik PKM yang diangkat harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul; kegiatan dan produk PKM-KC meliputi semua bidang keilmuan (mono atau multi disiplin ilmu).",
    "Nama pengusul (ketua dan anggota) harus ditulis lengkap sesuai nama yang terdaftar pada PDDikti; boleh berasal dari prodi yang sama atau berbeda asal masih satu perguruan tinggi.",
    "Keanggotaan tim disarankan berasal dari minimum 2 angkatan berbeda agar terjadi pembinaan dan kesinambungan pengusulan program tahun berikutnya.",
    "Tidak diperkenankan sekaligus mengusulkan program PPK Ormawa dan P2MW di tahun yang sama.",
    "Produk minimal berada pada skala prototipe yang siap diuji coba dan menekankan keaslian ide atau sekurang-kurangnya modifikasi produk yang telah ada, bukan sekadar menggunakan atau menerapkan karya yang tersedia.",
    "Tidak dapat dikategorikan sebagai PKM-KC: karya yang menghasilkan model/prototipe namun belum siap uji dan belum fungsional, serta solusi kebutuhan dunia usaha yang masih bersifat generik; solusi non-generik (belum ada produk dengan spesifikasi identik di pasar) termasuk PKM-KC.",
  ],
  pendanaan: {
    utama: "Rp 6-8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt: "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang)",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra (opsional)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman)",
    "Laporan akhir (bagian inti maksimum 10 halaman)",
    "Prototipe fisik atau digital sesuai pendanaan yang disetujui, bersifat wajib bagi tim yang mendapatkan pendanaan",
    "Akun media sosial khusus topik PKM (aktif, publik)",
  ],
  catatanLuaran:
    "Akun media sosial dibuat khusus oleh tim dengan nama akun yang terkait topik PKM, dipilih dari Instagram, TikTok, Facebook, YouTube, atau Twitter/X; profil wajib mencantumkan informasi topik dan program PKM, berstatus aktif dan publik, dengan tautan dientri pada simbelmawa/pkm-akun. Setiap unggahan wajib memuat logo Kemdiktisaintek dan logo PKM serta tagar #pkm, #pkm2026, dan #pkmpendanaan2026; unggahan Instagram wajib menandai @kemahasiswaan.dikti, @belmawa.dikti, @ditjen.dikti, dan @kemdiktisaintek.ri. Sebanyak 3 unggahan wajib diberikan iklan berbayar (Ads) secara serentak sesuai jadwal pengiklanan: Sabtu 23 Mei 2026, Sabtu 20 Juni 2026, dan Sabtu 8 Agustus 2026 pukul 12.00 WIB, 13.00 WITA, 14.00 WIT, dengan konten Pengenalan Program, Konten Program, dan Hasil Program PKM; total anggaran Ads untuk seluruh unggahan maksimum Rp500.000,00. Kegagalan memenuhi luaran media sosial berdampak pada penilaian PKP2. Khusus PKM-KC, sebelum PKP2 tim wajib mengunggah luaran kemajuan berupa konsep video prototipe, dan di akhir pelaksanaan mengunggah luaran akhir berupa video prototipe ke simbelmawa/pkm.",
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata, tidak boleh menggunakan akronim atau singkatan yang tidak baku, menonjolkan kata kunci kegiatan dan hasil utamanya, ditulis dengan huruf kapital dalam Bahasa Indonesia.",
    format: [
      "Times New Roman 12 (termasuk nomor halaman)",
      "Spasi 1,15, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan-atas-bawah 3 cm",
      "Daftar isi pakai angka romawi (kanan bawah); bagian inti & lampiran angka arab mulai 1 dari Bab 1 (kanan atas)",
      "Bagian inti maksimum 10 halaman; tidak ada halaman sampul dan halaman pengesahan pada berkas",
    ],
    struktur: [
      "BAB 1 Pendahuluan, identifikasi permasalahan yang dicari solusinya beserta sumber inspirasinya; jika berlandaskan riset orang lain sebutkan nama pelaksana, institusi tim riset, dan hasilnya; nyatakan fase final yang akan dicapai; pengembangan produk yang sudah ada harus menyebut nama produsen/pembuat, target, dan aspek penyempurnaan disertai justifikasi ilmiah dan/atau ekonomi; juga uraian modifikasi, keterbaruan, luaran target, dan prediksi manfaat",
      "BAB 2 Tinjauan Pustaka, gambaran perkembangan mutakhir terkait produk yang akan dihasilkan dari skripsi, tesis, disertasi, buku referensi, artikel jurnal, prosiding, internet, brosur, hingga media cetak; informasi ilmiah yang relevan dengan spesifikasi awal dan/atau akhir produk serta solusi",
      "BAB 3 Tahap Pelaksanaan, tahapan rinci hingga fase akhir: pengumpulan data sekunder untuk desain awal, penyusunan desain teknis, pembuatan produk/jasa layanan, cara pengujian keandalan karya, evaluasi atau prediksi penerimaan masyarakat; pengujian boleh langsung pada produk fisik atau menggunakan software pendukung untuk memprediksi hasil uji",
      "BAB 4 Biaya dan Jadwal Kegiatan, RAB (komposisi minimum 80% operasional, maksimum 20% administrasi; wajib memuat alokasi dana publikasi dan/atau promosi kegiatan di media sosial) + jadwal bar chart 3-4 bulan",
      "Daftar Pustaka, Harvard style, alfabetis, baris kedua dan setelahnya menjorok ke dalam",
      "Lampiran, biodata ketua, anggota, dan dosen pendamping; justifikasi anggaran; susunan tim pengusul dan pembagian tugas; surat pernyataan ketua; gambaran teknologi yang akan dikembangkan; hasil uji periksa similaritas (Turnitin, iThenticate, atau sejenisnya, indeks maksimum 25%)",
    ],
    catatanKhas: [
      "RAB per jenis pengeluaran: bahan habis pakai maksimum 60%, sewa dan jasa maksimum 15%, transportasi lokal maksimum 30%, lain-lain maksimum 15% (total keempat jenis pengeluaran tetap senilai 100%); kertas tidak lebih dari 2 rim, sewa laboratorium/peralatan (jika wajib) tidak melebihi Rp1.000.000,00, dan biaya perjalanan PKM-KC diusahakan seefisien dan seminimal mungkin (at cost).",
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah, sewa komputer PC-laptop-printer-ponsel-kamera-ruangan, pembelian alat/bahan lebih dari Rp1.000.000,00 per item, penyimpanan data (flashdisk/harddisk), kuota internet lebih dari Rp100.000,00 per bulan per tim, durasi sewa lisensi lebih dari 6 bulan, penjilidan laporan, biaya seminar/publikasi jurnal.",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas diberi nama namaketua_namaPT_PKM-KC.pdf.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, pengesahan, ringkasan, atau abstrak",
      "Tanda tangan pada biodata dan surat pernyataan berupa hasil pemotongan lokal (wajib tanda tangan asli TT basah yang dipindai/difoto utuh satu halaman)",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate/sejenis wajib dilampirkan)",
    ],
  },
  filePanduan: "/panduan/PKM-KC-2026_fix.pdf",
};
