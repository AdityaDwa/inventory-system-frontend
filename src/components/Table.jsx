import { useState, useRef, useEffect, useContext } from "react";

import SearchIcon from "./icons/SearchIcon.jsx";
import FilterIcon from "./icons/FilterIcon.jsx";

import TableFilter from "./TableFilter.jsx";
import TableRow from "./TableRow.jsx";
import NoTableData from "./NoTableData.jsx";
import Pagination from "./Pagination.jsx";

import { TABLE_CONSTANTS } from "../constants/tableConstants.js";

export default function Table({ tableName }) {
  const [tableRowData, setTableRowData] = useState({});

  const tableObject = TABLE_CONSTANTS[tableName];

  function renderTableHeader() {
    return (
      <header className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          {}
        </div>
        <div className="text-sm text-muted-foreground">{props.tableInfo}</div>
      </header>
    );
  }

  function renderTableFilter() {
    const dropdownFilter = (
      <TableFilter dropdownInitialValue="All Floors" endPointUrl="floors" />
    );

    const advancedFilterBtn = (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[200px]">
        <FilterIcon />
        Advanced Filter
      </button>
    );

    const searchBar = (
      <div className="relative w-full md:w-auto md:flex-1">
        <SearchIcon customStyle={{ top: "0.75rem" }} />
        <input
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-8"
          placeholder="Search rooms"
        />
      </div>
    );

    return (
      props.tableFilter.visible && (
        <div className="flex flex-col md:flex-row items-center gap-4 py-4 pl-[37rem]">
          {props.tableFilter.dropdown && dropdownFilter}
          {props.tableFilter.advancedFilter && advancedFilterBtn}
          {props.tableFilter.searchBar && searchBar}
        </div>
      )
    );
  }

  function renderTableCaption() {
    return (
      <thead>
        <tr className="bg-primary/5 border-b transition-colors">
          {props.tableCaptions.map((captionData) => (
            <th
              className={`h-12 px-4 font-bold text-sidebar/95 ${captionData.additionalStyles}`}
            >
              {captionData.heading}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  function renderTableData() {
    return (
      <tbody className="[&_tr:last-child]:border-0 ">
        {tableRowData[props.tableCountKey] !== 0 ? (
          tableRowData[props.tableDataKey].map((eachRoom) => (
            <TableRow
              key={eachRoom.roomId}
              roomName={eachRoom.roomName}
              floorName={eachRoom.floorName}
              totalItems={eachRoom.totalItems}
            />
          ))
        ) : (
          <NoTableData tableType={props.tableType} />
        )}
      </tbody>
    );
  }

  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {renderTableHeader}
      <section className="p-6 pt-0">
        {renderTableFilter()}

        <div className="relative w-full overflow-auto rounded-t-md">
          <table className="w-full text-sm">
            {renderTableCaption}
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
  );
}
