import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import {
  TenagaKesehatanUser,
  getTenkesByUserId,
  updateTenkesData,
} from "../../../../helpers/tenagaKesehatanHelper";
import TextInput from "../../../HomePage/components/TextInput";
import CircleLoader from "../../../../components/CircleLoader";

export type EditProfileFormAttributes = {
  specialist: string;
  yoe: number;
  sip: number;
  almamater: string;
};

const EditProfileForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<EditProfileFormAttributes>({
    specialist: "",
    yoe: 0,
    sip: 0,
    almamater: "",
  });

  const { loggedInUser } = useGetLoggedInUser();
  if (!loggedInUser) {
    return <CircleLoader />;
  }

  const dataTenkes = getTenkesByUserId(loggedInUser.id)!;

  if (formState.sip === 0) {
    setFormState({
      specialist: dataTenkes.specialist,
      yoe: dataTenkes.yoe,
      sip: dataTenkes.sip,
      almamater: dataTenkes.almamater,
    });
  }

  const handleClickEditProfile = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const updatedTenkesData: TenagaKesehatanUser = {
      ...dataTenkes,
      specialist: formState.specialist,
      yoe: formState.yoe,
      sip: formState.sip,
      almamater: formState.almamater,
    };

    updateTenkesData(updatedTenkesData);

    alert("Data berhasil diupdate");

    navigate(-1);
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        alert(`Data ${key} harus diisi semua`);
        return false;
      }
    }

    return true;
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Nomor SIP"
        placeholder="Nomor SIP"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, sip: value })}
        value={formState.sip}
      />
      <TextInput
        label="Spesialis"
        placeholder="Spesialis"
        type="text"
        onChange={(value: any) =>
          setFormState({ ...formState, specialist: value })
        }
        value={formState.specialist}
      />
      <TextInput
        label="Pengalaman Kerja"
        placeholder="Pengalaman Kerja"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, yoe: value })}
        value={formState.yoe}
      />
      <TextInput
        label="Alumnus"
        placeholder="Alumnus"
        type="text"
        onChange={(value: any) =>
          setFormState({ ...formState, almamater: value })
        }
        value={formState.almamater}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickEditProfile}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
