import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserData } from "../../../../helpers/userDataHelper";
import TextInput from "../../../HomePage/components/TextInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData } = useGetUserData();
  const { toggleDiv } = useToaster();

  const navigate = useNavigate();

  const handleClickLogin = () => {
    const user = userData!.find(
      (user) => user.email === email && user.password === password
    );
    if (user && user.email) {
      localStorage.setItem("authUserEmail", user.email);
      navigate("/");
    } else {
      toggleDiv("error", "Login gagal");
    }
  };

  const handleRegisterClick = () => {
    navigate("/auth/register");
  };

  if (!userData) {
    return <CircleLoader />;
  }

  return (
    <div className="mt-8">
      <TextInput
        label="Email"
        placeholder="mail@mail.com"
        type="text"
        onChange={(value: any) => setEmail(value)}
      />
      <TextInput
        label="Password"
        placeholder="****"
        type="password"
        onChange={(value: any) => setPassword(value)}
      />

      <div className="px-8 mt-8">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickLogin}
        >
          Login
        </button>
      </div>

      {/* Disabled login with google */}
      {/* <p className="w-full text-center mt-4 text-lightGrey">atau</p>

      <div className="px-8 mt-4">
        <button className="flex justify-center items-center gap-2 rounded-2xl bg-transparent w-full h-10 text-mainBlue border border-mainBlue py-5">
          <Image src="/images/google.png" alt="" width={25} height={25} />
          Login dengan Google
        </button>
      </div> */}

      <p className="w-full text-center mt-6 text-lightGrey">
        Belum punya akun?{" "}
        <span className="text-mainBlue" onClick={handleRegisterClick}>
          Register
        </span>
      </p>

      <p className="w-full text-center mt-2 text-lightGrey">Lupa Password?</p>
    </div>
  );
};

export default LoginForm;
