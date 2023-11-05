import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import HomePage from "./HomePage";
import AuthenticationPage from "./AuthPage";
import RegisterPage from "./RegisterPage";
import VaksinasiPribadi from "./VaksinasiPage";
import VaksinasiHistory from "./VaksinasiHistoryPage";
import VaksinasiDetails from "./DetailsVaksinasiPage";

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
    </Routes>
  );
};

export default MainRoutes;
