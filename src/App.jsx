import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideBar from "./components/SideBar.jsx";
import RoutesManager from "./components/RoutesManager.jsx";

import { AuthProvider } from "./store/AuthProvider.jsx";

function App() {
  const [loginCredential, setLoginCredential] = useState({
    accessToken: "",
    refreshToken: "",
    isLoggedIn: false,
  });

  const navigate = useNavigate();

  function handleLogin(accessToken, refreshToken) {
    setLoginCredential({
      accessToken: accessToken,
      refreshToken: refreshToken,
      isLoggedIn: !!refreshToken,
    });

    navigate("/");
  }

  const ctxValue = {
    accessToken: loginCredential.accessToken,
    refreshToken: loginCredential.refreshToken,
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
              <RoutesManager />
            </div>
          </main>
        </div>
      </AuthProvider.Provider>
    </>
  );
}

export default App;
