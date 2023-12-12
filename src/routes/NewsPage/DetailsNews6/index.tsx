import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail6 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("20 Mei 2024")}</div>

        <div className="mt-1">
          {titleText("Menyeimbangkan Waktu Layar untuk Kesejahteraan yang Lebih Baik")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/590/2023/12/08/produktif-3616308392.jpg"
            alt="Menyeimbangkan Waktu Layar"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Dalam era digital, waktu layar telah menjadi bagian tak terhindarkan dari kehidupan sehari-hari. Artikel ini akan membahas pentingnya menyeimbangkan waktu layar untuk mendukung kesejahteraan secara menyeluruh."
          )}

          {subTitleText("1. Melindungi Kesehatan Mata")}
          {renderDescriptionText(
            "Paparan terus-menerus pada layar gadget dapat menyebabkan kelelahan mata, ketegangan, dan masalah penglihatan. Menyusun jadwal istirahat dari layar membantu melindungi kesehatan mata dan mengurangi risiko gangguan penglihatan."
          )}

          {subTitleText("2. Meningkatkan Kualitas Tidur")}
          {renderDescriptionText(
            "Cahaya biru yang dipancarkan oleh layar gadget dapat mengganggu ritme tidur alami. Mengurangi waktu layar sebelum tidur membantu meningkatkan kualitas tidur dengan membiarkan otak bersiap untuk istirahat yang nyenyak."
          )}

          {subTitleText("3. Mendorong Aktivitas Fisik")}
          {renderDescriptionText(
            "Terlalu lama di depan layar dapat menyebabkan gaya hidup yang kurang aktif. Memberikan batasan waktu untuk aktivitas layar akan mendorong orang untuk lebih aktif, bergerak, dan menjaga keseimbangan tubuh."
          )}

          {subTitleText("4. Menjaga Kesehatan Mental")}
          {renderDescriptionText(
            "Penggunaan berlebihan layar terkait dengan peningkatan risiko masalah kesehatan mental, seperti stres dan kecemasan. Memiliki waktu tanpa layar dapat membantu meredakan pikiran, meningkatkan fokus, dan mendukung kesehatan mental secara keseluruhan."
          )}

          {subTitleText("5. Meningkatkan Interaksi Sosial")}
          {renderDescriptionText(
            "Terlalu terpaku pada layar dapat mengurangi waktu untuk berinteraksi secara langsung dengan orang di sekitar. Mengatur batasan waktu layar memberikan kesempatan untuk terlibat dalam interaksi sosial yang lebih bermakna dan membangun hubungan dengan orang lain."
          )}
        </div>
      </div>


      <BottomNavbar menuActive="Artikel" />
    </div>
  );
};

export default NewsDetail6;
