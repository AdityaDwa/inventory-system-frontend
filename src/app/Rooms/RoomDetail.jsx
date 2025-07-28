import { Link, useLocation, useParams } from "react-router-dom";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import EditIcon from "../../components/icons/EditIcon.jsx";
import DeleteIcon from "../../components/icons/DeleteIcon.jsx";

import FloorIcon from "../../components/icons/FloorIcon.jsx";
import UserIcon from "../../components/icons/UserIcon.jsx";
import RoomIcon from "../../components/icons/RoomIcon.jsx";
import PackageIcon from "../../components/icons/PackageIcon.jsx";
import CircleCheckIcon from "../../components/icons/CircleCheckIcon.jsx";
import PenNibIcon from "../../components/icons/PenNibIcon.jsx";
import AlertIcon from "../../components/icons/AlertIcon.jsx";

export default function RoomDetail() {
  const { state } = useLocation();
  const { roomId } = useParams();
  const room = state?.rowData;

  if (!room) {
  }

  return (
    <>
      <header className="flex items-center gap-2">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          to="/rooms"
        >
          <ArrowLeftIcon />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Room Details</h2>
      </header>

      <section className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-2/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[183.6px]">
            <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold tracking-tight text-2xl">
                    {room.roomName}
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
                    <FloorIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Floor:</span>
                    {room.roomFloorName}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <UserIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Allotted To:</span>
                    {room.allottedTo === undefined ? " - " : room.allottedTo}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <RoomIcon />
                    <span className="font-medium">Room Type:</span>
                    {room.roomTypeName}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PackageIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Total Items:</span>
                    {room.totalItems}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </aside>

        <aside className="md:w-1/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col p-3">
              <h3 className="font-semibold">Status Breakdown</h3>
            </div>
            <div className="space-y-4 p-3 pt-0">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CircleCheckIcon />
                    Working
                  </div>
                  <div>1 / 1</div>
                </div>
                <div className="relative w-full overflow-hidden rounded-full bg-muted h-1.5">
                  <div
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - 100}%)` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <PenNibIcon />
                    Repairable
                  </div>
                  <div>0 / 1</div>
                </div>
                <div className="relative w-full overflow-hidden rounded-full bg-muted h-1.5">
                  <div
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - 0}%)` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertIcon />
                    Not-working
                  </div>
                  <div>0 / 1</div>
                </div>
                <div className="relative w-full overflow-hidden rounded-full bg-muted h-1.5">
                  <div
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - 0}%)` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section>
        <div className="relative w-full rounded-lg border bg-card text-card-foreground shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b transition-colors flex justify-between items-center gap-4 px-4 rounded-t-md">
                <th className="h-12 font-bold text-sidebar/95 flex justify-center items-center w-16">
                  S.N
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-start w-80 items-center">
                  Name
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-start w-56 items-center">
                  Make/Model No.
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-center w-[8.5rem] items-center">
                  Status
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-center w-28 items-center">
                  Total Quantity
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b transition-colors text-slate-600 flex justify-between items-center gap-4 p-4 h-[4.5rem]">
                <td className="text-center w-16">1.</td>
                <td>
                  <div className="flex flex-col">
                    <div className="justify-start w-80">EDXY Robot Trainer</div>

                    <div className="text-xs text-muted-foreground">
                      (micro kit)
                    </div>
                  </div>
                </td>
                <td className="text-left w-56">RD7000</td>
                <td className="text-center w-[8.5rem]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-yellow-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-red-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                  </div>
                </td>
                <td className="text-center w-28">33</td>
              </tr>
              <tr className="border-b transition-colors text-slate-600 flex justify-between items-center gap-4 p-4 h-[4.5rem]">
                <td className="text-center w-16">1.</td>
                <td className="text-left w-80">EDXY Robot Trainer</td>
                <td className="text-left w-56">RD7000</td>
                <td className="text-center w-[8.5rem]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-yellow-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-red-500/30 ring-offset-1"></div>
                      <span className="text-xs">999</span>
                    </div>
                  </div>
                </td>
                <td className="text-center w-28">33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
