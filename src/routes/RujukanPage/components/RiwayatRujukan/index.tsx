import { Rujukan } from "../../models";
import RiwayatRujukanCard from "../RiwayatRujukanCard";

type RiwayatRujukanProps = {
  rujukanData: Rujukan[];
};

const RiwayatRujukan = ({ rujukanData }: RiwayatRujukanProps) => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">Riwayat Rujukan</h3>
      {rujukanData.map((_, index) => {
        if (rujukanData[index].id !== 1) {
          return (
            <RiwayatRujukanCard rujukanData={rujukanData[index]} key={index} />
          );
        }

        return null;
      })}
    </div>
  );
};

export default RiwayatRujukan;
