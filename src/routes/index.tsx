import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import HomePage from "./HomePage";
import AuthenticationPage from "./AuthPage";
import RegisterPage from "./RegisterPage";
import VaksinasiPribadi from "./VaksinasiPage";
import VaksinasiHistory from "./VaksinasiHistoryPage";
import VaksinasiDetails from "./DetailsVaksinasiPage";
import TenagaMedisPage from "./TenagaKesehatanPage";
import ProfileTenagaMedis from "./TenagaKesehatanPage/TenagaKesehatanProfilePage";
import EditProfilePage from "./TenagaKesehatanPage/TenagaKesehatanEditPage";
import SharePage from "./SharePage";
import ScreeningPage from "./ScreeningPage";
import ScreeningCovid from "./ScreeningPage/ScreeningCovidPage";
import ScreeningCovidResultPage from "./ScreeningPage/ScreeningCovidResultPage";
import ScreeningDoctor from "./ScreeningPage/ScreeningDoctor";
import ScreeningHistory from "./ScreeningPage/ScreeningHistory";
import DetailCovid from "./ScreeningPage/ScreeningCovidDetailPage";
import ScreeningMental from "./ScreeningPage/ScreeningMental";
import ScreeningMentalResult from "./ScreeningPage/ScreeningMentalResult";
import DetailMental from "./ScreeningPage/ScreeningMentalDetail";
import ScreeningPTM from "./ScreeningPage/ScreeningPTM";
import DetailPTM from "./ScreeningPage/ScreeningPTMDetail";
import ScreeningPTMResult from "./ScreeningPage/ScreeningPTMResult";
import RujukanPage from "./RujukanPage";
import RujukanDetails from "./RujukanPage/RujukanDetailsPage";
import ResumePage from "./ResumePage";
import ResumeDetail from "./ResumePage/ResumeDetailsPage";
import RiwayatResume from "./ResumePage/ResumeRiwayatPage";
import ProfilePage from "./ProfilePage";
import ChangePasswordPage from "./ProfilePage/ProfileChangePassword";
import ProfileDetail from "./ProfilePage/ProfileDetailPage/page";
import AddFamilyPage from "./ProfilePage/ProfileEditFamilyPage";
import AddInsurancePage from "./ProfilePage/ProfileEditInsurancePage/page";
import FamilyPage from "./ProfilePage/ProfileInsurancePage";
import InsurancePage from "./ProfilePage/ProfileInsurancePage";
import KirimPesanPage from "./PesanPage";
import PatientPage from "./PatientPage";
import ProfilePatientPage from "./PatientPage/PatientDetailsPage";
import PengingatObatPage from "./ObatPage/page";
import PemesananObatPage from "./ObatPage/ObatPemesananPage/page";
import RiwayatObat from "./ObatPage/ObatRiwayatPage";
import TambahPengingat from "./ObatPage/ObatTambahPage";
import News from "./NewsPage/page";
import NewsDetail1 from "./NewsPage/DetailsNews1";
import NewsDetail2 from "./NewsPage/DetailsNews2";
import NewsDetail3 from "./NewsPage/DetailsNews3";
import MonitoringPage from "./MonitoringPage";
import KalulatorKesehatan from "./MonitoringPage/KalkulatorPage/page";
import InsertDataFisik from "./MonitoringPage/InsertDataFisikPage";
import InsertDataHeightWeight from "./MonitoringPage/InsertDataPage";
import DataTracking from "./MonitoringPage/DataTrackingPage";
import MonitoringDashboard from "./MonitoringPage/DashboardPage/page";
import KalkulatorKalori from "./MonitoringPage/BMRPage";
import KalkulatorIndeksMassa from "./MonitoringPage/BMIPage";
import AddAktifitas from "./MonitoringPage/AddAktifitasPage";
import FaskesPage from "./FaskesPage";
import FaskesDetail from "./FaskesPage/FaskesDetails";
import NotificationPage from "./NotificationsPage";
import MonitoringMakananPage from "./MonitoringPage/MonitoringMakananPage";
import InsertKonsumsiMakananPage from "./MonitoringPage/InsertKonsumsiMakananPage";
import KonsumsiMakananTargetPage from "./MonitoringPage/KonsumsiMakananTargetPage";
import MonitoringAktifitasPage from "./MonitoringPage/MonitoringAktifitasPage";
import UbahTargetFisikpage from "./MonitoringPage/UbahTargetFisikPage";
import InsertDataTekananDarahPage from "./MonitoringPage/InsertTekananDarahPage";
import ForgotPasswordPage from "./ForgotPassword";
import NewsDetail4 from "./NewsPage/DetailsNews4";
import NewsDetail10 from "./NewsPage/DetailsNews10";
import NewsDetail5 from "./NewsPage/DetailsNews5";
import NewsDetail6 from "./NewsPage/DetailsNews6";
import NewsDetail7 from "./NewsPage/DetailsNews7";
import NewsDetail8 from "./NewsPage/DetailsNews8";
import NewsDetail9 from "./NewsPage/DetailsNews9";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />

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

        <Route path="/rujukan" element={<RujukanPage />} />
        <Route path="/rujukan/details/:id" element={<RujukanDetails />} />

        <Route path="/resume" element={<ResumePage />} />
        <Route path="/resume/riwayat" element={<RiwayatResume />} />
        <Route path="/resume/details/:id" element={<ResumeDetail />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/profile/changepassword"
          element={<ChangePasswordPage />}
        />
        <Route path="/profile/detail/:id" element={<ProfileDetail />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/profile/edit/family" element={<AddFamilyPage />} />
        <Route path="/profile/edit/insurance" element={<AddInsurancePage />} />
        <Route path="/profile/family" element={<FamilyPage />} />
        <Route path="/profile/insurance" element={<InsurancePage />} />

        <Route path="/pesan" element={<KirimPesanPage />} />

        <Route path="/patient" element={<PatientPage />} />
        <Route path="/patient/details/:id" element={<ProfilePatientPage />} />

        <Route path="/obat" element={<PengingatObatPage />} />
        <Route path="/obat/pemesanan" element={<PemesananObatPage />} />
        <Route path="/obat/riwayat" element={<RiwayatObat />} />
        <Route path="/obat/tambah" element={<TambahPengingat />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/details/1" element={<NewsDetail1 />} />
        <Route path="/news/details/2" element={<NewsDetail2 />} />
        <Route path="/news/details/3" element={<NewsDetail3 />} />
        <Route path="/news/details/4" element={<NewsDetail4 />} />
        <Route path="/news/details/5" element={<NewsDetail5 />} />
        <Route path="/news/details/6" element={<NewsDetail6 />} />
        <Route path="/news/details/7" element={<NewsDetail7 />} />
        <Route path="/news/details/8" element={<NewsDetail8 />} />
        <Route path="/news/details/9" element={<NewsDetail9 />} />
        <Route path="/news/details/10" element={<NewsDetail10 />} />

        <Route path="/monitoring" element={<MonitoringPage />} />
        <Route path="/monitoring/kalkulator" element={<KalulatorKesehatan />} />
        <Route path="/monitoring/bmr" element={<KalkulatorKalori />} />
        <Route path="/monitoring/bmi" element={<KalkulatorIndeksMassa />} />
        <Route path="/monitoring/add-aktifitas" element={<AddAktifitas />} />
        <Route
          path="/monitoring/insert-data-fisik"
          element={<InsertDataFisik />}
        />
        <Route
          path="/monitoring/insert-data"
          element={<InsertDataHeightWeight />}
        />
        <Route path="/monitoring/data-tracking" element={<DataTracking />} />
        <Route path="/monitoring/dashboard" element={<MonitoringDashboard />} />
        <Route path="/monitoring/makanan" element={<MonitoringMakananPage />} />
        <Route path="/monitoring/fisik" element={<MonitoringAktifitasPage />} />
        <Route
          path="/monitoring/fisik/change"
          element={<UbahTargetFisikpage />}
        />
        <Route
          path="/monitoring/darah/change"
          element={<InsertDataTekananDarahPage />}
        />
        <Route
          path="/monitoring/makanan/insert"
          element={<InsertKonsumsiMakananPage />}
        />
        <Route
          path="/monitoring/makanan/change"
          element={<KonsumsiMakananTargetPage />}
        />

        <Route path="/faskes" element={<FaskesPage />} />
        <Route path="/faskes/details" element={<FaskesDetail />} />

        <Route path="/notifications" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
