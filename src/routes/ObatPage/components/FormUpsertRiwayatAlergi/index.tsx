import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiwayatAlergiObat } from "../../constants";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import {
  upsertRiwayatAlergiData,
  useGetRiwayatAlergiData,
} from "../../../../helpers/obatDataHelper";
import TextInput from "../../../../components/TextInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

const FormUpsertRiwayatAlergi = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<RiwayatAlergiObat>({
    id: "",
    name: "",
    userId: "",
  });

  const { loggedInUser } = useGetLoggedInUser();
  const { riwayatAlergiData } = useGetRiwayatAlergiData();
  const { toggleDiv } = useToaster();
  if (!loggedInUser || riwayatAlergiData === undefined) {
    return <CircleLoader />;
  }

  // set default state
  if (formState.userId === "") {
    const userRiwayatAlergi = riwayatAlergiData.filter(
      (riwayat) => riwayat.userId === loggedInUser.id
    );
    if (userRiwayatAlergi.length > 0) {
      // use existing data
      setFormState({
        id: userRiwayatAlergi[0].id,
        name: userRiwayatAlergi[0].name,
        userId: loggedInUser.id,
      });
    } else {
      // set default value
      setFormState({
        ...formState,
        id: (riwayatAlergiData.length + 1).toString(),
        userId: loggedInUser.id,
      });
    }

  }

  const handleOnSubmit = () => {
    const isValidated = validateForm();
    if (isValidated) {
      upsertRiwayatAlergiData(
        formState,
        riwayatAlergiData,
      );
      navigate("/obat/riwayat", { replace: true });
    }
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        toggleDiv("error", `Data ${key} harus diisi semua`);
        return false;
      }
    }

    return true;
  };

  return (
    <div className="flex flex-col gap-4">
      <TextInput
        label="Nama/Jenis Obat"
        onChange={(value) =>
          setFormState({
            ...formState,
            name: value,
          })
        }
      />

      <button
        className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6 mt-2 mx-4"
        onClick={handleOnSubmit}
      >
        Simpan
      </button>
    </div>
  );
};

export default FormUpsertRiwayatAlergi;
