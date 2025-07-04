import { useState } from "react";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";
import PrintIcon from "../../components/icons/PrintIcon.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import TableFilter from "../../components/TableFilter.jsx";
import ReportCard from "./ReportCard.jsx";
import ReportTabMenuBar from "./ReportTabMenuBar.jsx";
import DepartmentWiseTab from "./DepartmentWiseTab.jsx";
import ItemConditionTab from "./ItemConditionTab.jsx";
import AcquisitionTab from "./AcquisitionTab.jsx";

export default function ReportsTab() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  const [activeTabTitle, setActiveTabTitle] = useState("Department-wise");

  function handleDepartmentChange(department, initialValue = "") {
    setSelectedDepartment(department);
  }

  function handleTabChange(title) {
    setActiveTabTitle(title);
  }

  return (
    <>
      <PageHeader title="Reports">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <PrintIcon />
            Print
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <DownloadIcon />
            Export
          </button>
        </div>
      </PageHeader>

      <aside className="flex flex-col md:flex-row items-center gap-4">
        <TableFilter
          dropdownInitialValue="All Departments"
          dropdownMenus={["All Departments", "DoECE"]}
          onStateChange={handleDepartmentChange}
        />
        <div className="text-sm text-muted-foreground">
          Showing data for:{" "}
          <span className="font-medium">{selectedDepartment}</span>
        </div>
      </aside>

      <aside className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ReportCard title="Total Items" cardValue="10" />
        <ReportCard title="Total Value" cardValue="498,891" />
        <ReportCard
          title="Working Items"
          cardValue={
            <>
              7
              <span className="text-sm font-light text-muted-foreground">
                (70%)
              </span>
            </>
          }
        />
        <ReportCard
          title="Needs Attention"
          cardValue={
            <>
              3
              <span className="text-sm font-light text-muted-foreground">
                (30%)
              </span>
            </>
          }
        />
      </aside>

      <section className="space-y-4">
        <ReportTabMenuBar
          activeTabTitle={activeTabTitle}
          handleTabChange={handleTabChange}
        />
        <DepartmentWiseTab hidden={activeTabTitle !== "Department-wise"} />
        <ItemConditionTab hidden={activeTabTitle !== "Condition Breakdown"} />
        <AcquisitionTab hidden={activeTabTitle !== "Acquisition Source"} />
      </section>
    </>
  );
}
