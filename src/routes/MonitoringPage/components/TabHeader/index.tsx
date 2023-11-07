import { Dispatch, SetStateAction } from "react";

interface Props {
  activeIdx: number;
  handleClick: Dispatch<SetStateAction<number>>;
}

const TabHeader = ({ activeIdx, handleClick }: Props) => {
  return (
    <div className="flex justify-around">
      <p
        className={`text-sm border-b-2 w-full ${
          activeIdx === 1
            ? "border-mainBlue text-mainBlue"
            : "border-lightBlue text-mainGrey"
        } text-center text-mainBlue font-bold align-middle py-3`}
        onClick={() => handleClick(1)}
      >
        MINGGUAN
      </p>
      <p
        className={`text-sm border-b-2 w-full ${
          activeIdx === 2
            ? "border-mainBlue text-mainBlue"
            : "border-lightBlue text-mainGrey"
        } text-center text-mainBlue font-bold align-middle py-3`}
        onClick={() => handleClick(2)}
      >
        BULANAN
      </p>
    </div>
  );
};

export default TabHeader;
