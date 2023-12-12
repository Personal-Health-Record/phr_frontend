import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  titleText,
  referenceText,
  renderDescriptionText,
  subTitleText,
} from "../helper";

const NewsDetail10 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("18 Desember 2024")}</div>

        <div className="mt-1">
          {titleText("Manfaat Menulis Jurnal untuk Pertumbuhan Pribadi")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: ChatGPT")}
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/images/2023/03/big/img_64210c4625b557-10429169-63161105.jpeg"
            alt="Manfaat Menulis Jurnal"
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Menulis jurnal bukan hanya sekadar kegiatan menyenangkan, tetapi juga merupakan alat yang efektif untuk pertumbuhan pribadi. Artikel ini akan mengungkapkan manfaat positif yang dapat Anda dapatkan dengan menjalani kebiasaan menulis jurnal secara teratur."
          )}

          {subTitleText("1. Memproses Emosi dengan Lebih Baik")}
          {renderDescriptionText(
            "Menulis jurnal memungkinkan Anda untuk menyusun dan memproses emosi dengan lebih baik. Dengan mengekspresikan perasaan dalam kata-kata, Anda dapat mengurangi tingkat stres dan meningkatkan pemahaman terhadap diri sendiri."
          )}

          {subTitleText("2. Meningkatkan Keterampilan Penyelesaian Masalah")}
          {renderDescriptionText(
            "Ketika Anda mencatat tantangan atau masalah yang dihadapi, menulis jurnal dapat membantu Anda mengembangkan keterampilan penyelesaian masalah. Ini memberikan perspektif baru dan ide-ide untuk mengatasi hambatan yang mungkin dihadapi."
          )}

          {subTitleText("3. Merencanakan Tujuan dan Aspirasi")}
          {renderDescriptionText(
            "Jurnal juga dapat digunakan sebagai alat perencanaan. Dengan menetapkan tujuan dan merinci langkah-langkah untuk mencapainya, Anda dapat mengarahkan diri sendiri menuju pertumbuhan pribadi dan profesional."
          )}

          {subTitleText("4. Meningkatkan Kreativitas dan Introspeksi")}
          {renderDescriptionText(
            "Menulis jurnal memicu proses kreatif dan introspeksi. Ini memberikan waktu dan ruang untuk merenung, mengeksplorasi ide-ide, dan menemukan solusi untuk tantangan kreatif yang mungkin dihadapi."
          )}

          {subTitleText("5. Memantau Perkembangan Pribadi")}
          {renderDescriptionText(
            "Jurnal adalah alat efektif untuk melacak perkembangan pribadi Anda dari waktu ke waktu. Melihat kembali catatan-catatan lama dapat memberikan wawasan tentang perubahan, pencapaian, dan hambatan yang telah Anda hadapi."
          )}
        </div>
      </div>

      <BottomNavbar menuActive="Artikel" />
    </div>
  );
};

export default NewsDetail10;
