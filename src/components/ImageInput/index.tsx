type FileInputProps = {
  label: string;
  handleSelectFile: (files: FileList | null) => void;
};

const FileInput = ({ label, handleSelectFile }: FileInputProps) => {
  return (
    <div className="flex flex-col gap-3 mt-4 px-8">
      <p className="text-sm text-lightGrey">{label}</p>
      <div className="flex flex-wrap gap-3">
        <input
          type="file"
          placeholder="Select file to upload"
          accept="image/*"
          onChange={(files) => handleSelectFile(files.target.files)}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default FileInput;
