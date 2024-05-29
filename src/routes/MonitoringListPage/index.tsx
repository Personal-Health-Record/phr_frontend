import Header from "../../components/Header";
import { dummyListTrackingKesehatanFaskes } from "../../helpers/constants";
import CardMonitoring from "./components/CardMonitoring";
import SearchBar from "./components/SearchBar";

const MonitoringListPage = () => {
  const onSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar onSearch={onSearch} />

        {dummyListTrackingKesehatanFaskes.map((dateMonitoring) => (
          <CardMonitoring date={dateMonitoring} />
        ))}
      </div>
    </div>
  );
};

export default MonitoringListPage;
