export type Pengingat = {
  id: string;
  time: string;
  consumptionStatus: string;
};

export type Obat = {
  id: string;
  name: string;
  dosage: string;
  type: string;
  consumptionPerDay: number;
  consumptionTime: string;
  consumptionMethod: string;
  consumptionMandatory: string;
  dateFrom: string;
  dateTo: string;
  listPengingat: Pengingat[];
  userId: string;
};

export const dummyObatData: Obat[] = [
  {
    id: "1",
    name: "Panadol",
    dosage: "500 mg",
    type: "Tablet",
    consumptionPerDay: 2,
    consumptionTime: "Setelah makan",
    consumptionMethod: "Ditelan",
    consumptionMandatory: "Ya",
    dateFrom: "2023-10-01",
    dateTo: "2023-10-30",
    listPengingat: [
      {
        id: "1",
        time: "08:00",
        consumptionStatus: "Sudah dikonsumsi",
      },
      {
        id: "2",
        time: "12:00",
        consumptionStatus: "Belum dikonsumsi",
      },
    ],
    userId: "1",
  },
  {
    id: "2",
    name: "Bodrex",
    dosage: "500 mg",
    type: "Tablet",
    consumptionPerDay: 2,
    consumptionTime: "Setelah makan",
    consumptionMethod: "Ditelan",
    consumptionMandatory: "Ya",
    dateFrom: "2021-09-06",
    dateTo: "2021-09-07",
    listPengingat: [
      {
        id: "1",
        time: "08:00",
        consumptionStatus: "Belum dikonsumsi",
      },
    ],
    userId: "1",
  },
];
