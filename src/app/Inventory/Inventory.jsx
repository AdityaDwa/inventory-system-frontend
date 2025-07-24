import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";
import FilterIcon from "../../components/icons/FilterIcon.jsx";
import SearchIcon from "../../components/icons/SearchIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import NoTableData from "../../components/NoTableData.jsx";
import Pagination from "../../components/Pagination.jsx";
import ItemData from "./ItemData.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import { getDateWithoutTime } from "../../utils/formatter.js";

export default function Inventory() {
  const [itemRowData, setItemRowData] = useState([]);
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchItemData() {
      try {
        const response = await fetch("/api/v1/items/showAllItems", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setItemRowData(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItemData();
  }, []);

  return (
    <>
      <PageHeader title="Inventory">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <DownloadIcon />
            Export
          </button>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
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
            View and manage all inventory items across the department
          </div>
        </header>
        <section className="p-6 pt-0">
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 py-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px]">
                <FilterIcon />
                Advanced Filter
              </button>
              <div className="relative w-full md:w-auto md:flex-1">
                <SearchIcon customStyle={{ top: "0.75rem" }} />
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-8"
                  placeholder="Search items by name"
                />
              </div>
            </div>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Name &amp; Sub-category
                    </th>
                    <th className="h-12 px-4 text-left font-medium text-muted-foreground">
                      Room
                    </th>
                    <th className="h-12 px-4 text-center font-medium text-muted-foreground">
                      Date Acquired
                    </th>
                    <th className="h-12 px-4 text-center font-medium text-muted-foreground">
                      Source
                    </th>
                    <th className="h-12 px-4 text-center font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="h-12 px-4 font-medium text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {itemRowData.length !== 0 ? (
                    itemRowData.map((eachItem) => (
                      <ItemData
                        key={eachItem._id}
                        name={eachItem.name}
                        subCategory={eachItem.subCategory.name}
                        dateAcquired={getDateWithoutTime(eachItem.createdAt)}
                        source={eachItem.source}
                        status={eachItem.status}
                      />
                    ))
                  ) : (
                    <NoTableData tableType="item" />
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {itemRowData !== 0 ? (
            <Pagination tableType="items" totalNum={itemRowData.length} />
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
}
