import { useState } from "react";
import Header from "../../components/Header";
import { dummyListTrackingKesehatanFaskes } from "../../helpers/constants";
import CardMonitoring from "./components/CardMonitoring";
import SearchBar from "./components/SearchBar";

const MonitoringListPage = () => {
  const [listTrackingData, setListTrackingData] = useState(
    dummyListTrackingKesehatanFaskes
  );

  const onSearch = (keyword: string) => {
    if (keyword === "") {
      setListTrackingData(dummyListTrackingKesehatanFaskes);
      return;
    }

    const filteredTrackingData = listTrackingData.filter((data) =>
      data.toLowerCase().includes(keyword.toLowerCase())
    );

    setListTrackingData(filteredTrackingData);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar onSearch={onSearch} />

        {listTrackingData.map((dateMonitoring) => (
          <CardMonitoring date={dateMonitoring} />
        ))}
      </div>
    </div>
  );
};

export default MonitoringListPage;
