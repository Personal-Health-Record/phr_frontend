import { useNavigate } from "react-router-dom";
import { User } from "../../../../helpers/constants";
import {
  TIPE_VAKSINASI_ANAK,
  TIPE_VAKSINASI_DEWASA,
  dummyVaksinasiData,
} from "../../constants";
import VaksinasiCard from "../VaksinasiCard";

type VaksinasiProps = {
  user: User;
};

const VaksinasiList = ({ user }: VaksinasiProps) => {
  const tipeVaksin =
    user.relation === "Anak" ? TIPE_VAKSINASI_ANAK : TIPE_VAKSINASI_DEWASA;
  const userVaksinasi = dummyVaksinasiData.filter(
    (item) => item.userId === user.id
  );
  const navigate = useNavigate();

  const handleClick = (vaksinasiType: string) => {
    if (!isComplete(vaksinasiType)) {
      return;
    }

    navigate(`/vaksinasi/history?userId=${user.id}&type=${vaksinasiType}`);
  };

  const isComplete = (vaksinasiType: string) => {
    for (let i = 0; i < userVaksinasi.length; i++) {
      const vaksinasi = userVaksinasi[i];
      if (vaksinasi.type.includes(vaksinasiType)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-4 border-b-2 pb-4">
      <h3 className="font-semibold">Jenis Vaksinasi</h3>

      <div className="grid grid-cols-3 gap-3">
        {Object.values(tipeVaksin).map((vaksinasi, index) => (
          <VaksinasiCard
            isComplete={isComplete(vaksinasi)}
            title={vaksinasi}
            key={index}
            handleClick={() => handleClick(vaksinasi)}
          />
        ))}
      </div>
    </div>
  );
};

export default VaksinasiList;
