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
        <div className="mt-4">{dateText("24 April 2023")}</div>

        <div className="mt-1">
          {titleText("6 Bahaya Cium Bayi Sembarangan yang Jarang Diketahui")}
        </div>

        <div className="my-1">
          {referenceText("Sumber: Halodoc")}
          {/* https://www.halodoc.com/artikel/6-bahaya-cium-bayi-sembarangan-yang-jarang-diketahui */}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={
              "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/04/24045320/X-Bahaya-Cium-Bayi-Sembarangan-yang-Jarang-Diketahui.jpg"
            }
            alt=""
            width={300}
            height={200}
          />
        </div>

        <div className="mt-4 pb-20">
          {renderDescriptionText(
            "Ketika kumpul keluarga saat Lebaran, pasti ada beberapa sepupu atau keponakan yang masih bayi. Melihat mereka yang menggemaskan ini, rasanya ingin sekali mengelus atau mencium mereka. "
          )}
          {renderDescriptionText(
            "Meskipun kelihatannya sederhana, ternyata mencium bayi dapat membahayakan kondisi kesehatan mereka lho. Sebab, kulit bayi yang tipis dan sistem kekebalan tubuh mereka yang masih lemah, membuat mereka lebih sensitif terhadap sentuhan, termasuk juga ciuman. Oleh karena itu yuk ketahui apa saja, sih, bahaya mencium bayi. "
          )}
          {subTitleText("1. Infeksi Virus RSV")}
          {renderDescriptionText(
            "Respiratory Syncytial Virus (RSV) adalah virus yang menginfeksi paru-paru atau saluran pernapasan. Virus ini sangat menular dan umumnya menyerang anak-anak atau bayi sehingga membuat mereka kesulitan bernapas."
          )}
          {renderDescriptionText(
            "Pada anak yang lebih besar usianya, gejalanya bisa ringan dan mirip seperti flu biasa, akan tetapi pada bayi, kondisi ini bisa menjadi serius dan berpotensi fatal. RSV dapat menyebabkan masalah pernapasan yang parah dan dapat mempengaruhi jantung dan otak bayi, terutama bagi bayi prematur yang cenderung memiliki sistem kekebalan tubuh yang lemah."
          )}
          {subTitleText("2. Herpes Simplex Tipe 1")}
          {renderDescriptionText(
            "Disebut juga sebagai luka dingin atau herpes oral, penyakit ini mungkin yang paling berbahaya yang terjadi pada bayi, akibat dicium oleh orang lain. Penyakit ini terjadi karena virus herpes simplex tipe 1 (HSV 1) ini, dapat ditularkan melalui kecupan, bahkan hanya kecupan pada tangan saja. Awalnya, luka lecet akan terbentuk di sekitar bibir dan mulut, kemudian menyebar ke bagian wajah lainnya seperti hidung, pipi, dan dagu."
          )}
          {renderDescriptionText(
            "Tak hanya itu, jika tidak segera ditangani, herpes pada bayi juga dapat menyebabkan peradangan otak. Ingat, jika virus ini sudah memasuki tubuh, akan bertahan seumur hidup hingga bayi dewasa. Jadi, jaga bayi agar tidak dicium oleh sembarangan orang atau mereka yang didiagnosis herpes tipe 1."
          )}
          {subTitleText("3. Penyakit Tangan, Kaki, dan Mulut (PTKM)")}
          {renderDescriptionText(
            "Penyakit ini umumnya terjadi pada anak-anak di bawah usia 10 tahun. Penularannya dapat melalui kontak fisik seperti berpelukan atau mencium bayi. Demam, sariawan, bisul, dan ruam kulit di sekitar mulut, tangan, dan kaki, merupakan tanda anak tertular penyakit ini. Meski sebenarnya tidak fatal, PTKM dapat menyebabkan masalah pada bayi yang memiliki sistem kekebalan tubuh yang lebih lemah."
          )}
          {subTitleText("4. Alergi")}
          {renderDescriptionText(
            "Mencium bayi ternyata dapat memicu alergi. Orang dewasa biasanya menggunakan produk perawatan kulit atau produk kosmetik yang mengandung bahan kimia. Jika bayi terpapar bahan kimia tersebut maka dapat menyebabkan iritasi kulit atau reaksi alergi. "
          )}
          {renderDescriptionText(
            "Selain itu, orang yang baru saja mengonsumsi makanan seperti produk susu, kacang-kacangan, atau makanan alergen pada umumnya, jika mereka langsung mencium bayi, bayi akan terpapar oleh zat alergen tersebut dan berisiko menimbulkan reaksi alergi."
          )}
          {subTitleText("5. Gigi Berlubang")}
          {renderDescriptionText(
            "Penyebab utama gigi berlubang adalah kurang menjaga kebersihan gigi dan mulut. Namun, faktanya yang mungkin jarang kamu dengar, gigi berlubang pada bayi dapat terjadi karena bakteri streptococcus mutans. Nah, bakteri ini berada dalam air liur dan bisa ditularkan ke anak melalui ciuman, berbagi makanan dengan anak, atau meniup makanan anak."
          )}
          {subTitleText("6. Sistem Kekebalan Tubuh Melemah")}
          {renderDescriptionText(
            "Bayi paling rentan terhadap penyakit selama beberapa bulan awal ketika bakteri usus mereka masih dalam tahap perkembangan. Oleh karena itu, setiap anak atau orang dewasa yang ingin bersentuhan dengan bayi harus memastikan bahwa tangan mereka benar-benar bersih dan tidak memiliki tanda-tanda penyakit menular."
          )}
          {renderDescriptionText(
            "Biasanya orang dewasa atau anak-anak tidak menyadari penyakit yang mereka bawa, lalu mereka menularkan penyakit pada bayi dengan mencium bayi. Jika ini terjadi, bayi harus melawan kuman dan virus dengan kekebalan tubuh mereka yang masih lemah, dan akibatnya bayi menjadi mudah sekali jatuh sakit."
          )}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail8;
