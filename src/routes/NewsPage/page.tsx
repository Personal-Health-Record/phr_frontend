import { useState } from "react";
import { dummyNewsData } from "./constants";
import Header from "../../components/Header";
import SearchBar from "./components/SearchBar";
import NewsTag from "./components/NewsTag";
import NewsCard from "./components/NewsCard";
import BottomNavbar from "../../components/BottomNavbar";

const News = () => {
  const [data, setData] = useState(dummyNewsData);
  const [tagState, setTagState] = useState("semua");
  const [keywordState, setKeywordState] = useState("");

  const setTag = (tag: string) => {
    const filteredData = getFilteredData(keywordState, tag);
    setData(filteredData);
    setTagState(tag);
  };

  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setData(dummyNewsData);
    }

    const filteredData = getFilteredData(keyword, tagState);
    setData(filteredData);
    setKeywordState(keyword);
  };

  const getFilteredData = (keyword: string, tag: string) => {
    const filteredData = dummyNewsData.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const descriptionPlaceholderMatch = item.descriptionPlaceholder
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const tagMatch = tag !== "semua" ? item.tags.includes(tag) : true;
      return tagMatch && (titleMatch || descriptionPlaceholderMatch);
    });
    return filteredData;
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <SearchBar onSearch={onSearch} />

        <div className="flex flex-wrap mt-4 px-2 gap-2">
          <NewsTag
            tagName="semua"
            isActive={tagState === "semua" ? true : false}
            handleClick={() => {
              setTag("semua");
            }}
          />
          <NewsTag
            tagName="tips kesehatan"
            isActive={tagState === "tips kesehatan" ? true : false}
            handleClick={() => {
              setTag("tips kesehatan");
            }}
          />
          <NewsTag
            tagName="penyakit kronis"
            isActive={tagState === "penyakit kronis" ? true : false}
            handleClick={() => {
              setTag("penyakit kronis");
            }}
          />
        </div>

        <div className="mt-4">
          {data.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.descriptionPlaceholder}
              imageUrl={news.imageUrl}
              route={news.route}
            />
          ))}
        </div>
      </div>

      <BottomNavbar menuActive="Artikel" />
    </div>
  );
};

export default News;
