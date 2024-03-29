import imageBmi from "../../../assets/images/kalkulator/bmi.png";
import imageBmr from "../../../assets/images/kalkulator/bmr.png";
import riceImg from "../../../assets/images/food/rice.png";
import chickenImg from "../../../assets/images/food/chicken.png";
import fruitImg from "../../../assets/images/food/fruit.png";
import vegetableImg from "../../../assets/images/food/vegetable.png";
import milkImg from "../../../assets/images/food/milk.png";

export const calculatorMenuList = [
  {
    image: imageBmi,
    title: "Indeks Massa Tubuh (BMI)",
    path: "/monitoring/bmi",
  },
  {
    image: imageBmr,
    title: "Kalkulator Kalori (BMR)",
    path: "/monitoring/bmr",
  },
];

export const dataAktifitasFisik = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "menit",
      data: [10, 20, 15, 5, 25, 10, 20],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

export const dataWaktuTidur = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "jam",
      data: [6, 8, 7, 10, 11, 5, 7],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

export const dataDarah = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "SYSTOLE",
      data: [102, 110, 90, 120, 97, 103, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "DIASTOLE",
      data: [50, 60, 55, 70, 90, 45, 60],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const dataAktifitasFisikBulanan = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "menit",
      data: [30, 30, 25, 35, 15, 20, 30],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

export const dataWaktuTidurBulanan = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "jam",
      data: [8, 3, 7, 9, 10, 2, 5],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

export const dataDarahBulanan = {
  labels: ["S", "S", "R", "K", "J", "S", "M"],
  datasets: [
    {
      label: "SYSTOLE",
      data: [90, 104, 120, 110, 114, 95, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "DIASTOLE",
      data: [60, 80, 90, 40, 55, 65, 80],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export type PhysiqueData = {
  height: number;
  weight: number;
  latestUpdate: string;
};

export type TekananDarah = {
  systole: number;
  diastole: number;
};

export const dummyUserPhysique: PhysiqueData = {
  height: 0,
  weight: 0,
  latestUpdate: new Date().toISOString(),
};

interface ImageKonsumsiMakanan {
  "Makanan Pokok": string;
  "Lauk Pauk": string;
  Sayuran: string;
  Buah: string;
  Susu: string;
  [key: string]: string; // Index signature
}

export const imageKonsumsiMakanan: ImageKonsumsiMakanan = {
  "Makanan Pokok": riceImg,
  "Lauk Pauk": chickenImg,
  Sayuran: vegetableImg,
  Buah: fruitImg,
  Susu: milkImg,
};
