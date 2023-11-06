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
import ScreeningPage from "./ScreeningPage";
import ScreeningCovid from "./ScreeningCovidPage";
import ScreeningCovidResultPage from "./ScreeningCovidResultPage";
import ScreeningDoctor from "./ScreeningDoctor";
import ScreeningHistory from "./ScreeningHistory";
import DetailCovid from "./ScreeningCovidDetailPage";
import ScreeningMental from "./ScreeningMental";
import ScreeningMentalResult from "./ScreeningMentalResult";
import DetailMental from "./ScreeningMentalDetail";
import ScreeningPTM from "./ScreeningPTM";
import DetailPTM from "./ScreeningPTMDetail";
import ScreeningPTMResult from "./ScreeningPTMResult";

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

      <Route path="/screening" element={<ScreeningPage />} />
      <Route path="/screening/covid" element={<ScreeningCovid />} />
      <Route path="/screening/covid/detail" element={<DetailCovid />} />
      <Route
        path="/screening/covid/result"
        element={<ScreeningCovidResultPage />}
      />
      <Route path="/screening/doctor" element={<ScreeningDoctor />} />
      <Route path="/screening/history" element={<ScreeningHistory />} />
      <Route path="/screening/mental" element={<ScreeningMental />} />
      <Route
        path="/screening/mental/result"
        element={<ScreeningMentalResult />}
      />
      <Route path="/screening/mental/detail" element={<DetailMental />} />

      <Route path="/screening/ptm" element={<ScreeningPTM />} />
      <Route path="/screening/ptm/detail" element={<DetailPTM />} />
      <Route path="/screening/ptm/result" element={<ScreeningPTMResult />} />
    </Routes>
  );
};

export default MainRoutes;
