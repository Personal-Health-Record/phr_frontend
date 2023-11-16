import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import { useGetInsuranceData } from "../../../../helpers/insuranceDataHelper";
import { Insurance } from "../../constants";
import TextInput from "../../../../components/TextInput";
import RadioInput from "../../../../components/RadioInput";
import CircleLoader from "../../../../components/CircleLoader";

export type AddInsuranceFormAttributes = {
  title: string;
  cardNumber: string;
  isActive: string;
  userId: string;
};

const AddInsuranceForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<AddInsuranceFormAttributes>({
    title: "",
    cardNumber: "",
    isActive: "Tidak Aktif",
    userId: "",
  });
  const { loggedInUser } = useGetLoggedInUser();
  const { insuranceData } = useGetInsuranceData();
  if (!insuranceData || !loggedInUser) {
    return <CircleLoader />;
  }
  // set default state from logged in user data
  if (formState.userId === "") {
    setFormState({
      title: "",
      cardNumber: "",
      isActive: "Tidak Aktif",
      userId: loggedInUser.id,
    });
  }

  const handleClickAddInsurance = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const newInsurance: Insurance = {
      id: (insuranceData.length + 1).toString(),
      title: formState.title,
      cardNumber: formState.cardNumber,
      isActive: formState.isActive,
      userId: formState.userId,
    };

    const newInsuranceData = JSON.stringify([...insuranceData, newInsurance]);

    localStorage.setItem("insuranceDataStorage", newInsuranceData);

    navigate("/profile");
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      // TODO: remove validation for profile picture until firebase storage is ready
      if (!value && key !== "profilePicture") {
        alert("Data harus diisi semua");
        return false;
      }
    }

    return true;
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Jenis Kartu Asuransi"
        placeholder="Jenis Kartu Asuransi"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, title: value })}
        value={formState.title}
      />
      <TextInput
        label="Card Number"
        placeholder="Card Number"
        type="number"
        onChange={(value: any) =>
          setFormState({ ...formState, cardNumber: value.toString() })
        }
        value={formState.cardNumber}
      />
      <RadioInput
        label="Apakah Aktif?"
        options={[
          { label: "Aktif", value: "Aktif" },
          { label: "Tidak Aktif", value: "Tidak Aktif" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, isActive: value })
        }
        inputKey="isActive"
        value={formState.isActive}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickAddInsurance}
        >
          Tambah Asuransi
        </button>
      </div>
    </div>
  );
};

export default AddInsuranceForm;
