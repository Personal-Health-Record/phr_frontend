import { useState } from "react";
import Header from "../../../components/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TabHeader from "../components/TabHeader";
import CardSelectDate from "../components/CardSelectDate";
import BarChartSection from "../components/BarChartSection";
import BottomNavbarDownloadShare from "../../HomePage/components/BottomNavbarDownloadShare";
import CardKonsumsiMakanan from "../components/CardKonsumsiMakanan";
import CardAktifitasFisik from "../components/CardAktifitasFisik";
import CardTekananDarah from "../components/CardTekananDarah";
import CardMakananBulanan from "../components/CardMakananBulanan";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataTracking = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(1);

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />
      <TabHeader activeIdx={activeTabIdx} handleClick={setActiveTabIdx} />

      <div className="flex flex-col w-full px-4 pt-4 gap-2 mb-32">
        <CardSelectDate />
        {activeTabIdx === 1 && (
          <>
            <BarChartSection activeIdx={activeTabIdx} />
            <CardKonsumsiMakanan />
          </>
        )}
        {activeTabIdx === 2 && (
          <>
            <CardAktifitasFisik />
            <CardTekananDarah />
            <CardMakananBulanan />
          </>
        )}
      </div>

      <BottomNavbarDownloadShare body="" link="" title="" />
    </div>
  );
};

export default DataTracking;
