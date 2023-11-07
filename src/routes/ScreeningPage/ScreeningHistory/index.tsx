import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";
import Header from "../../HomePage/components/Header";
import CardHistory from "../components/HistoryCard";
import { dataHistory } from "../constants";

const ScreeningHistory = () => {
  return (
    <div className="flex flex-col">
      <Header title="Riwayat Skrining Kesehatan" />

      <div className="flex flex-col py-5 px-4">
        <h3 className="font-semibold text-mainGrey ">Informasi Umum</h3>

        {dataHistory.map((history, index) => (
          <CardHistory key={index} data={history.data} title={history.title} />
        ))}
      </div>

      <BottomNavbarDownloadShare
        title="Rujukan"
        body={`Silahkan check riwayat skrining`}
        link={`/screening/history/`}
      />
    </div>
  );
};

export default ScreeningHistory;
