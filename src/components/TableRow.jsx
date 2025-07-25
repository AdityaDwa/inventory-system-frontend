import { Link } from "react-router-dom";

import EditIcon from "./icons/EditIcon.jsx";
import DeleteIcon from "./icons/DeleteIcon.jsx";
import VisibilityIcon from "./icons/VisibilityIcon.jsx";
import ChevronDownIcon from "./icons/ChevronDownIcon.jsx";

import { TABLE_CONFIG } from "../constants/tableConfig.js";

export default function TableRow({ configKey, serialNo, rowData }) {
  const tableConfig = TABLE_CONFIG[configKey];
  const dataFields = tableConfig.responseMapping.dataFields;
  const rowId = rowData[tableConfig.responseMapping.idKey];
  return (
    <tr className="border-b transition-colors text-slate-600 flex justify-between items-center gap-4 p-4 h-[4.5rem]">
      <td className="text-center w-16">{serialNo}.</td>
      {dataFields.map((eachField) => {
        let statusColor = "";
        if (eachField.key === "itemStatus") {
          statusColor =
            rowData[eachField.key] === "Working"
              ? "text-green-600"
              : rowData[eachField.key] === "Repairable"
              ? "text-yellow-600"
              : "text-red-600";
        }
        return (
          <td key={eachField.key}>
            <div className="flex flex-col">
              <div className={`${eachField.additionalStyles} ${statusColor}`}>
                {rowData[eachField.key]}
              </div>
              {eachField.additionalDetail && (
                <div className="text-xs text-muted-foreground">
                  ({rowData[eachField.additionalDetail]})
                </div>
              )}
            </div>
          </td>
        );
      })}

      {tableConfig.rowActions.visible && (
        <td>
          <div className="flex justify-center items-center gap-2 w-24">
            {tableConfig.rowActions.view.show && (
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 w-9 border border-[#292929] text-[#565656] hover:bg-[#ebebeb]"
                to={`${tableConfig.rowActions.view.path}${rowId}`}
                state={{ rowData }}
              >
                <VisibilityIcon
                  isVisible={true}
                  cssClass="fill-[#565656] hover:fill-[#565656]"
                />
              </Link>
            )}
            {tableConfig.rowActions.edit && (
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 w-9 border border-[#0b5faa] text-[#0b5faa] hover:bg-[#eff6ff]"
                type="button"
              >
                <EditIcon />
              </button>
            )}
            {tableConfig.rowActions.delete && (
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 w-9 border border-[#fe2b42] text-[#fe2b42] hover:bg-[#fde6e8]"
                type="button"
              >
                <DeleteIcon />
              </button>
            )}
          </div>
        </td>
      )}
    </tr>
  );
}
