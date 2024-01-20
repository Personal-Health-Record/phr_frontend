import Header from "../../../components/Header";
import EditInsuranceForm from "../components/EditInsuranceForm";

const EditInsurancePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Edit Asuransi" />
      <div className="flex flex-col px-4 gap-6">
        <EditInsuranceForm />
      </div>
    </div>
  );
};

export default EditInsurancePage;
