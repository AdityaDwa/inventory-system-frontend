import { useState, useEffect, useContext } from "react";

import SearchIcon from "../../components/icons/SearchIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import TableFilter from "../../components/TableFilter.jsx";
import NoTableData from "../../components/NoTableData.jsx";
import Pagination from "../../components/Pagination.jsx";
import RoomData from "./RoomData.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function Room() {
  const [roomRowData, setRoomRowData] = useState([]);
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch("/api/v1/items/roomsDetails", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setRoomRowData(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchRoomData();
  }, []);

  return (
    <>
      <PageHeader title="Rooms">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="button"
        >
          <PlusIcon cssClass="mr-2 h-4 w-4" />
          Add Room
        </button>
      </PageHeader>
      <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            All Rooms
          </div>
          <div className="text-sm text-muted-foreground">
            View and manage rooms across different floors
          </div>
        </header>

        <section className="p-6 pt-0">
          <div className="flex flex-col md:flex-row items-center gap-4 py-4 pl-[37rem]">
            <TableFilter
              dropdownInitialValue="All Floors"
              endPointUrl="floors"
            />
            <div className="relative w-full md:w-auto md:flex-1">
              <SearchIcon customStyle={{ top: "0.75rem" }} />
              <input
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-8"
                placeholder="Search rooms"
              />
            </div>
          </div>

          <div className="relative w-full overflow-auto rounded-t-md">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b transition-colors bg-primary/5">
                  <th className="h-12 px-4 text-left font-bold text-sidebar/95">
                    Room
                  </th>
                  <th className="h-12 px-4 text-left font-bold text-sidebar/95">
                    Type
                  </th>
                  <th className="h-12 px-4 text-left font-bold text-sidebar/95">
                    Floor
                  </th>
                  <th className="h-12 px-4 font-bold text-sidebar/95">
                    Total Items
                  </th>
                  <th className="h-12 px-4 font-bold text-sidebar/95">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0 ">
                {roomRowData.length !== 0 ? (
                  roomRowData.map((eachRoom) => (
                    <RoomData
                      key={eachRoom.roomId}
                      roomName={eachRoom.roomName}
                      floorName={eachRoom.floorName}
                      totalItems={eachRoom.totalItems}
                    />
                  ))
                ) : (
                  <NoTableData tableType="room" />
                )}
              </tbody>
            </table>
          </div>
          {roomRowData !== 0 ? (
            <Pagination tableType="rooms" totalNum={roomRowData.length} />
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
}
