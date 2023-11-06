import Header from "../../components/Header";
import { useGetInsuranceData } from "../../helpers/insuranceDataHelper";
import { useGetLoggedInUser } from "../../helpers/userDataHelper";
import BottomNavbarOneButton from "../HomePage/components/BottomNavbarOneButton";
import InsuranceCard from "../ProfilePage/components/InsuranceCard";
import imagePlus from "../../assets/images/plus.png";

const InsurancePage = () => {
  const { loggedInUser: user, userData } = useGetLoggedInUser();
  const { insuranceData } = useGetInsuranceData();

  if (!user || !userData || !insuranceData) {
    return <div> Loading... </div>;
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
