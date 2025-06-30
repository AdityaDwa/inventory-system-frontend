import SideBar from "./components/SideBar.jsx";
import DashBoard from "./app/Dashboard/DashBoard.jsx";
import Departments from "./app/Departments/Departments.jsx";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            {/* <DashBoard /> */}
            <Departments />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
