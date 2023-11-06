import { useNavigate } from "react-router-dom";
import { Skrining } from "../../constants";
import { getSkriningById } from "../../../../helpers/skriningKesehatanHelper";

interface Props {
  date: string;
  type: string;
  location: string;
  id: number;
}

const RiwayatScreeningCard = ({ date, location, type, id }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const skriningData: Skrining | undefined | null = getSkriningById(id);

    if (skriningData?.skriningType === "Skrining COVID-19") {
      navigate(`/screening/covid/detail?id=${id}`);
    } else if (skriningData?.skriningType === "Skrining Kesehatan Mental") {
      navigate(`/screening/mental/detail?id=${id}`);
    } else if (
      skriningData?.skriningType === "Skrining Penyakit Tidak Menular"
    ) {
      navigate(`/screening/ptm/detail?id=${id}`);
    }
  };

  return (
    <div
      className="flex justify-between px-2 py-3 border-b-2 w-full"
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs text-mainGrey">{date}</p>
        <p className="text-sm text-lightGrey">{type}</p>
      </div>

      <p className="text-xs text-mainGrey text-right">{location}</p>
    </div>
  );
};

export default RiwayatScreeningCard;
