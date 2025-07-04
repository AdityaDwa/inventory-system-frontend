import { Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar.jsx";
import DashBoard from "./app/Dashboard/DashBoard.jsx";
import Departments from "./app/Departments/Departments.jsx";
import AddDepartment from "./app/Departments/AddDepartment.jsx";
import Rooms from "./app/Rooms/Rooms.jsx";
import Inventory from "./app/Inventory/Inventory.jsx";
import AddItem from "./app/Inventory/AddItem.jsx";
import ReportsTab from "./app/ReportsTab/ReportsTab.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/departments" element={<Departments />} />
              <Route
                path="/departments/add-department"
                element={<AddDepartment />}
              />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/add-item" element={<AddItem />} />
              <Route path="/reports" element={<ReportsTab />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
