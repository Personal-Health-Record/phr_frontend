import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserData } from "../../../../helpers/userDataHelper";
import useCloudMediaStorageUtils from "../../../../helpers/cloudMediaStorageUtil";
import { User } from "../../../../helpers/constants";
import TextInput from "../../../HomePage/components/TextInput";
import RadioInput from "../../../HomePage/components/RadioInput";
import FileInput from "../../../HomePage/components/ImageInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

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
  const { toggleDiv } = useToaster();

  if (!userData) {
    return <CircleLoader />;
  }

  const handleClickRegister = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    if (!downloadURL && formState.profilePicture) {
      toggleDiv("success", "Sedang mengunggah gambar");
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
        toggleDiv("error", "Email sudah terdaftar");
        return;
      }
    }

    const newUserData = JSON.stringify([...userData, newUser]);

    localStorage.setItem("userDataStorage", newUserData);

    navigate("/auth");
  };

  const validateForm = () => {
    if (formState.password !== formState.confirmPassword) {
      toggleDiv("error", "Password dan konfirmasi password harus sama");
      return false;
    }
    if (formState.password.length < 6) {
      toggleDiv("error", "Password minimal 6 karakter");
      return false;
    }

    // validate nik must be 16 char
    if (formState.nik.length !== 16) {
      toggleDiv("error", "NIK harus 16 karakter");
      return false;
    }

    for (const [key, value] of Object.entries(formState)) {
      if (!value && key !== "profilePicture" && key !== "age") {
        toggleDiv("error", `Data ${key} harus diisi`);
        return false;
      }
    }

    // validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formState.email)) {
      toggleDiv("error", "Email tidak valid");
      return false;
    }

    // validate minimum age is 17
    if (getAge(formState.dateOfBirth) < 17) {
      toggleDiv("error", "Umur minimal 17 tahun");
      return false;
    }

    return true;
  };

  const getAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  }

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
        placeholder="******"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, password: value })
        }
      />
      <TextInput
        label="Confirmation Password"
        placeholder="******"
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
          setFormState({ ...formState, dateOfBirth: value, age: getAge(value) })
        }
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
