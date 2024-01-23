import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import { deleteInsuranceDataById, updateInsuranceData, useGetInsuranceData } from "../../../../helpers/insuranceDataHelper";
import { Insurance } from "../../constants";
import TextInput from "../../../../components/TextInput";
import RadioInput from "../../../../components/RadioInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";
import NegativeModal from "../../../../components/NegativeModal";

export type EditInsuranceFormAttributes = {
  title: string;
  cardNumber: string;
  isActive: string;
  userId: string;
};

const EditInsuranceForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formState, setFormState] = useState<EditInsuranceFormAttributes>({
    title: "",
    cardNumber: "",
    isActive: "Tidak Aktif",
    userId: "",
  });
  const { loggedInUser } = useGetLoggedInUser();
  const { insuranceData: insuranceDataList } = useGetInsuranceData();
  const { toggleDiv } = useToaster();
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  
  if (!insuranceDataList || !loggedInUser) {
    return <CircleLoader />;
  }

  const insurance = insuranceDataList.find((insurance) => insurance.id === params.id)!;
  
  // set default state from logged in user data
  if (formState.userId === "") {
    setFormState({
      title: insurance.title,
      cardNumber: insurance.cardNumber,
      isActive: insurance.isActive,
      userId: insurance.userId,
    });
  }

  const handleClickEditInsurance = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const updatedInsurance: Insurance = {
      id: insurance.id,
      title: formState.title,
      cardNumber: formState.cardNumber,
      isActive: formState.isActive,
      userId: formState.userId,
    };

    updateInsuranceData(updatedInsurance, insuranceDataList);

    navigate("/profile/insurance", {
      replace: true,
    });
  };

  const validateForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, value] of Object.entries(formState)) {
      if (!value) {
        toggleDiv("error", "Data harus diisi semua");
        return false;
      }
    }

    return true;
  };

  const onClickDelete = ()  => {
    setShowDeleteModal(true);
  }

  const onConfirmDelete = ()  => {
    deleteInsuranceDataById(insurance.id!, insuranceDataList);
    setShowDeleteModal(false);
    
    navigate("/profile/insurance", {
      replace: true,
    });
  }

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
      <div className="px-8 mt-8 mb-4 flex flex-row gap-2">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickEditInsurance}
        >
          Edit Asuransi
        </button>
        <button
          className="rounded-2xl bg-red-600 w-full h-10 text-white"
          onClick={onClickDelete}
        >
          Delete Asuransi
        </button>
      </div>
      <NegativeModal
        description="Apakah anda yakin ingin menghapus data ini?"
        onClose={() => setShowDeleteModal(false)}
        onSubmit={onConfirmDelete}
        show={showDeleteModal}
      />
    </div>
  );
};

export default EditInsuranceForm;
