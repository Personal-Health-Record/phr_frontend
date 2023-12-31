import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Obat } from "../../constants";
import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";
import {
  updateObatData,
  useGetObatData,
} from "../../../../helpers/obatDataHelper";
import TextInput from "../../../../components/TextInput";
import RadioInput from "../../../../components/RadioInput";
import Notifikasi from "../Notifikasi";
import CircleLoader from "../../../../components/CircleLoader";
import { useToaster } from "../../../../contexts/ToasterContext";

const FormEditPengingat = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [formState, setFormState] = useState<Obat>({
    id: "",
    name: "",
    dosage: "",
    type: "",
    consumptionPerDay: 0,
    consumptionTime: "",
    consumptionMethod: "",
    consumptionMandatory: "",
    dateFrom: "",
    dateTo: "",
    listPengingat: [],
    userId: "",
  });

  const { loggedInUser } = useGetLoggedInUser();
  const { obatData } = useGetObatData();
  const { toggleDiv } = useToaster();
  if (!loggedInUser || !obatData) {
    return <CircleLoader />;
  }

  const obatId = params.id;

  // set default value from params
  if (formState.id === "") {
    const obat = obatData.find((obat) => obat.id === obatId);
    setFormState(obat!);
  }

  const handleOnSubmit = () => {
    const isValidated = validateForm();
    if (isValidated) {
      updateObatData(
        formState,
        obatData
      )
      navigate("/obat", { replace: true });
    }
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        toggleDiv("error", `Data ${key} harus diisi semua`);
        return false;
      }
    }

    if (formState.listPengingat.length === 0) {
      toggleDiv("error", "Notifikasi harus diisi minimal satu");
      return false;
    }

    return true;
  };

  return (
    <div className="flex flex-col gap-4">
      <TextInput
        label="Nama Obat"
        value={formState.name}
        onChange={(value) =>
          setFormState({
            ...formState,
            name: value,
          })
        }
      />

      <div className="flex gap-2 justify-center">
        <TextInput
          label="Dosis"
          value={formState.dosage}
          onChange={(value) =>
            setFormState({
              ...formState,
              dosage: value,
            })
          }
          type="number"
        />
        <TextInput
          label="Jenis"
          value={formState.type}
          onChange={(value) =>
            setFormState({
              ...formState,
              type: value,
            })
          }
        />
      </div>

      <TextInput
        label="Jumlah Konsumsi per Hari"
        type="number"
        value={formState.consumptionPerDay}
        onChange={(value) =>
          setFormState({
            ...formState,
            consumptionPerDay: value,
          })
        }
      />

      <RadioInput
        label="Waktu Konsumsi"
        options={[
          { label: "Setelah Makan", value: "Setelah Makan" },
          { label: "Sebelum Makan", value: "Sebelum Makan" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionTime: value })
        }
        inputKey="consumptionTime"
        value={formState.consumptionTime}
      />
      <RadioInput
        label="Cara Konsumsi Obat"
        options={[
          { label: "Ditelan", value: "Ditelan" },
          { label: "Disuntik", value: "Disuntik" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionMethod: value })
        }
        inputKey="consumptionMethod"
        value={formState.consumptionMethod}
      />
      <RadioInput
        label="Wajib dihabiskan"
        options={[
          { label: "Ya", value: "Ya" },
          { label: "Tidak", value: "Tidak" },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionMandatory: value })
        }
        inputKey="consumptionMandatory"
        value={formState.consumptionMandatory}
      />

      <div className="flex flex-col gap-4">
        <TextInput
          label="Tanggal Mulai"
          placeholder="Tanggal Mulai"
          type="date"
          value={formState.dateFrom}
          onChange={(value: any) =>
            setFormState({ ...formState, dateFrom: value })
          }
        />
        <TextInput
          label="Tanggal Selesai"
          placeholder="Tanggal Selesai"
          type="date"
          value={formState.dateTo}
          onChange={(value: any) =>
            setFormState({ ...formState, dateTo: value })
          }
        />
      </div>

      <div className="mt-2 px-4">
        <Notifikasi formState={formState} setFormState={setFormState} />
      </div>

      <button
        className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6 mt-2 mx-4"
        onClick={handleOnSubmit}
      >
        Simpan
      </button>
    </div>
  );
};

export default FormEditPengingat;
