import { useState } from "react";
import { useGetUserData } from "../../helpers/userDataHelper";
import { User } from "../../helpers/constants";
import Header from "../../components/Header";
import SearchBar from "../../components/Searchbar";
import CardPatient from "./components/CardPatient";
import CircleLoader from "../../components/CircleLoader";

const PatientPage = () => {
  const { userData } = useGetUserData();
  const [patientData, setPatientData] = useState<User[]>();

  if (!userData) {
    return <CircleLoader />;
  }

  if (!patientData) {
    setPatientData(userData.filter((user) => user.role === "patient"));
  }

  const handleSearch = (keyword: string) => {
    const newPatientData = userData!.filter(
      (user) =>
        user.role === "patient" &&
        user.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setPatientData(newPatientData);
  };

  return (
    <div className="flex flex-col">
      <Header title="Profil Pasien" />

      <div className="flex flex-col w-full px-4 py-2 gap-6">
        <SearchBar onSearch={handleSearch} placeHolder="Cari Pasien" />

        <div className="flex flex-col gap-5">
          {patientData &&
            patientData.map((patient, idx) => (
              <CardPatient
                name={patient.name}
                profilePicture={patient.profilePicture}
                id={patient.id}
                key={`patient-${idx}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
