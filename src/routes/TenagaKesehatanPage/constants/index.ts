export type TenagaKesehatan = {
  specialist: string;
  yoe: number;
  sip: number;
  almamater: string;
  practiceLocation: {
    name: string;
    id: number;
  };
  userId: string;
  id: string;
};

export const dummyTenagaKesehatan: TenagaKesehatan[] = [
  {
    specialist: 'Spesialis Penyakit Dalam',
    practiceLocation: {
      name: 'RS Medika',
      id: 1,
    },
    almamater: 'Universitas Indonesia',
    sip: 87192672,
    yoe: 12,
    userId: '2',
    id: '1',
  },
  {
    specialist: 'Spesialis Mata',
    practiceLocation: {
      name: 'RS Medika',
      id: 1,
    },
    almamater: 'Universitas Diponegoro',
    sip: 65478923,
    yoe: 8,
    userId: '5',
    id: '2',
  },
];
