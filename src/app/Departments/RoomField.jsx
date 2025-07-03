import { useState } from "react";

import ChevronDownIcon from "../../components/icons/ChevronDownIcon.jsx";
import DeleteIcon from "../../components/icons/DeleteIcon.jsx";
import DropdownModal from "../../components/DropdownModal.jsx";

export default function RoomField({
  roomId,
  floorId,
  numberOfRooms,
  handleRoomChange,
}) {
  const [dropdownData, setDropdownData] = useState({
    value: "Classroom",
    open: false,
  });

  function handleDropdownChange(value, open) {
    setDropdownData((prev) => ({
      ...prev,
      value: value,
      open: open,
    }));
  }

  return (
    <div className="border rounded-md p-2 bg-muted/10">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-muted text-xs font-medium">
          1
        </div>
        <div className="space-y-0 flex-1">
          <input
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-7 text-sm"
            placeholder="Room Name"
            defaultValue={`Room ${floorId}0${roomId}`}
          />
        </div>
        {numberOfRooms > 1 ? (
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-6 w-6 text-muted-foreground hover:text-destructive"
            type="button"
            onClick={() => handleRoomChange(-1)}
          >
            <DeleteIcon cssClass="h-3 w-3" />
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-0" style={{ position: "relative" }}>
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 text-xs"
          onClick={(event) => {
            event.target.blur();
            handleDropdownChange(dropdownData.value, !dropdownData.open);
          }}
        >
          <span style={{ pointerEvents: "none" }}>{dropdownData.value}</span>
          <ChevronDownIcon />
        </button>
        {dropdownData.open && (
          <DropdownModal
            customStyle={{ bottom: "2.15rem" }}
            dropdownMenus={[
              "Classroom",
              "Lab",
              "Office",
              "Workshop",
              "Conference",
              "Storage",
            ]}
            dropdownData={dropdownData}
            handleDropdownChange={handleDropdownChange}
          />
        )}
      </div>
    </div>
  );
}
