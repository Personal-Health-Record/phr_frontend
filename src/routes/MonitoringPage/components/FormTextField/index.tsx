interface Props {
  title: string;
}
// apus nih
const FormTextField = ({ title }: Props) => {
  return (
    <div className="relative">
      <label
        htmlFor="input"
        className="absolute left-4 -top-3 bg-white px-1 text-gray-600 text-sm"
      >
        {title}
      </label>
      <input
        type="text"
        id="input"
        className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
      />
    </div>
  );
};

export default FormTextField;
