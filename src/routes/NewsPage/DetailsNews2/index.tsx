import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail2 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("31 Maret 2023")}</div>

        <div className="mt-1">
          {titleText("Adakah Manfaat Yoga saat Puasa? Ini Berbagai Faktanya")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: Halodoc")}
          {/* https://www.halodoc.com/artikel/adakah-manfaat-yoga-saat-puasa-ini-berbagai-faktanya */}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={
              "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/31083057/Adakah-Manfaat-Yoga-saat-Puasa_-Ini-Faktanya.jpg"
            }
            alt=""
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Selama berpuasa di bulan Ramadan, menjaga kebugaran tubuh adalah sebuah keharusan. Tidak hanya melalui pola makan dan waktu tidur, kamu juga bisa berolahraga secara rutin agar tubuh tetap sehat. Agar tidak menguras banyak energi, kamu bisa coba olahraga seperti yoga saat puasa."
          )}
          {renderDescriptionText(
            "Yoga merupakan olahraga yang sesuai untuk kamu lakukan ketika berpuasa karena memiliki cukup banyak manfaat. Adapun dampak yang bisa tubuhmu rasakan antara lain:"
          )}
          {subTitleText("1. Menjaga tubuh tetap aktif tanpa kelelahan")}
          {renderDescriptionText(
            "Selain membangun kekuatan tubuh, aspek utama yoga adalah peregangan tubuh dan fleksibilitas. Dua aspek ini sangat cocok untuk kamu lakukan ketika puasa karena tidak mengeluarkan energi yang terlalu banyak hingga kamu merasa sangat kehausan atau kelaparan. Yoga juga terfokus pada ritme dan pergerakan konstan pada tubuh, jadi tujuannya utamanya bukan untuk membakar kalori."
          )}
          {subTitleText("2. Membantu tidur dan menghindari insomnia")}
          {renderDescriptionText(
            "Penelitian menunjukkan bahwa yoga bisa meningkatkan kualitas tidur seseorang. Hal ini bisa terjadi karena energi yang seseorang keluarkan saat berolahraga bisa meningkatkan rasa lelah di malam hari dan membuatnya jadi lebih mudah tertidur. Selain itu, karena yoga bisa membuat lebih rileks, kamu pun akan mendapat ketenangan emosional dan terhindar dari stres setelah melakukannya sehingga membuat kamu lebih cepat tertidur."
          )}
          {subTitleText("3. Mendorong energi tubuh")}
          {renderDescriptionText(
            "Melalui pose, pergerakan, dan tekanan pada bagian tubuh tertentu yang kamu lakukan selama yoga, kamu bisa membantu melancarkan peredaran tubuh dan membawa oksigen ke sistem kardiovaskular. Karena itu, kamu bisa menstimulasi perasaan tubuh yang lebih segar. Selain itu, segala jenis olahraga juga bisa mengeluarkan endorfin, serotonin, dan dopamine. Ketiga hormon ini bertugas untuk meningkatkan suasana hati yang kemudian bisa memicu tubuh untuk merasa lebih produktif."
          )}
        </div>
      </div>
      <BottomNavbar menuActive="Artikel" />
    </div>
  );
};

export default NewsDetail2;
