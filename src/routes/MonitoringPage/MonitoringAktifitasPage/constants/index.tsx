export const chipTypes = ["Semua", "Jalan Kaki", "Jogging", "Push up"];

export type AktifitasFisik = {
  type: string;
  duration: number;
};

export const dummyAktifitasFisik: AktifitasFisik[] = [
  {
    type: "Jalan Kaki",
    duration: 5,
  },
  {
    type: "Jogging",
    duration: 10,
  },
  {
    type: "Push up",
    duration: 5,
  },
];
