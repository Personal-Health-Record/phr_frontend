import { useNavigate } from "react-router-dom";
import arrowRightImg from "../../../../assets/images/arrow-right.png";
import menuDoctorImg from "../../../../assets/images/menuDoctor.png";

const DoctorMenu = () => {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    navigate("/patient");
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <h3 className="font-semibold text-mainGrey">Menu Utama</h3>
      <div className="flex gap-3">
        <img src={menuDoctorImg} alt="menu" width={50} height={50} />
        <div
          className="flex justify-between items-center w-full border-b-2"
          onClick={handleClickMenu}
        >
          <p className="text-xs">Profil Pasien</p>
          <div>
            <img src={arrowRightImg} alt="" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMenu;
