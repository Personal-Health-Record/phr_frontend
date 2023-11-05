import IconPHR from "../AuthPage/components/IconPHR";
import RegisterForm from "../AuthPage/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <IconPHR className="mt-8" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
