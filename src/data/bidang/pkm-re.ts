import type { Bidang } from "./types";

/*
  Sumber: PKM-RE-2026_fix.pdf (Panduan Pelaksanaan PKM-RE 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmRe: Bidang = {
  slug: "pkm-re",
  kode: "RE",
  nama: "PKM Riset Eksakta",
  skema: "pendanaan",
  intiKegiatan:
    "Pengamatan mendalam berbasis iptek untuk mengungkap informasi baru melalui metode ilmiah.",
  deskripsi: [
    "PKM-Riset Eksakta (PKM-RE) adalah jalur riset yang mengungkap fenomena alamiah sesuai hukum fisika, kimia, biologi, dan matematika. Riset ini mengungkap hubungan sebab-akibat, aksi-reaksi, rancang bangun, eksplorasi, materi alternatif, desain produk atraktif, rancangan dasar, hingga identifikasi senyawa kimia aktif.",
    "Ruang lingkup riset eksakta sebagian besar mencakup bidang kedokteran, kesehatan, farmasi, pertanian, teknologi, ilmu dasar, matematika, sains material, dan kebumian. Program dilaksanakan secara luring di laboratorium atau lapangan; riset virtual/digital dengan komputer terkategori riset laboratorium atau studio.",
    "Keberhasilan pelaksanaan dinilai dari lima aspek: tantangan intelektual (kebaruan topik dan logika), fokus masalah (ketajaman ruang lingkup dan masalah unik), metode penelitian (kebaruan dan validitas pengumpulan/analisis data), kualitas data, serta dampak luaran.",
  ],
  bidangKajian: [
    {
      klaster: "Kesehatan",
      contoh: "Kedokteran, Kedokteran Gigi, Farmasi, Kesehatan Masyarakat, Keperawatan, Psikologi",
    },
    {
      klaster: "MIPA",
      contoh: "Matematika, Fisika, Kimia, Ilmu Komputer, Geografi, Biologi, Sains Material",
    },
    {
      klaster: "Agro",
      contoh: "Kedokteran Hewan, Pertanian, Peternakan, Kehutanan, Teknologi Pangan, Biologi",
    },
    {
      klaster: "Teknik",
      contoh: "Berbagai macam teknik, Perencanaan Wilayah, Arsitektur",
    },
  ],
  ketentuanTim: [
    "Tim 3-5 mahasiswa aktif D-3/D-4/S-1 terdaftar di PDDikti: 1 ketua + 2-4 anggota; yang sudah bergelar atau sedang koas/pendidikan profesi tidak diperbolehkan.",
    "Topik harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota (dilihat dari biodata); bidang multidisiplin diperbolehkan sesuai ilmu yang ditekuni.",
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
      "BAB 1 Pendahuluan, latar belakang ilmiah, masalah, kebaruan, tujuan, manfaat, luaran",
      "BAB 2 Tinjauan Pustaka, teori relevan; rujukan utama 5-10 tahun terakhir (grand theory boleh lebih tua)",
      "BAB 3 Metode Penelitian, waktu/tempat, desain eksperimen, bahan-alat, variabel, tahapan terukur; kode etik untuk hewan coba; determinasi tanaman oleh lembaga kompeten",
      "BAB 4 Biaya dan Jadwal, RAB (komposisi minimum 80% operasional, maksimum 20% administrasi; bahan habis maks 60%, sewa/jasa maks 15%, transport lokal maks 30%, lain-lain maks 15%) + jadwal bar chart 3-4 bulan",
      "Daftar Pustaka, Harvard style, alfabetis",
      "Lampiran, biodata, justifikasi anggaran, pembagian tugas, surat pernyataan, hasil uji similaritas",
    ],
    catatanKhas: [
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah, sewa komputer-laptop-kamera-ruangan, pembelian item > Rp 1 juta, flashdisk/penyimpanan, kuota internet > Rp 100 ribu/bulan, lisensi > 6 bulan, penjilidan laporan, biaya seminar/publikasi jurnal.",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas diberi nama namaketua_namaPT_PKM-RE.pdf.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, pengesahan, ringkasan, atau abstrak",
      "Daftar pustaka tidak mengikuti Harvard style",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate/sejenis wajib dilampirkan)",
    ],
  },
  filePanduan: "/panduan/PKM-RE-2026_fix.pdf",
};
