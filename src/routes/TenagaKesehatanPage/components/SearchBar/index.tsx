import imageSearch from "../../../../assets/images/search.png";

interface Props {
  onSearch: (name: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  return (
    <div className="relative">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari tenaga kesehatan"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
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
