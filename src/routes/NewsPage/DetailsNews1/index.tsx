import BottomNavbar from "../../../components/BottomNavbar";
import Header from "../../../components/Header";
import {
  dateText,
  referenceText,
  renderDescriptionText,
  titleText,
} from "../helper";

const NewsDetail1 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <div className="mt-4">{dateText("23 April 2021")}</div>

        <div className="mt-1">
          {titleText("Berat Badan Ideal Bantu Cegah Timbulnya Diabetes")}
        </div>

        <div className="my-1">{referenceText("Sumber: P2PTM Kemenkes RI")}</div>

        <div className="flex justify-center items-center">
          <img
            src={
              "https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6"
            }
            alt=""
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Diabetes Mellitus (DM) merupakan salah satu penyakit kronis penyebab kematian tertinggi di Indonesia. Bahkan jumlah angka kesakitannya terus meningkat. Data Riskesdas 2018 menunjukkan prevalensi diabetes yakni sebesar 8,5%, meningkat dibandingkan Riskesdas 2013 yaitu sebesar 6,9%."
          )}
          {renderDescriptionText(
            "Ketua Endokrinologi Indonesia (PERKENI), Prof. DR. dr. Ketut Suastika, SpPD-KEMD mengatakan salah satu penyebab timbulnya penyakit diabetes adalah obesitas yang tidak segera ditangani. Pada pasien prediabetes, ditandai dengan gula darah yang naik, Gula Darah Puasa berkisar 100-125 sementara Gula Darah Setelah Makan yakni 140<200."
          )}
          {renderDescriptionText(
            "“Kalau kondisi ini didiamkan, maka cepat atau lambat dia akan jatuh ke diabetes,” katanya dalam temu media Hari Diabetes Nasional 2021. "
          )}
          {renderDescriptionText(
            "Pihaknya menekankan bahwa upaya pencegahan primer harus dilakukan secepatnya sejak prediabetes bahkan diabetes agar tidak menimbulkan masalah kesehatan lainnya seperti komplikasi jantung. Menurutnya, cara ini jauh lebih efisien dan efektif untuk menangani pasien daripada saat mereka sudah jatuh sakit. "
          )}
          {renderDescriptionText(
            "Salah satu upaya pencegahan primer adalah dengan mencapai berat badan ideal. Dalam salah satu studi menyebutkan dengan penurunan BB sekitar 6,5% setelah 4 minggu diet rendah kalori hasilnya tekanan darah, gula darah dan kolesterol turun. "
          )}
          {renderDescriptionText(
            "“Diabetes masalah besar di Indonesia. Yang paling penting adalah mengelola pola hidup, jangan lupa rutin melakukan aktivitas fisik, jaga pola makan dan melakukan pemeriksaan dini,” tuturnya. "
          )}
          {renderDescriptionText(
            "Ancaman diabetes tidak hanya dihadapi oleh kelompok usia dewasa, tapi penyakit ini juga dapat mengancam anak-anak. "
          )}
          {renderDescriptionText(
            "Mewakili Ikatan Dokter Anak Indonesia (IDAI) Dr. Muhammad Faizi, Sp.A(K) menyebutkan prevalensi Diabetes Melitus pada anak di Indonesia jumlahnya terus meningkat, didominasi remaja berusia 10-12 tahun serta anak berusia 5-6 tahun. "
          )}
          {renderDescriptionText(
            "“Populasi anak-anak diabetes itu banyak di Indonesia Bagian Barat, yang Timur sedikit,” katanya. "
          )}
          {renderDescriptionText(
            "Agar kadar gula darah terkontrol, dr. Faizi menjabarkan manajemen pada anak dengan diabetes merujuk pada 5 pilar diantaranya suntikan insulin, monitoring kadar gula darah, pemberian nutrisi, aktivitas fisik serta edukasi seumur hidup. Namun demikian, yang menjadi tangan besar yang dihadapi dalam pengendalian Diabetes di Indonesia adalah pasien sering kali terlambat mengetahui penyakit DM. Sehingga, sering ditemukan pada tahap lanjut atau sudah disertai dengan komplikasi, seperti serangan jantung dan stroke, infeksi kaki yang berat yang dapat mengakibatkan kecacatan sampai kematian dini. “Masalah kita adalah awareness kita tentang Diabetes Militus tipe 1, sehingga banyak pasien-pasien yang datang terlambat,” ucapnya. Agar kadar gula darah terkontrol, dr. Faizi menjabarkan manajemen Diabetes Militus dengan merujuk pada 5 pilar diantaranya suntikan insulin, monitoring kadar gula darah 6 kali sehari, asupan nutrisi, aktivitas fisik serta edukasi seumur hidup. "
          )}
          {renderDescriptionText(
            "Kepala Biro Komunikasi dan Pelayanan Masyarakat(drg. Widyawati, MKM)"
          )}
        </div>
      </div>

      <BottomNavbar menuActive="Artikel" />
    </div>
  );
};

export default NewsDetail1;
