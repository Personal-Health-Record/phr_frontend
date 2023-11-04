import { useNavigate } from "react-router-dom";
import { menuNavbar } from "./constants";

const BottomNavbarDoctor = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-4 py-2 flex justify-between bg-white filter drop-shadow-sm"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.12))" }}
    >
      {menuNavbar.map((menu, index) => (
        <div
          className="flex flex-col text-white justify-center items-center gap-2"
          key={index}
          onClick={() => {
            navigate(menu.route);
          }}
        >
          <img src={menu.icon} alt="" width={25} height={25} />
          <p className="text-xs text-mainGrey">{menu.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbarDoctor;
