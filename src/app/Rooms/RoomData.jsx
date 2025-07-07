import { Link } from "react-router-dom";

import ChevronRightIcon from "../../components/icons/ChevronRightIcon.jsx";

export default function RoomData({ roomName, floorName, totalItems }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer">
      <td className="p-4 font-medium">
        <div className="flex items-center gap-2">{roomName}</div>
      </td>
      <td className="p-4">Office</td>
      <td className="p-4">{floorName}</td>
      <td className="p-4 text-center">{totalItems}</td>
      <td className="p-4 text-right">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10"
          type="button"
        >
          <ChevronRightIcon />
        </button>
      </td>
    </tr>
  );
}
