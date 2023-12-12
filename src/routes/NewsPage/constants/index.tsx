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
  {
    id: '4',
    title: 'Menjelajahi Manfaat Meditasi Mindfulness',
    descriptionPlaceholder:
      'Meditasi mindfulness, atau meditasi kesadaran penuh, telah menjadi semakin populer sebagai metode untuk meningkatkan kesehatan mental dan ...',
    route: '/news/details/4',
    imageUrl:
      'https://res.cloudinary.com/dk0z4ums3/image/upload/v1613435562/attached_image/yuk-terapkan-mindfulness-dalam-keseharianmu.jpg',
    tags: ['tips kesehatan'],
  },
  {
    id: '5',
    title: 'Pentingnya Olahraga Rutin untuk Gaya Hidup Sehat',
    descriptionPlaceholder:
      'Olahraga bukan hanya tentang penampilan fisik, tetapi juga tentang kesehatan dan kesejahteraan...',
    route: '/news/details/5',
    imageUrl:
      'https://res.cloudinary.com/dk0z4ums3/image/upload/v1614664558/attached_image/beragam-manfaat-olahraga.jpg',
    tags: ['tips kesehatan'],
  },
  {
    id: '6',
    title: 'Menyeimbangkan Waktu Layar untuk Kesejahteraan yang Lebih Baik',
    descriptionPlaceholder:
      'Dalam era digital, waktu layar telah menjadi bagian tak terhindarkan dari kehidupan sehari-hari. Artikel ini akan membahas pentingnya menyeimbangkan waktu layar...',
    route: '/news/details/6',
    imageUrl:
      'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/590/2023/12/08/produktif-3616308392.jpg',
    tags: ['tips kesehatan'],
  },
  {
    id: '7',
    title: 'Tips Menjaga Keseimbangan Kerja dan Kehidupan yang Sehat',
    descriptionPlaceholder:
      'Menjaga keseimbangan antara pekerjaan dan kehidupan pribadi adalah kunci untuk hidup...',
    route: '/news/details/7',
    imageUrl:
      'https://cdn.idntimes.com/content-images/community/2022/05/pexels-andrea-piacquadio-927451-ee935e9ea79a32351151a63f3d9c8cb7-74b919d0ca9f2c5b91ca5b972913e293_600x400.jpg',
    tags: ['tips kesehatan'],
  },
  {
    id: '8',
    title: 'Eksplorasi Manfaat Berjalan di Alam untuk Kesejahteraan Mental',
    descriptionPlaceholder:
      'Berjalan di alam bukan hanya sekadar aktivitas fisik, tetapi juga merupakan obat alami untuk meningkatkan...',
    route: '/news/details/8',
    imageUrl:
      'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/2xtwjnZgn4w2xqKqCtqbA/original/082049200_1543391498-Jalan-Kaki-di-Alam-Terbuka-Hijau-Bermanfaat-untuk-Otak-By-Kjetil-Kolbjornsrud-Shutterstock.jpg',
    tags: ['tips kesehatan'],
  },
  {
    id: '9',
    title: 'Dampak Pernapasan Sadar terhadap Pengurangan Stres',
    descriptionPlaceholder:
      'Pernapasan sadar, atau mindful breathing, telah menjadi metode yang semakin populer untuk mengurangi tingkat stres dan meningkatkan ...',
    route: '/news/details/9',
    imageUrl:
      'https://asset.kompas.com/crops/6SMw_7HZVZD6mafdV7uBWGHouuI=/185x89:1614x803/780x390/data/photo/2023/06/28/649c3ae756658.png',
    tags: ['tips kesehatan', 'penyakit kronis'],
  },
  {
    id: '10',
    title: 'Manfaat Menulis Jurnal untuk Pertumbuhan Pribadi',
    descriptionPlaceholder:
      'Menulis jurnal bukan hanya sekadar kegiatan menyenangkan, tetapi juga merupakan alat yang...',
    route: '/news/details/10',
    imageUrl:
      'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/images/2023/03/big/img_64210c4625b557-10429169-63161105.jpeg',
    tags: ['tips kesehatan'],
  },
];
