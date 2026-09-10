import type { Bidang } from "./types";

/*
  Sumber: PKM-GFT-2026_fix.pdf (Panduan Pelaksanaan PKM-GFT 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmGft: Bidang = {
  slug: "pkm-gft",
  kode: "GFT",
  nama: "PKM Gagasan Futuristik Tertulis",
  skema: "insentif",
  intiKegiatan:
    "Menulis karya gagasan konsep perubahan di masa depan yang berpotensi direalisasikan.",
  deskripsi: [
    "PKM Gagasan Futuristik Tertulis (PKM-GFT) mewadahi mahasiswa untuk menuangkan gagasan kreatif yang futuristik sebagai respons intelektual atas persoalan aktual yang dihadapi bangsa. Gagasan tidak terikat bidang ilmu, bersifat unik dan bermanfaat, serta menawarkan solusi yang realistis dan implementatif di masa depan. Berbeda dengan PKM pendanaan yang dapat diselesaikan dalam 3-4 bulan, realisasi gagasan GFT diperkirakan memerlukan waktu yang lama serta biaya dan sumber daya yang besar.",
    "Ciri paling menonjol PKM-GFT: merupakan pemikiran terkait permasalahan aktual berskala besar dan kompleks, solusinya bersifat futuristik dan berdampak sistemik, hasil nyata belum harus ada tetapi ide, tahapan pemikiran, dan rencana realisasinya dapat ditelusuri, serta topiknya tidak dapat diselesaikan melalui skema pendanaan (PKM-RE, PKM-RSH, PKM-K, PKM-PI, PKM-PM, PKM-KI, PKM-KC, dan PKM-VGK). Contoh persoalan yang dapat diangkat antara lain banjir, kemacetan kota besar, pemberantasan korupsi, zero karbon dan energi hijau, pertahanan keamanan negara, hingga pelestarian seni budaya tradisional.",
    "PKM-GFT 2026 merupakan PKM tematik yang mengacu pada 10 tema PKM sebagai upaya memecahkan permasalahan masyarakat dan mendukung program prioritas pemerintah. Ruang lingkupnya meliputi seluruh aspek berbangsa dan bernegara: sosial, ekonomi, budaya, politik, hukum, pendidikan, kesehatan, pertahanan, keamanan, energi, teknologi dan pangan, serta lingkungan. PKM-GFT tidak mengenal batasan keilmuan dan disarankan dikerjakan tim lintas bidang ilmu. Termasuk skema insentif tanpa pelaksanaan kegiatan; tujuannya meningkatkan kepedulian mahasiswa pada persoalan bangsa maupun global, menemukan ide kreatif untuk mengatasinya di masa depan, lalu mengkonstruksikannya dalam bentuk tulisan.",
  ],
  ketentuanTim: [
    "Tim 3-5 mahasiswa aktif D-3/D-4/S-1 di Perguruan Tinggi di bawah Kemdiktisaintek yang terdaftar di PDDikti: 1 ketua + 2-4 anggota; yang sudah menyandang gelar diploma/sarjana atau sedang mengikuti pendidikan profesi dan koas (farmasi, kedokteran, kedokteran hewan, kedokteran gigi, dan lainnya) tidak diperbolehkan.",
    "Nama pengusul (ketua dan anggota) ditulis lengkap sesuai nama yang terdaftar pada PDDikti.",
    "Bidang kajian tidak harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul; disarankan anggota tim lintas bidang ilmu.",
    "Pengusul boleh berasal dari prodi yang sama atau berbeda asal masih dalam satu Perguruan Tinggi; keanggotaan disarankan minimum 2 angkatan berbeda agar terjadi pembinaan dan kesinambungan pengusulan tahun berikutnya.",
    "Tidak diperkenankan sekaligus mengusulkan proposal program PPK Ormawa dan P2MW di tahun yang sama.",
  ],
  pendanaan: {
    utama: "Insentif Rp 1,5 juta dari Direktorat Pembelajaran dan Kemahasiswaan (PKM insentif tanpa pelaksanaan kegiatan)",
    pendampingPt: "Tidak ada (skema insentif)",
    institusiLain: "Tidak ada (skema insentif)",
  },
  luaran: [
    "Artikel gagasan futuristik tertulis, gagasan kreatif yang memenuhi karakteristik PKM-GFT dan memuat konsep perubahan atau pengembangan",
  ],
  sistematika: {
    judul:
      "Ringkas maksimum 20 kata, menonjolkan kata kunci kegiatan ilmiah dan hasil utamanya, ditulis huruf kapital, hindari singkatan; naskah artikel ditulis dalam Bahasa Indonesia.",
    format: [
      "Times New Roman 12 (termasuk nomor halaman)",
      "Spasi 1,15, rata kiri-kanan",
      "Kertas A4 satu kolom; margin kiri 4 cm, kanan-atas-bawah masing-masing 3 cm",
      "Daftar isi diberi nomor halaman huruf i, ii, iii (kanan bawah); Bagian Inti dan lampiran angka arab 1, 2, 3 (kanan atas), dimulai dari Bab Pendahuluan",
      "Bagian Inti dari Pendahuluan hingga Daftar Pustaka 8-15 halaman",
    ],
    struktur: [
      "Daftar Isi, bagian pembuka isi utama berkas artikel",
      "BAB 1 Pendahuluan, latar belakang situasi dan kondisi bangsa/negara beserta data pendukung, tujuan dan manfaat, serta paparan solusi-solusi terkait sebelumnya dan keterbatasannya sehingga ide futuristik menjadi solusi terbaik",
      "BAB 2 Gagasan, latar belakang pemicu gagasan (fenomena sosial budaya dengan sumber terpercaya), tawaran solusi, pihak yang dilibatkan beserta peran atau kontribusinya, langkah strategis dan lini masa realisasi hingga dampak sistemik tercapai",
      "BAB 3 Kesimpulan, gagasan yang diajukan, cara merealisasikannya dan berapa lama waktu yang diperlukan, prediksi dampak bagi masyarakat atau bangsa",
      "Daftar Pustaka, Harvard style (nama belakang, tahun, alfabetis); Times New Roman 12 normal, spasi 1,15, baris kedua dan setelahnya menjorok ke dalam",
      "Lampiran, biodata ketua, anggota, dan dosen pendamping; susunan tim pengusul dan pembagian tugas; surat pernyataan ketua tim; hasil uji similaritas (indeks maksimum 25%)",
    ],
    catatanKhas: [
      "Sifat utama gagasan: visioner dan futuristik, memerlukan solusi berdurasi panjang, realistis dan implementatif, serta berdampak sistemik atau berskala masif.",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas isi utama (Daftar Isi, Bagian Inti, Lampiran) diunggah dengan nama namaketua_namaPT_PKM-GFT.pdf dan divalidasi dosen pendamping serta disahkan pimpinan PT bidang kemahasiswaan.",
      "Seleksi dan penilaian proposal dilakukan secara daring dalam 2 tahap: seleksi administratif dan seleksi substansi.",
    ],
    catatanGugur: [
      "Isi utama memuat halaman sampul, lembar pengesahan, ringkasan, atau abstrak",
      "Tanda tangan pada lampiran biodata atau surat pernyataan berupa hasil pemotongan lokal",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate atau sejenisnya wajib dilampirkan)",
    ],
  },
  filePanduan: "/panduan/PKM-GFT-2026_fix.pdf",
};
