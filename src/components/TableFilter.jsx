import { useState, useEffect, useContext } from "react";

import ChevronDownIcon from "./icons/ChevronDownIcon.jsx";
import DropdownModal from "./DropdownModal.jsx";

import { AuthProvider } from "../store/AuthProvider.jsx";

export default function TableFilter({
  dropdownInitialValue,
  endPointUrl,
  dropdownMenus = "",
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

  const [dropdownOptions, setDropdownOptions] = useState(null);

  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchDropdownData() {
      if (dropdownMenus) {
        setDropdownOptions(dropdownMenus);
        return;
      }

      try {
        const response = await fetch(`api/v1/items/${endPointUrl}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setDropdownOptions(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDropdownData();
  }, []);

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
          dropdownMenus={dropdownOptions}
          dropdownData={dropdownData}
          categoryType={dropdownInitialValue}
          handleDropdownChange={handleDropdownChange}
        />
      )}
    </div>
  );
}
