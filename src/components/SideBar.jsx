import PackageIcon from "./icons/PackageIcon.jsx";
import DashboardIcon from "./icons/DashboardIcon.jsx";
import BuildingIcon from "./icons/BuildingIcon.jsx";
import HouseIcon from "./icons/HouseIcon.jsx";
import TextFileIcon from "./icons/TextFileIcon.jsx";
import ClipboardIcon from "./icons/ClipboardIcon.jsx";
import ColumnChartIcon from "./icons/ColumnChartIcon.jsx";
import PlusIcon from "./icons/PlusIcon.jsx";
import LogoutIcon from "./icons/LogoutIcon.jsx";

export default function SideBar() {
  return (
    <aside className="flex sticky top-0 h-screen w-64 flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center px-4">
        <a className="flex items-center gap-2 text-2xl font-semibold" href="/">
          <PackageIcon cssClass="h-8 w-8" />
          <span>Pulchowk IMS</span>
        </a>
      </div>
      <div className="shrink-0 bg-border w-[90%] h-[0.5px] mx-auto"></div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 space-y-1">
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground bg-sidebar-foreground/20 text-sidebar-foreground font-medium"
            href="/"
          >
            <DashboardIcon />
            Dashboard
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/departments"
          >
            <BuildingIcon />
            Departments
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/rooms"
          >
            <HouseIcon />
            Rooms
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/inventory"
          >
            <PackageIcon cssClass="h-[1.2rem] w-[1.2rem]" />
            Inventory
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/inventory"
          >
            <TextFileIcon />
            Reports
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/inventory"
          >
            <ClipboardIcon />
            Activity Log
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/inventory"
          >
            <ColumnChartIcon />
            Analytics
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground text-sidebar-foreground/80"
            href="/inventory"
          >
            <PlusIcon />
            Add New Item
          </a>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 rounded-lg border border-sidebar-border p-4 bg-sidebar-foreground/5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            A
          </div>
          <div>
            <p className="text-xs font-medium">Admin User</p>
            <p className="text-xs text-sidebar-foreground/70">
              admin@pcampus.edu
            </p>
          </div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-9 rounded-md px-3 mt-4 w-full gap-1 bg-sidebar-foreground/10 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-foreground/20 hover:text-sidebar-foreground">
          <LogoutIcon />
          Log out
        </button>
      </div>
    </aside>
  );
}
