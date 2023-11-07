import { useNavigate } from "react-router-dom";
import { useGetUserPhysique } from "../../../../helpers/dataTrackerHelper";
import Chip from "../Chip";
import { getDateTrackerKesehatan } from "../../../../helpers/dateHelper";

const HeaderMonitoring = () => {
  const navigate = useNavigate();
  const { userPhysique } = useGetUserPhysique();

  const handleClickDashboard = () => {
    navigate("/monitoring/data-tracking");
  };

  return (
    <div className="flex items-center justify-between">
      <Chip text={getDateTrackerKesehatan(userPhysique?.latestUpdate || "")} />
      <p className="text-lightGrey text-sm" onClick={handleClickDashboard}>
        Lihat Dashboard
      </p>
    </div>
  );
};

export default HeaderMonitoring;
