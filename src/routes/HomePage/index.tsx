import { useMemo } from "react";
import BottomNavbar from "./components/BottomNavbar";
import Dashboard from "./components/Dashboard";
import HeaderHome from "./components/HeaderHome";
import MainMenu from "./components/MainMenu";
import Pengingat from "./components/Pengingat";
import BottomNavbarDoctor from "./components/BottomNavbarDoctor";
import HomeListPatient from "./components/HomeListPatient";
import DoctorMenu from "./components/DoctorMenu";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";

const HomePage = () => {
  const { loggedInUser } = useGetLoggedInUser();

  const isDoctor = useMemo(() => {
    return loggedInUser?.role === "doctor";
  }, [loggedInUser?.role]);

  return (
    <main className="flex flex-col min-h-screen ">
      {isDoctor ? (
        <>
          <HeaderHome />
          <HomeListPatient />
          <DoctorMenu />
          <BottomNavbarDoctor />
        </>
      ) : (
        <>
          <HeaderHome />
          <Dashboard />
          <Pengingat />
          <MainMenu />
          <BottomNavbar menuActive="Beranda" />
        </>
      )}
    </main>
  );
};

export default HomePage;
