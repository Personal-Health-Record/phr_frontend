import DashboardCard from "../DashboardCard";
import { dashboardKesehatan } from "./constants";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h3>Dashboard Kesehatan</h3>

      <div className="flex justify-between gap-2">
        {dashboardKesehatan.map((dashboard, index) => (
          <DashboardCard
            title={dashboard.title}
            unit={dashboard.unit}
            value={dashboard.value}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
