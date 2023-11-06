import { useNavigate } from "react-router-dom";

const ButtonTambah = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/obat/tambah");
  };

  return (
    <button
      className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue mt-5"
      onClick={handleOnClick}
    >
      + Tambahkan Pengingat
    </button>
  );
};

export default ButtonTambah;
