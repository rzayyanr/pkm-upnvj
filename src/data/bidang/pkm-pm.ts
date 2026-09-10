import type { Bidang } from "./types";

/*
  Sumber: PKM-PM-2026_fix.pdf (Panduan Pelaksanaan PKM-PM 2026, Direktorat
  Pembelajaran dan Kemahasiswaan). Semua angka dikutip dari teks panduan.
  Ekstraksi teks: folder extracted/ di luar repo.
*/

export const pkmPm: Bidang = {
  slug: "pkm-pm",
  kode: "PM",
  nama: "PKM Pengabdian kepada Masyarakat",
  skema: "pendanaan",
  intiKegiatan:
    "Menghasilkan solusi iptek (teknologi atau manajemen) bagi mitra non-komersial.",
  deskripsi: [
    "PKM Pengabdian kepada Masyarakat (PKM-PM) adalah program penerapan ilmu pengetahuan, teknologi, dan seni (IPTEKS) untuk membantu meningkatkan kualitas hidup, mengakhiri kemiskinan, mengurangi kesenjangan, dan melindungi lingkungan. Tahun 2026 PKM-PM bersifat tematik dan mengacu pada 10 tema PKM yang terkait langsung dengan pemecahan permasalahan masyarakat serta program prioritas pemerintah: kemandirian pangan-energi-air, kesehatan dan gizi masyarakat, pencegahan korupsi dan narkoba, pemberantasan kemiskinan, penguatan pendidikan-sains-teknologi, kesetaraan gender, pelestarian lingkungan dan mitigasi bencana, pemerataan ekonomi dan UMKM, hingga pelestarian seni budaya dan ekonomi kreatif.",
    "Mitra PKM-PM adalah masyarakat non-profit, seperti lembaga pendidikan formal maupun non-formal dari pra pendidikan dasar hingga pendidikan menengah, instansi pemerintah, karang taruna, kelompok PKK, kelompok dasa wisma, panti asuhan, atau lembaga sosial kemasyarakatan lain. Kelompok tani (Poktan), kelompok ternak, kelompok sadar wisata (Pokdarwis), pedagang asongan, dan UMKM tidak termasuk mitra PKM-PM; kelompok PKK, dasa wisma, dan karang taruna yang sudah menjalankan usaha berorientasi profit juga tidak dapat menjadi mitra. Jumlah partisipan (masyarakat mitra) aktif disarankan sekitar 10-15 orang.",
    "Ruang lingkup PKM-PM adalah memberikan bantuan IPTEKS sebagai solusi atas permasalahan atau kebutuhan prioritas mitra yang teridentifikasi saat mahasiswa dan mitra berdiskusi sebelum kesepakatan bersama dicapai. Bidang ini terbuka bagi semua bidang ilmu karena teknologi dimaknai luas sebagai cara memadukan sumber daya dan alat edukasi untuk pemberdayaan, mencakup aspek pemberdayaan sumber daya manusia, ekonomi, kesehatan, pendidikan, keamanan lingkungan, persiapan wirausaha, dan pengembangan karya seni. Kegiatan dilaksanakan secara luring penuh di lokasi mitra sehingga jarak kampus-mitra harus terjangkau, maksimum 200 km dan dibuktikan dengan Google Maps yang dilampirkan.",
    "Sebelum menyusun proposal, mahasiswa menggali informasi langsung dari masyarakat mitra untuk mendiskusikan kebutuhan atau persoalan prioritas, lalu membantu memetakan masalah, menentukan skala prioritas, dan menyelesaikannya. Seluruh aktivitas tim dan mitra wajib didokumentasikan, dipublikasikan di media sosial, dan diunggah ke Logbook kegiatan pada simbelmawa/pkm; laporan kemajuan dan laporan akhir wajib merujuk pada Logbook tersebut.",
  ],
  ketentuanTim: [
    "Tim 3–5 mahasiswa aktif D-3/D-4/S-1 di Perguruan Tinggi di bawah Kemendiktisaintek yang terdaftar di PDDikti: 1 ketua + 2–4 anggota; yang sudah menyandang gelar atau sedang mengikuti pendidikan profesi/koas tidak diperbolehkan.",
    "Bidang kajian tidak harus sesuai atau relevan dengan bidang ilmu ketua dan/atau anggota tim pengusul.",
    "Nama pengusul ditulis lengkap sesuai terdaftar di PDDikti; boleh berasal dari prodi yang sama atau berbeda asal masih satu Perguruan Tinggi.",
    "Anggota disarankan berasal dari minimum 2 angkatan berbeda agar ada pembinaan dan kesinambungan pengusulan program tahun berikutnya.",
    "Tidak diperkenankan sekaligus mengusulkan PPK Ormawa dan P2MW di tahun yang sama.",
    "Mitra harus masyarakat non-profit (lembaga pendidikan, instansi pemerintah, karang taruna, kelompok PKK, dasa wisma, panti asuhan, lembaga sosial lain); kelompok tani, kelompok ternak, Pokdarwis, pedagang asongan, UMKM, serta kelompok yang sudah berorientasi profit tidak dapat menjadi mitra.",
    "Proposal melampirkan surat pernyataan kesediaan bekerja sama yang cukup ditandatangani ketua/koordinator kelompok mitra atau komunitas (tidak harus ada stempel/cap), bukan oleh Kepala Desa, Ketua RW, Ketua RT, atau pejabat struktural pemerintah daerah.",
  ],
  pendanaan: {
    utama: "Rp 6–8 juta per judul dari Direktorat Pembelajaran dan Kemahasiswaan (lolos passing grade)",
    pendampingPt:
      "Wajib dari PT, maksimum Rp 2 juta (tunai dan/atau barang), ditunjukkan dalam surat komitmen dukungan pendanaan",
    institusiLain: "Maksimum Rp 1 juta dari sponsor/mitra lain (opsional)",
  },
  luaran: [
    "Laporan kemajuan (bagian inti maksimum 10 halaman)",
    "Laporan akhir (bagian inti maksimum 10 halaman)",
    "Buku Pedoman Mitra — buku manual petunjuk operasional agar mitra dapat melanjutkan kegiatan setelah PKM-PM selesai",
    "Akun media sosial khusus topik PKM (aktif, publik)",
  ],
  catatanLuaran:
    "Buku Pedoman Mitra bukan laporan kegiatan melainkan petunjuk operasional; bentuk dan formatnya bebas, substansi minimal berisi deskripsi masalah mitra, solusi yang diberikan, SOP penggunaan dan perawatan alat atau SOP kegiatan, serta kontak lanjutan; naskah buku ini wajib diunggah sebelum PKP2. Wajib ada 3 unggahan ber-iklan (Ads) serentak (Sabtu 23 Mei, 20 Juni, 8 Agustus 2026 pukul 12.00 WIB/13.00 WITA/14.00 WIT) dengan total anggaran Ads maksimum Rp 500.000,00; setiap unggahan memuat logo Kemdiktisaintek & logo PKM serta tagar #pkm, #pkm2026, #pkmpendanaan2026; unggahan Instagram wajib menandai @kemahasiswaan.dikti, @belmawa.dikti, @ditjen.dikti, dan @kemdiktisaintek.ri.",
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
      "BAB 1 Pendahuluan — latar belakang permasalahan/kebutuhan mitra dan prioritas penyelesaiannya, aspek yang mendasari pengabdian, rumusan masalah, tujuan, manfaat, target luaran",
      "BAB 2 Gambaran Umum Masyarakat Mitra — profil mitra (nama, alamat, lokasi, jumlah), kondisi riil dan potensi wilayah aspek fisik-sosial-ekonomi-lingkungan, hubungan masalah mitra dengan solusi yang diusulkan",
      "BAB 3 Metode Pelaksanaan — tahapan terprogram dan terukur: persiapan (koordinasi, perizinan), implementasi (sosialisasi, pelatihan, praktik mandiri mitra), diseminasi-monitoring-evaluasi, desain keberlanjutan; memuat baseline kondisi riil mitra, justifikasi tiap tahapan, rancangan evaluasi, dan peran pihak pendukung",
      "BAB 4 Biaya dan Jadwal — RAB komposisi minimum 80% operasional, maksimum 20% administrasi (bahan habis maks 60%, sewa/jasa maks 15%, transport lokal maks 30%, lain-lain maks 15%; wajib memuat alokasi publikasi/promosi di media sosial maks Rp 500 ribu) + jadwal bar chart 3–4 bulan",
      "Daftar Pustaka — Harvard style, alfabetis",
      "Lampiran — biodata, justifikasi anggaran, susunan tim & pembagian tugas, surat pernyataan ketua, surat pernyataan kesediaan bekerja sama dari mitra, denah lokasi mitra (maksimum 200 km via Google Maps), hasil uji similaritas",
    ],
    catatanKhas: [
      "Item RAB yang dilarang: honorarium/konsumsi/hadiah, sewa komputer-laptop-printer-ponsel-kamera-ruangan/aula, pembelian alat/bahan > Rp 1 juta per item, flashdisk/penyimpanan data, kuota internet > Rp 100 ribu/bulan per tim, sewa lisensi > 6 bulan, penjilidan laporan (kecuali PTS/PTN yang mewajibkan hardcopy), biaya seminar/publikasi jurnal.",
      "Alokasi khusus PKM-PM: kertas tidak lebih dari 2 rim, biaya perjalanan lokal at cost dan maksimum 30%, biaya publikasi/promosi di media sosial maksimal Rp 500 ribu, sewa laboratorium/peralatan (jika wajib) tidak melebihi Rp 1 juta.",
      "Wajib melampirkan Surat Pernyataan Kesediaan Bekerja Sama dari Mitra (tanda tangan ketua/koordinator kelompok, tanpa stempel, bukan Kepala Desa/Ketua RW/RT) dan denah detail lokasi mitra maksimum 200 km dari kampus dibuktikan dengan Google Maps.",
      "Isian kelengkapan dientri langsung di simbelmawa/pkm; berkas diberi nama namaketua_namaPT_PKM-PM.pdf.",
    ],
    catatanGugur: [
      "Berkas isi utama memuat halaman sampul, pengesahan, ringkasan, atau abstrak",
      "Daftar pustaka tidak mengikuti Harvard style",
      "Indeks similaritas di atas 25% (hasil uji Turnitin/iThenticate/sejenis wajib dilampirkan)",
      "Tanda tangan hasil pemotongan lokal pada biodata, surat pernyataan ketua, atau surat pernyataan mitra",
    ],
  },
  filePanduan: "/panduan/PKM-PM-2026_fix.pdf",
};
