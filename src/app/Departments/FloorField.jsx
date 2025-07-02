import { useState } from "react";

import CloseIcon from "../../components/icons/CloseIcon.jsx";
import FloorIcon from "../../components/icons/FloorIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon";
import RoomField from "./RoomField.jsx";

export default function FloorField({
  floorId,
  numberOfFloors,
  handleFloorChange,
}) {
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  function handleRoomChange(iterator) {
    setNumberOfRooms((prev) => prev + iterator);
  }

  return (
    <div className="border rounded-md p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FloorIcon />
          <span className="font-medium">Floor {floorId}</span>
        </div>
        {numberOfFloors > 1 ? (
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-8 w-8 text-muted-foreground hover:text-destructive"
            type="button"
            onClick={() => handleFloorChange(-1)}
          >
            <CloseIcon />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="pl-6 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Rooms</h4>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-xs"
            type="button"
            onClick={() => handleRoomChange(1)}
          >
            <PlusIcon cssClass="h-3 w-3" />
            Add Room
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: numberOfRooms }, (_, index) => (
            <RoomField
              key={index}
              roomId={index + 1}
              floorId={floorId}
              numberOfRooms={numberOfRooms}
              handleRoomChange={handleRoomChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
