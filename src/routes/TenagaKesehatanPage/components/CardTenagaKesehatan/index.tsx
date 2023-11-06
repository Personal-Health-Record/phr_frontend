import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  location: string;
  specialist: string;
  image: string;
  sip: number;
}

const CardTenagaKesehatan = ({
  location,
  name,
  specialist,
  image,
  sip,
}: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/tenaga/profile?sip=${sip}`);
  };

  return (
    <div
      className="flex shadow-md py-4 px-3 gap-3 rounded-lg justify-center"
      onClick={handleOnClick}
    >
      <div>
        <img src={image} alt="" width={50} height={50} />
      </div>

      <div className="flex flex-col flex-1 justify-center gap-1">
        <div className="flex justify-between">
          <p className="text-sm">{name}</p>
          <p className="text-xs bg-superLightGrey py-1 px-3 rounded-xl">
            {location}
          </p>
        </div>

        <p className="text-sm text-mainGrey">{specialist}</p>
      </div>
    </div>
  );
};

export default CardTenagaKesehatan;
