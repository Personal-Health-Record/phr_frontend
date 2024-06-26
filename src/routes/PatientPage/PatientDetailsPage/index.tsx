import { useParams } from "react-router-dom";
import { useGetUserData } from "../../../helpers/userDataHelper";
import Header from "../../../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import CardOptionPatient from "../components/CardPatientDetail";
import CircleLoader from "../../../components/CircleLoader";

const ProfilePatientPage = () => {
  const { userData } = useGetUserData();
  const params = useParams();

  if (!userData) {
    return <CircleLoader />;
  }

  const patient = userData.find((user) => user.id === params.id)!;

  return (
    <div className="flex flex-col">
      <Header title="Profil Pasien" />

      <div className="flex flex-col py-3 px-4 gap-3 pt-6 ">
        <div className="self-center">
          <img
            src={patient.profilePicture}
            alt="patient"
            width={80}
            height={80}
          />
        </div>

        <p className="font-semibold text-mainGrey self-center">
          {patient.name}
        </p>

        <ProfileHeader age={patient.age.toString()} gender={patient.gender} />
        <CardOptionPatient
          path={"/profile/detail/" + patient.id}
          title="Profil Lengkap"
        />
        <CardOptionPatient path="/resume" title="Resume Medis Pasien" />
        <CardOptionPatient path="/rujukan" title="Rujukan Pasien" />
        <CardOptionPatient
          path={`/vaksinasi?userId=${patient.id}`}
          title="Vaksinasi Pasien"
        />
        <CardOptionPatient
          path="/screening"
          title="Skrining Kesehatan Pasien"
        />
        <CardOptionPatient
          path="/monitoring/list"
          title="Tracking Data Kesehatan"
        />
      </div>
    </div>
  );
};

export default ProfilePatientPage;
