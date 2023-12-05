import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail9 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("8 November 2024")}</div>

        <div className="mt-1">
          {titleText("Dampak Pernapasan Sadar terhadap Pengurangan Stres")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
          {/* https://example.com/dampak-pernapasan-sadar-stres-reduksi */}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://example.com/mindful-breathing.jpg"
            alt="Pernapasan Sadar"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Pernapasan sadar, atau mindful breathing, telah menjadi metode yang semakin populer untuk mengurangi tingkat stres dan meningkatkan kesejahteraan mental. Artikel ini akan menjelaskan dampak positif pernapasan sadar terhadap kesehatan pikiran dan tubuh."
          )}

          {subTitleText("1. Menenangkan Sistem Saraf")}
          {renderDescriptionText(
            "Pernapasan sadar membantu menenangkan sistem saraf, khususnya sistem saraf simpatik yang aktif selama stres. Ini mengaktifkan respons relaksasi tubuh dan membantu mengurangi tingkat hormon stres, seperti kortisol."
          )}

          {subTitleText("2. Meningkatkan Fokus dan Konsentrasi")}
          {renderDescriptionText(
            "Dengan memusatkan perhatian pada pernapasan, Anda melatih konsentrasi dan fokus pikiran. Hal ini dapat membantu meningkatkan kinerja kognitif dan produktivitas sehari-hari."
          )}

          {subTitleText("3. Mengurangi Gejala Kecemasan")}
          {renderDescriptionText(
            "Pernapasan sadar telah terbukti efektif dalam mengurangi gejala kecemasan. Melalui latihan pernapasan yang teratur, seseorang dapat mengembangkan keterampilan untuk mengatasi pikiran yang meresahkan dan menjaga ketenangan batin."
          )}

          {subTitleText("4. Mendorong Kesadaran Momen Ini")}
          {renderDescriptionText(
            "Latihan pernapasan sadar membantu meningkatkan kesadaran terhadap momen ini. Ini mengajarkan untuk hidup dalam kehadiran saat ini, mengurangi pikiran yang berkeliaran dan kekhawatiran tentang masa depan atau masa lalu."
          )}

          {subTitleText("5. Memperbaiki Kualitas Tidur")}
          {renderDescriptionText(
            "Pernapasan sadar dapat digunakan sebagai alat yang efektif untuk merilekskan tubuh sebelum tidur. Hal ini membantu meningkatkan kualitas tidur dan mempersiapkan tubuh untuk istirahat yang mendalam."
          )}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail9;
