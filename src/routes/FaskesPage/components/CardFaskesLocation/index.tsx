import imageLocation from "../../../../assets/images/location.png";

interface Props {
  typeFaskes: string;
  nameFaskes: string;
  onLocationClick: () => void;
  onCardClick: () => void;
}
const CardFaskesLocation = ({
  typeFaskes,
  nameFaskes,
  onLocationClick,
  onCardClick,
}: Props) => {
  return (
    <div className="flex flex-row gap-1 border-b-2 py-3 justify-between items-center">
      <div className="flex flex-col" onClick={onCardClick}>
        <p className="text-sm">{typeFaskes}</p>
        <p className="text-sm text-mainGrey">{nameFaskes}</p>
      </div>

      <div className="pr-3" onClick={onLocationClick}>
        <img src={imageLocation} alt="location" width={30} height={30} />
      </div>
    </div>
  );
};

export default CardFaskesLocation;
