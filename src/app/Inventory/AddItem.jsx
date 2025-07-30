import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SaveIcon from "../../components/icons/SaveIcon.jsx";
import TableFilter from "../../components/TableFilter.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import { currencyFormatter } from "../../utils/formatter.js";
import getEndpoint from "../../constants/apiEndpoints.js";

export default function AddItem() {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthProvider);
  const todayDate = new Date().toISOString().split("T")[0];

  const [dropdownInfo, setDropdownInfo] = useState({
    category: 0,
    floor: 0,
    room: 0,
    item: 0,
  });

  const [costValues, setCostValues] = useState({
    unitCost: 0,
    count: 1,
    totalCost: 0,
  });

  const itemNameRef = useRef(null);
  const itemDescriptionRef = useRef(null);
  const itemMakeModelNoRef = useRef(null);
  const itemDateAcquiredRef = useRef(null);

  useEffect(() => {
    setDropdownInfo((prev) => ({
      ...prev,
      room: 0,
    }));
  }, [dropdownInfo.floor]);

  async function handleSubmit(event) {
    event.preventDefault();

    const submittedItemName = itemNameRef.current.value;
    const submittedItemDescription = itemDescriptionRef.current.value;
    const submittedItemMakeModelNo = itemMakeModelNoRef.current.value;
    const submittedItemDateAcquired = itemDateAcquiredRef.current.value;

    const submittedItemSourceId =
      dropdownInfo.item === 0 ? "1357" : dropdownInfo.item;

    try {
      const payloadBody = {
        item_name: submittedItemName,
        item_description: submittedItemDescription,
        item_make_or_model_no: submittedItemMakeModelNo,
        item_category_id: dropdownInfo.category,
        item_floor_id: dropdownInfo.floor,
        item_room_id: dropdownInfo.room,
        item_acquired_date: submittedItemDateAcquired,
        item_source: submittedItemSourceId,
        item_cost: +costValues.unitCost,
        item_create_count: +costValues.count,
        item_status: "Working",
      };

      const fetchUrl = getEndpoint("item", "addData");

      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadBody),
      });

      if (response.ok) {
        // handleNotificationAction(true, `Amount deposited successfully.`);
      } else {
        const errorDetails = await response.json();
        console.log("Conflict error details:", errorDetails);
      }

      navigate("/inventory");
    } catch (error) {
      console.log(error);
    }
  }

  function calculateTotalCost(identifier, value) {
    const updatedData = {
      ...costValues,
      [identifier]: value,
    };

    const sum = +updatedData.count * +updatedData.unitCost;

    setCostValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
      totalCost: sum,
    }));
  }

  function handleDropdownChange(identifier, payload) {
    setDropdownInfo((prev) => ({
      ...prev,
      [identifier]: payload.id,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 rounded-t-lg">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              Add New Item
            </div>
            <div className="text-sm text-muted-foreground">
              Enter the basic information about this item
            </div>
          </header>

          <aside className="p-6">
            <div className="grid gap-4">
              <section className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-name"
                  >
                    Item Name: <span className="text-[#ff6365]">*</span>
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="e.g. Dell XPS 15 Laptop"
                    id="item-name"
                    ref={itemNameRef}
                  />
                </div>
                <div className="row-span-2">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-description"
                    >
                      Description:
                    </label>
                    <textarea
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-32 min-h-32 max-h-32 resize-none"
                      placeholder="Enter a detailed description of the item"
                      id="item-description"
                      ref={itemDescriptionRef}
                    ></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-make-or-model-no"
                    >
                      Make/Model No:
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="e.g. RDC7000"
                      id="item-make-or-model-no"
                      ref={itemMakeModelNoRef}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-category"
                    >
                      Category: <span className="text-[#ff6365]">*</span>
                    </label>
                    <TableFilter
                      dropdownInitialValue="Select category"
                      dropdownConfigKey="category"
                      onStateChange={handleDropdownChange}
                      widthSize="100%"
                      customPlaceholderStyle="text-muted-foreground"
                      id="item-category"
                    />
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-floor"
                  >
                    Floor: <span className="text-[#ff6365]">*</span>
                  </label>
                  <TableFilter
                    dropdownInitialValue="Select floor"
                    dropdownConfigKey="floor"
                    onStateChange={handleDropdownChange}
                    widthSize="100%"
                    customPlaceholderStyle="text-muted-foreground"
                    id="item-floor"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-room"
                  >
                    Room: <span className="text-[#ff6365]">*</span>
                  </label>
                  <TableFilter
                    key={dropdownInfo.floor}
                    dropdownInitialValue="Select room"
                    dropdownConfigKey="room"
                    widthSize="100%"
                    onStateChange={handleDropdownChange}
                    isDisabled={dropdownInfo.floor === 0}
                    customPlaceholderStyle="text-muted-foreground"
                    id="item-room"
                    apiPayload={dropdownInfo.floor}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-acquired-date"
                  >
                    Date Acquired: <span className="text-[#ff6365]">*</span>
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-acquired-date"
                    type="date"
                    defaultValue={todayDate}
                    ref={itemDateAcquiredRef}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-source"
                  >
                    Source: <span className="text-[#ff6365]">*</span>
                  </label>
                  <TableFilter
                    dropdownInitialValue="Purchase"
                    dropdownConfigKey="item"
                    onStateChange={handleDropdownChange}
                    widthSize="100%"
                    id="item-source"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-unit-cost"
                  >
                    Unit Cost (Rs.): <span className="text-[#ff6365]">*</span>
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm no-spinner"
                    placeholder="e.g. 1200"
                    id="item-unit-cost"
                    type="number"
                    onChange={(event) =>
                      calculateTotalCost("unitCost", event.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-count"
                  >
                    Count: <span className="text-[#ff6365]">*</span>
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm no-spinner"
                    defaultValue={costValues.count}
                    id="item-count"
                    onChange={(event) =>
                      calculateTotalCost("count", event.target.value)
                    }
                  />
                </div>
              </section>
            </div>
          </aside>

          <footer className="items-center p-6 grid grid-cols-6 gap-2 pt-2 border-t bg-primary/5">
            <div className="grid gap-6 col-span-4">
              <div className="rounded-md border p-4 mt-2 bg-muted/20">
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium">Total Cost:</span>
                  <span className="text-sm font-bold">
                    Rs. {currencyFormatter(costValues.totalCost)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex col-span-1 col-start-6 gap-4 h-full">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 mt-2 h-16 text-base [&_svg]:size-5"
                type="submit"
              >
                <SaveIcon />
                <span>Add Item</span>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </form>
  );
}
