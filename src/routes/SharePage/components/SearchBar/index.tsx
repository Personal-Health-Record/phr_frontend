import searchImage from "../../../../assets/images/search.png";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari tenaga kesehatan"
      />
      <img
        src={searchImage}
        alt=""
        width={30}
        height={30}
        className="absolute top-2 right-3"
      />
    </div>
  );
};

export default SearchBar;
