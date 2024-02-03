import search from "../../assets/images/search.png";

type SearchProps = {
  onSearch: (keyword: string) => void;
  placeHolder: string;
};

const SearchBar = ({ onSearch, placeHolder }: SearchProps) => {
  return (
    <div className="relative mt-4 px-4">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder={placeHolder}
        style={{
          fontSize: "15px",
        }}
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src={search}
        alt=""
        width={30}
        height={30}
        className="absolute top-2 right-3 mr-4"
      />
    </div>
  );
};

export default SearchBar;
