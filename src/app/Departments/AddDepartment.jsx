import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import BuildingIcon from "../../components/icons/BuildingIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon";

export default function AddDepartment() {
  return (
    <>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
          <ArrowLeftIcon />
        </button>
        <h2 className="text-3xl font-bold tracking-tight">
          Add New Department
        </h2>
      </div>
      <form className="space-y-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <header className="flex flex-col space-y-1.5 bg-primary/5 p-5">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              Department Details
            </div>
            <div className="text-sm text-muted-foreground">
              Create a new department and define its floors and rooms
            </div>
          </header>

          <section className="p-5 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                <BuildingIcon cssClass="h-4 w-4 text-muted-foreground" />
                Department Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="e.g. Computer Science"
              />
              <p className="text-sm text-muted-foreground">
                Enter the name of the department
              </p>
            </div>

            <div className="shrink-0 bg-border h-[1px] w-full"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Floors &amp; Rooms</h3>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 gap-1"
                  type="button"
                >
                  <PlusIcon cssClass="h-3.5 w-3.5" />
                  Add Floor
                </button>
              </div>
              <div className="border rounded-md p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5 text-muted-foreground"
                    >
                      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                      <rect x="3" y="16" width="18" height="4" rx="1"></rect>
                      <path d="M3 4h18"></path>
                    </svg>
                    <span class="font-medium">Floor 1</span>
                  </div>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-8 w-8 text-muted-foreground hover:text-destructive"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x h-4 w-4"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <span class="sr-only">Remove floor</span>
                  </button>
                </div>
                <div className="pl-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Rooms</h4>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-xs"
                      type="button"
                    >
                      <PlusIcon cssClass="h-3 w-3" />
                      Add Room
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="border rounded-md p-2 bg-muted/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-muted text-xs font-medium">
                          1
                        </div>
                        <div className="space-y-0 flex-1">
                          <input
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-7 text-sm"
                            placeholder="Room Name"
                            value="Room 101"
                          />
                        </div>
                      </div>

                      <div className="space-y-0">
                        <button
                          type="button"
                          role="combobox"
                          aria-controls="radix-:r11:"
                          aria-expanded="false"
                          aria-autocomplete="none"
                          dir="ltr"
                          data-state="closed"
                          className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 text-xs"
                        >
                          <span style={{ pointerEvents: "none" }}>Office</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Classroom
            </span>
            <span>Lab</span>
            <span>Office</span>
            <span>Workshop</span>
            <span>COnference</span>
            <span>Storage</span>
          </div> */}

          <div
            data-radix-popper-content-wrapper=""
            dir="ltr"
            style={{
              position: "fixed",
              left: "0px",
              top: "0px",
              transform: "translate(359px, 336px)",
              minWidth: "max-content",
              zIndex: 50,
              "--radix-popper-transform-origin": "100% 0px",
              "--radix-popper-available-width": "1536px",
              "--radix-popper-available-height": "388px",
              "--radix-popper-anchor-width": "32px",
              "--radix-popper-anchor-height": "32px",
            }}
          >
            <div
              className="z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[14.25rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              style={{
                outline: "none",
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height":
                  "var(--radix-popper-anchor-height)",
                pointerEvents: "auto",
              }}
            >
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Classroom
              </div>
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                  style={{ stroke: "#ffffff" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Lab
              </div>
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                  style={{ stroke: "#ffffff" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Office
              </div>
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                  style={{ stroke: "#ffffff" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Workshop
              </div>
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                  style={{ stroke: "#ffffff" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Conference
              </div>
              <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-4"
                  style={{ stroke: "#ffffff" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Storage
              </div>
            </div>
          </div>

          <footer className="items-center flex justify-end p-5 bg-muted/5 border-t">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 mt-2 h-16 text-base [&amp;_svg]:size-5"
              type="submit"
            >
              <BuildingIcon cssClass="h-[1.25rem] w-[1.25rem] mr-2" />
              <span>Add Department</span>
            </button>
          </footer>
        </div>
      </form>
    </>
  );
}
