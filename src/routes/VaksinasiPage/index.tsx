import { useState } from "react";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import { User } from "../../helpers/constants";
import Header from "../HomePage/components/Header";
import CardPengguna from "./components/CardPengguna";
import VaksinasiList from "./components/VaksinasiList";
import Keterangan from "./components/Keterangan";
import CircleLoader from "../../components/CircleLoader";
import { useLocation } from "react-router-dom";

const VaksinasiPribadi = () => {
  const { loggedInUser, userData } = useGetLoggedInUser();
  const [user, setUser] = useState<User>();
  const location = useLocation();

  if (!loggedInUser || !userData) {
    return <CircleLoader />;
  }

  // get userId from query params
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  
  // if userId is provided in query params use that
  // else use loggedInUser
  if (userId) {
    const paramUser = userData.find((user) => user.id === userId); 
    if (paramUser && !user) {
      setUser(paramUser);
    }
  } else {
    if (loggedInUser && !user) {
      setUser(loggedInUser);
    }
  }

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-6">
        {
          /* Only patient have this user selection */
          !userId && (
            <CardPengguna user={user!} setUser={setUser} userData={userData} />
          )
        }

        <VaksinasiList user={user!} />
        <Keterangan />
      </div>
    </div>
  );
};

export default VaksinasiPribadi;
