import { useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import CircleLoader from "../../components/CircleLoader";
import { useGetTenagaKesehatanList } from "../../helpers/tenagaKesehatanHelper";
import { logoutUser, useGetLoggedInUser } from "../../helpers/userDataHelper";
import ProfileHeader from "./components/profileHeader";
import ProfileOptionCard from "./components/profileOptionCard";
import NegativeModal from "../../components/NegativeModal";
import { useNavigate } from "react-router-dom";
import { useToaster } from "../../contexts/ToasterContext";

const ProfilePage = () => {
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const navigate = useNavigate();
  const { loggedInUser: user } = useGetLoggedInUser();
  const { listTenkes } = useGetTenagaKesehatanList();
  const { toggleDiv } = useToaster();

  if (!user || !listTenkes) {
    return <CircleLoader />;
  }

  const renderDoctorProfile = () => {
    const tenkes = listTenkes.find(
      (tenkes) => tenkes.userId === user.id)!;

    if (!tenkes) {
      toggleDiv("error", "Tenkes data not found");
      return <CircleLoader />;
    }

    return (
      <div>
        <hr />
        <ProfileOptionCard
          title="Profil Sayaa"
          path={"/profile/doctor/detail/"}
        />
        <ProfileOptionCard
          title="Ubah Password"
          path={"/profile/changepassword"}
        />
        <ProfileOptionCard
          title="Logout"
          onClick={() => {
            setShowLogOutModal(true);
          }}
        />
        <NegativeModal
          description="Apakah anda yakin ingin keluar?"
          onClose={() => setShowLogOutModal(false)}
          onSubmit={() => {
            navigate("/auth");
            logoutUser();
          }}
          show={showLogOutModal}
        />
      </div>
    );
  };

  const renderPatientProfile = () => {
    return (
      <div>
        <hr />
        <ProfileOptionCard
          title="Profil Saya"
          path={"/profile/detail/" + user.id}
        />
        <ProfileOptionCard title="Anggota Keluarga" path="/profile/family" />
        <ProfileOptionCard
          title="Asuransi Kesehatan"
          path="/profile/insurance"
        />
        <ProfileOptionCard
          title="Ubah Password"
          path={"/profile/changepassword"}
        />
        <ProfileOptionCard
          title="Logout"
          onClick={() => {
            setShowLogOutModal(true);
          }}
        />
        <NegativeModal
          description="Apakah anda yakin ingin keluar?"
          onClose={() => setShowLogOutModal(false)}
          onSubmit={() => {
            navigate("/auth");
            logoutUser();
          }}
          show={showLogOutModal}
        />
      </div>
    );
  };

  // TODO: adjust kalo ini doctor, call component lain, terutama detailnya
  // TODO: buat ubah password mechanism
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ProfileHeader user={user} />
        {user.role === "doctor"
          ? renderDoctorProfile()
          : renderPatientProfile()}
      </div>
      <BottomNavbar menuActive="Profil" />
    </div>
  );
};

export default ProfilePage;
