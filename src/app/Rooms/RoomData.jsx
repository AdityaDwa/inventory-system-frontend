import BuildingIcon from "../../components/icons/BuildingIcon.jsx";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon.jsx";
import MoreOptionIcon from "../../components/icons/MoreOptionIcon.jsx";
import RoomIcon from "../../components/icons/RoomIcon.jsx";

export default function RoomData({ toggleActionModal }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
        <div className="flex items-center gap-2">
          <RoomIcon />
          Room 101
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex items-center gap-2">
          <BuildingIcon cssClass="h-4 w-4 text-muted-foreground" />
          DoECE
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        Floor 1
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        Office
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">0</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex items-center gap-1">
          <span className="font-medium">0</span>
          <span className="text-xs text-muted-foreground">(0/0/0)</span>
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        <div className="flex justify-end gap-2">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            href="/"
          >
            <ChevronRightIcon />
          </a>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            type="button"
            onClick={toggleActionModal}
          >
            <MoreOptionIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
