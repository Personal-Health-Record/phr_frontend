import { useState } from "react";
import { User } from "../../../../helpers/constants";
import arrowRight from "../../../../assets/images/arrow-right.png";

interface Props {
  user: User;
  userData: User[];
  setUser: (user: User) => void;
}

const CardPengguna = ({ user, userData, setUser }: Props) => {
  const [showSelectUser, setShowSelectUser] = useState(false);
  const getValue = (renderUser?: User) => {
    if (!renderUser) {
      renderUser = user;
    }

    if (renderUser.relation) {
      return `${renderUser.relation}, ${renderUser.age} tahun, ${renderUser.gender}`;
    }

    return `Pribadi, ${renderUser.age} tahun, ${renderUser.gender}`;
  };

  const renderRelation = () => {
    let userRelations = userData.filter((item) => item.parentId === user.id);

    // have parent
    if (user.parentId) {
      const parentUser = userData.find((item) => item.id === user.parentId)!;
      const otherChild = userData
        .filter((item) => item.parentId === parentUser.id)
        .filter((item) => item.id !== user.id);
      userRelations.push(...[parentUser, ...otherChild]);
    }

    return userRelations.map((item, index) => (
      <div
        className="group/item flex p-2 items-center justify-between hover:bg-slate-100"
        key={index}
        onClick={() => {
          setUser(item);
          setShowSelectUser(false);
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm">{item.name}</p>
          <p className="text-sm text-mainGrey">{getValue(item)}</p>
        </div>

        <span className="invisible group-hover/item:visible">
          <img src={arrowRight} alt="" width={30} height={30} />
        </span>
      </div>
    ));
  };

  return (
    <div>
      <div
        className="flex border-b-2 py-2 items-center justify-between"
        onClick={() => {
          setShowSelectUser(!showSelectUser);
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm">{user.name}</p>
          <p className="text-sm text-mainGrey">{getValue()}</p>
        </div>

        <img src={arrowRight} alt="" width={30} height={30} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 135,
          backgroundColor: "white",
          width: 468,
          zIndex: 1,
        }}
        className="border-1 shadow-lg"
      >
        {showSelectUser && renderRelation()}
      </div>
    </div>
  );
};

export default CardPengguna;
