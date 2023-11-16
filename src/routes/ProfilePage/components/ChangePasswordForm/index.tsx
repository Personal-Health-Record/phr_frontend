import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateUserData,
  useGetLoggedInUser,
} from "../../../../helpers/userDataHelper";
import { User } from "../../../../helpers/constants";
import TextInput from "../../../../components/TextInput";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

export type ChangePasswordFormAttributes = {
  previousPass: string;
  newPass: string;
  confirmationPass: string;
};

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<ChangePasswordFormAttributes>({
    previousPass: "",
    newPass: "",
    confirmationPass: "",
  });
  const { loggedInUser, userData } = useGetLoggedInUser();
  const { toggleDiv } = useToaster();

  if (!userData || !loggedInUser) {
    return <CircleLoader />;
  }

  const handleSubmit = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const newUser: User = {
      ...loggedInUser,
      password: formState.newPass,
    };

    updateUserData(newUser, userData);

    toggleDiv("success", "Password berhasil diubah");

    navigate(-1);
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        toggleDiv("error", `Data ${key} harus diisi semua`);
        return false;
      }
    }

    if (formState.previousPass !== loggedInUser.password) {
      toggleDiv("error", "Password sebelumnya tidak sesuai");
      return false;
    }

    if (formState.newPass !== formState.confirmationPass) {
      toggleDiv("error", "Password baru tidak sama");
      return false;
    }

    return true;
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Password Sebelumnya"
        placeholder="Password Sebelumnya"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, previousPass: value })
        }
        value={formState.previousPass}
      />
      <TextInput
        label="Password Baru"
        placeholder="Password Baru"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, newPass: value })
        }
        value={formState.newPass}
      />
      <TextInput
        label="Konfirmasi Password"
        placeholder="Konfirmasi Password"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, confirmationPass: value })
        }
        value={formState.confirmationPass}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleSubmit}
        >
          Ubah Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
