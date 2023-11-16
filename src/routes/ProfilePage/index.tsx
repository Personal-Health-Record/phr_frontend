import BottomNavbar from "../../components/BottomNavbar";
import CircleLoader from "../../components/CircleLoader";
import { getTenkesByUserId } from "../../helpers/tenagaKesehatanHelper";
import { logoutUser, useGetLoggedInUser } from "../../helpers/userDataHelper";
import ProfileHeader from "./components/profileHeader";
import ProfileOptionCard from "./components/profileOptionCard";

const ProfilePage = () => {
  const { loggedInUser: user } = useGetLoggedInUser();

  if (!user) {
    return <CircleLoader />;
  }

  const renderDoctorProfile = () => {
    const tenkes = getTenkesByUserId(user.id);
    if (!tenkes) {
      return <CircleLoader />;
    }

    return (
      <div>
        <hr />
        <ProfileOptionCard
          title="Profil Saya"
          path={`/tenaga/profile?sip=${tenkes?.sip}`}
        />
        <ProfileOptionCard
          title="Ubah Password"
          path={"/profile/changepassword"}
        />
        <ProfileOptionCard
          title="Logout"
          path="/auth"
          onClick={() => {
            logoutUser();
          }}
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
          path="/auth"
          onClick={() => {
            logoutUser();
          }}
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
      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;
