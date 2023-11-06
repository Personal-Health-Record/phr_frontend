import imageSearch from "../../../../assets/images/search.png";

type SearchProps = {
  onSearch: (keyword: string) => void;
};

const SearchBar = ({ onSearch }: SearchProps) => {
  return (
    <div className="relative">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari Rujukan"
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src={imageSearch}
        alt=""
        width={30}
        height={30}
        className="absolute top-2 right-3"
      />
    </div>
  );
};

export default SearchBar;
