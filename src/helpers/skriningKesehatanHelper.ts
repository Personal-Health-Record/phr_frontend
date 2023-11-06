import { useEffect, useState } from "react";
import { Skrining, dummySkriningList } from "../routes/ScreeningPage/constants";

export const useGetSkriningKesehatanList = () => {
  const [listSkrining, setListSkrining] = useState<Skrining[]>();

  useEffect(() => {
    if (!listSkrining && typeof window !== "undefined") {
      const listSkriningStorage = localStorage.getItem("listSkriningStorage");
      if (listSkriningStorage) {
        setListSkrining(JSON.parse(listSkriningStorage));
        return;
      }

      setListSkrining(dummySkriningList);
    }
  }, [listSkrining]);

  return {
    listSkrining,
  };
};

export const addSkriningKesehatan = (
  newSkriningKesehatan: Skrining,
  existingSkriningKesehatan: Skrining[]
) => {
  const updatedSkriningKesehatan =
    existingSkriningKesehatan!.concat(newSkriningKesehatan);

  localStorage.setItem(
    "listSkriningStorage",
    JSON.stringify(updatedSkriningKesehatan)
  );
};

export const getSkriningById = (id: number) => {
  const listSkriningStorage = localStorage.getItem("listSkriningStorage");
  if (listSkriningStorage) {
    const listSkrining: Skrining[] = JSON.parse(listSkriningStorage);

    return listSkrining?.find((skrining) => skrining.id === id);
  }

  return null;
};
