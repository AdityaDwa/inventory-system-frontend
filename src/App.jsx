import SideBar from "./components/SideBar.jsx";
import DashBoard from "./app/Dashboard/DashBoard.jsx";

function App() {
  return (
    <>
      <main className="flex min-h-screen">
        <SideBar />
        <DashBoard />
      </main>
    </>
  );
}

export default App;
