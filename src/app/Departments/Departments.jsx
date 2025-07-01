import PageHeader from "../../components/PageHeader.jsx";
import ActionModal from "../../components/ActionModal.jsx";

import BuildingIcon from "../../components/icons/BuildingIcon.jsx";
import MoreOptionIcon from "../../components/icons/MoreOptionIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

export default function Departments() {
  return (
    <>
      <PageHeader title="Departments">
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          href="/departments/add"
        >
          <PlusIcon cssClass="mr-2 h-4 w-4" />
          Add Department
        </a>
      </PageHeader>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 pb-3 bg-primary/5 rounded-t-lg">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            All Departments
          </div>
          <div className="text-sm text-muted-foreground">
            Manage departments, floors, and rooms across the college
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center py-4">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm max-w-sm"
              placeholder="Search departments..."
              // value=""
            />
          </div>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Department
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Floors
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Rooms
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Total Items
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Items Status
                  </th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                    <div className="flex items-center gap-2">
                      <BuildingIcon cssClass="h-4 w-4 text-muted-foreground" />
                      DoECE
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    3
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    6
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    10
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500/30 ring-offset-1"></div>
                        <span className="text-xs">7</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 ring-1 ring-yellow-500/30 ring-offset-1"></div>
                        <span className="text-xs">2</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-red-500/30 ring-offset-1"></div>
                        <span className="text-xs">1</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                      type="button"
                      id="radix-:r2j:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreOptionIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ActionModal />
    </>
  );
}
