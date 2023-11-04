import { useNavigate } from "react-router-dom";

interface Props {
  menu: {
    icon: string;
    title: string;
    url: string;
  };
}

const MainMenuIcon = ({ menu }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(menu.url);
  };

  return (
    <div
      className="flex flex-col items-center gap-2 text-center w-20 mb-5"
      onClick={handleOnClick}
    >
      <img src={menu?.icon} alt="" width={50} height={50} />
      <p className="text-xs">{menu?.title}</p>
    </div>
  );
};

export default MainMenuIcon;
