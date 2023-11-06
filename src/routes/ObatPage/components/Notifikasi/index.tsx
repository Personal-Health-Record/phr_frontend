import { Dispatch, SetStateAction, useState } from "react";
import { Obat, Pengingat } from "../../constants";
import TextInput from "../../../../components/TextInput";
import imageEdit from "../../../../assets/images/pengingat/edit.png";
import imageAlarm from "../../../../assets/images/pengingat/alarm.png";

type NotifikasiProps = {
  formState: Obat;
  setFormState: Dispatch<SetStateAction<Obat>>;
};

const Notifikasi = ({ formState, setFormState }: NotifikasiProps) => {
  const [editState, setEditState] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const getNotificationTime = () => {
    let notificationTime = "";
    for (const pengingat of formState.listPengingat) {
      notificationTime += pengingat.time + ",";
    }
    if (notificationTime.length > 0) {
      notificationTime = notificationTime.slice(0, -1);
    }

    return notificationTime;
  };
  const [notificationTime, setNotificationTime] = useState<string>(
    getNotificationTime()
  );

  const validateForm = () => {
    // make sure format notification time is correct
    // like 09:00,16:00
    // or 09:00
    if (notificationTime !== "") {
      const timeList = notificationTime.split(",");
      const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

      for (const time of timeList) {
        if (!timeRegex.test(time)) {
          setErrorMessage("Format waktu salah");
          return false;
        }
      }
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = () => {
    const isValidated = validateForm();
    if (isValidated) {
      setEditState(!editState);
      let id = 1;
      const listPengingat: Pengingat[] = notificationTime
        .split(",")
        .map((time) => {
          return {
            id: (id++).toString(),
            time: time,
            consumptionStatus: "Belum dikonsumsi",
          };
        });
      setFormState({
        ...formState,
        listPengingat: listPengingat,
      });
    }
  };

  const renderEditForm = () => {
    return (
      <div>
        <div className="flex flex-row justify-between w-full px-2 items-center">
          <div
            style={{
              flex: 4,
            }}
          >
            <TextInput
              label="Waktu Notifikasi"
              placeholder="09:00,16:00"
              onChange={(value: any) => setNotificationTime(value)}
              value={notificationTime}
            />
          </div>
          <div
            style={{
              flex: 1,
            }}
            className="self-end flex justify-end"
          >
            <img
              src={imageEdit}
              alt=""
              width={30}
              height={30}
              onClick={handleSubmit}
            />
          </div>
        </div>
        {errorMessage && (
          <div className="text-sm text-red-700 px-4 py-3 rounded relative">
            {errorMessage}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">
        Waktu Notifikasi
      </h3>

      {editState ? (
        renderEditForm()
      ) : (
        <div className="flex w-full justify-between px-2 items-center">
          <div className="flex gap-3 items-center">
            <div>
              <img src={imageAlarm} alt="" width={30} height={30} />
            </div>
            {notificationTime === "" ? (
              <p> Belum ada waktu notifikasi </p>
            ) : (
              <p> {notificationTime} </p>
            )}
          </div>

          <img
            src={imageEdit}
            alt=""
            width={30}
            height={30}
            className="self-end"
            onClick={() => setEditState(!editState)}
          />
        </div>
      )}
    </div>
  );
};

export default Notifikasi;
