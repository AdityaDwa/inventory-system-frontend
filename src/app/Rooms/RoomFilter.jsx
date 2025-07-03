import { useState } from "react";

import ChevronDownIcon from "../../components/icons/ChevronDownIcon.jsx";
import DropdownModal from "../../components/DropdownModal.jsx";

export default function RoomFilter({
  dropdownInitalValue,
  dropdownMenus,
  isDisabled = false,
  onStateChange = () => {},
}) {
  const [dropdownData, setDropdownData] = useState({
    value: dropdownInitalValue,
    open: false,
  });

  function handleDropdownChange(value, open) {
    setDropdownData((prev) => ({
      ...prev,
      value: value,
      open: open,
    }));

    onStateChange(value);
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-full md:w-[200px]"
        disabled={isDisabled}
        onClick={(event) => {
          event.target.blur();
          handleDropdownChange(dropdownData.value, !dropdownData.open);
        }}
      >
        <span style={{ pointerEvents: "none" }}>
          {isDisabled ? dropdownInitalValue : dropdownData.value}
        </span>
        <ChevronDownIcon />
      </button>
      {dropdownData.open && (
        <DropdownModal
          customStyle={{ top: "2.75rem" }}
          dropdownMenus={dropdownMenus}
          dropdownData={dropdownData}
          handleDropdownChange={handleDropdownChange}
        />
      )}
    </div>
  );
}
