import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCloudMediaStorageUtils from "../../../../helpers/cloudMediaStorageUtil";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import { User } from "../../../../helpers/constants";
import TextInput from "../../../../components/TextInput";
import RadioInput from "../../../../components/RadioInput";
import FileInput from "../../../../components/ImageInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

export type AddFamilyFormAttributes = {
  name: string;
  age: number;
  role: string;
  gender: string;
  profilePicture: string;
  parentId: string;
  relation: string;
};

const AddFamilyForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<AddFamilyFormAttributes>({
    name: "",
    age: 0,
    role: "patient",
    gender: "",
    profilePicture: "",
    parentId: "",
    relation: "",
  });
  const { downloadURL, handleSelectFile } = useCloudMediaStorageUtils();
  const { loggedInUser, userData } = useGetLoggedInUser();
  const { toggleDiv } = useToaster();
  if (!userData || !loggedInUser) {
    return <CircleLoader />;
  }
  // set default state from logged in user data
  if (formState.parentId === "") {
    setFormState({
      name: "",
      age: 0,
      role: "patient",
      gender: "",
      profilePicture: "",
      parentId: loggedInUser.id,
      relation: "",
    });
  }

  const handleClickAddFamily = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    if (!downloadURL) {
      toggleDiv("success", "Sedang mengunggah gambar");
      return;
    }

    const newUser: User = {
      id: (userData.length + 1).toString(),
      name: formState.name,
      age: formState.age,
      role: formState.role,
      gender: formState.gender,
      profilePicture: downloadURL,
      parentId: formState.parentId,
      relation: formState.relation,
    };

    const newUserData = JSON.stringify([...userData, newUser]);

    localStorage.setItem("userDataStorage", newUserData);

    navigate("/profile");
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
          onClick={handleClickAddFamily}
        >
          Tambah Anggota Keluarga
        </button>
      </div>
    </div>
  );
};

export default AddFamilyForm;
