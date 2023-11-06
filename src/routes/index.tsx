import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import HomePage from "./HomePage";
import AuthenticationPage from "./AuthPage";
import RegisterPage from "./RegisterPage";
import VaksinasiPribadi from "./VaksinasiPage";
import VaksinasiHistory from "./VaksinasiHistoryPage";
import VaksinasiDetails from "./DetailsVaksinasiPage";
import TenagaMedisPage from "./TenagaKesehatanPage";
import ProfileTenagaMedis from "./TenagaKesehatanProfilePage";
import EditProfilePage from "./TenagaKesehatanEditPage";
import SharePage from "./SharePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      <Route path="/vaksinasi" element={<VaksinasiPribadi />} />
      <Route path="/vaksinasi/history" element={<VaksinasiHistory />} />
      <Route path="/vaksinasi/details/:id" element={<VaksinasiDetails />} />

      <Route path="/tenaga" element={<TenagaMedisPage />} />
      <Route path="/tenaga/profile" element={<ProfileTenagaMedis />} />
      <Route path="/tenaga/edit" element={<EditProfilePage />} />

      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
};

export default MainRoutes;
