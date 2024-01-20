import { useParams } from "react-router-dom";
import { dummyVaksinasiData } from "../VaksinasiPage/constants";
import { useGetUserData } from "../../helpers/userDataHelper";
import Header from "../HomePage/components/Header";
import CardDetails from "./components/CardDetails";
import { formatDate } from "../../helpers/dateHelper";
import CardVaksin from "./components/CardVaksin";
import BottomNavbarDownloadShare from "../HomePage/components/BottomNavbarDownloadShare";
import CircleLoader from "../../components/CircleLoader";
import { usePDF } from "react-to-pdf";

const VaksinasiDetails = () => {
  const params = useParams();
  const vaksin = dummyVaksinasiData.find(
    (data) => data.id === (params.id as string)
  )!;

  const { toPDF, targetRef } = usePDF({
    filename: `Vaksinasi - ${vaksin.type}.pdf`,
  });

  const { userData } = useGetUserData();
  if (!userData) {
    return <CircleLoader />;
  }

  const user = userData.find((data) => data.id === vaksin.userId)!;

  return (
    <div className="flex flex-col" ref={targetRef}>
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>

        <div>
          <CardDetails
            data={formatDate(vaksin.date)}
            title={"Tanggal Vaksinasi"}
          />
          <CardDetails data={user.name} title={"Nama Pasien"} />
          <CardDetails data={vaksin.location} title={"Lokasi Vaksinasi"} />
          <CardDetails
            data={vaksin.detailType ?? vaksin.type}
            title={"Jenis Vaksin"}
          />
          <CardVaksin />
        </div>
      </div>

      <BottomNavbarDownloadShare
        title="Vaksinasi"
        body={`Silahkan check vaksinasi ${user.name} di ${
          vaksin.detailType ?? vaksin.type
        }}`}
        link={`/vaksinasi`}
        toPDF={toPDF}
      />
    </div>
  );
};

export default VaksinasiDetails;
