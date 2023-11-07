import { Bar } from 'react-chartjs-2';
import {
  dataAktifitasFisik,
  dataAktifitasFisikBulanan,
  dataDarah,
  dataDarahBulanan,
  dataWaktuTidur,
  dataWaktuTidurBulanan,
} from '../../constants';

interface Props {
  activeIdx: number;
}

const BarChartSection = ({ activeIdx }: Props) => {
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
