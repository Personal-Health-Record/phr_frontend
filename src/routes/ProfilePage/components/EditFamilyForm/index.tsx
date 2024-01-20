import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCloudMediaStorageUtils from "../../../../helpers/cloudMediaStorageUtil";
import { updateFamilyData, updateUserData, useGetUserData } from "../../../../helpers/userDataHelper";
import { User } from "../../../../helpers/constants";
import TextInput from "../../../../components/TextInput";
import RadioInput from "../../../../components/RadioInput";
import FileInput from "../../../../components/ImageInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

export type EditFamilyFormAttributes = {
  name: string;
  age: number;
  role: string;
  gender: string;
  profilePicture: string;
  parentId: string;
  relation: string;
};

const EditFamilyForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [formState, setFormState] = useState<EditFamilyFormAttributes>({
    name: "",
    age: 0,
    role: "patient",
    gender: "",
    profilePicture: "",
    parentId: "",
    relation: "",
  });
  const { downloadURL, handleSelectFile, isUploading } = useCloudMediaStorageUtils();
  const { userData } = useGetUserData();
  const { toggleDiv } = useToaster();
  if (!userData) {
    return <CircleLoader />;
  }

  const user = userData.find((user) => user.id === params.id)!;

  // set default state from logged in user data
  if (formState.parentId === "") {
    setFormState({
      name: user.name,
      age: user.age,
      role: user.role,
      gender: user.gender,
      profilePicture: user.profilePicture,
      parentId: user.parentId!,
      relation: user.relation!,
    });
  }

  const handleClickEditFamily = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    console.log(downloadURL);
    console.log(isUploading);
    if (isUploading) {
      toggleDiv("success", "Sedang mengunggah gambar");
      return;
    }

    const profilePicture = downloadURL == null || downloadURL === "" 
    ? formState.profilePicture 
    : downloadURL;

    const newUser: User = {
      id: params.id!,
      name: formState.name,
      age: formState.age,
      role: formState.role,
      gender: formState.gender,
      profilePicture: profilePicture,
      parentId: formState.parentId,
      relation: formState.relation,
    };

    updateFamilyData(
      newUser,
      userData
    )

    navigate("/profile");
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value && key !== "profilePicture") {
        toggleDiv("error", `Data ${key} harus diisi semua`);
        return false;
      }
    }

    return true;
  };

  const handleSelectProfilePicture = (files: FileList | null) => {
    if (!files) {
      return;
    }
    handleSelectFile(files);
    setFormState({ ...formState, profilePicture: files[0].name });
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, name: value })}
        value={formState.name}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
        value={formState.age}
      />
      <RadioInput
        label="Jenis Kelamin"
        options={[
          { label: "Laki-laki", value: "laki-laki" },
          { label: "Perempuan", value: "perempuan" },
        ]}
        onClick={(value: any) => setFormState({ ...formState, gender: value })}
        inputKey="gender"
        value={formState.gender!}
      />
      <RadioInput
        label="Relasi"
        options={[
          { label: "Istri", value: "Istri" },
          { label: "Suami", value: "Suami" },
          { label: "Anak", value: "Anak" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, relation: value })
        }
        inputKey="relation"
        value={formState.relation!}
      />
      <FileInput
        label="Profile Picture"
        handleSelectFile={handleSelectProfilePicture}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickEditFamily}
        >
          Edit Anggota Keluarga
        </button>
      </div>
    </div>
  );
};

export default EditFamilyForm;
