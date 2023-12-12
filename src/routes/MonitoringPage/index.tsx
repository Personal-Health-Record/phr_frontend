import Header from "../../components/Header";
import BottomNavbarDownloadShare from "../HomePage/components/BottomNavbarDownloadShare";
import CardHeightWeight from "./components/CardHeightWeight";
import CardKonsumsiMakananMonitoring from "./components/CardKonsumsiMakananMonitoring";
import HeaderMonitoring from "./components/HeaderMonitoring";
import TargetSection from "./components/TargetSection";

import { usePDF } from "react-to-pdf";

const MonitoringPage = () => {
  const { toPDF, targetRef } = usePDF({
    filename: `Monitoring.pdf`,
  });

  return (
    <div className="flex flex-col" ref={targetRef}>
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <HeaderMonitoring />
        <CardHeightWeight />
        <TargetSection />
        <CardKonsumsiMakananMonitoring />

        <BottomNavbarDownloadShare body="" link="" title="" toPDF={toPDF} />
      </div>
    </div>
  );
};

export default MonitoringPage;
