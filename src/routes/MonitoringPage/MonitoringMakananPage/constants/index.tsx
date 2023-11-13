export const chipTypes = ["Semua", "Sarapan", "Makan Siang", "Makan Malam"];

export type KonsumsiMakanan = {
  type: string;
  category: string;
  name: string;
};

export const dummyKonsumsiMakanan: KonsumsiMakanan[] = [
  {
    category: "Makanan Pokok",
    name: "Roti",
    type: "Sarapan",
  },
  {
    category: "Buah",
    name: "Apel",
    type: "Sarapan",
  },
  {
    category: "Makanan Pokok",
    name: "Nasi Goreng",
    type: "Makan Siang",
  },
];
