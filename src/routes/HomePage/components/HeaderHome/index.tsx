import { useGetLoggedInUser } from "../../../../helpers/userDataHelper";

const HeaderHome = () => {
  const { loggedInUser } = useGetLoggedInUser();

  console.log({ loggedInUser });

  return (
    <div className="flex border-b-2 py-3 px-4 items-center gap-3">
      <img
        src={loggedInUser?.profilePicture}
        alt=""
        className="rounded-full h-14 w-14 object-cover"
      />
      <h3 className="text-2xl font-bold text-mainGrey">
        Halo, {loggedInUser?.name}
      </h3>
    </div>
  );
};

export default HeaderHome;
