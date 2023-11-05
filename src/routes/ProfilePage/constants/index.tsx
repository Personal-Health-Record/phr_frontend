export type Insurance = {
  id: string;
  title: string;
  cardNumber: string;
  isActive: string;
  userId: string;
};

export const dummyInsuranceData: Insurance[] = [
  {
    id: "1",
    title: "BPJS",
    cardNumber: "0000000000000000",
    isActive: "Aktif",
    userId: "1",
  },
  {
    id: "2",
    title: "Great Eastern",
    cardNumber: "0000000000000000",
    isActive: "Aktif",
    userId: "1",
  },
];
