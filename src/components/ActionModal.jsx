import DeleteIcon from "./icons/DeleteIcon.jsx";
import EditIcon from "./icons/EditIcon.jsx";

export default function ActionModal() {
  return (
    <div
      data-radix-popper-content-wrapper=""
      dir="ltr"
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        transform: "translate(1335.2px, 347.2px)",
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
        className="z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
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
        <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <EditIcon />
          Edit
        </div>
        <div className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-destructive focus:text-destructive">
          <DeleteIcon />
          Delete
        </div>
      </div>
    </div>
  );
}
