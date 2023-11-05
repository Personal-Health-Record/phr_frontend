type NextVaksinasiProps = {
  type: string;
};

const CardNextVaksinasi = ({ type }: NextVaksinasiProps) => {
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowDateString = tomorrowDate.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col rounded-md shadow-md py-5 px-5 gap-1">
      <p className="text-sm">{tomorrowDateString}</p>
      <p className="text-md text-mainGrey">Vaksin {type}</p>
    </div>
  );
};

export default CardNextVaksinasi;
