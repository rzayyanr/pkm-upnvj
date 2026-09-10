export type SkemaBidang = "pendanaan" | "insentif";

export type BidangKajian = {
  klaster: string;
  contoh: string;
};

export type Bidang = {
  slug: string;
  kode: string;
  nama: string;
  skema: SkemaBidang;
  /** Satu kalimat inti kegiatan, dari Tabel Kriteria Panduan Umum */
  intiKegiatan: string;
  /** Paragraf penjelasan bidang: definisi & ruang lingkup */
  deskripsi: string[];
  /** Tabel bidang kajian / ruang lingkup (jika panduan menyediakan) */
  bidangKajian?: BidangKajian[];
  /** Ketentuan tim & pengusulan (poin-poin dari Kriteria Pengusulan) */
  ketentuanTim: string[];
  pendanaan: {
    utama: string;
    pendampingPt: string;
    institusiLain: string;
  };
  /** Luaran wajib */
  luaran: string[];
  catatanLuaran?: string;
  sistematika: {
    judul: string;
    format: string[];
    struktur: string[];
    catatanKhas?: string[];
    catatanGugur: string[];
  };
  filePanduan: string;
};

export const labelSkema: Record<SkemaBidang, string> = {
  pendanaan: "Skema Pendanaan, berujung PIMNAS",
  insentif: "Skema Insentif",
};
