import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail8 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("15 Oktober 2024")}</div>

        <div className="mt-1">
          {titleText("Eksplorasi Manfaat Berjalan di Alam untuk Kesejahteraan Mental")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
          {/* https://example.com/manfaat-berjalan-alam-kesejahteraan-mental */}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://example.com/nature-walk-benefits.jpg"
            alt="Manfaat Berjalan di Alam"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Berjalan di alam bukan hanya sekadar aktivitas fisik, tetapi juga merupakan obat alami untuk meningkatkan kesejahteraan mental. Artikel ini akan menjelajahi manfaat yang dapat Anda peroleh dengan menjalani kegiatan sederhana ini."
          )}

          {subTitleText("1. Meredakan Stres dan Kecemasan")}
          {renderDescriptionText(
            "Berjalan di alam telah terbukti dapat meredakan tingkat stres dan kecemasan. Pemandangan alam dan udara segar membantu menenangkan pikiran dan meningkatkan suasana hati secara alami."
          )}

          {subTitleText("2. Meningkatkan Konsentrasi dan Kreativitas")}
          {renderDescriptionText(
            "Kontak dengan alam telah dikaitkan dengan peningkatan konsentrasi dan kreativitas. Jauh dari gangguan elektronik, Anda dapat fokus pada pengamatan alam sekitar, membantu merefresh otak dan meningkatkan daya kreatif."
          )}

          {subTitleText("3. Menyehatkan Tubuh dan Jiwa")}
          {renderDescriptionText(
            "Berjalan di alam melibatkan gerakan fisik ringan yang bermanfaat bagi kesehatan tubuh. Aktivitas ini juga memberikan waktu untuk introspeksi dan ketenangan batin, mendukung kesehatan jiwa Anda."
          )}

          {subTitleText("4. Memperbaiki Kualitas Tidur")}
          {renderDescriptionText(
            "Aktivitas fisik yang teratur di alam dapat membantu mengatur pola tidur. Paparan sinar matahari dan ritme alami lingkungan luar ruangan membantu tubuh Anda lebih mudah beradaptasi dengan siklus tidur yang sehat."
          )}

          {subTitleText("5. Membangun Koneksi dengan Alam")}
          {renderDescriptionText(
            "Berjalan di alam juga memberikan kesempatan untuk membangun koneksi lebih dalam dengan alam. Ini dapat meningkatkan rasa keterhubungan dan kepedulian terhadap lingkungan sekitar."
          )}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail8;
