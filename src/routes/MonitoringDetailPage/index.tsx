import Header from "../../components/Header";
import BarChartSection from "../MonitoringPage/components/BarChartSection";
import CardKonsumsiMakanan from "../MonitoringPage/components/CardKonsumsiMakanan";

const MonitoringDetailPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="p-3">
        <p className="text-xs text-mainGrey">Tanggal Tracking Data Kesehatan</p>

        <div className="flex border-b-2 py-2 items-center justify-between mb-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-lightGrey">
              11 April 2024 - 14 April 2024
            </p>
          </div>
        </div>

        <BarChartSection
          activeIdx={1}
          startDate={new Date()}
          endDate={new Date()}
        />

        <CardKonsumsiMakanan startDate={new Date()} endDate={new Date()} />
      </div>
    </div>
  );
};

export default MonitoringDetailPage;
