interface Props {
  image: string;
  name: string;
  specialist: string;
  handleSelectDoctor: () => void;
}

const CardTenkes = ({ image, name, specialist, handleSelectDoctor }: Props) => {
  return (
    <div className="flex shadow-md py-4 px-3 gap-3 rounded-lg justify-center">
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          background: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col flex-1 justify-center gap-1">
        <div className="flex justify-between">
          <p className="text-sm">{name}</p>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 h-4 w-4"
              onChange={handleSelectDoctor}
            />
          </label>
        </div>

        <p className="text-sm text-mainGrey">{specialist}</p>
      </div>
    </div>
  );
};

export default CardTenkes;
