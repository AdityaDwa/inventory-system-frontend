import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import FilterIcon from "../../components/icons/FilterIcon.jsx";
import SearchIcon from "../../components/icons/SearchIcon.jsx";

import ItemData from "./ItemData.jsx";
import NoTableData from "../../components/NoTableData.jsx";
import ActionModal from "../../components/ActionModal.jsx";
import Pagination from "../../components/Pagination.jsx";
import TableFilter from "../../components/TableFilter.jsx";

const isDataAvailable = true;

export default function Inventory() {
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
      <PageHeader title="Inventory">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <DownloadIcon />
            Export
          </button>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            to="/inventory/add-item"
          >
            <PlusIcon cssClass="mr-2 h-4 w-4" />
            Add Item
          </Link>
        </div>
      </PageHeader>
      <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            All Items
          </div>
          <div className="text-sm text-muted-foreground">
            View and manage all inventory items across departments
          </div>
        </header>
        <section className="p-6 pt-0">
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 py-4">
              <TableFilter
                dropdownInitialValue="All Categories"
                dropdownMenus={[
                  "All Categories",
                  "Computers",
                  "Furniture",
                  "Lab Equipment",
                  "Electronics",
                  "Stationery",
                  "Tools",
                ]}
                widthSize="180px"
              />
              <TableFilter
                dropdownInitialValue="All Departments"
                dropdownMenus={["All Departments", "DoECE"]}
                widthSize="180px"
              />
              <TableFilter
                dropdownInitialValue="All Status"
                dropdownMenus={[
                  "All Status",
                  "Working",
                  "Repairable",
                  "Out of Order",
                ]}
                widthSize="180px"
              />
              <div className="relative w-full md:w-auto md:flex-1">
                <SearchIcon customStyle={{ top: "0.75rem" }} />
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-8"
                  placeholder="Search items..."
                />
              </div>
            </div>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Name &amp; Model
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Department
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Cost
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Date Acquired
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Source
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Status
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {isDataAvailable ? (
                    <>
                      <ItemData toggleActionModal={toggleActionModal} />
                      <ItemData toggleActionModal={toggleActionModal} />
                      <ItemData toggleActionModal={toggleActionModal} />
                      <ItemData toggleActionModal={toggleActionModal} />
                      <ItemData toggleActionModal={toggleActionModal} />
                      <ItemData toggleActionModal={toggleActionModal} />
                    </>
                  ) : (
                    <NoTableData tableType="item" />
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              bottom: `${4.55 * 5 + 0.75}rem`,
            }}
          >
            {actionModal && <ActionModal />}
          </div>
          {isDataAvailable ? <Pagination tableType="items" /> : ""}
        </section>
      </section>
    </>
  );
}
