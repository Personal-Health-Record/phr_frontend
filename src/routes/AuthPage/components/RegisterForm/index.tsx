import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserData } from "../../../../helpers/userDataHelper";
import useCloudMediaStorageUtils from "../../../../helpers/cloudMediaStorageUtil";
import { User } from "../../../../helpers/constants";
import TextInput from "../../../HomePage/components/TextInput";
import RadioInput from "../../../HomePage/components/RadioInput";
import FileInput from "../../../HomePage/components/ImageInput";
import CircleLoader from "../../../../components/CircleLoader";

export type RegisterFormAttributes = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  nik: string;
  dateOfBirth: string;
  age: number;
  gender: string;
  bloodType: string;
  maritalStatus: string;
  phoneNumber: string;
  profilePicture: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<RegisterFormAttributes>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nik: "",
    dateOfBirth: "",
    age: 0,
    gender: "",
    bloodType: "",
    maritalStatus: "",
    phoneNumber: "",
    profilePicture: "",
  });
  const { downloadURL, handleSelectFile } = useCloudMediaStorageUtils();
  const { userData } = useGetUserData();

  if (!userData) {
    return <CircleLoader />;
  }

  const handleClickRegister = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    if (!downloadURL) {
      alert("Sedang mengunggah gambar");
      return;
    }

    const newUser: User = {
      id: (userData.length + 1).toString(),
      email: formState.email,
      password: formState.password,
      name: formState.name,
      nik: formState.nik,
      dateOfBirth: formState.dateOfBirth,
      age: formState.age,
      gender: formState.gender,
      bloodType: formState.bloodType,
      maritalStatus: formState.maritalStatus,
      phoneNumber: formState.phoneNumber,
      profilePicture: downloadURL,
      role: "patient",
    };

    // validate email uniqueness
    for (const user of userData) {
      if (user.email === newUser.email) {
        alert("Email sudah terdaftar");
        return;
      }
    }

    const newUserData = JSON.stringify([...userData, newUser]);

    localStorage.setItem("userDataStorage", newUserData);

    navigate("/auth");
  };

  const validateForm = () => {
    if (formState.password !== formState.confirmPassword) {
      alert("Password dan konfirmasi password harus sama");
      return false;
    }
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        alert(`Data ${key} harus diisi`);
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
        label="Email"
        placeholder="mail@mail.com"
        type="email"
        onChange={(value: any) => setFormState({ ...formState, email: value })}
      />
      <TextInput
        label="Password"
        placeholder="****"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, password: value })
        }
      />
      <TextInput
        label="Confirmation Password"
        placeholder="****"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, confirmPassword: value })
        }
      />
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        onChange={(value: any) => setFormState({ ...formState, name: value })}
      />
      <TextInput
        label="NIK"
        placeholder="NIK"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, nik: value })}
      />
      <TextInput
        label="Tanggal Lahir"
        placeholder="Tanggal Lahir"
        type="date"
        onChange={(value: any) =>
          setFormState({ ...formState, dateOfBirth: value })
        }
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
      />
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        type="number"
        onChange={(value: any) =>
          setFormState({ ...formState, phoneNumber: value })
        }
      />
      <RadioInput
        label="Jenis Kelamin"
        options={[
          { label: "Laki-laki", value: "laki-laki" },
          { label: "Perempuan", value: "perempuan" },
        ]}
        onClick={(value: any) => setFormState({ ...formState, gender: value })}
        inputKey="gender"
        value={formState.gender}
      />
      <RadioInput
        label="Golongan Darah"
        options={[
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "AB", value: "AB" },
          { label: "O", value: "O" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, bloodType: value })
        }
        inputKey="bloodType"
        value={formState.bloodType}
      />
      <RadioInput
        label="Status Pernikahan"
        options={[
          { label: "Belum Menikah", value: "Belum Menikah" },
          { label: "Sudah Menikah", value: "Sudah Menikah" },
          { label: "Sudah Cerai", value: "Sudah Cerai" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, maritalStatus: value })
        }
        inputKey="maritalStatus"
        value={formState.maritalStatus}
      />
      <FileInput
        label="Profile Picture"
        handleSelectFile={handleSelectProfilePicture}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
