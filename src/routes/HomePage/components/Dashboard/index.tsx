import { useGetAktifitasFisik } from "../../../../helpers/aktifitasFisikHelper";
import { useGetTekananDarah } from "../../../../helpers/tekananDarahHelpers";
import DashboardCard from "../DashboardCard";
import { dashboardKesehatan } from "./constants";

const Dashboard = () => {
  const { aktifitasFisik } = useGetAktifitasFisik();
  const { tekananDarah } = useGetTekananDarah();

  const totalDuration =
    aktifitasFisik?.reduce((acc, current) => {
      return acc + current.duration;
    }, 0) || 0;

  return (
    <div className="flex flex-col p-4 gap-2">
      <h3>Dashboard Kesehatan</h3>

      <div className="flex justify-between gap-2">
        <DashboardCard
          title="Aktifitas Fisik"
          unit="menit"
          value={totalDuration.toString()}
        />

        <DashboardCard title="jam Tidur" unit="jam" value="8" />

        <DashboardCard
          title="Tekanan darah"
          unit="mmHg"
          value={`${tekananDarah?.systole}/${tekananDarah?.diastole}`}
        />
      </div>
    </div>
  );
};

export default Dashboard;
