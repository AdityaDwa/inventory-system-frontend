import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import SaveIcon from "../../components/icons/SaveIcon.jsx";
import TableFilter from "../../components/TableFilter.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import { currencyFormatter } from "../../utils/formatter.js";

export default function AddItem() {
  const navigate = useNavigate();

  const [isSelectDisabled, setIsSelectDisabled] = useState({
    floor: true,
    room: true,
  });

  const { accessToken } = useContext(AuthProvider);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("/api/v1/items/addNewItem", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "check-computer",
          category: "computer",
          subCategory: "lenovo",
          floor: "Floor 1",
          room: "room 1",
          status: "In use",
          source: "Purchase",
          acquiredDate: "2025:07:01",
          price: 5000,
          description: "a computer",
          count: 1,
        }),
      });
      const responseBody = await response.json();
      console.log(responseBody);
      navigate("/inventory");
    } catch (error) {
      console.log(error);
    }
  }

  const [costValues, setCostValues] = useState({
    unitCost: 0,
    count: 1,
    totalCost: 0,
  });

  const todayDate = new Date().toISOString().split("T")[0];

  function calculateTotalCost(identifier, value) {
    const updatedData = {
      ...costValues,
      [identifier]: value,
    };

    const sum = Number(updatedData.count) * Number(updatedData.unitCost);

    setCostValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
      totalCost: sum,
    }));
  }

  function handleDisableFloorSelect(value, dropdownInitialValue) {
    setIsSelectDisabled((prev) => ({
      ...prev,
      floor: value === dropdownInitialValue,
    }));
  }

  function handleDisableRoomSelect(value, dropdownInitialValue) {
    setIsSelectDisabled((prev) => ({
      ...prev,
      room: value === dropdownInitialValue,
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
                    Item Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="e.g. Dell XPS 15 Laptop"
                    id="item-name"
                  />
                </div>
                <div className="row-span-2">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-description"
                    >
                      Description
                    </label>
                    <textarea
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-32 min-h-32 max-h-32 resize-none"
                      placeholder="Enter a detailed description of the item"
                      id="item-description"
                    ></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-category"
                    >
                      Category
                    </label>
                    <TableFilter
                      dropdownInitialValue="Select category"
                      endPointUrl="categories"
                      widthSize="275.8px"
                      customPlaceholderStyle="text-muted-foreground"
                      id="item-category"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="item-sub-category"
                    >
                      Sub Category
                    </label>
                    <TableFilter
                      dropdownInitialValue="Select sub category"
                      endPointUrl=""
                      dropdownMenus={[{ name: "DoECE", id: 2 }]}
                      widthSize="275.8px"
                      onStateChange={handleDisableFloorSelect}
                      customPlaceholderStyle="text-muted-foreground"
                      id="item-sub-category"
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
                    Floor
                  </label>
                  <TableFilter
                    dropdownInitialValue="Select floor"
                    endPointUrl="categories"
                    widthSize="362.4px"
                    onStateChange={handleDisableRoomSelect}
                    isDisabled={isSelectDisabled.floor}
                    customPlaceholderStyle="text-muted-foreground"
                    id="item-floor"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-room"
                  >
                    Room
                  </label>
                  <TableFilter
                    dropdownInitialValue="Select room"
                    endPointUrl="categories"
                    widthSize="362.4px"
                    isDisabled={isSelectDisabled.room}
                    customPlaceholderStyle="text-muted-foreground"
                    id="item-room"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-acquired-date"
                  >
                    Date Acquired
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-acquired-date"
                    type="date"
                    defaultValue={todayDate}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-source"
                  >
                    Source
                  </label>
                  <TableFilter
                    dropdownInitialValue="Purchase"
                    endPointUrl=""
                    dropdownMenus={[{ name: "Donation", id: 2 }]}
                    widthSize="362.4px"
                    id="item-source"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-unit-cost"
                  >
                    Unit Cost (रु)
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
                    Count
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
                  <span className="text-sm font-medium">Total Cost</span>
                  <span className="text-sm font-bold">
                    रु {currencyFormatter(costValues.totalCost)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex col-span-1 col-start-6 gap-4 h-full">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 mt-2 h-16 text-base [&amp;_svg]:size-5"
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
