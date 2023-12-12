import { useState } from "react";
import { dummyRujukanData } from "./constants";
import Header from "../HomePage/components/Header";
import SearchBar from "./components/SearchBar";
import JadwalRujukan from "./components/JadwalRujukan";
import RiwayatRujukan from "./components/RiwayatRujukan";
import { isLoggedInUserNewUser, useGetLoggedInUser } from "../../helpers/userDataHelper";
import CircleLoader from "../../components/CircleLoader";

const RujukanPage = () => {
  const [data, setData] = useState(dummyRujukanData);
  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setData(dummyRujukanData);
    }

    const filteredData = dummyRujukanData.filter((item) => {
      const locationMatch = item.location
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const referenceLocationMatch = item.referenceLocation
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const diagnoseMatch = item.diagnose
        .toLowerCase()
        .includes(keyword.toLowerCase());
      return locationMatch || referenceLocationMatch || diagnoseMatch;
    });
    setData(filteredData);
  };

  const { loggedInUser } = useGetLoggedInUser();

  if (!loggedInUser) {
    return <CircleLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header title="Rujukan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar onSearch={onSearch} />
        {
          !isLoggedInUserNewUser(loggedInUser) &&
          <>
            <JadwalRujukan />
            <RiwayatRujukan rujukanData={data} />
          </>
        }
      </div>
    </div>
  );
};

export default RujukanPage;
