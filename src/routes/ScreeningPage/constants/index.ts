import mandiri1 from "../../../assets/images/screening/screening-0.png";
import mandiri2 from "../../../assets/images/screening/screening-2.png";
import mandiri3 from "../../../assets/images/screening/screening-3.png";

export const screeningData = [
  {
    title: "Skrining Mandiri Penyakit Tidak Menular",
    image: mandiri1,
    path: "/screening/ptm",
  },
  {
    title: "Skrining COVID-19",
    image: mandiri2,
    path: "/screening/covid",
  },
  {
    title: "Skrining Kesehatan Mental",
    image: mandiri3,
    path: "/screening/mental",
  },
];

export const dataHistory = [
  {
    title: "Tanggal Skrining",
    data: "18 Maret 2022",
  },
  {
    title: "NIK Pasies",
    data: "13759027827823",
  },
  {
    title: "Nama Pasien",
    data: "Jimmy Daniel",
  },
  {
    title: "Jenis Kelamin",
    data: "Laki-laki",
  },
  {
    title: "Usia",
    data: "30 tahun",
  },
  {
    title: "Lokasi Skrining",
    data: "Puskesmas Serpong",
  },
];

export const mentalQuestion = [
  "Kurang berminat atau bergairah dalam melakukan apapun",
  "Merasa murung, sedih, atau putus asa",
  "Sulit tidur/mudah terbangun, atau terlalu banyak tidur",
  "Merasa lelah atau kurang bertenaga",
  "Kurang nafsu makan atau terlalu banyak makan",
  "Kurang percaya diri — atau merasa bahwa Anda adalah orang yang gagal atau telah mengecewakan diri sendiri atau keluarga",
  "Sulit berkonsentrasi pada sesuatu, misalnya membaca koran atau menonton televisi",
  "Bergerak atau berbicara sangat lambat sehingga orang lain memperhatikannya. Atau sebaliknya; merasa resah atau gelisah sehingga Anda lebih sering bergerak dari biasanya.",
  "Merasa lebih baik mati atau ingin melukai diri sendiri dengan cara apapun.",
];

export type Skrining = {
  id: number;
  date: string;
  location: string;
  skriningType: string;
  detail?: Covid | Mental | PTM;
};

export type Covid = {
  kontak: boolean;
  luarNegri: boolean;
  area: boolean;
  gejala: string;
};

export type Mental = {
  gairah: number;
  murung: number;
  sulitTidur: number;
  lelah: number;
  nafsuMakanKurang: number;
  kurangPd: number;
  sulitKonsen: number;
  lambat: number;
  melukai: number;
};

export type PTM = {
  rokok: boolean;
  fisik: boolean;
  buahSayur: boolean;
  penyakit: string;
  systole: number;
  diastole: number;
  gula: number;
  tinggi: number;
  lingkar: number;
  berat: number;
};

export const dummySkriningList: Skrining[] = [];
