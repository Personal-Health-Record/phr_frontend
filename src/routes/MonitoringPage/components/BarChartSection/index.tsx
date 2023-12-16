import { Bar } from "react-chartjs-2";
import {
  dataAktifitasFisikBulanan,
  dataDarah,
  dataDarahBulanan,
  dataWaktuTidur,
  dataWaktuTidurBulanan,
} from "../../constants";
import { useGetAktifitasFisik } from "../../../../helpers/aktifitasFisikHelper";
import { AktifitasFisik } from "../../MonitoringAktifitasPage/constants";

interface Props {
  activeIdx: number;
  startDate: Date;
  endDate: Date;
}

const BarChartSection = ({ activeIdx, endDate, startDate }: Props) => {
  const { aktifitasFisik } = useGetAktifitasFisik();

  const filteredData =
    aktifitasFisik?.filter((item) => {
      const date = new Date(parseInt(item.timestamp));
      return date >= startDate && date <= endDate;
    }) || [];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const getDayIndex = (day: string): number => {
    return daysOfWeek.findIndex((d) => d === day);
  };

  const dataAktifitasFisik = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "menit",
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const data: number[] = new Array(7).fill(0);

  filteredData.forEach((item: AktifitasFisik) => {
    const date = new Date(parseInt(item.timestamp));
    const dayIndex = getDayIndex(daysOfWeek[date.getDay()]);

    if (dayIndex !== -1) {
      data[dayIndex] += item.duration;
    }
  });

  console.log({ filteredData });

  dataAktifitasFisik.datasets[0].data = data;

  return (
    <>
      <div className="flex flex-col p-5 shadow-md rounded-xl">
        <p className="text-sm text-mainGrey font-bold mb-1">Aktivitas Fisik</p>
        <p className="text-xs text-lightGrey mb-3">Target harian: 30 menit</p>

        <Bar
          data={
            activeIdx === 1 ? dataAktifitasFisik : dataAktifitasFisikBulanan
          }
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 35,
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col p-5 shadow-md rounded-xl">
        <p className="text-sm text-mainGrey font-bold mb-1">Waktu tidur</p>
        <p className="text-xs text-lightGrey mb-3">Target harian: 8 jam</p>

        <Bar
          data={activeIdx === 1 ? dataWaktuTidur : dataWaktuTidurBulanan}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 15,
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col p-5 shadow-md rounded-xl">
        <p className="text-sm text-mainGrey font-bold mb-1">Tekanan Darah</p>

        <Bar
          data={activeIdx === 1 ? dataDarah : dataDarahBulanan}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 150,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default BarChartSection;
