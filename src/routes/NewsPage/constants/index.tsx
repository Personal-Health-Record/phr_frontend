export type News = {
  id: string;
  title: string;
  descriptionPlaceholder: string;
  route: string;
  imageUrl: string;
  tags: string[];
};

export const dummyNewsData: News[] = [
  {
    id: '1',
    title:
      'Hipertensi Penyebab Utama Penyakit Jantung, Gagal Ginjal, dan Stroke',
    descriptionPlaceholder:
      'Hipertensi atau tekanan darah tinggi, sering disebut sebagai “the...',
    route: '/news/details/1',
    imageUrl:
      'https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6',
    tags: ['penyakit kronis'],
  },
  {
    id: '2',
    title: 'Adakah Manfaat Yoga saat Puasa? Ini Berbagai Faktanya',
    descriptionPlaceholder:
      'Selama berpuasa, seseorang tetap harus menjaga kebugaran tubuh dengan berolahraga. Bagi yang...',
    route: '/news/details/2',
    imageUrl:
      'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/31083057/Adakah-Manfaat-Yoga-saat-Puasa_-Ini-Faktanya.jpg.webp',
    tags: ['tips kesehatan'],
  },
  {
    id: '3',
    title: '6 Bahaya Cium Bayi Sembarangan yang Jarang Diketahui',
    descriptionPlaceholder:
      'Mencium atau menyentuh bayi merupakan hal yang biasa dilakukan. Akan tetapi ternyata mencium bayi...',
    route: '/news/details/3',
    imageUrl:
      'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/04/24045320/X-Bahaya-Cium-Bayi-Sembarangan-yang-Jarang-Diketahui.jpg.webp',
    tags: ['tips kesehatan'],
  },
];
