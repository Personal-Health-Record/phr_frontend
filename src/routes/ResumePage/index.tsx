import { useState } from "react";
import { dummyResumeData } from "./constants";
import Header from "../HomePage/components/Header";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";
import CardResume from "./components/CardResume";
import CircleLoader from "../../components/CircleLoader";
import { isLoggedInUserNewUser, useGetLoggedInUser } from "../../helpers/userDataHelper";

const ResumePage = () => {
  const [data, setData] = useState(dummyResumeData);

  const { loggedInUser } = useGetLoggedInUser();

  if (!loggedInUser) {
    return <CircleLoader />;
  }

  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setData(dummyResumeData);
    }

    const filteredData = dummyResumeData.filter((item) => {
      return item.location.toLowerCase().includes(keyword.toLowerCase());
    });
    setData(filteredData);
  };

  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar onSearch={onSearch} />
        <TopCard />
        {
          !isLoggedInUserNewUser(loggedInUser) &&
          data?.map((resume, index) => (
            <CardResume resume={resume} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ResumePage;
