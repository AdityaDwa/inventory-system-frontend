import EditIcon from "./icons/EditIcon.jsx";
import DeleteIcon from "./icons/DeleteIcon.jsx";
import VisibilityIcon from "./icons/VisibilityIcon.jsx";
import ChevronDownIcon from "./icons/ChevronDownIcon.jsx";

import { TABLE_CONFIG } from "../constants/tableConfig.js";

export default function TableRow({ configKey, serialNo, rowData }) {
  const tableConfig = TABLE_CONFIG[configKey];
  const dataFields = tableConfig.responseMapping.dataFields;
  const rowId = tableConfig.responseMapping.idKey;

  return (
    <tr className="border-b transition-colors text-slate-600">
      {/* <td className="py-4 text-center">{serialNo + 9990}.</td> */}
      {dataFields.map((eachField) => {
        return (
          <td key={eachField.key} className="py-4">
            <div className="flex flex-col">
              <div
                className={`flex items-center gap-2 font-medium ${eachField.additionalStyles}`}
              >
                {rowData[eachField.key]}
              </div>
              {eachField.additionalDetail && (
                <div className="text-xs text-muted-foreground">
                  {rowData[eachField.additionalDetail]}
                </div>
              )}
            </div>
          </td>
        );
      })}

      {tableConfig.rowActions.visible && (
        <td className="py-4">
          <div className="flex justify-center items-center gap-2">
            {tableConfig.rowActions.view && (
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 w-9 border border-[#292929] text-[#565656] hover:bg-[#ebebeb]"
                type="button"
              >
                <VisibilityIcon
                  isVisible={true}
                  cssClass="fill-[#565656] hover:fill-[#565656]"
                />
              </button>
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
