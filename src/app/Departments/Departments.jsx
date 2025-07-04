import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader.jsx";
import ActionModal from "../../components/ActionModal.jsx";

import PlusIcon from "../../components/icons/PlusIcon.jsx";
import DepartmentData from "./DepartmentData.jsx";
import NoTableData from "../../components/NoTableData.jsx";
import Pagination from "../../components/Pagination.jsx";

const isDataAvailable = true;

export default function Departments() {
  const [actionModal, setActionModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActionModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleActionModal() {
    setActionModal((prevState) => !prevState);
  }

  return (
    <>
      <PageHeader title="Departments">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          to="/departments/add-department"
        >
          <PlusIcon cssClass="mr-2 h-4 w-4" />
          Add Department
        </Link>
      </PageHeader>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            All Departments
          </div>
          <div className="text-sm text-muted-foreground">
            Manage departments, floors and rooms across the college
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center py-4">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm max-w-sm"
              placeholder="Search departments..."
            />
          </div>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Department
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Floors
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Rooms
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Total Items
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Items Status
                  </th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {isDataAvailable ? (
                  <>
                    <DepartmentData toggleActionModal={toggleActionModal} />
                    <DepartmentData toggleActionModal={toggleActionModal} />
                    <DepartmentData toggleActionModal={toggleActionModal} />
                    <DepartmentData toggleActionModal={toggleActionModal} />
                    <DepartmentData toggleActionModal={toggleActionModal} />
                    <DepartmentData toggleActionModal={toggleActionModal} />
                  </>
                ) : (
                  <NoTableData tableType="department" />
                )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              position: "relative",
              bottom: `${4.05 * 5 + 0.75}rem`,
            }}
          >
            {actionModal && <ActionModal />}
          </div>
          {isDataAvailable ? <Pagination tableType="departments" /> : ""}
        </div>
      </div>
    </>
  );
}
