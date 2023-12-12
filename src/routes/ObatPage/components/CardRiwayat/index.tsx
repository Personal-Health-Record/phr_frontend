import CircleLoader from "../../../../components/CircleLoader";
import { isLoggedInUserNewUser, useGetLoggedInUser } from "../../../../helpers/userDataHelper";

const CardRiwayat = () => {
  const { loggedInUser } = useGetLoggedInUser();

  if (!loggedInUser) {
    return <CircleLoader />;
  }

  if (isLoggedInUserNewUser(loggedInUser)) {
    return (<div></div>);
  }

  return (
    <div className="flex flex-col shadow-md py-3 px-5 rounded-lg mb-3 gap-2">
      <p className="text-sm">Riwayat Alergi Obat</p>
      <p className="text-sm text-mainGrey">Antibiotik</p>
    </div>
  );
};

export default CardRiwayat;
