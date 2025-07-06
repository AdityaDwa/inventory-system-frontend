import { useState } from "react";
import { BASE_URI } from "../../utils/envVars.js";
import axios from "axios";

import SaveIcon from "../../components/icons/SaveIcon.jsx";

export default function AddItem() {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Map form data to backend expected format
    const itemData = {
      name: data['item-name'],
      category: data['item-category'],
      subCategory: data['item-model'], // Using model as subCategory
      floor: data['item-floor'],
      room: data['item-room'],
      status: 'In use', // Default status
      acquiredDate: data['item-acquired-date'],
      price: parseFloat(data['item-unit-cost']) || 0,
      source: data['item-source'],
      description: data['item-description'],
      count: parseInt(data['item-working']) + parseInt(data['item-repairable']) + parseInt(data['item-out-of-order']) || 1,
    };
    console.log(itemData);

    try {
      const response = await axios.post(`${BASE_URI}/addNewItem`, itemData);
      
      console.log('Item added successfully:', response.data);
      // Reset form or show success message
      e.target.reset();
      setCostValues({
        unitCost: 0,
        working: 0,
        repairable: 0,
        outOfOrder: 0,
        totalCost: 0,
      });
    } catch (error) {
      console.error('Error adding item:', error.response?.data?.message || error.message);
    }
  };

  const [isSelectDisabled, setIsSelectDisabled] = useState({
    floor: true,
    room: true,
  });

  const [costValues, setCostValues] = useState({
    unitCost: 0,
    working: 0,
    repairable: 0,
    outOfOrder: 0,
    totalCost: 0,
  });

  const todayDate = new Date().toISOString().split("T")[0];

  function calculateTotalCost(identifier, value) {
    const updatedData = {
      ...costValues,
      [identifier]: value,
    };

    const totalItems =
      Number(updatedData.working) +
      Number(updatedData.repairable) +
      Number(updatedData.outOfOrder);

    const sum = totalItems * Number(updatedData.unitCost);

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
            <div className="grid gap-4 space-y-3">
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
                    name="item-name"
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
                      name="item-description"
                    ></textarea>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-model"
                  >
                    Model
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="e.g. XPS 15 9500"
                    id="item-model"
                    name="item-model"
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-category"
                  >
                    Category
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-category"
                    name="item-category"
                  >
                    <option value="">Select category</option>
                    <option value="Computer">Computer</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Lab Equipment">Lab Equipment</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-department"
                  >
                    Department
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-department"
                    name="item-department"
                    onChange={(e) => handleDisableFloorSelect(e.target.value, "")}
                  >
                    <option value="">Select department</option>
                    <option value="DoECE">DoECE</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-floor"
                  >
                    Floor
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-floor"
                    name="item-floor"
                    disabled={isSelectDisabled.floor}
                    onChange={(e) => handleDisableRoomSelect(e.target.value, "")}
                  >
                    <option value="">Select floor</option>
                    <option value="Floor 1">Floor 1</option>
                    <option value="Floor 2">Floor 2</option>
                    <option value="Floor 3">Floor 3</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-room"
                  >
                    Room
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-room"
                    name="item-room"
                    disabled={isSelectDisabled.room}
                  >
                    <option value="">Select room</option>
                    <option value="HOD Room (Office)">HOD Room (Office)</option>
                    <option value="DHOD Room (Office)">DHOD Room (Office)</option>
                    <option value="Meeting Hall (Conference)">Meeting Hall (Conference)</option>
                    <option value="B-308 (Classroom)">B-308 (Classroom)</option>
                  </select>
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
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
                    name="item-unit-cost"
                    type="number"
                    onChange={(event) =>
                      calculateTotalCost("unitCost", event.target.value)
                    }
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
                    name="item-acquired-date"
                    type="date"
                    defaultValue={todayDate}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-source"
                  >
                    Source
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="item-source"
                    name="item-source"
                  >
                    <option value="Purchase">Purchase</option>
                    <option value="Donation">Donation</option>
                  </select>
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-working"
                  >
                    Working
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm no-spinner"
                    placeholder="0"
                    id="item-working"
                    name="item-working"
                    onChange={(event) =>
                      calculateTotalCost("working", event.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-repairable"
                  >
                    Repairable
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm no-spinner"
                    placeholder="0"
                    id="item-repairable"
                    name="item-repairable"
                    onChange={(event) =>
                      calculateTotalCost("repairable", event.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-out-of-order"
                  >
                    Out of Order
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm no-spinner"
                    placeholder="0"
                    id="item-out-of-order"
                    name="item-out-of-order"
                    onChange={(event) =>
                      calculateTotalCost("outOfOrder", event.target.value)
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
                    रु {costValues.totalCost}
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
