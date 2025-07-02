import { useState } from "react";
import { Link } from "react-router-dom";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import BuildingIcon from "../../components/icons/BuildingIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon";
import Floor from "./Floor.jsx";

export default function AddDepartment() {
  const [numberOfFloors, setNumberOfFloors] = useState(1);

  function handleFloorChange(iterator) {
    setNumberOfFloors((prev) => prev + iterator);
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          to="/departments"
        >
          <ArrowLeftIcon />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">
          Add New Department
        </h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
                  onClick={() => handleFloorChange(1)}
                >
                  <PlusIcon cssClass="h-3.5 w-3.5" />
                  Add Floor
                </button>
              </div>
              {Array.from({ length: numberOfFloors }, (_, index) => (
                <Floor
                  key={index}
                  floorId={index + 1}
                  numberOfFloors={numberOfFloors}
                  handleFloorChange={handleFloorChange}
                />
              ))}
            </div>
          </section>

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
