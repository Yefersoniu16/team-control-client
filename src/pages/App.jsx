import { Route, Routes } from "react-router-dom";
import BrandPage from "./BrandPage";
import InventoryPage from "./InventoryPage";
import LayoutPage from "./LayoutPage";
import StateEquipmentPage from "./StateEquipmentPage";
import TypeEquipmentPage from "./TypeEquipmentPage";
import UserPage from "./UserPage";

const ApplicationPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<UserPage />} />
        <Route path="brand" element={<BrandPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="stateEquipment" element={<StateEquipmentPage />} />
        <Route path="typeEquipment" element={<TypeEquipmentPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="*" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default ApplicationPage;
