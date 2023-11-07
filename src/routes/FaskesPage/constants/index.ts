export const faskesDetailData = [
  {
    title: 'Informasi Umum',
    value: 'Rumah Sakit Medika',
  },
  {
    title: 'Jenis Faskes',
    value: 'RS Kelas C',
  },
  {
    title: 'Nomor Telepon',
    value: '(021) 7421146',
  },
  {
    title: 'Alamat',
    value:
      'Jl. Kp. Utan No.31B, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412',
  },
];

export const poliklinik = [
  'Poli Umum',
  'Poli Anak',
  'Poli Gigi',
  'Poli Mata',
  'Poli THT',
  'Poli Kulit',
];

export type Faskes = {
  id: number;
  name: string;
  type: string;
  phone: string;
  address: string;
  service: string[];
  lat: number;
  lang: number;
  registrationLink: string;
  websiteLink: string;
};

export const dummyFaskes: Faskes[] = [
  {
    id: 1,
    name: 'Rumah Sakit Medika',
    type: 'RS kelas C',
    phone: '(021) 7682918',
    address:
      'Jl. Kp. Utan No.31B, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412',
    service: [
      'Poli Umum',
      'Poli Anak',
      'Poli Gigi',
      'Poli Mata',
      'Poli THT',
      'Poli Kulit',
    ],
    lat: -6.322059912671501,
    lang: 106.66386319558431,
    registrationLink: '',
    websiteLink: '',
  },
  {
    id: 2,
    name: 'Rumah Sakit Sehat Bahagia',
    type: 'RS kelas B',
    phone: '(021) 5551234',
    address:
      'Jl. Pemuda No. 42, Kec. Menteng, Jakarta Pusat, DKI Jakarta 12345',
    service: [
      'Poli Jantung',
      'Poli Bedah',
      'Poli Mata',
      'Poli THT',
      'Poli Orthopedi',
    ],
    lat: -6.192837462,
    lang: 106.819239042,
    registrationLink: '',
    websiteLink: '',
  },
  {
    id: 3,
    name: 'Klinik Sejahtera',
    type: 'RS kelas D',
    phone: '(021) 9876543',
    address: 'Jl. Merdeka No. 10, Kec. Ciledug, Tangerang, Banten 54321',
    service: ['Poli Umum', 'Poli Gigi'],
    lat: -6.238947561,
    lang: 106.699872342,
    registrationLink: '',
    websiteLink: '',
  },
  {
    id: 4,
    name: 'RS Cemerlang',
    type: 'RS kelas A',
    phone: '(021) 1112222',
    address: 'Jl. Sinar Indah No. 5, Kec. Sawangan, Depok, Jawa Barat 67890',
    service: ['Poli Umum', 'Poli Bedah', 'Poli Mata'],
    lat: -6.362718492,
    lang: 106.821947861,
    registrationLink: '',
    websiteLink: '',
  },
  {
    id: 5,
    name: 'Puskesmas Mawar',
    type: 'Puskesmas',
    phone: '(021) 9876543',
    address: 'Jl. Mawar No. 17, Kec. Bogor Selatan, Bogor, Jawa Barat 76543',
    service: ['Poli Umum', 'Poli Gigi', 'Poli KIA'],
    lat: -6.601239841,
    lang: 106.801234567,
    registrationLink: '',
    websiteLink: '',
  },
  {
    id: 6,
    name: 'Klinik Bina Sehat',
    type: 'Klinik',
    phone: '(021) 5559876',
    address:
      'Jl. Aman Sentosa No. 8, Kec. Bandung Utara, Bandung, Jawa Barat 98765',
    service: ['Poli Umum', 'Poli Gigi'],
    lat: -6.925734126,
    lang: 107.623419826,
    registrationLink: '',
    websiteLink: '',
  },
];

export const chipTypes = [
  'Semua',
  'Puskesmas',
  'Klinik',
  'RS kelas D',
  'RS kelas C',
  'RS kelas B',
  'RS kelas A',
];
