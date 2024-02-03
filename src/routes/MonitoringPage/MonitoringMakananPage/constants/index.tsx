export const chipTypes = ["Semua", "Sarapan", "Makan Siang", "Makan Malam"];

export type KonsumsiMakanan = {
  type: string;
  category: string;
  name: string;
  timestamp: string;
};

export const dummyKonsumsiMakanan: KonsumsiMakanan[] = [];

export const dummyTargetMakanan = [
  "Makanan Pokok",
  "Lauk Pauk",
  "Sayuran",
  "Buah",
];
