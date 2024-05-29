import image1 from "../../assets/images/profile-icon.png";
import image2 from "../../assets/images/docter-1.png";
import image3 from "../../assets/images/profile-icon-2.png";
import image4 from "../../assets/images/profile-icon-3.png";
import image5 from "../../assets/images/docter-2.png";

export type User = {
  id: string;
  name: string;
  age: number;
  role: string;
  gender: string;
  profilePicture: string;

  // child
  parentId?: string;
  relation?: string;

  // auth user
  email?: string;
  password?: string;
  phoneNumber?: string;
  nik?: string;
  dateOfBirth?: string;
  bloodType?: string;
  maritalStatus?: string;
};

export const dummyUserData: User[] = [
  {
    id: "1",
    email: "patient@gmail.com",
    phoneNumber: "08123456789",
    password: "pass",
    role: "patient",
    age: 29,
    name: "Jimmy",
    gender: "laki-laki",
    profilePicture: image1,
    nik: "3175121267251234",
    dateOfBirth: "1990-10-01",
    bloodType: "O",
    maritalStatus: "Sudah Menikah",
  },
  {
    id: "2",
    email: "doctor@gmail.com",
    phoneNumber: "08123456789",
    password: "pass",
    role: "doctor",
    age: 35,
    name: "dr. Ali Abdul",
    gender: "laki-laki",
    profilePicture: image2,
    nik: "3175121267251234",
    dateOfBirth: "1990-10-01",
    bloodType: "O",
    maritalStatus: "Sudah Menikah",
  },
  {
    id: "3",
    parentId: "1",
    name: "Mawar Indah",
    gender: "perempuan",
    role: "patient",
    relation: "Istri",
    age: 29,
    profilePicture: image3,
  },
  {
    id: "4",
    parentId: "1",
    name: "Milo Cornelius",
    gender: "laki-laki",
    role: "patient",
    relation: "Anak",
    age: 5,
    profilePicture: image4,
  },
  {
    id: "5",
    email: "doctor2@gmail.com",
    phoneNumber: "08123456789",
    password: "pass",
    role: "doctor",
    age: 35,
    name: "dr. Budi Santoso",
    gender: "laki-laki",
    profilePicture: image5,
    nik: "3175121267251234",
    dateOfBirth: "1990-10-01",
    bloodType: "O",
    maritalStatus: "Sudah Menikah",
  },
];

export const dummyListTrackingKesehatanFaskes = [
  "11 April 2024 - 17 April 2024",
  "18 April 2024 - 25 April 2024",
  "1 Mei 2024 - 8 Mei 2024",
];
