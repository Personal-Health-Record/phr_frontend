import Header from "../../../components/Header";
import { useGetInsuranceData } from "../../../helpers/insuranceDataHelper";
import { useGetLoggedInUser } from "../../../helpers/userDataHelper";
import BottomNavbarOneButton from "../../HomePage/components/BottomNavbarOneButton";
import InsuranceCard from "../components/InsuranceCard";
import imagePlus from "../../../assets/images/plus.png";
import CircleLoader from "../../../components/CircleLoader";

const InsurancePage = () => {
  const { loggedInUser: user, userData } = useGetLoggedInUser();
  const { insuranceData } = useGetInsuranceData();

  if (!user || !userData || !insuranceData) {
    return <CircleLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header title="Asuransi Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {insuranceData.map((insurance) => {
          return (
            <InsuranceCard
              key={insurance.id}
              title={insurance.title}
              cardNumber={insurance.cardNumber}
              isActive={insurance.isActive}
            />
          );
        })}

        {
          (!insuranceData || insuranceData.length === 0) &&
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500 text-sm">Tidak ada asuransi</p>
          </div>
        }
      </div>

      <BottomNavbarOneButton
        path="/profile/edit/insurance"
        iconPath={imagePlus}
        text="Tambahkan Asuransi Kesehatan"
      />
    </div>
  );
};

export default InsurancePage;
