import { useState, useRef, useEffect, useContext } from "react";

import SearchIcon from "./icons/SearchIcon.jsx";
import FilterIcon from "./icons/FilterIcon.jsx";

import TableFilter from "./TableFilter.jsx";
import TableRow from "./TableRow.jsx";
import NoTableData from "./NoTableData.jsx";
import Pagination from "./Pagination.jsx";

import { AuthProvider } from "../store/AuthProvider.jsx";
import { TABLE_CONFIG } from "../constants/tableConfig.js";
import getEndpoint from "../constants/apiEndpoints.js";

export default function Table({ configKey }) {
  const { accessToken } = useContext(AuthProvider);
  const tableConfig = TABLE_CONFIG[configKey];

  const [tableData, setTableData] = useState({
    count: 0,
    rows: [],
  });
  const [pagination, setPagination] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownSelect, setDropdownSelect] = useState({
    id: 0,
    value: tableConfig.filterOptions.dropdown.value,
  });

  useEffect(() => {
    async function fetchTableData() {
      try {
        let fetchAction = "getAllData";
        let apiPayload = "";

        if (dropdownSelect.id !== 0) {
          fetchAction = "getFilteredData";
          apiPayload = dropdownSelect.id;
        }
        if (searchTerm !== "") {
          fetchAction = "getSearchedData";
          apiPayload = searchTerm;
        }

        const fetchUrl = getEndpoint(
          configKey,
          fetchAction,
          apiPayload,
          pagination
        );

        const response = await fetch(fetchUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setTableData({
            count: responseBody.data[tableConfig.responseMapping.countKey],
            rows: responseBody.data[tableConfig.responseMapping.dataKey],
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchTableData();
  }, [configKey, pagination, searchTerm, dropdownSelect]);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      setPagination(1);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm("");
    setPagination(1);
  }, [dropdownSelect]);

  useEffect(() => {
    setDropdownSelect({
      id: 0,
      value: tableConfig.filterOptions.dropdown.value,
    });
    setSearchTerm("");
    setPagination(1);
  }, [configKey]);

  function handlePageChange(page) {
    setPagination(page);
  }

  function handleDropdownSelect(dataObject) {
    setDropdownSelect(dataObject);
  }

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
        dropdownConfigKey={tableConfig.filterOptions.dropdown.endPointKey}
        dropdownInitialValue={tableConfig.filterOptions.dropdown.value}
        onStateChange={handleDropdownSelect}
        isInitialValueAnOption={true}
        widthSize="180px"
      />
    );

    const advancedFilterBtn = (
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
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
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
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
        <tr className="bg-primary/5 border-b transition-colors rounded-t-md flex justify-between items-center gap-4 px-4">
          <th className="h-12 font-bold text-sidebar/95 w-16 flex justify-center items-center">
            S.N
          </th>
          {tableConfig.columnHeaders.map((eachColumn) => (
            <th
              key={eachColumn.label}
              className={`h-12 font-bold text-sidebar/95 flex items-center ${eachColumn.additionalStyles}`}
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
          tableData.rows.map((eachData, index) => (
            <TableRow
              key={eachData[tableConfig.responseMapping.idKey]}
              configKey={configKey}
              serialNo={0 + index + 1}
              rowData={eachData}
            />
          ))
        ) : (
          <NoTableData tableType={tableConfig.noData} />
        )}
      </tbody>
    );
  }

  function renderPagination() {
    return (
      tableData.count > 0 && (
        <Pagination
          totalCount={tableData.count}
          noOfDataPerPage={2}
          currentPage={pagination}
          handlePageChange={handlePageChange}
        />
      )
    );
  }

  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {renderTableHeader()}
      <section className="p-6 pt-0">
        {renderTableFilter()}

        <div className="relative w-full rounded-t-md">
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
