import { useState, useEffect, useContext } from "react";

import SearchIcon from "../../components/icons/SearchIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import TableFilter from "../../components/TableFilter.jsx";
import NoTableData from "../../components/NoTableData.jsx";
import Pagination from "../../components/Pagination.jsx";
import RoomData from "./RoomData.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import Table from "../../components/Table.jsx";

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
      <Table configKey="room" />
    </>
  );
}
