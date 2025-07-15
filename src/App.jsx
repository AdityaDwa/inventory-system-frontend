import { useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import SideBar from "./components/SideBar.jsx";
import LoginPage from "./app/Login/LoginPage.jsx";
import DashBoard from "./app/Dashboard/DashBoard.jsx";
import Rooms from "./app/Rooms/Rooms.jsx";
import Inventory from "./app/Inventory/Inventory.jsx";
import AddItem from "./app/Inventory/AddItem.jsx";
import Analytics from "./app/Analytics/Analytics.jsx";
import ActivityLog from "./app/ActivityLog/ActivityLog.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import { AuthProvider } from "./store/AuthProvider.jsx";
import Table from "./components/Table.jsx";

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
      {/* <AuthProvider.Provider value={ctxValue}>
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
                  path="/analytics"
                  element={
                    loginCredential.isLoggedIn ? (
                      <Analytics />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/activity"
                  element={
                    loginCredential.isLoggedIn ? (
                      <ActivityLog />
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
      </AuthProvider.Provider> */}
      <div className="flex min-h-screen">
        <main className="flex-1 overflow-auto">
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 h-full">
            <Table tableName="room" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
