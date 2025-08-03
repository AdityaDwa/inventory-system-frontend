import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import SaveIcon from "../../components/icons/SaveIcon.jsx";
import TableFilter from "../../components/TableFilter.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function EditItem() {
  const { state } = useLocation();

  const item = state?.item;
  const acquiredDate = new Date(item.itemAcquiredDate)
    .toISOString()
    .split("T")[0];

  if (!item) {
  }

  const { accessToken } = useContext(AuthProvider);
  const navigate = useNavigate();

  const [dropdownInfo, setDropdownInfo] = useState({
    category: item.itemCategoryId,
    floor: item.itemFloorId,
    room: item.itemRoomId,
    item: item.itemSourceId,
    status: item.itemStatusId,
  });

  const [itemData, setItemData] = useState({
    itemName: item.itemName,
    itemDescription: item.itemDescription,
    itemMakeOrModelNo: item.itemModelNumberOrMake,
    itemCategory: item.itemCategory,
    itemFloor: item.itemFloor,
    itemRoom: item.itemRoom,
    itemAcquiredDate: acquiredDate,
    itemSource: item.itemSource,
    itemStatus: item.itemStatus,
    itemCost: item.itemCost,
  });

  function handleSubmit(event) {
    event.preventDefault();

    async function updateItemData() {
      try {
        const payloadBody = {
          item_name: itemData.itemName,
          item_description: itemData.itemDescription,
          item_make_or_model_no: itemData.itemMakeOrModelNo,
          item_category_id: dropdownInfo.category,
          item_room_id: dropdownInfo.room,
          item_acquired_date: itemData.itemAcquiredDate,
          item_source: dropdownInfo.item,
          item_status: dropdownInfo.status,
          item_cost: +itemData.itemCost,
        };

        const fetchUrl = `/api/v1/items/${item._id}/details`;

        const response = await fetch(fetchUrl, {
          method: "PATCH",
          body: JSON.stringify(payloadBody),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          navigate("/inventory");
        }
      } catch (error) {
        console.log(error);
      }
    }

    updateItemData();
  }

  function handleDropdownChange(identifier, payload) {
    if (identifier === "floor") {
      setDropdownInfo((prev) => ({
        ...prev,
        [identifier]: payload.id,
        room: "0",
      }));
    } else {
      setDropdownInfo((prev) => ({
        ...prev,
        [identifier]: payload.id,
      }));
    }
  }

  function handleInputChange(identifier, value) {
    setItemData((prevData) => ({ ...prevData, [identifier]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <header className="flex items-center gap-2">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            to={`/inventory/item/${item._id}`}
            state={{ rowData: item }}
          >
            <ArrowLeftIcon />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Edit Item</h2>
        </header>
        <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                    value={itemData.itemName}
                    onChange={(event) =>
                      handleInputChange("itemName", event.target.value)
                    }
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
                      value={itemData.itemDescription}
                      onChange={(event) =>
                        handleInputChange("itemDescription", event.target.value)
                      }
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
                      value={itemData.itemMakeOrModelNo}
                      onChange={(event) =>
                        handleInputChange(
                          "itemMakeOrModelNo",
                          event.target.value
                        )
                      }
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
                      dropdownInitialValue={itemData.itemCategory}
                      dropdownConfigKey="category"
                      onStateChange={handleDropdownChange}
                      widthSize="100%"
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
                    dropdownInitialValue={item.itemFloor}
                    dropdownConfigKey="floor"
                    onStateChange={handleDropdownChange}
                    widthSize="100%"
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
                    dropdownInitialValue={
                      dropdownInfo.room === "0" ? "Select room" : item.itemRoom
                    }
                    dropdownConfigKey="room"
                    widthSize="100%"
                    onStateChange={handleDropdownChange}
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
                    value={itemData.itemAcquiredDate}
                    onChange={(event) =>
                      handleInputChange("itemAcquiredDate", event.target.value)
                    }
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
                    dropdownInitialValue={item.itemSource}
                    dropdownConfigKey="item"
                    onStateChange={handleDropdownChange}
                    widthSize="100%"
                    id="item-source"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="item-status"
                  >
                    Status: <span className="text-[#ff6365]">*</span>
                  </label>
                  <TableFilter
                    dropdownInitialValue={item.itemStatus}
                    dropdownConfigKey="status"
                    onStateChange={handleDropdownChange}
                    widthSize="100%"
                    id="item-status"
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
                    value={itemData.itemCost}
                    onChange={(event) =>
                      handleInputChange("itemCost", event.target.value)
                    }
                  />
                </div>
              </section>
            </div>
          </aside>

          <footer className="items-center p-6 grid grid-cols-6 gap-2 pt-2 border-t bg-primary/5">
            <div className="grid gap-6 col-span-4"></div>
            <div className="flex col-span-1 col-start-6 gap-4 h-full">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 mt-2 h-16 text-base [&_svg]:size-5"
                type="submit"
              >
                <SaveIcon />
                <span>Save Item</span>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </form>
  );
}
