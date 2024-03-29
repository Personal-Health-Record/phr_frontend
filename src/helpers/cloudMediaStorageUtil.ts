import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { SetStateAction, useState } from "react";
import { storage } from "../firebaseConfig";
import { useToaster } from "../contexts/ToasterContext";

const useCloudMediaStorageUtils = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);
  const { toggleDiv } = useToaster();

  const handleSelectFile = (files: any) => {
    if (!files) return;

    if (files[0].size < 10000000) {
      setImageFile(files[0]);
      handleUploadFile(files[0]);
    } else {
      toggleDiv("error", "File size to large");
    }
  };

  const handleUploadFile = (file: File | undefined) => {
    if (file) {
      setIsUploading(true);
      const name = file.name;
      const storageRef = ref(storage, `${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot: {
          bytesTransferred: number;
          totalBytes: number;
          state: any;
        }) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error: { message: any }) => {
          toggleDiv("error", error.message);
          setIsUploading(false);
        },
        () => {
          console.log("Upload complete");
          getDownloadURL(uploadTask.snapshot.ref).then(
            (url: SetStateAction<string>) => {
              //url is download url of file
              setDownloadURL(url);
            }
          );
          setIsUploading(false);
        }
      );
    } else {
      toggleDiv("error", "File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);

  return {
    imageFile,
    downloadURL,
    isUploading,
    progressUpload,
    handleSelectFile,
    handleRemoveFile,
  };
};

export default useCloudMediaStorageUtils;
