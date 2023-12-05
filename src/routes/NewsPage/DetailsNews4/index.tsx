import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail = () => {

  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("5 Desember 2023")}</div>

        <div className="mt-1">
          {titleText("Menjelajahi Manfaat Meditasi Mindfulness")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://example.com/meditasi-mindfulness.jpg"
            alt="Meditasi Mindfulness"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Meditasi mindfulness, atau meditasi kesadaran penuh, telah menjadi semakin populer sebagai metode untuk meningkatkan kesehatan mental dan kebahagiaan. Artikel ini akan menjelaskan beberapa manfaat positif yang dapat diperoleh melalui praktik meditasi mindfulness."
          )}

          {subTitleText("1. Mengurangi Stres")}
          {renderDescriptionText(
            "Praktik mindfulness dapat membantu mengurangi tingkat stres dengan fokus pada pernapasan dan kesadaran terhadap momen ini. Ini membantu mengurangi tekanan mental dan meningkatkan kemampuan untuk menghadapi tantangan sehari-hari."
          )}

          {subTitleText("2. Meningkatkan Konsentrasi")}
          {renderDescriptionText(
            "Dengan merenung dan fokus pada satu hal dalam satu waktu, meditasi mindfulness dapat meningkatkan konsentrasi dan daya ingat. Ini membantu dalam pekerjaan dan kegiatan sehari-hari yang memerlukan perhatian lebih."
          )}

          {subTitleText("3. Memperbaiki Kualitas Tidur")}
          {renderDescriptionText(
            "Praktik meditasi ini juga dapat membantu meningkatkan kualitas tidur. Dengan meredakan pikiran dan menenangkan tubuh sebelum tidur, seseorang dapat mengalami tidur yang lebih nyenyak dan pulih."
          )}

          {subTitleText("4. Meningkatkan Kesejahteraan Emosional")}
          {renderDescriptionText(
            "Meditasi mindfulness terkait erat dengan peningkatan kesejahteraan emosional. Dengan meningkatkan kesadaran terhadap perasaan dan pikiran, seseorang dapat lebih baik memahami dan mengelola emosinya."
          )}

          {subTitleText("5. Mengurangi Gejala Kecemasan")}
          {renderDescriptionText(
            "Banyak penelitian mendukung bahwa meditasi mindfulness dapat membantu mengurangi gejala kecemasan. Dengan merenung secara teratur, seseorang dapat mengembangkan keterampilan untuk mengatasi kekhawatiran dan ketegangan."
          )}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail;
