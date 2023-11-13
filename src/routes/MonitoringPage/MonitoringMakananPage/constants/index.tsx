export const chipTypes = ["Semua", "Sarapan", "Makan Siang", "Makan Malam"];

export type KonsumsiMakanan = {
  type: "Sarapan" | "Makan Siang" | "Makan Malam";
  category: "Makanan Pokok" | "Buah" | "Sayuran" | "Lauk Pauk";
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
