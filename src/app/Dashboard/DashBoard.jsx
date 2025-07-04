import { useState } from "react";

import PageHeader from "../../components/PageHeader.jsx";
import DashBoardTabs from "./DashBoardTabs.jsx";
import DashBoardOverview from "./DashBoardOverview.jsx";
import DashboardDepartment from "./DashBoardDepartment.jsx";
import DashBoardActivity from "./DashBoardActivity.jsx";

export default function DashBoard() {
  const [activeTabTitle, setActiveTabTitle] = useState("Overview");

  function handleTabChange(title) {
    setActiveTabTitle(title);
  }

  return (
    <>
      <PageHeader title="Dashboard" />
      <section className="space-y-4">
        <DashBoardTabs
          activeTabTitle={activeTabTitle}
          handleTabChange={handleTabChange}
        />
        <DashBoardOverview hidden={activeTabTitle !== "Overview"} />
        <DashboardDepartment hidden={activeTabTitle !== "Departments"} />
        <DashBoardActivity hidden={activeTabTitle !== "Activity"} />
      </section>
    </>
  );
}
