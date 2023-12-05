import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail5 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("12 Januari 2024")}</div>

        <div className="mt-1">
          {titleText("Pentingnya Olahraga Rutin untuk Gaya Hidup Sehat")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://example.com/olahraga-sehat.jpg"
            alt="Olahraga Sehat"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Olahraga bukan hanya tentang penampilan fisik, tetapi juga tentang kesehatan dan kesejahteraan secara keseluruhan. Artikel ini akan membahas pentingnya melakukan olahraga secara teratur untuk mencapai gaya hidup yang sehat."
          )}

          {subTitleText("1. Meningkatkan Kesehatan Jantung")}
          {renderDescriptionText(
            "Olahraga aerobik, seperti berlari atau berenang, dapat meningkatkan kesehatan jantung dan sistem peredaran darah. Aktivitas fisik yang teratur membantu menurunkan risiko penyakit jantung dan meningkatkan daya tahan tubuh."
          )}

          {subTitleText("2. Menjaga Berat Badan Ideal")}
          {renderDescriptionText(
            "Olahraga membantu mengontrol berat badan dengan membakar kalori dan meningkatkan metabolisme tubuh. Kombinasi olahraga dengan pola makan sehat dapat membantu seseorang mencapai dan menjaga berat badan ideal."
          )}

          {subTitleText("3. Meningkatkan Kesehatan Mental")}
          {renderDescriptionText(
            "Aktivitas fisik telah terbukti dapat meningkatkan suasana hati dan mengurangi tingkat stres. Endorfin yang dilepaskan selama olahraga dapat memberikan perasaan bahagia dan relaksasi, mendukung kesehatan mental secara keseluruhan."
          )}

          {subTitleText("4. Mencegah Penyakit Kronis")}
          {renderDescriptionText(
            "Olahraga teratur dapat membantu mencegah penyakit kronis seperti diabetes, hipertensi, dan osteoporosis. Peningkatan kesehatan secara menyeluruh dapat mengurangi risiko terkena penyakit-penyakit tersebut."
          )}

          {subTitleText("5. Meningkatkan Kualitas Tidur")}
          {renderDescriptionText(
            "Orang yang berolahraga secara teratur cenderung memiliki pola tidur yang lebih baik. Aktivitas fisik membantu mengurangi ketegangan otot dan mempromosikan tidur yang nyenyak, mendukung pemulihan tubuh setelah beraktivitas sepanjang hari."
          )}
        </div>
      </div>


      <BottomNavbar />
    </div>
  );
};

export default NewsDetail5;
