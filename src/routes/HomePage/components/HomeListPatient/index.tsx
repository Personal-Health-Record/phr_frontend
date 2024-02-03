import { dummyDataPatient } from "./contants";
import CardPatient from "./CardPatient";

const HomeListPatient = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h3 className="font-semibold text-mainGrey">
        Pasien yang Perlu ditangani
      </h3>

      <div className="flex overflow-x-auto gap-3  py-1">
        {dummyDataPatient.map((patient, idx) => (
          <CardPatient
            name={patient.name}
            profileIcon={patient.profileIcon}
            key={`patient-${idx}`}
            idPatient={patient.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeListPatient;
