import { useState } from "react";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import { forgotPasswordUser } from "../../helpers/userDataHelper";
import { useToaster } from "../../contexts/ToasterContext";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const { toggleDiv } = useToaster();

  const handleSubmit = () => {
    if (!email || !password || !otp) {
      toggleDiv("error", "Harap isi semua data");
      return;
    }

    if (otp.length !== 6) {
      toggleDiv("error", "OTP harus 6 digit");
      return;
    }

    const { status } = forgotPasswordUser(email, password);

    if (status === "success") {
      toggleDiv("success", "Berhasil reset password");
      navigate("/auth");
      return;
    }

    toggleDiv("error", status);
  };

  return (
    <div className="flex flex-col">
      <Header title="Forgot Password" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <TextInput
          label="Email"
          placeholder="mail@mail.com"
          type="text"
          onChange={(value: any) => setEmail(value)}
        />
        <TextInput
          label="New Password"
          placeholder="****"
          type="password"
          onChange={(value: any) => setPassword(value)}
        />
        <TextInput
          label="OTP"
          placeholder="123456"
          type="number"
          onChange={(value: any) => setOtp(value)}
        />

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3 px-10 mx-3 mt-3"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
