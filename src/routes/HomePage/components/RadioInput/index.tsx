type RadioInputProps = {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  onClick: (value: any) => void;
  inputKey: string;
  value: string;
};

const RadioInput = ({
  label,
  options,
  onClick,
  inputKey,
  value,
}: RadioInputProps) => {
  return (
    <div className="flex flex-col gap-3 mt-4 px-4">
      <p className="text-sm text-lightGrey">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => (
          <label className="flex items-center" key={index}>
            <input
              type="radio"
              name={'radioOption_' + inputKey}
              value={option.value}
              className="mr-2"
              onChange={() => {
                onClick(option.value);
              }}
              checked={value == option.value ? true : false}
            />
            <p className="text-sm">{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
