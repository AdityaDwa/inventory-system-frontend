import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import EditIcon from "../../components/icons/EditIcon.jsx";
import SquareIcon from "../../components/icons/SquareIcon.jsx";
import DeleteIcon from "../../components/icons/DeleteIcon.jsx";
import PackageIcon from "../../components/icons/PackageIcon.jsx";
import FloorIcon from "../../components/icons/FloorIcon.jsx";
import RoomIcon from "../../components/icons/RoomIcon.jsx";
import HashtagIcon from "../../components/icons/HashtagIcon.jsx";
import CloseIcon from "../../components/icons/CloseIcon.jsx";
import ClipboardIcon from "../../components/icons/ClipboardIcon.jsx";

import TableFilter from "../../components/TableFilter.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import getEndpoint from "../../constants/apiEndpoints.js";

export default function RoomInventory() {
  const { accessToken } = useContext(AuthProvider);

  const { state } = useLocation();
  const { roomId, itemName } = useParams();
  const navigate = useNavigate();

  const room = state?.room;
  const item = state?.item;

  if (!room) {
  }

  const [itemActionsVisible, setItemActionsVisible] = useState({
    updateStatus: false,
    move: false,
    delete: false,
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [areActionsDisabled, setAreActionsDisabled] = useState(true);

  const [selectBtn, setSelectBtn] = useState(false);

  useEffect(() => {
    if (selectedItems.length > 0) {
      setAreActionsDisabled(false);
    } else {
      setAreActionsDisabled(true);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (!selectBtn) {
      setSelectedItems([]);
    }
  }, [selectBtn]);

  function handleAction(identifier) {
    setItemActionsVisible((prev) => ({ ...prev, [identifier]: true }));
  }

  function resetActionModal() {
    setItemActionsVisible({
      updateStatus: false,
      move: false,
      delete: false,
    });
  }

  function handleItemSelect(id) {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <>
      <header className="flex items-center gap-2">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          to={`/rooms/room/${roomId}`}
          state={{ rowData: room }}
        >
          <ArrowLeftIcon />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Item Details</h2>
      </header>

      <section className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-2/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[14.6rem]">
            <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold tracking-tight text-2xl">
                    {itemName}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                    onClick={() => setSelectBtn((prev) => !prev)}
                  >
                    <SquareIcon isSelected={selectBtn} /> Select
                  </button>
                </div>
              </div>
            </header>
            <article className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <PackageIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Category:</span>
                    [Category]
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FloorIcon cssClass="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Floor:</span>
                    {room.roomFloorName}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Make/Model No:</span>
                    {item.itemModel}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <RoomIcon />
                    <span className="font-medium">Room:</span>
                    {room.roomName}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </aside>

        <aside className="md:w-1/3 space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[14.6rem]">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Actions
              </div>
            </div>
            <div className="p-6 pt-0 space-y-2">
              {itemActionsVisible.updateStatus && (
                <TableFilter
                  dropdownInitialValue="Working"
                  dropdownConfigKey="status"
                  //   onStateChange={handleDropdownChange}
                  widthSize="100%"
                />
              )}
              {itemActionsVisible.move && (
                <TableFilter
                  dropdownInitialValue={room.roomName}
                  dropdownConfigKey="room"
                  widthSize="100%"
                  //   onStateChange={handleDropdownChange}
                  apiPayload="0"
                />
              )}
              {!itemActionsVisible.move && (
                <button
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start"
                  onClick={() =>
                    !itemActionsVisible.updateStatus
                      ? handleAction("updateStatus")
                      : () => {}
                  }
                  disabled={areActionsDisabled}
                >
                  <ClipboardIcon cssClass="mr-2 h-4 w-4" />
                  Update Status
                </button>
              )}
              {!itemActionsVisible.updateStatus && (
                <button
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full justify-start"
                  onClick={() =>
                    !itemActionsVisible.move ? handleAction("move") : () => {}
                  }
                  disabled={areActionsDisabled}
                >
                  <RoomIcon cssClass="mr-2 h-4 w-4" />
                  Move Item
                </button>
              )}
              {!itemActionsVisible.updateStatus && !itemActionsVisible.move && (
                <button
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md h-10 px-4 py-2 w-full justify-start"
                  onClick={() => {}}
                  disabled={areActionsDisabled}
                >
                  <DeleteIcon />
                  Delete
                </button>
              )}
              {(itemActionsVisible.updateStatus || itemActionsVisible.move) && (
                <button
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md h-10 px-4 py-2 w-full justify-start"
                  onClick={resetActionModal}
                >
                  <CloseIcon />
                  Cancel
                </button>
              )}
            </div>
          </div>
        </aside>
      </section>

      <section>
        <div className="relative w-full rounded-lg border bg-card text-card-foreground shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b transition-colors flex justify-between items-center gap-4 px-4 rounded-t-md">
                <th className="h-12 font-bold text-sidebar/95 flex justify-center items-center w-16">
                  S.N
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-start w-[7.5rem] items-center">
                  Date Acquired
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-start w-28 items-center">
                  Item ID
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-start w-[7.5rem] items-center">
                  Cost
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-center w-24 items-center">
                  Status
                </th>
                <th className="h-12 font-bold text-sidebar/95 flex justify-center w-24 items-center">
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {/* {itemTableData.length !== 0 ? (
                      itemTableData.map((item, index) => {
                        const additionalValue =
                          item.itemDescription !== ""
                            ? `(${item.itemDescription})`
                            : null;
      
                        return ( */}
              <tr
                className="border-b transition-colors text-slate-600 flex justify-between items-center gap-4 p-4 h-[4.5rem]"
                // key={index}
              >
                <td className="text-center w-16">
                  {selectBtn ? (
                    <div className="flex justify-center items-center ">
                      <button
                        className="cursor-pointer"
                        onClick={() => handleItemSelect("1")}
                      >
                        <SquareIcon isSelected={selectedItems.includes("1")} />
                      </button>
                    </div>
                  ) : (
                    1
                  )}
                </td>
                <td className="text-left w-[7.5rem]">2025-07-31</td>
                <td className="text-left w-28">2025TBL003</td>
                <td className="text-left w-[7.5rem]">Rs. 1,20,000</td>
                <td className="text-center w-24">Working</td>
                <td className="text-center w-24">Purchase</td>
              </tr>
              {/* // ); */}
              {/* //   }) */}
              {/* // ) : ( */}
              {/* //   <tr className="border-b transition-colors hover:bg-muted/50"> */}
              {/* <td className="p-4 h-24 text-center" colSpan="10"> */}
              {/* No item found. */}
              {/* </td> */}
              {/* </tr> */}
              {/* // )} */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
