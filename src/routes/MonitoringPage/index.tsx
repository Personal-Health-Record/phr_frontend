import Header from "../../components/Header";
import BottomNavbarDownloadShare from "../HomePage/components/BottomNavbarDownloadShare";
import CardHeightWeight from "./components/CardHeightWeight";
import CardKonsumsiMakananMonitoring from "./components/CardKonsumsiMakananMonitoring";
import HeaderMonitoring from "./components/HeaderMonitoring";
import TargetSection from "./components/TargetSection";

const MonitoringPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <HeaderMonitoring />
        <CardHeightWeight />
        <TargetSection />
        <CardKonsumsiMakananMonitoring />

        <BottomNavbarDownloadShare body="" link="" title="" />
      </div>
    </div>
  );
};

export default MonitoringPage;
