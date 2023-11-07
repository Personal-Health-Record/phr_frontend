import imgSearch from "../../../../assets/images/search.png";

type SearchProps = {
  onSearch: (keyword: string) => void;
};

const SearchBar = ({ onSearch }: SearchProps) => {
  return (
    <div className="relative mt-4">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari Notifikasi"
        style={{
          fontSize: "15px",
        }}
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src={imgSearch}
        alt=""
        width={30}
        height={30}
        className="absolute top-2 right-3"
      />
    </div>
  );
};

export default SearchBar;
