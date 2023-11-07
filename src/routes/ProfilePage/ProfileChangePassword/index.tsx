import Header from "../../../components/Header";
import ChangePasswordForm from "../components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Change Password" />
      <div className="flex flex-col px-4 gap-6">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
