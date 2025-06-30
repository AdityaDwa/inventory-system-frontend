import DashBoardTabs from "./DashBoardTabs.jsx";
import DashBoardOverview from "./DashBoardOverview.jsx";
import DashboardDepartment from "./DashBoardDepartment.jsx";
import DashBoardActivity from "./DashBoardActivity.jsx";

export default function DashBoard() {
  return (
    <section className="flex-1 overflow-auto">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <DashBoardTabs />
        <DashBoardOverview hidden={false} />
        <DashboardDepartment hidden={true} />
        <DashBoardActivity hidden={true} />
      </div>
    </section>
  );
}
