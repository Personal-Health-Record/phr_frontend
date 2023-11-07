import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import { dummyFaskes } from "../constants";
import CardFaskesDetail from "../components/CardFaskesDetail";
import Chip from "../components/Chip";
import MapsDetail from "../components/MapsDetail";
import shareImg from "../../../assets/images/share.png";

const FaskesDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const faskesDetail = dummyFaskes.find(
    (faskes) => faskes.id === parseInt(id || "0")
  );

  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>

        <div className="flex flex-col">
          <CardFaskesDetail
            title="Nama Faskes"
            data={faskesDetail?.name || ""}
          />
          <CardFaskesDetail
            title="Jenis Faskes"
            data={faskesDetail?.type || ""}
          />
          <CardFaskesDetail
            title="Nomor Telepon"
            data={faskesDetail?.phone || ""}
          />
          <CardFaskesDetail title="Alamat" data={faskesDetail?.address || ""} />
        </div>

        <h3 className="font-semibold">Layanan Poliklinik</h3>

        <div className="flex flex-wrap gap-3 border-b-2 pb-5">
          {faskesDetail?.service.map((poli, idx) => (
            <Chip text={poli} key={`poli-${idx}`} />
          ))}
        </div>

        <h3 className="font-semibold mt-2">Peta Lokasi</h3>

        <MapsDetail
          lat={faskesDetail?.lat || 0}
          lng={faskesDetail?.lang || 0}
        />

        <h3 className="font-semibold mt-4">Link Eksternal</h3>

        <div className="flex flex-col gap-4">
          <button className="flex items-center py-3 px-7 border rounded-3xl gap-2 w-full justify-center">
            <img src={shareImg} alt="" width={20} height={20} />
            <p className="text-mainBlue font-semibold">Pendaftaran Online</p>
          </button>
          <button className="flex items-center py-3 px-7 border rounded-3xl gap-2 w-full justify-center">
            <img src={shareImg} alt="" width={20} height={20} />
            <p className="text-mainBlue font-semibold">Link Website</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaskesDetail;
