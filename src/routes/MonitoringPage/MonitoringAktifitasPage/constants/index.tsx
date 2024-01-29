export const chipTypes = ["Semua", "Jalan Kaki", "Jogging", "Push up"];

export type AktifitasFisik = {
  type: string;
  duration: number;
  timestamp: string;
  startTime: string;
  endTime: string;
};

export const dummyAktifitasFisik: AktifitasFisik[] = [];
