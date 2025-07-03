import { useState, useEffect } from "react";

import ChevronLeftIcon from "../../components/icons/ChevronLeftIcon.jsx";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";
import RoomData from "./RoomData.jsx";
import RoomFilter from "./RoomFilter.jsx";
import ActionModal from "../../components/ActionModal.jsx";
import NoTableData from "../../components/NoTableData.jsx";

const isDataAvailable = true;

export default function Room() {
  const [actionModal, setActionModal] = useState(false);
  const [isFloorSelectDisabled, setIsFloorSelectDisabled] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActionModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleActionModal() {
    setActionModal((prevState) => !prevState);
  }

  function handleDisableSelect(value) {
    setIsFloorSelectDisabled(value === "All Departments");
  }

  return (
    <>
      <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            <article className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Rooms</h2>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                type="button"
              >
                <PlusIcon cssClass="h-4 w-4 mr-2" />
                Add Room
              </button>
            </article>
          </div>
          <div className="text-sm text-muted-foreground">
            View and manage rooms across departments and floors
          </div>
        </header>

        <section className="p-6 pt-0">
          <div className="flex flex-col md:flex-row items-center gap-4 py-4">
            <RoomFilter
              dropdownInitalValue="All Departments"
              dropdownMenus={["All Departments", "DoECE"]}
              onStateChange={handleDisableSelect}
            />
            <RoomFilter
              dropdownInitalValue="All Floors"
              dropdownMenus={["All Floors", "Floor 1", "Floor 2", "Floor 3"]}
              isDisabled={isFloorSelectDisabled}
            />
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full md:w-auto md:flex-1"
              placeholder="Search rooms..."
            />
          </div>

          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Room
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Department
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Floor
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Type
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Items
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {isDataAvailable ? (
                  <>
                    <RoomData toggleActionModal={toggleActionModal} />
                    <RoomData toggleActionModal={toggleActionModal} />
                    <RoomData toggleActionModal={toggleActionModal} />
                    <RoomData toggleActionModal={toggleActionModal} />
                    <RoomData toggleActionModal={toggleActionModal} />
                    <RoomData toggleActionModal={toggleActionModal} />
                  </>
                ) : (
                  <NoTableData tableType="room" />
                )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              position: "relative",
              bottom: `${4.55 * 5 + 0.75}rem`,
            }}
          >
            {actionModal && <ActionModal />}
          </div>
          {isDataAvailable ? (
            <footer className="flex items-center justify-between space-x-2 py-4">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium">1</span> to
                <span className="font-medium"> 6</span> of
                <span className="font-medium"> 6</span> rooms
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  disabled
                >
                  <ChevronLeftIcon />
                </button>
                <div className="flex items-center gap-1">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 h-8 w-8">
                    1
                  </button>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  disabled
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </footer>
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
}
