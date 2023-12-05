import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail7 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("5 September 2024")}</div>

        <div className="mt-1">
          {titleText("Tips Menjaga Keseimbangan Kerja dan Kehidupan yang Sehat")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://example.com/work-life-balance.jpg"
            alt="Keseimbangan Kerja dan Kehidupan"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Menjaga keseimbangan antara pekerjaan dan kehidupan pribadi adalah kunci untuk hidup yang sehat dan bahagia. Artikel ini memberikan beberapa tips praktis untuk membantu Anda mencapai keseimbangan yang diinginkan."
          )}

          {subTitleText("1. Tentukan Batas Waktu Kerja")}
          {renderDescriptionText(
            "Tetapkan batas waktu untuk pekerjaan Anda dan patuhi mereka. Ini membantu mencegah pekerjaan mengambil alih waktu yang seharusnya Anda habiskan bersama keluarga atau untuk diri sendiri."
          )}

          {subTitleText("2. Jadwalkan Waktu Istirahat")}
          {renderDescriptionText(
            "Sisipkan waktu istirahat di tengah hari kerja Anda. Istirahat singkat dapat membantu menyegarkan pikiran dan meningkatkan produktivitas ketika Anda kembali bekerja."
          )}

          {subTitleText("3. Prioritaskan Kesehatan Fisik")}
          {renderDescriptionText(
            "Jangan mengorbankan kesehatan fisik Anda demi pekerjaan. Selalu alokasikan waktu untuk berolahraga dan pastikan untuk mendapatkan cukup tidur setiap malam."
          )}

          {subTitleText("4. Tetap Terhubung dengan Keluarga")}
          {renderDescriptionText(
            "Luangkan waktu berkualitas dengan keluarga Anda. Pastikan untuk tidak membawa pekerjaan ke rumah secara berlebihan, dan berfokus pada interaksi yang bermakna dengan orang-orang tercinta."
          )}

          {subTitleText("5. Pelajari untuk Mengatakan 'Tidak'")}
          {renderDescriptionText(
            "Jangan ragu untuk menolak tugas tambahan jika itu dapat mengganggu keseimbangan Anda. Menetapkan batas dan belajar mengatakan 'tidak' dengan bijak adalah keterampilan yang penting."
          )}
        </div>

      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail7;
