import imageSearch from "../../../../assets/images/search.png";
interface Props {
  onChangeSearch: (val: string) => void;
}

const SearchBar = ({ onChangeSearch }: Props) => {
  return (
    <div className="relative w-full">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari fasilitas kesehatan"
        onChange={(e) => onChangeSearch(e.target.value)}
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
