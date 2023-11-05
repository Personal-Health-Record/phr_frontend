import { useState } from "react";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import { User } from "../../helpers/constants";
import Header from "../HomePage/components/Header";
import CardPengguna from "./components/CardPengguna";
import VaksinasiList from "./components/VaksinasiList";
import Keterangan from "./components/Keterangan";

const VaksinasiPribadi = () => {
  const { loggedInUser, userData } = useGetLoggedInUser();
  const [user, setUser] = useState<User>();

  if (!loggedInUser || !userData) {
    return <div> Loading... </div>;
  }

  // populate user if not exist
  if (loggedInUser && !user) {
    setUser(loggedInUser);
  }

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-6">
        <CardPengguna user={user!} setUser={setUser} userData={userData} />

        <VaksinasiList user={user!} />
        <Keterangan />
      </div>
    </div>
  );
};

export default VaksinasiPribadi;
