import { Obat } from '../../constants';

type CardObatProps = {
  obat: Obat;
};

const CardObat = ({ obat }: CardObatProps) => {
  return (
    <div className="flex flex-col gap-1 border-b-2 pb-4 px-3">
      <div className="flex justify-between items-center">
        <p className="text-sm">1-6 maret 2023</p>
        <p className="text-xs bg-superLightGrey px-2 py-1 rounded-xl">
          Obat generik
        </p>
      </div>

      <p className="text-sm text-mainGrey">{obat.name}</p>
      <p className="text-sm text-mainGrey">
        1 {obat.type} {obat.consumptionTime}, {obat.consumptionPerDay} kali
        sehari
      </p>
    </div>
  );
};

export default CardObat;
