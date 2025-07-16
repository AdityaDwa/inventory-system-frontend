import { useState, useRef, useEffect, useContext } from "react";

import SearchIcon from "./icons/SearchIcon.jsx";
import FilterIcon from "./icons/FilterIcon.jsx";

import TableFilter from "./TableFilter.jsx";
import TableRow from "./TableRow.jsx";
import NoTableData from "./NoTableData.jsx";
import Pagination from "./Pagination.jsx";

import { AuthProvider } from "../store/AuthProvider.jsx";
import { TABLE_CONFIG } from "../constants/tableConfig.js";

export default function Table({ configKey }) {
  const { accessToken } = useContext(AuthProvider);
  const tableConfig = TABLE_CONFIG[configKey];
  const [tableData, setTableData] = useState({
    count: 1,
    row: [
      {
        item_id: 1,
        item_name: "Officer table",
        item_serial_no: "999TBL9999",
        item_category_name: "Table",
        item_make_or_model_no: "Wooden",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Not-working",
      },
      {
        item_id: 2,
        item_name: "Sofa Set",
        item_serial_no: "999FRN9999",
        item_category_name: "Furniture",
        item_make_or_model_no: "Wooden",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Working",
      },
      {
        item_id: 3,
        item_name: "Chair-Cushion",
        item_serial_no: "999CHR9999",
        item_category_name: "Chair",
        item_make_or_model_no: "Wooden",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Repairable",
      },
      {
        item_id: 4,
        item_name: "Printer Brother",
        item_serial_no: "999PRN9999",
        item_category_name: "Printer",
        item_make_or_model_no: "MFC-9970CDW.1",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Not-working",
      },
      {
        item_id: 5,
        item_name: "Telephone Internal",
        item_serial_no: "999ELE9999",
        item_category_name: "Electronics",
        item_make_or_model_no: "Alcatel",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Not-working",
      },
      {
        item_id: 6,
        item_name: "Air Conditioner",
        item_serial_no: "999ELE9999",
        item_category_name: "Electronics",
        item_make_or_model_no: "Panasonic",
        item_room: "Teacher's Room No. 2 : Cubical Room 1",
        item_floor: "Floor 1",
        item_status: "Not-working",
      },
      // {
      //   room_id: 1,
      //   room_name: "Teacher's Room No. 2 : Cubical Room 1",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Office",
      //   no_room_total_items: "33",
      //   room_allot_to:
      //     "(Jitendra Kumar Manandar and Dr. Nanda Bikram Adhikari)",
      // },
      // {
      //   room_id: 2,
      //   room_name: "Teacher's Room No. 2 : Cubical Room 2",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Office",
      //   no_room_total_items: "33",
      // },
      // {
      //   room_id: 3,
      //   room_name: "Teacher's Room No. 2 : Cubical Room 3",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Conference room",
      //   no_room_total_items: "33",
      // },
      // {
      //   room_id: 4,
      //   room_name: "Teacher's Room No. 2 : Cubical Room 4",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Office",
      //   no_room_total_items: "33",
      // },
      // {
      //   room_id: 5,
      //   room_name: "HOD Room",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Office",
      //   no_room_total_items: "33",
      // },
      // {
      //   room_id: 6,
      //   room_name: "DHOD Room",
      //   room_floor_name: "Floor 1",
      //   room_type_name: "Office",
      //   no_room_total_items: "33",
      // },
    ],
  });

  useEffect(() => {
    async function fetchTableData() {
      try {
        const response = await fetch("/api/v1/items/roomsDetails", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          console.log(responseBody);
          //     setTableData(responseBody.data);

          //     setTableData({
          // count: responseBody.data[countKey],
          // rows: json[dataKey],
          // });
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchTableData();
  }, [configKey]);

  function renderTableHeader() {
    return (
      <header className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          {tableConfig.header.title}
        </div>
        <div className="text-sm text-muted-foreground">
          {tableConfig.header.subtitle}
        </div>
      </header>
    );
  }

  function renderTableFilter() {
    const dropdownFilter = (
      <TableFilter
        dropdownInitialValue={tableConfig.filterOptions.dropdown.value}
        endPointUrl="floors"
      />
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
          placeholder={tableConfig.filterOptions.searchBar.value}
        />
      </div>
    );

    return (
      tableConfig.filterOptions.visible && (
        <div className="flex flex-col md:flex-row items-center gap-4 py-4 pl-[38.5rem]">
          {tableConfig.filterOptions.dropdown.show && dropdownFilter}
          {tableConfig.filterOptions.advancedFilter.show && advancedFilterBtn}
          {tableConfig.filterOptions.searchBar.show && searchBar}
        </div>
      )
    );
  }

  function renderTableCaption() {
    return (
      <thead>
        <tr className="bg-primary/5 border-b transition-colors">
          {/* <th className="h-12 font-bold text-sidebar/95 w-[6.5rem]">S.N</th> */}
          {tableConfig.columnHeaders.map((eachColumn) => (
            <th
              key={eachColumn.label}
              className={`h-12 font-bold text-sidebar/95 ${eachColumn.additionalStyles}`}
            >
              {eachColumn.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  function renderTableData() {
    return (
      <tbody className="[&_tr:last-child]:border-0 ">
        {tableData.count > 0 ? (
          tableData.row.map((eachData, index) => (
            <TableRow
              key={eachData[tableConfig.responseMapping.idKey]}
              configKey={configKey}
              serialNo={0 + index + 1}
              rowData={eachData}
            />
          ))
        ) : (
          <NoTableData tableType={tableConfig.columnHeaders[0].label} />
        )}
      </tbody>
    );
  }

  function renderPagination() {
    return (
      tableData.count > 0 && (
        <Pagination
          totalCount={tableData.count}
          noOfDataPerPage={6}
          currentPage={1}
          handlePageChange={() => {}}
        />
      )
    );
  }

  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {renderTableHeader()}
      <section className="p-6 pt-0">
        {renderTableFilter()}

        <div className="relative w-full overflow-auto rounded-t-md">
          <table className="w-full text-sm">
            {renderTableCaption()}
            {renderTableData()}
          </table>
        </div>
        {renderPagination()}
      </section>
    </section>
  );
}
