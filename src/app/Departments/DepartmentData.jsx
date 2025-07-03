import BuildingIcon from "../../components/icons/BuildingIcon.jsx";
import MoreOptionIcon from "../../components/icons/MoreOptionIcon.jsx";

export default function DepartmentData({ toggleActionModal }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
        <div className="flex items-center gap-2">
          <BuildingIcon cssClass="h-4 w-4 text-muted-foreground" />
          DoECE
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">6</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">10</td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500/30 ring-offset-1"></div>
            <span className="text-xs">7</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-yellow-500/30 ring-offset-1"></div>
            <span className="text-xs">2</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-red-500/30 ring-offset-1"></div>
            <span className="text-xs">1</span>
          </div>
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
          type="button"
          onClick={toggleActionModal}
        >
          <MoreOptionIcon />
        </button>
      </td>
    </tr>
  );
}
