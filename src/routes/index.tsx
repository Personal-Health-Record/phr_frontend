import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../helpers/PrivateRoutes";
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
