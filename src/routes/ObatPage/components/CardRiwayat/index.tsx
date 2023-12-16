import { useNavigate } from "react-router-dom";
import CircleLoader from "../../../../components/CircleLoader";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import { RiwayatAlergiObat } from "../../constants";

type Props = {
  data: RiwayatAlergiObat;
}

const CardRiwayat = ({ data }: Props) => {
  const { loggedInUser } = useGetLoggedInUser();
  const navigate = useNavigate();

  if (!loggedInUser) {
    return <CircleLoader />;
  }

  return (
    <div className="flex flex-col shadow-md py-3 px-5 rounded-lg mb-3 gap-2"
      onClick={() => {
        navigate("/obat/riwayat/tambah");
      }}>
      <p className="text-sm">Riwayat Alergi Obat</p>
      <p className="text-sm text-mainGrey">{data.name}</p>
    </div>
  );
};

export default CardRiwayat;
