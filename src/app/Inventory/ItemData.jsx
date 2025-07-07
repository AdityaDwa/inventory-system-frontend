import { Link } from "react-router-dom";
import PackageIcon from "../../components/icons/PackageIcon.jsx";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import MoreOptionIcon from "../../components/icons/MoreOptionIcon.jsx";

export default function ItemData({
  name,
  subCategory,
  cost,
  dateAcquired,
  source,
  status,
  toggleActionModal,
}) {
  const customClass =
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 "; //For Purchase
  //   text-foreground For Donation

  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-medium">
            <PackageIcon cssClass="h-4 w-4 text-muted-foreground" />
            {name}
          </div>
          <div className="text-xs text-muted-foreground">{subCategory}</div>
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        DoECE
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex flex-col">
          <div>रु {cost}</div>
          <div className="text-xs text-muted-foreground">Total: रु {cost}</div>
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        {dateAcquired}
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${customClass}`}
        >
          {source}
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500/30 ring-offset-1"></div>
            <span className="text-xs">1</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-yellow-500/30 ring-offset-1"></div>
            <span className="text-xs">0</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-red-500/30 ring-offset-1"></div>
            <span className="text-xs">0</span>
          </div>
        </div>
      </td>
      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
        <div className="flex justify-end gap-2">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            to="/inventory/:item_id"
          >
            <ChevronRightIcon />
          </Link>
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
