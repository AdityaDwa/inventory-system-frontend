import EditIcon from "./icons/EditIcon.jsx";
import DeleteIcon from "./icons/DeleteIcon.jsx";
import VisibilityIcon from "./icons/VisibilityIcon.jsx";
import ChevronDownIcon from "./icons/ChevronDownIcon.jsx";

export default function TableRow({}) {
  return (
    <tr className="border-b transition-colors text-slate-600">
      <td className="p-4 font-medium">{roomName}</td>
      <td className="p-4">Office</td>
      <td className="p-4">{floorName}</td>
      <td className="p-4 text-center">{totalItems}</td>
      <td className="p-4 w-[7.5rem]">
        <div className="flex justify-center items-center gap-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-10 w-10 hover:bg-[#eff6ff] border border-[#0b5faa] text-[#0b5faa]"
            type="button"
          >
            <EditIcon />
          </button>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-10 w-10 hover:bg-[#fde6e8] border border-[#fe2b42] text-[#fe2b42]"
            type="button"
          >
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
