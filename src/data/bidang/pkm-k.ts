import type { Bidang } from "./types";

/*
  Sumber: PKM-K-2026_fix.pdf (Panduan Pelaksanaan PKM-K 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmK: Bidang = {
  slug: "pkm-k",
  kode: "K",
  nama: "PKM Kewirausahaan",
  skema: "pendanaan",
  intiKegiatan:
    "Menghasilkan produk iptek sebagai komoditas usaha mahasiswa.",
  deskripsi: [
    "PKM Kewirausahaan (PKM-K) berfokus pada penciptaan aktivitas usaha melalui produk yang dibutuhkan masyarakat (pasar), dengan pelaku utama tim mahasiswa, bukan masyarakat atau mitra lainnya. Melalui PKM-K, mahasiswa merealisasikan ide kreatif produk berupa barang atau jasa, berinovasi menciptakan produk baru, serta meningkatkan kompetensi dan pengalaman berwirausaha. PKM-K 2026 merupakan PKM tematik yang mengacu pada 10 tema PKM berorientasi pemecahan permasalahan masyarakat dan mendukung program prioritas pemerintah, antara lain kemandirian pangan, energi, dan air; kesehatan dan gizi masyarakat; pencegahan pemberantasan korupsi dan kemiskinan; hingga pemerataan ekonomi, penguatan UMKM, dan pelestarian seni budaya serta ekonomi kreatif. Komoditas usaha tidak boleh menjadi kompetitor utama sumber penghasilan masyarakat; PKM-K tidak semata berorientasi pada laba, tetapi mengutamakan kemanfaatan solutif, kreativitas berbasis IPTEK, serta kualitas pelaksanaan usaha.",
    "Ruang lingkup PKM-K adalah menciptakan produk kreatif dan aktivitas wirausaha yang dijalankan tim mahasiswa, mengutamakan solusi tantangan intelektual yang mendasari lahirnya komoditas usaha baru yang unik berdasarkan hasil analisis kebutuhan dan peluang pasar. Komoditas harus merupakan perwujudan penguasaan IPTEK oleh tim dan disampaikan ke pasar sasaran melalui aktivitas usaha yang didukung strategi pemasaran serta pengelolaan usaha secara komprehensif. Pelaksanaan dilakukan secara luring; analisis pasar boleh menggunakan data sekunder atau primer dari survei yang dapat dilakukan daring maupun luring, dan produksi serta penjualan diperbolehkan bekerja sama dengan mitra usaha asalkan desain/konsep produk dan strategi pemasaran tetap dirancang sendiri oleh tim. Seluruh kegiatan wajib didokumentasikan, dipublikasikan dan/atau dipromosikan di media sosial, serta diunggah ke Logbook pada laman simbelmawa/pkm sebagai rujukan penyusunan laporan kemajuan dan laporan akhir.",
    "Seleksi dan penilaian proposal dilakukan dalam 2 tahap, lalu tim yang didanai dipantau dan dievaluasi melalui Penilaian Kemajuan Pelaksanaan PKM (PKP2) dengan mengacu pada Logbook Kegiatan dan Logbook Keuangan. Khusus produk kategori Kosmetik dan Kesehatan (herbal, jamu, suplemen makanan), produk tidak boleh diperjualbelikan atau diedarkan sebelum mendapat izin edar dan tidak boleh dijual di pasar; tim perlu memproyeksikan legalitas dan sertifikasi jangka panjang seperti BPOM, sertifikat Halal, keamanan bahan baku, CPKB, CPOTB, dan SNI. PKM-K diharapkan menjadi cikal bakal kemunculan produk usaha di Indonesia sebagai karya mandiri bangsa.",
  ],
  ketentuanTim: [
    "Tim 3-5 mahasiswa aktif D-3/D-4/S-1 di seluruh Perguruan Tinggi di bawah Kemdiktisaintek yang terdaftar di PDDikti: 1 ketua + 2-4 anggota; yang sudah bergelar atau sedang mengikuti pendidikan profesi/koas tidak diperbolehkan mengusulkan proposal PKM.",
    "Bidang kajian tidak harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul.",
    "Nama pengusul (ketua dan anggota) ditulis lengkap sesuai terdaftar di PDDikti; boleh berasal dari program studi yang sama atau berbeda asal masih satu Perguruan Tinggi.",
    "Anggota disarankan berasal dari minimum 2 angkatan berbeda agar terjadi pembinaan dan kesinambungan pengusulan program tahun berikutnya.",
    "Tidak diperkenankan sekaligus mengusulkan proposal PPK Ormawa dan P2MW di tahun yang sama.",
  ],
  pendanaan: {
    utama: "Rp 6-8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt: "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang) dan ditunjukkan dalam surat komitmen dukungan pendanaan",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra lainnya (opsional)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman)",
    "Laporan akhir (bagian inti maksimum 10 halaman)",
    "Katalog produk/jasa, daftar barang/jasa yang ditawarkan lengkap dengan nama dan deskripsi, spesifikasi, gambar, harga, dan cara pemesanan",
    "Akun media sosial khusus topik PKM (aktif, publik, diisi konten edukasi)",
  ],
  catatanLuaran:
    "Wajib ada 3 unggahan ber-iklan (Ads) serentak pada Sabtu, 23 Mei 2026 (pengenalan program), Sabtu, 20 Juni 2026 (konten program), dan Sabtu, 8 Agustus 2026 (hasil program PKM) pukul 12.00 WIB/13.00 WITA/14.00 WIT dengan total anggaran Ads maksimum Rp 500 ribu; setiap unggahan memuat logo Kemdiktisaintek & logo PKM serta tagar #pkm, #pkm2026, #pkmpendanaan2026, dan unggahan Instagram wajib menandai akun @kemahasiswaan.dikti, @belmawa.dikti, @ditjen.dikti, dan @kemdiktisaintek.ri. Sebelum PKP2 tim wajib mengunggah laporan kemajuan, tautan profil media sosial, dan konsep buku dokumentasi produk dan aktivitas usaha; di akhir pelaksanaan, pendaftaran/perolehan kekayaan intelektual (jika sudah dilakukan) diinformasikan dalam laporan akhir.",
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata, tanpa akronim/singkatan tidak baku, menonjolkan kata kunci kegiatan dan hasil utama, huruf kapital, Bahasa Indonesia; nama produk PKM-K diperbolehkan ada di dalam judul.",
    format: [
      "Times New Roman 12 (termasuk nomor halaman)",
      "Spasi 1,15, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan-atas-bawah 3 cm",
      "Daftar isi pakai angka romawi (kanan bawah); bagian inti & lampiran angka arab mulai 1 (kanan atas)",
    ],
    struktur: [
      "BAB 1 Pendahuluan, latar belakang, potensi dan peluang pasar berdasarkan hasil analisis pasar, relevansi dengan tema PKM 2026, keunikan/jenis/spesifikasi teknis komoditas, keunggulan dibanding produk sejenis, karakteristik pasar sasaran, tujuan, manfaat, dan target luaran",
      "BAB 2 Gambaran Umum Rencana Usaha, komoditas produk usaha, manajemen usaha, peluang pasar dan strategi pemasaran, analisis keuangan (arus kas minimum 2 tahun ke depan); rencana jangka pendek serta proyeksi jangka panjang pengujian keamanan-kualitas-manfaat produk, legalitas, dan sertifikasi",
      "BAB 3 Metode Pelaksanaan, tahapan persiapan (bahan dan alat, lokasi usaha, rencana keuangan: biaya produksi, harga produk, analisis BEP), desain produk, pembuatan produk, quality control, pengemasan, hingga pemasaran produk atau jasa",
      "BAB 4 Biaya dan Jadwal Kegiatan, RAB (komposisi minimum 80% operasional, maksimum 20% administrasi; bahan habis pakai maks 60%, sewa/jasa maks 15%, transport lokal maks 30%, lain-lain maks 15%; wajib memuat alokasi dana publikasi/promosi di media sosial) + jadwal bar chart 3-4 bulan",
      "Daftar Pustaka, Harvard style, alfabetis",
      "Lampiran, biodata ketua/anggota dan dosen pendamping, justifikasi anggaran, susunan tim dan pembagian tugas, surat pernyataan ketua, hasil uji similaritas (maksimum 25%)",
    ],
    catatanKhas: [
      "Rincian maksimum per jenis pengeluaran: bahan habis pakai 60% (kertas maksimum 2 rim, ATK sesuai kebutuhan), sewa/jasa 15% (software pendukung pengujian produk; sewa laboratorium bila wajib maksimum Rp 1 juta), transport lokal 30% (diusahakan seminimal mungkin), lain-lain 15% (termasuk biaya Ads media sosial maksimum Rp 500 ribu); total persentase keempat jenis pengeluaran tetap senilai 100%.",
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah untuk tim, dosen pendamping, narasumber, atau pemateri; sewa komputer PC, laptop, printer, ponsel, kamera, tempat/ruangan/aula; pembelian alat/bahan lebih dari Rp 1 juta per item; penyimpanan data (flashdisk/harddisk); kuota internet lebih dari Rp 100 ribu per bulan per tim; durasi sewa lisensi melebihi 6 bulan; penyusunan, penggandaan, dan/atau penjilidan laporan (kecuali PTS/PTN yang mewajibkan hardcopy); biaya seminar dan/atau publikasi hasil PKM di jurnal ilmiah.",
      "Jadwal kegiatan dibatasi 3-4 bulan dan disusun dalam bentuk bar chart; analisis keuangan harus menunjukkan kelayakan usaha termasuk arus kas minimum untuk 2 tahun ke depan. Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas diberi nama namaketua_namaPT_PKM-K.pdf.",
    ],
    catatanGugur: [
      "Berkas isi utama proposal memuat halaman sampul, halaman pengesahan, ringkasan, atau abstrak",
      "Tanda tangan biodata/surat pernyataan berupa hasil pemotongan lokal (wajib tanda tangan asli TT basah yang dipindai/difoto utuh satu halaman)",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate/sejenis bagian inti proposal wajib dilampirkan)",
    ],
  },
  filePanduan: "/panduan/PKM-K-2026_fix.pdf",
};
