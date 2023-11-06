import beranda from "../../assets/images/bottomnav/beranda.png";
import artikel from "../../assets/images/bottomnav/artikel.png";
import notifikasi from "../../assets/images/bottomnav/notifikasi.png";
import user from "../../assets/images/bottomnav/user.png";

export const menuNavbar = [
  {
    icon: beranda,
    title: "Beranda",
    route: "/",
  },
  {
    icon: artikel,
    title: "Artikel",
    route: "/news",
  },
  {
    icon: notifikasi,
    title: "Notifikasi",
    route: "/notifications",
  },
  {
    icon: user,
    title: "Profil",
    route: "/profile",
  },
];

export const menuNavbarDoctor = [
  {
    icon: beranda,
    title: "Beranda",
    route: "/",
  },
  {
    icon: notifikasi,
    title: "Notifikasi",
    route: "/notifications",
  },
  {
    icon: user,
    title: "Profil",
    route: "/profile",
  },
];
