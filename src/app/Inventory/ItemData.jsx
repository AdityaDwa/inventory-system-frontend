import { Link } from "react-router-dom";

import ChevronRightIcon from "../../components/icons/ChevronRightIcon";

export default function ItemData({
  name,
  subCategory,
  dateAcquired,
  source,
  status,
}) {
  const statusColor =
    status === "In use"
      ? "text-green-600"
      : status === "Under repair"
      ? "text-yellow-600"
      : "text-red-600";

  const customClass =
    source === "Purchase"
      ? "text-foreground"
      : "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ";

  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer">
      <td className="p-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{subCategory}</div>
        </div>
      </td>
      <td className="p-4">Room 101</td>
      <td className="p-4 text-center">{dateAcquired}</td>
      <td className="p-4 text-center">
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${customClass}`}
        >
          {source}
        </div>
      </td>
      <td className={`p-4 text-center ${statusColor}`}>
        <div className={`inline-flex items-center text-xs font-semibold`}>
          {status}
        </div>
      </td>
      <td className="p-4 text-right">
        <div className="flex justify-end gap-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10"
            type="button"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
