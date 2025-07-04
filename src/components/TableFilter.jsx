import { useState } from "react";

import ChevronDownIcon from "./icons/ChevronDownIcon.jsx";
import DropdownModal from "./DropdownModal.jsx";

export default function TableFilter({
  dropdownInitialValue,
  dropdownMenus,
  isDisabled = false,
  onStateChange = () => {},
  widthSize = "200px",
  id = "",
  customPlaceholderStyle = "",
}) {
  const [dropdownData, setDropdownData] = useState({
    value: dropdownInitialValue,
    open: false,
  });

  function handleDropdownChange(value, open) {
    setDropdownData((prev) => ({
      ...prev,
      value: value,
      open: open,
    }));

    onStateChange(value, dropdownInitialValue);
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-full"
        style={{ width: widthSize }}
        id={id}
        disabled={isDisabled}
        onClick={(event) => {
          event.target.blur();
          handleDropdownChange(dropdownData.value, !dropdownData.open);
        }}
      >
        <span
          style={{ pointerEvents: "none" }}
          className={
            dropdownData.value === dropdownInitialValue
              ? customPlaceholderStyle
              : ""
          }
        >
          {isDisabled ? dropdownInitialValue : dropdownData.value}
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
