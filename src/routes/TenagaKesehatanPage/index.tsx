import { useEffect, useState } from "react";
import { useGetTenagaKesehatanList } from "../../helpers/tenagaKesehatanHelper";
import Header from "../HomePage/components/Header";
import SearchBar from "./components/SearchBar";
import CardTenagaKesehatan from "./components/CardTenagaKesehatan";

const TenagaMedisPage = () => {
  const { listTenkes } = useGetTenagaKesehatanList();
  const [filteredTenkes, setFilteredTenkes] = useState(listTenkes);

  const handleOnSearch = (name: string) => {
    if (!name) {
      setFilteredTenkes(listTenkes);
      return;
    }

    const filteredItem = listTenkes?.filter((tenkes) =>
      tenkes.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredTenkes(filteredItem);
  };

  useEffect(() => {
    setFilteredTenkes(listTenkes);
  }, [listTenkes]);

  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <SearchBar onSearch={handleOnSearch} />

        {filteredTenkes?.length === 0 && (
          <p className="text-center mt-5">Tenaga Kesehatan tidak ditemukan</p>
        )}

        {filteredTenkes?.map((docter, index) => (
          <CardTenagaKesehatan
            key={index}
            image={docter.profilePicture}
            location={docter.practiceLocation.name}
            name={docter.name}
            specialist={docter.specialist}
            sip={docter.sip}
          />
        ))}
      </div>
    </div>
  );
};

export default TenagaMedisPage;
