import Header from "../../../components/Header";

const MonitoringDashboard = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">
          Dashboard Kesehatan
        </h3>
      </div>
    </div>
  );
};

export default MonitoringDashboard;
