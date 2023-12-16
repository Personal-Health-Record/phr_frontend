import {
  useGetAktifitasFisik,
  useGetAktifitasTargetFisik,
} from "../../../../helpers/aktifitasFisikHelper";
import { AktifitasFisik } from "../../MonitoringAktifitasPage/constants";

interface Props {
  startDate: Date;
  endDate: Date;
}

const CardAktifitasFisik = ({ startDate, endDate }: Props) => {
  const { aktifitasFisik } = useGetAktifitasFisik();
  const { durasiTargetFisik } = useGetAktifitasTargetFisik();

  const totalTargetTercapai =
    aktifitasFisik?.filter((item) => {
      return item.duration >= durasiTargetFisik;
    }).length || 0;

  const filteredData =
    aktifitasFisik?.filter((item) => {
      const date = new Date(parseInt(item.timestamp));
      return date >= startDate && date <= endDate;
    }) || [];

  const totalDuration: number = filteredData.reduce(
    (acc: number, item: AktifitasFisik) => acc + item.duration,
    0
  );

  const averageDuration: number =
    filteredData.length > 0 ? totalDuration / filteredData.length : 0;

  const formattedAverageDuration: string = averageDuration.toFixed(0);

  return (
    <div className="flex flex-col p-5 shadow-md rounded-xl">
      <p>Aktivitas Fisik</p>
      <div className="flex items-end gap-2 mt-3">
        <p className="text-mainBlue text-3xl">{formattedAverageDuration}</p>
        <p className="text-lightGrey">menit/hari</p>
      </div>
      <div className="bg-slate-200 mt-3" style={{ height: "1px" }} />

      <div className="flex flex-col">
        <div className="flex gap-1 mt-3">
          <p className="text-xs text-lightGrey">Jumlah target tercapai: </p>
          <p className="font-bold text-xs text-lightGrey">
            {totalTargetTercapai} hari
          </p>
        </div>
        <div className="flex gap-1 mt-2">
          <p className="text-xs text-lightGrey">Total durasi: </p>
          <p className="font-bold text-xs text-lightGrey">
            {totalDuration} menit
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAktifitasFisik;
