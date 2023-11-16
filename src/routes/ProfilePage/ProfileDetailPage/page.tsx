import { useParams } from "react-router-dom";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import Header from "../../../components/Header";
import DetailInfoCard from "../components/DetailInfoCard";
import { formatDate } from "../../../helpers/dateHelper";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import imgEdit from "../../../assets/images/edit.png";
import CircleLoader from "../../../components/CircleLoader";

const ProfileDetail = () => {
  const { userData, loggedInUser } = useGetLoggedInUser();
  const params = useParams();

  if (!userData || !loggedInUser) {
    return <CircleLoader />;
  }

  const user = userData.find((user) => user.id === params.id)!;

  return (
    <div className="flex flex-col">
      <Header title="Profil Saya" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold">Informasi Umum</h3>
        <DetailInfoCard title={"Nama Lengkap"} data={user.name} />
        {user.nik && <DetailInfoCard title={"NIK"} data={user.nik} />}
        {user.dateOfBirth && (
          <DetailInfoCard
            title={"Tanggal Lahir"}
            data={formatDate(user.dateOfBirth)}
          />
        )}

        <DetailInfoCard title={"Usia"} data={user.age.toString()} />
        <DetailInfoCard title={"Jenis Kelamin"} data={user.gender} />
        {user.bloodType && (
          <DetailInfoCard title={"Golongan Darah"} data={user.bloodType} />
        )}
        {user.maritalStatus && (
          <DetailInfoCard
            title={"Status Pernikahan"}
            data={user.maritalStatus}
          />
        )}
        {user.email && <DetailInfoCard title={"Email"} data={user.email} />}
      </div>

      {loggedInUser.id === user.id && (
        <BottomNavbarOneButton
          path="/profile/edit"
          iconPath={imgEdit}
          text="Edit profile"
        />
      )}
    </div>
  );
};

export default ProfileDetail;
