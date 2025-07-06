import { useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import SideBar from "./components/SideBar.jsx";
import LoginPage from "./app/Login/LoginPage.jsx";
import DashBoard from "./app/Dashboard/DashBoard.jsx";
import Departments from "./app/Departments/Departments.jsx";
import AddDepartment from "./app/Departments/AddDepartment.jsx";
import Rooms from "./app/Rooms/Rooms.jsx";
import Inventory from "./app/Inventory/Inventory.jsx";
import AddItem from "./app/Inventory/AddItem.jsx";
import ReportsTab from "./app/ReportsTab/ReportsTab.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import { AuthProvider } from "./store/AuthProvider.jsx";

function App() {
  const [loginCredential, setLoginCredential] = useState({
    accessToken: "",
    refreshToken: "",
    role: "",
    id: "",
    username: "",
    email: "",
    isLoggedIn: false,
  });

  const navigate = useNavigate();

  function handleLogin(accessToken, refreshToken, role, id, username, email) {
    setLoginCredential({
      accessToken: accessToken,
      refreshToken: refreshToken,
      role: role,
      id: id,
      username: username,
      email: email,
      isLoggedIn: !!refreshToken,
    });

    navigate("/");
  }

  const ctxValue = {
    accessToken: loginCredential.accessToken,
    refreshToken: loginCredential.refreshToken,
    role: loginCredential.role,
    id: loginCredential.id,
    username: loginCredential.username,
    email: loginCredential.email,
    isLoggedIn: loginCredential.isLoggedIn,
    handleLogin: handleLogin,
  };

  return (
    <>
      <AuthProvider.Provider value={ctxValue}>
        <div className="flex min-h-screen">
          {loginCredential.isLoggedIn && <SideBar />}
          <main className="flex-1 overflow-auto">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 h-full">
              <Routes>
                <Route
                  path="/login"
                  element={
                    !loginCredential.isLoggedIn ? (
                      <LoginPage handleLogin={handleLogin} />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/"
                  element={
                    loginCredential.isLoggedIn ? (
                      <DashBoard />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/departments"
                  element={
                    loginCredential.isLoggedIn ? (
                      <Departments />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/departments/add-department"
                  element={
                    loginCredential.isLoggedIn ? (
                      <AddDepartment />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/rooms"
                  element={
                    loginCredential.isLoggedIn ? (
                      <Rooms />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/inventory"
                  element={
                    loginCredential.isLoggedIn ? (
                      <Inventory />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/inventory/add-item"
                  element={
                    loginCredential.isLoggedIn ? (
                      <AddItem />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/reports"
                  element={
                    loginCredential.isLoggedIn ? (
                      <ReportsTab />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </AuthProvider.Provider>
    </>
  );
}

export default App;
