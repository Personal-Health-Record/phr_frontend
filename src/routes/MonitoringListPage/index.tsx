import Header from "../../components/Header";
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
        <CardMonitoring date="11 April - 17 April 2024" />
        <CardMonitoring date="11 April - 17 April 2024" />
        <CardMonitoring date="11 April - 17 April 2024" />
      </div>
    </div>
  );
};

export default MonitoringListPage;
