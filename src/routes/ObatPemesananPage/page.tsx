import Header from "../../components/Header";
import halodoc from "../../assets/images/pesan/halodoc.png";
import alodokter from "../../assets/images/pesan/alodokter.png";
import klikdokter from "../../assets/images/pesan/klikdokter-2.png";
import sehatq from "../../assets/images/pesan/sehatq.png";

const PemesananObatPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Kirim Pesan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <p className="text-mainGrey text-sm text-justify">
          Pemesanan obat dapat dilakukan dengan aplikasi telekonsultasi di luar
          aplikasi PHR.
        </p>

        <div className="flex flex-wrap justify-center">
          <img src={halodoc} alt="" width={160} height={160} />
          <img src={alodokter} alt="" width={160} height={160} />
          <img src={klikdokter} alt="" width={160} height={160} />
          <img src={sehatq} alt="" width={160} height={160} />
        </div>
      </div>
    </div>
  );
};

export default PemesananObatPage;
