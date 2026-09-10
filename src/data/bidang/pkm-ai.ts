import type { Bidang } from "./types";

/*
  Sumber: PKM-AI-2026_fix.pdf (Panduan Pelaksanaan PKM-AI 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmAi: Bidang = {
  slug: "pkm-ai",
  kode: "AI",
  nama: "PKM Artikel Ilmiah",
  skema: "insentif",
  intiKegiatan:
    "Menulis artikel ilmiah dari hasil kegiatan akademik mahasiswa (penelitian, pengabdian, studi kasus, magang, dan sejenisnya).",
  deskripsi: [
    "PKM-Artikel Ilmiah (PKM-AI) adalah salah satu bidang dari kelompok PKM Insentif yang membantu dan menyediakan media bagi mahasiswa Indonesia untuk membuat artikel ilmiah dari hasil kegiatan akademik berkelompok yang telah selesai dilakukan. Usulan tidak melibatkan pembiayaan: tim mengirimkan artikel ilmiah siap terbit yang mengikuti kaidah penulisan jurnal ilmiah, dan artikel yang dinilai baik serta layak dipublikasikan memperoleh insentif dana tunai Rp 1.500.000,00 (satu juta lima ratus ribu rupiah) lalu diterbitkan di e-journal Direktorat Pembelajaran dan Kemahasiswaan dengan persetujuan tim penulisnya. Bidang ini dimulai pada 2009 sebagai kelanjutan PKM Insentif yang berjalan sejak 2006, dengan tujuan menumbuhkembangkan minat dan kemampuan menulis artikel ilmiah bagi mahasiswa.",
    "Sumber artikel adalah kegiatan nyata yang sudah selesai dikerjakan berkelompok, seperti hasil Praktik Kerja Lapangan (PKL) atau Praktik Pengalaman Lapangan (PPL), Kuliah Kerja Nyata (KKN), pelaksanaan PKM pendanaan tahun sebelumnya, atau kegiatan akademik berkelompok lainnya. Tugas perkuliahan atau praktikum, skripsi, dan tugas akhir tidak diperkenankan dijadikan sumber, demikian pula penulisan yang bersifat individual karena tidak mengandung unsur kerja sama tim. Artikel harus karya asli yang belum pernah dipublikasikan dalam jurnal mana pun maupun dilombakan, dan bukan ulasan naratif.",
    "Ruang lingkupnya meliputi kegiatan Tri Dharma Perguruan Tinggi: Pendidikan, Penelitian, dan Pengabdian kepada Masyarakat, dengan hasil kegiatan ilmiah berkelompok sebagai target utama. PKM-AI 2026 merupakan PKM tematik yang mengacu pada 10 tema PKM, antara lain kemandirian pangan, energi, dan air; kesehatan dan gizi masyarakat; pencegahan dan pemberantasan korupsi; penguatan pendidikan, sains, dan teknologi; hingga pelestarian seni budaya dan peningkatan ekonomi kreatif, sebagai upaya memecahkan permasalahan masyarakat dan mendukung program prioritas pemerintah.",
  ],
  ketentuanTim: [
    "Tim terdiri dari 3-5 mahasiswa aktif program D-3/D-4/S-1 Perguruan Tinggi di bawah Kemdiktisaintek yang terdaftar di PDDikti: 1 ketua dan 2-4 anggota; yang sudah bergelar D-3/D-4/S-1 atau sedang mengikuti pendidikan profesi/koas tidak diperbolehkan.",
    "Nama pengusul (ketua dan anggota) ditulis lengkap sesuai terdaftar di PDDikti.",
    "Topik harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul.",
    "Pengusul boleh berasal dari prodi yang sama atau berbeda, tetapi masih dalam satu Perguruan Tinggi.",
    "Keanggotaan disarankan berasal dari minimum 2 angkatan yang berbeda agar terjadi pembinaan dan kesinambungan pengusulan tahun berikutnya.",
    "Tidak diperkenankan sekaligus mengusulkan program PPK Ormawa dan P2MW di tahun yang sama.",
    "Artikel bersumber dari kegiatan akademik berkelompok yang telah selesai dilakukan (PKL/PPL, KKN, hasil PKM pendanaan tahun sebelumnya, atau kegiatan akademik berkelompok lainnya) dan belum pernah dipublikasikan maupun dikompetisikan; tugas perkuliahan/praktikum, skripsi, dan tugas akhir tidak diperkenankan.",
  ],
  pendanaan: {
    utama:
      "Insentif dana tunai Rp 1.500.000,00 (satu juta lima ratus ribu rupiah) untuk artikel yang dinilai baik dan layak dipublikasikan",
    pendampingPt: "Tidak ada (skema insentif)",
    institusiLain: "Tidak ada (skema insentif)",
  },
  luaran: ["Artikel ilmiah"],
  catatanLuaran:
    "Artikel yang dinilai baik dan layak dipublikasikan diterbitkan di e-journal Direktorat Pembelajaran dan Kemahasiswaan dengan persetujuan tim penulis, dan tim menyatakan kesediaan artikel ditampilkan pada laman simbelmawa/pkm. Dosen pendamping menjadi penulis terakhir; penulis korespondensi ditulis di bawah nama penulis dan memakai alamat email dosen pendamping (penulis terakhir) atau ketua tim pelaksana (penulis pertama). Setiap artikel wajib menyertakan Surat Pernyataan Sumber Tulisan PKM-AI yang ditandatangani ketua tim pengusul.",
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata dengan menonjolkan kata kunci kegiatan ilmiah dan hasil utamanya; ditulis huruf kapital, hindari singkatan, dalam Bahasa Indonesia.",
    format: [
      "Times New Roman 12, termasuk nomor halaman",
      "Jarak baris 1,15 spasi, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan, atas, dan bawah masing-masing 3 cm",
      "Bagian inti dari Judul hingga Daftar Pustaka berjumlah 8-15 halaman; nomor halaman angka arab di kanan atas, dimulai dari halaman judul",
      "Isi utama terdiri dari bagian inti dan lampiran, tanpa halaman sampul, halaman pengesahan, dan daftar isi",
      "Judul, nama penulis, alamat institusi, abstrak, dan abstract ditulis dalam satu halaman dengan jarak baris 1,0 spasi",
    ],
    struktur: [
      "Judul — maksimum 20 kata, huruf kapital, tanpa singkatan",
      "Nama penulis dan alamat institusi (Program Studi/Fakultas, Perguruan Tinggi, kota/kabupaten, provinsi, Indonesia) serta penulis korespondensi di bawahnya",
      "Abstrak (satu paragraf, maksimal 250 kata, tegak) dan Abstract (Bahasa Inggris, maksimal 250 kata, cetak miring), masing-masing diikuti kata kunci/keywords 3-5 kata atau frasa",
      "Pendahuluan — latar belakang masalah dengan data terkini, tinjauan pustaka, state of the art, tujuan, arah, manfaat, dan urgensi kegiatan",
      "Metode — waktu dan tempat, subjek/unit analisis, alat-bahan, prosedur; kode etik hewan coba dan determinasi tanaman bila relevan; kajian sosial-humaniora menjelaskan pendekatan-desain, teknik penentuan partisipan/sampel, kualitas data, serta etika penelitian",
      "Hasil dan Pembahasan — hasil disajikan urut sesuai metode, gambar/tabel diletakkan dekat narasi dan disertai sumber, pembahasan komprehensif membandingkan hasil dengan kegiatan/penelitian serupa",
      "Kesimpulan — ringkas, mencakup kesimpulan khusus dan umum, menjawab tujuan",
      "Ucapan Terima Kasih — institusi pembantu dan pemberi hibah di luar penulis utama",
      "Kontribusi Penulis — peran singkat tiap penulis, termasuk dosen pendamping",
      "Daftar Pustaka — Harvard style (nama belakang, tahun), urut abjad, minimum 10 rujukan yang diterbitkan maksimum 5 tahun ke belakang dari sumber yang dipercaya",
      "Lampiran — biodata ketua/anggota/dosen pendamping, kontribusi, surat pernyataan ketua tim, pernyataan sumber tulisan, hasil uji similaritas",
    ],
    catatanKhas: [
      "Uji similaritas (Turnitin, iThenticate, atau yang lainnya) wajib dilampirkan dengan indeks similaritas 25% untuk bagian inti artikel (pendahuluan sampai daftar pustaka).",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas isi utama (pdf) bernama namaketua_namaPT_PKM-AI.pdf, divalidasi dosen pendamping dan disahkan pimpinan perguruan tinggi bidang kemahasiswaan.",
      "Penilaian oleh Penilai dari Direktorat Pembelajaran dan Kemahasiswaan dengan bobot Judul 5, Abstrak 10, Pendahuluan 15, Metode 25, Hasil dan Pembahasan 30, Kesimpulan 10, Daftar Pustaka 5 (total 100).",
      "Penggunaan kecerdasan buatan (AI) mengikuti syarat dan ketentuan Panduan GenAI Direktorat Pembelajaran dan Kemahasiswaan (https://s.id/PanduanGenAI), dinyatakan dalam Surat Pernyataan Ketua Tim bermaterai Rp10.000.",
    ],
    catatanGugur: [
      "Tanda tangan hasil pemotongan lokal pada biodata atau surat pernyataan — naskah TIDAK LOLOS tahap 1",
      "Naskah pernah dipublikasikan dalam media ilmiah (prosiding maupun jurnal) atau pernah diikutkan dalam kompetisi",
      "Sumber tulisan berupa tugas perkuliahan/praktikum, skripsi, atau tugas akhir, atau penulisan yang bersifat individual tanpa kerja sama tim",
    ],
  },
  filePanduan: "/panduan/PKM-AI-2026_fix.pdf",
};
