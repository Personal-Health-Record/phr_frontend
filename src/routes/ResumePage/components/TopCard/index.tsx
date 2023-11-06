import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import resumeIcon from "../../../../assets/images/resume-icon.png";
import arrowRight from "../../../../assets/images/arrow-right.png";

const TopCard = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useGetLoggedInUser();

  const isDoctor = useMemo(() => {
    return loggedInUser?.role === "doctor";
  }, [loggedInUser?.role]);

  const handleOnClick = () => {
    navigate("/resume/riwayat");
  };

  return (
    <div className="flex items-center justify-between" onClick={handleOnClick}>
      <div className="flex items-center gap-3 font-semibold text-mainGrey">
        <img src={resumeIcon} alt="" width={50} height={50} />
        {isDoctor ? <p>Riwayat Medis Pasien</p> : <p>Riwayat Medis Anda</p>}
      </div>
      <img src={arrowRight} alt="" width={30} height={30} />
    </div>
  );
};

export default TopCard;
