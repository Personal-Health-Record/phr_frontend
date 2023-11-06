export type Notification = {
  id: string;
  fromUserId?: string;
  toUserId: string;
  title: string;
  body: string;
  date: string;
  isRead: boolean;
  link: string;
};

export const dummyNotification: Notification[] = [
  {
    id: '1',
    toUserId: '2',
    title: 'Rujukan',
    body: 'Rujukan ke Rumah Sakit Hermina sudah dijadwalkan besok di Klinik Medi-Go.',
    date: '2021-10-01',
    isRead: false,
    link: '/rujukan/details/1',
  },
  {
    id: '2',
    toUserId: '1',
    title: 'Rujukan',
    body: 'Rujukan ke Rumah Sakit Hermina Anda dijadwalkan besok di Klinik Medi-Go.',
    date: '2021-10-01',
    isRead: false,
    link: '/rujukan/details/1',
  },
  {
    id: '3',
    toUserId: '1',
    title: 'Vaksinasi',
    body: 'Vaksinasi COVID-19 kedua Anda dijadwalkan besok di Klinik Medi-Go.',
    date: '2021-12-05',
    isRead: false,
    link: '/vaksinasi/details/1',
  },
  {
    id: '4',
    toUserId: '2',
    title: 'Vaksinasi',
    body: 'Vaksinasi COVID-19 di Rumah Sakit Hermina sudah dijadwalkan besok di Klinik Medi-Go.',
    date: '2021-10-01',
    isRead: false,
    link: '/vaksinasi/details/1',
  },
];
