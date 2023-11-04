import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import HomePage from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
