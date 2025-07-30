import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import EditIcon from "../../components/icons/EditIcon.jsx";
import DeleteIcon from "../../components/icons/DeleteIcon.jsx";
import PackageIcon from "../../components/icons/PackageIcon.jsx";
import FloorIcon from "../../components/icons/FloorIcon.jsx";
import RoomIcon from "../../components/icons/RoomIcon.jsx";
import CalenderIcon from "../../components/icons/CalenderIcon.jsx";
import ShoppingCartIcon from "../../components/icons/ShoppingCartIcon.jsx";
import ClipboardIcon from "../../components/icons/ClipboardIcon.jsx";
import HashtagIcon from "../../components/icons/HashtagIcon.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

import {
  currencyFormatter,
  dateFormatter,
  getDateWithoutTime,
} from "../../utils/formatter.js";

export default function ItemDetail() {
  const [historyTableData, setHistoryTableData] = useState([]);
  const { accessToken } = useContext(AuthProvider);

  const { state } = useLocation();
  const { itemId } = useParams();

  const item = state?.rowData;
  if (!item) {
  }

  useEffect(() => {
    async function fetchHistoryTableData() {
      try {
        const fetchUrl = `/api/v1/items/${itemId}/history`;

        const response = await fetch(fetchUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setHistoryTableData(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchHistoryTableData();
  }, []);

  const customClass =
    item.itemSource !== "Purchase"
      ? "text-foreground"
      : "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ";

  const statusColor =
    item.itemStatus === "Working"
      ? "text-green-600"
      : item.itemStatus === "Repairable"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <>
      <header className="flex items-center gap-2">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          to="/inventory"
        >
          <ArrowLeftIcon />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Item Details</h2>
      </header>
      <section className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-2/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold tracking-tight text-2xl">
                    {item.itemName}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-sidebar/95">
                      Make/Model No:{" "}
                    </span>
                    {item.itemModelNumberOrMake}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <EditIcon cssClass="mr-2 h-4 w-4" />
                    Edit
                  </button>
                  <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
                    <DeleteIcon cssClass="mr-2 h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </header>
            <article className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <PackageIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Category:</span>
                    {item.itemCategory}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FloorIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span class="font-medium">Floor:</span>
                    {item.itemFloor}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClipboardIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Status:</span>
                    <span className={`font-semibold ${statusColor}`}>
                      {item.itemStatus}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <CalenderIcon />
                    <span className="font-medium">Date Acquired:</span>
                    {dateFormatter(item.itemAcquiredDate)}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <HashtagIcon />
                    <span className="font-medium">Item ID:</span>
                    {item.itemSerialNumber}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <RoomIcon />
                    <span className="font-medium">Room:</span>
                    {item.itemRoom}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground font-bold">रु</span>
                    <span className="font-medium pl-1">Cost:</span>Rs.{" "}
                    {currencyFormatter(item.itemCost)}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ShoppingCartIcon />
                    <span className="font-medium">Source:</span>
                    <div
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${customClass}`}
                    >
                      {item.itemSource}
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 bg-border h-[1px] w-full my-4"></div>
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">
                  {item.itemDescription !== "" ? (
                    item.itemDescription
                  ) : (
                    <span className="italic">No description added</span>
                  )}
                </p>
              </div>
            </article>
          </div>

          <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Item History
                </div>
                <div className="text-sm text-muted-foreground">
                  History of changes and movements for this item
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="relative w-full rounded-t-md">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/5 border-b transition-colors flex justify-between items-center gap-4 px-4 rounded-t-md">
                        <th className="h-12 font-bold text-sidebar/95 flex justify-start items-center w-24">
                          Date
                        </th>
                        <th className="h-12 font-bold text-sidebar/95 flex justify-start w-[7.5rem] items-center">
                          Action
                        </th>
                        <th className="h-12 font-bold text-sidebar/95 flex justify-center w-[5.75rem] items-center">
                          Status
                        </th>
                        <th className="h-12 font-bold text-sidebar/95 flex justify-start w-[17.5rem] items-center">
                          Location
                        </th>
                        <th className="h-12 font-bold text-sidebar/95 flex justify-start w-[4.8rem] items-center">
                          User
                        </th>
                      </tr>
                    </thead>

                    <tbody className="[&_tr:last-child]:border-0">
                      {historyTableData.length !== 0
                        ? historyTableData.map((historyLog, index) => {
                            const status = historyLog.changes.status.to;

                            const statusColor =
                              status === "Working"
                                ? "text-green-600"
                                : status === "Repairable"
                                ? "text-yellow-600"
                                : "text-red-600";
                            return (
                              <tr
                                className="border-b transition-colors text-slate-600 flex justify-between items-center gap-4 p-4 h-[4.5rem]"
                                key={index}
                              >
                                <td className="text-left w-24">
                                  {getDateWithoutTime(historyLog.createdAt)}
                                </td>
                                <td className="text-left w-[7.5rem] capitalize">
                                  {historyLog.action}
                                </td>
                                <td
                                  className={`text-center w-[5.75rem] font-semibold ${statusColor}`}
                                >
                                  {historyLog.changes.status.to}
                                </td>
                                <td>
                                  <div className="flex flex-col">
                                    <div className="justify-start w-[17.5rem]">
                                      {historyLog.changes.room.to}
                                    </div>

                                    <div className="text-xs text-muted-foreground">
                                      ({historyLog.changes.floor.to})
                                    </div>
                                  </div>
                                </td>
                                <td className="text-left w-[4.8rem]">
                                  {historyLog.performedByName}
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside className="md:w-1/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Quick Actions
              </div>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start">
                <ClipboardIcon cssClass="mr-2 h-4 w-4" />
                Update Status
              </button>
              <button class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full justify-start">
                <RoomIcon cssClass="mr-2 h-4 w-4" />
                Move Items
              </button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
