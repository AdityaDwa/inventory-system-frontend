import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "../app/Login/LoginPage.jsx";
import DashBoard from "../app/Dashboard/DashBoard.jsx";
import Rooms from "../app/Rooms/Rooms.jsx";
import RoomDetail from "../app/Rooms/RoomDetail.jsx";
import Inventory from "../app/Inventory/Inventory.jsx";
import AddItem from "../app/Inventory/AddItem.jsx";
import ItemDetail from "../app/Inventory/ItemDetail.jsx";
import Analytics from "../app/Analytics/Analytics.jsx";
import ActivityLog from "../app/ActivityLog/ActivityLog.jsx";
import ErrorPage from "./ErrorPage.jsx";

import { AuthProvider } from "../store/AuthProvider.jsx";

export default function RoutesManager() {
  const { isLoggedIn, handleLogin } = useContext(AuthProvider);

  const ROUTES_CONFIG = [
    { path: "/", component: <DashBoard /> },
    { path: "/rooms", component: <Rooms /> },
    { path: "/rooms/room/:roomId", component: <RoomDetail /> },
    { path: "/inventory", component: <Inventory /> },
    { path: "/inventory/add-item", component: <AddItem /> },
    { path: "/inventory/item/:itemId", component: <ItemDetail /> },
    { path: "/analytics", component: <Analytics /> },
    { path: "/activity", component: <ActivityLog /> },
    // { path: "/categories", component: <ActivityLog /> },
    // { path: "/users", component: <ActivityLog /> },
  ];

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <LoginPage handleLogin={handleLogin} />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {ROUTES_CONFIG.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {route.component}
              </ProtectedRoute>
            }
          />
        );
      })}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
