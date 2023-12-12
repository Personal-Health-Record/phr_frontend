import { useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";

import { dummyRujukanData } from "../constants";
import Header from "../../HomePage/components/Header";
import CardRujukanDetail from "../components/CardRujukanDetail";
import { formatDate } from "../../../helpers/dateHelper";
import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";

const RujukanDetails = () => {
  const params = useParams();
  const rujukan = dummyRujukanData.find(
    (data) => data.id === parseInt(params.id as string)
  )!;

  const { toPDF, targetRef } = usePDF({
    filename: `Rujukan Detail - ${rujukan.patientName}.pdf`,
  });

  return (
    <div className="flex flex-col" ref={targetRef}>
      <Header title="Rujukan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-20">
        <h3 className="font-semibold">Informasi Umum</h3>
        <CardRujukanDetail
          title={"No Rujukan"}
          data={rujukan.referenceNumber}
        />
        <CardRujukanDetail
          title={"Tanggal Rujukan"}
          data={formatDate(rujukan.date)}
        />
        <CardRujukanDetail title={"NIK Pasien"} data={rujukan.nik} />
        <CardRujukanDetail title={"Jenis Pasien"} data={rujukan.patientType} />
        <CardRujukanDetail title={"Nama Pasien"} data={rujukan.patientName} />
        <CardRujukanDetail
          title={"Nama Tenaga Medis"}
          data={rujukan.doctorName}
        />
        <CardRujukanDetail
          title={"Fakses Perujuk"}
          data={rujukan.referenceLocation}
        />
        <CardRujukanDetail title={"Faskes Rujukan"} data={rujukan.location} />
        <CardRujukanDetail title={"Nama Poli"} data={rujukan.polyName} />
        <CardRujukanDetail title={"Diagnosis"} data={rujukan.diagnose} />
        <CardRujukanDetail
          title={"Obat yang diberikan"}
          data={rujukan.medicine}
        />
        <CardRujukanDetail
          title={"Tindakan yang telah diberikan"}
          data={rujukan.actionsTaken}
        />
        <CardRujukanDetail
          title={"alasan Rujukan"}
          data={rujukan.referenceReason}
        />
      </div>
      <BottomNavbarDownloadShare
        title="Rujukan"
        body={`Silahkan check rujukan ${rujukan.patientName} di ${rujukan.location}`}
        link={`/rujukan/details/${rujukan.id}`}
        toPDF={toPDF}
      />
    </div>
  );
};

export default RujukanDetails;
