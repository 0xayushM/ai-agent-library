var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/app-sidebar.tsx
import * as React12 from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder as IconFolder2,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers
} from "@tabler/icons-react";

// src/components/nav-documents.tsx
import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash
} from "@tabler/icons-react";

// src/components/ui/dropdown-menu.tsx
import * as React2 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/dropdown-menu.tsx
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.Portal, __spreadValues({ "data-slot": "dropdown-menu-portal" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ));
}
function DropdownMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.Group, __spreadValues({ "data-slot": "dropdown-menu-group" }, props));
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React2.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React2.createElement(CheckIcon, { className: "size-4" }))),
    children
  );
}
function DropdownMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.RadioGroup,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-group"
    }, props)
  );
}
function DropdownMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.RadioItem,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    /* @__PURE__ */ React2.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React2.createElement(CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function DropdownMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "span",
    __spreadValues({
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function DropdownMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React2.createElement(DropdownMenuPrimitive.Sub, __spreadValues({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.SubTrigger,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React2.createElement(ChevronRightIcon, { className: "ml-auto size-4" })
  );
}
function DropdownMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React2.createElement(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}

// src/components/ui/sidebar.tsx
import * as React9 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

// src/hooks/use-mobile.ts
import * as React3 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React3.useState(void 0);
  React3.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/components/ui/button.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild"
  ]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ React4.createElement(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
}

// src/components/ui/input.tsx
import * as React5 from "react";
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ React5.createElement(
    "input",
    __spreadValues({
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )
    }, props)
  );
}

// src/components/ui/separator.tsx
import * as React6 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
function Separator2(_a) {
  var _b = _a, {
    className,
    orientation = "horizontal",
    decorative = true
  } = _b, props = __objRest(_b, [
    "className",
    "orientation",
    "decorative"
  ]);
  return /* @__PURE__ */ React6.createElement(
    SeparatorPrimitive.Root,
    __spreadValues({
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )
    }, props)
  );
}

// src/components/ui/sheet.tsx
import * as React7 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
function Sheet(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React7.createElement(SheetPrimitive.Root, __spreadValues({ "data-slot": "sheet" }, props));
}
function SheetTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React7.createElement(SheetPrimitive.Trigger, __spreadValues({ "data-slot": "sheet-trigger" }, props));
}
function SheetClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React7.createElement(SheetPrimitive.Close, __spreadValues({ "data-slot": "sheet-close" }, props));
}
function SheetPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React7.createElement(SheetPrimitive.Portal, __spreadValues({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React7.createElement(
    SheetPrimitive.Overlay,
    __spreadValues({
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function SheetContent(_a) {
  var _b = _a, {
    className,
    children,
    side = "right"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "side"
  ]);
  return /* @__PURE__ */ React7.createElement(SheetPortal, null, /* @__PURE__ */ React7.createElement(SheetOverlay, null), /* @__PURE__ */ React7.createElement(
    SheetPrimitive.Content,
    __spreadValues({
      "data-slot": "sheet-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
        side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React7.createElement(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, /* @__PURE__ */ React7.createElement(XIcon, { className: "size-4" }), /* @__PURE__ */ React7.createElement("span", { className: "sr-only" }, "Close"))
  ));
}
function SheetHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className)
    }, props)
  );
}
function SheetFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}
function SheetTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React7.createElement(
    SheetPrimitive.Title,
    __spreadValues({
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className)
    }, props)
  );
}
function SheetDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React7.createElement(
    SheetPrimitive.Description,
    __spreadValues({
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}

// src/components/ui/skeleton.tsx
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className)
    }, props)
  );
}

// src/components/ui/tooltip.tsx
import * as React8 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ React8.createElement(
    TooltipPrimitive.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React8.createElement(TooltipProvider, null, /* @__PURE__ */ React8.createElement(TooltipPrimitive.Root, __spreadValues({ "data-slot": "tooltip" }, props)));
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React8.createElement(TooltipPrimitive.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 0,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset",
    "children"
  ]);
  return /* @__PURE__ */ React8.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React8.createElement(
    TooltipPrimitive.Content,
    __spreadValues({
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React8.createElement(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
  ));
}

// src/components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React9.createContext(null);
function useSidebar() {
  const context = React9.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider(_a) {
  var _b = _a, {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children
  } = _b, props = __objRest(_b, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "className",
    "style",
    "children"
  ]);
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React9.useState(false);
  const [_open, _setOpen] = React9.useState(defaultOpen);
  const open = openProp != null ? openProp : _open;
  const setOpen = React9.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React9.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React9.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React9.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ React9.createElement(SidebarContext.Provider, { value: contextValue }, /* @__PURE__ */ React9.createElement(TooltipProvider, { delayDuration: 0 }, /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-wrapper",
      style: __spreadValues({
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
      }, style),
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      )
    }, props),
    children
  )));
}
function Sidebar(_a) {
  var _b = _a, {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children
  } = _b, props = __objRest(_b, [
    "side",
    "variant",
    "collapsible",
    "className",
    "children"
  ]);
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ React9.createElement(
      "div",
      __spreadValues({
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )
      }, props),
      children
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ React9.createElement(Sheet, __spreadValues({ open: openMobile, onOpenChange: setOpenMobile }, props), /* @__PURE__ */ React9.createElement(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side
      },
      /* @__PURE__ */ React9.createElement(SheetHeader, { className: "sr-only" }, /* @__PURE__ */ React9.createElement(SheetTitle, null, "Sidebar"), /* @__PURE__ */ React9.createElement(SheetDescription, null, "Displays the mobile sidebar.")),
      /* @__PURE__ */ React9.createElement("div", { className: "flex h-full w-full flex-col" }, children)
    ));
  }
  return /* @__PURE__ */ React9.createElement(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar"
    },
    /* @__PURE__ */ React9.createElement(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ React9.createElement(
      "div",
      __spreadValues({
        "data-slot": "sidebar-container",
        className: cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )
      }, props),
      /* @__PURE__ */ React9.createElement(
        "div",
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        },
        children
      )
    )
  );
}
function SidebarTrigger(_a) {
  var _b = _a, {
    className,
    onClick
  } = _b, props = __objRest(_b, [
    "className",
    "onClick"
  ]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React9.createElement(
    Button,
    __spreadValues({
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props),
    /* @__PURE__ */ React9.createElement(PanelLeftIcon, null),
    /* @__PURE__ */ React9.createElement("span", { className: "sr-only" }, "Toggle Sidebar")
  );
}
function SidebarRail(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React9.createElement(
    "button",
    __spreadValues({
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )
    }, props)
  );
}
function SidebarInset(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "main",
    __spreadValues({
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )
    }, props)
  );
}
function SidebarInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    Input,
    __spreadValues({
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className)
    }, props)
  );
}
function SidebarHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    Separator2,
    __spreadValues({
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className)
    }, props)
  );
}
function SidebarContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )
    }, props)
  );
}
function SidebarGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props)
  );
}
function SidebarGroupLabel(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? Slot2 : "div";
  return /* @__PURE__ */ React9.createElement(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarGroupAction(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ React9.createElement(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarGroupContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className)
    }, props)
  );
}
function SidebarMenu(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props)
  );
}
function SidebarMenuItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
}
var sidebarMenuButtonVariants = cva2(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton(_a) {
  var _b = _a, {
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "isActive",
    "variant",
    "size",
    "tooltip",
    "className"
  ]);
  const Comp = asChild ? Slot2 : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ React9.createElement(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className)
    }, props)
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ React9.createElement(Tooltip, null, /* @__PURE__ */ React9.createElement(TooltipTrigger, { asChild: true }, button), /* @__PURE__ */ React9.createElement(
    TooltipContent,
    __spreadValues({
      side: "right",
      align: "center",
      hidden: state !== "collapsed" || isMobile
    }, tooltip)
  ));
}
function SidebarMenuAction(_a) {
  var _b = _a, {
    className,
    asChild = false,
    showOnHover = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild",
    "showOnHover"
  ]);
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ React9.createElement(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarMenuBadge(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSkeleton(_a) {
  var _b = _a, {
    className,
    showIcon = false
  } = _b, props = __objRest(_b, [
    "className",
    "showIcon"
  ]);
  const width = React9.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ React9.createElement(
    "div",
    __spreadValues({
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props),
    showIcon && /* @__PURE__ */ React9.createElement(
      Skeleton,
      {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }
    ),
    /* @__PURE__ */ React9.createElement(
      Skeleton,
      {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      }
    )
  );
}
function SidebarMenuSub(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSubItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className)
    }, props)
  );
}
function SidebarMenuSubButton(_a) {
  var _b = _a, {
    asChild = false,
    size = "md",
    isActive = false,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "size",
    "isActive",
    "className"
  ]);
  const Comp = asChild ? Slot2 : "a";
  return /* @__PURE__ */ React9.createElement(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}

// src/components/nav-documents.tsx
function NavDocuments({
  items
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ React.createElement(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden" }, /* @__PURE__ */ React.createElement(SidebarGroupLabel, null, "Documents"), /* @__PURE__ */ React.createElement(SidebarMenu, null, items.map((item) => /* @__PURE__ */ React.createElement(SidebarMenuItem, { key: item.name }, /* @__PURE__ */ React.createElement(SidebarMenuButton, { asChild: true }, /* @__PURE__ */ React.createElement("a", { href: item.url }, /* @__PURE__ */ React.createElement(item.icon, null), /* @__PURE__ */ React.createElement("span", null, item.name))), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
    SidebarMenuAction,
    {
      showOnHover: true,
      className: "data-[state=open]:bg-accent rounded-sm"
    },
    /* @__PURE__ */ React.createElement(IconDots, null),
    /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "More")
  )), /* @__PURE__ */ React.createElement(
    DropdownMenuContent,
    {
      className: "w-24 rounded-lg",
      side: isMobile ? "bottom" : "right",
      align: isMobile ? "end" : "start"
    },
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconFolder, null), /* @__PURE__ */ React.createElement("span", null, "Open")),
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconShare3, null), /* @__PURE__ */ React.createElement("span", null, "Share")),
    /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React.createElement(DropdownMenuItem, { variant: "destructive" }, /* @__PURE__ */ React.createElement(IconTrash, null), /* @__PURE__ */ React.createElement("span", null, "Delete"))
  )))), /* @__PURE__ */ React.createElement(SidebarMenuItem, null, /* @__PURE__ */ React.createElement(SidebarMenuButton, { className: "text-sidebar-foreground/70" }, /* @__PURE__ */ React.createElement(IconDots, { className: "text-sidebar-foreground/70" }), /* @__PURE__ */ React.createElement("span", null, "More")))));
}

// src/components/nav-main.tsx
import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";
function NavMain({
  items
}) {
  return /* @__PURE__ */ React.createElement(SidebarGroup, null, /* @__PURE__ */ React.createElement(SidebarGroupContent, { className: "flex flex-col gap-2" }, /* @__PURE__ */ React.createElement(SidebarMenu, null, /* @__PURE__ */ React.createElement(SidebarMenuItem, { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    SidebarMenuButton,
    {
      tooltip: "Quick Create",
      className: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
    },
    /* @__PURE__ */ React.createElement(IconCirclePlusFilled, null),
    /* @__PURE__ */ React.createElement("span", null, "Quick Create")
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "icon",
      className: "size-8 group-data-[collapsible=icon]:opacity-0",
      variant: "outline"
    },
    /* @__PURE__ */ React.createElement(IconMail, null),
    /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "Inbox")
  ))), /* @__PURE__ */ React.createElement(SidebarMenu, null, items.map((item) => /* @__PURE__ */ React.createElement(SidebarMenuItem, { key: item.title }, /* @__PURE__ */ React.createElement(SidebarMenuButton, { tooltip: item.title }, item.icon && /* @__PURE__ */ React.createElement(item.icon, null), /* @__PURE__ */ React.createElement("span", null, item.title)))))));
}

// src/components/nav-secondary.tsx
import * as React10 from "react";
function NavSecondary(_a) {
  var _b = _a, {
    items
  } = _b, props = __objRest(_b, [
    "items"
  ]);
  return /* @__PURE__ */ React10.createElement(SidebarGroup, __spreadValues({}, props), /* @__PURE__ */ React10.createElement(SidebarGroupContent, null, /* @__PURE__ */ React10.createElement(SidebarMenu, null, items.map((item) => /* @__PURE__ */ React10.createElement(SidebarMenuItem, { key: item.title }, /* @__PURE__ */ React10.createElement(SidebarMenuButton, { asChild: true }, /* @__PURE__ */ React10.createElement("a", { href: item.url }, /* @__PURE__ */ React10.createElement(item.icon, null), /* @__PURE__ */ React10.createElement("span", null, item.title))))))));
}

// src/components/nav-user.tsx
import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle
} from "@tabler/icons-react";

// src/components/ui/avatar.tsx
import * as React11 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React11.createElement(
    AvatarPrimitive.Root,
    __spreadValues({
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
}
function AvatarImage(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React11.createElement(
    AvatarPrimitive.Image,
    __spreadValues({
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className)
    }, props)
  );
}
function AvatarFallback(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React11.createElement(
    AvatarPrimitive.Fallback,
    __spreadValues({
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )
    }, props)
  );
}

// src/components/nav-user.tsx
function NavUser({
  user
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ React.createElement(SidebarMenu, null, /* @__PURE__ */ React.createElement(SidebarMenuItem, null, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    },
    /* @__PURE__ */ React.createElement(Avatar, { className: "h-8 w-8 rounded-lg grayscale" }, /* @__PURE__ */ React.createElement(AvatarImage, { src: user.avatar, alt: user.name }), /* @__PURE__ */ React.createElement(AvatarFallback, { className: "rounded-lg" }, "CN")),
    /* @__PURE__ */ React.createElement("div", { className: "grid flex-1 text-left text-sm leading-tight" }, /* @__PURE__ */ React.createElement("span", { className: "truncate font-medium" }, user.name), /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground truncate text-xs" }, user.email)),
    /* @__PURE__ */ React.createElement(IconDotsVertical, { className: "ml-auto size-4" })
  )), /* @__PURE__ */ React.createElement(
    DropdownMenuContent,
    {
      className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
      side: isMobile ? "bottom" : "right",
      align: "end",
      sideOffset: 4
    },
    /* @__PURE__ */ React.createElement(DropdownMenuLabel, { className: "p-0 font-normal" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, /* @__PURE__ */ React.createElement(Avatar, { className: "h-8 w-8 rounded-lg" }, /* @__PURE__ */ React.createElement(AvatarImage, { src: user.avatar, alt: user.name }), /* @__PURE__ */ React.createElement(AvatarFallback, { className: "rounded-lg" }, "CN")), /* @__PURE__ */ React.createElement("div", { className: "grid flex-1 text-left text-sm leading-tight" }, /* @__PURE__ */ React.createElement("span", { className: "truncate font-medium" }, user.name), /* @__PURE__ */ React.createElement("span", { className: "text-muted-foreground truncate text-xs" }, user.email)))),
    /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React.createElement(DropdownMenuGroup, null, /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconUserCircle, null), "Account"), /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconCreditCard, null), "Billing"), /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconNotification, null), "Notifications")),
    /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(IconLogout, null), "Log out")
  ))));
}

// src/components/app-sidebar.tsx
var data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg"
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder2
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers
    }
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch
    }
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord
    }
  ]
};
function AppSidebar(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React12.createElement(Sidebar, __spreadValues({ collapsible: "offcanvas" }, props), /* @__PURE__ */ React12.createElement(SidebarHeader, null, /* @__PURE__ */ React12.createElement(SidebarMenu, null, /* @__PURE__ */ React12.createElement(SidebarMenuItem, null, /* @__PURE__ */ React12.createElement(
    SidebarMenuButton,
    {
      asChild: true,
      className: "data-[slot=sidebar-menu-button]:!p-1.5"
    },
    /* @__PURE__ */ React12.createElement("a", { href: "#" }, /* @__PURE__ */ React12.createElement(IconInnerShadowTop, { className: "!size-5" }), /* @__PURE__ */ React12.createElement("span", { className: "text-base font-semibold" }, "Acme Inc."))
  )))), /* @__PURE__ */ React12.createElement(SidebarContent, null, /* @__PURE__ */ React12.createElement(NavMain, { items: data.navMain }), /* @__PURE__ */ React12.createElement(NavDocuments, { items: data.documents }), /* @__PURE__ */ React12.createElement(NavSecondary, { items: data.navSecondary, className: "mt-auto" })), /* @__PURE__ */ React12.createElement(SidebarFooter, null, /* @__PURE__ */ React12.createElement(NavUser, { user: data.user })));
}

// src/components/calendar-22.tsx
import * as React16 from "react";
import { ChevronDownIcon as ChevronDownIcon2 } from "lucide-react";

// src/components/ui/calendar.tsx
import * as React13 from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon as ChevronRightIcon2
} from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays",
    "captionLayout",
    "buttonVariant",
    "formatters",
    "components"
  ]);
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ React13.createElement(
    DayPicker,
    __spreadValues({
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: __spreadValues({
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
      }, formatters),
      classNames: __spreadValues({
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden)
      }, classNames),
      components: __spreadValues({
        Root: (_a2) => {
          var _b2 = _a2, { className: className2, rootRef } = _b2, props2 = __objRest(_b2, ["className", "rootRef"]);
          return /* @__PURE__ */ React13.createElement(
            "div",
            __spreadValues({
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2)
            }, props2)
          );
        },
        Chevron: (_c) => {
          var _d = _c, { className: className2, orientation } = _d, props2 = __objRest(_d, ["className", "orientation"]);
          if (orientation === "left") {
            return /* @__PURE__ */ React13.createElement(ChevronLeftIcon, __spreadValues({ className: cn("size-4", className2) }, props2));
          }
          if (orientation === "right") {
            return /* @__PURE__ */ React13.createElement(
              ChevronRightIcon2,
              __spreadValues({
                className: cn("size-4", className2)
              }, props2)
            );
          }
          return /* @__PURE__ */ React13.createElement(ChevronDownIcon, __spreadValues({ className: cn("size-4", className2) }, props2));
        },
        DayButton: CalendarDayButton,
        WeekNumber: (_e) => {
          var _f = _e, { children } = _f, props2 = __objRest(_f, ["children"]);
          return /* @__PURE__ */ React13.createElement("td", __spreadValues({}, props2), /* @__PURE__ */ React13.createElement("div", { className: "flex size-(--cell-size) items-center justify-center text-center" }, children));
        }
      }, components)
    }, props)
  );
}
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = __objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = getDefaultClassNames();
  const ref = React13.useRef(null);
  React13.useEffect(() => {
    var _a2;
    if (modifiers.focused)
      (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ React13.createElement(
    Button,
    __spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}

// src/components/ui/label.tsx
import * as React14 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
function Label2(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React14.createElement(
    LabelPrimitive.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )
    }, props)
  );
}

// src/components/ui/popover.tsx
import * as React15 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(PopoverPrimitive.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(PopoverPrimitive.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React15.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React15.createElement(
    PopoverPrimitive.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ));
}
function PopoverAnchor(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(PopoverPrimitive.Anchor, __spreadValues({ "data-slot": "popover-anchor" }, props));
}

// src/components/chart-area-interactive.tsx
import * as React22 from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

// src/components/ui/card.tsx
import * as React17 from "react";
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React17.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}

// src/components/ui/chart.tsx
import * as React18 from "react";
import * as RechartsPrimitive from "recharts";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React18.createContext(null);
function useChart() {
  const context = React18.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer(_a) {
  var _b = _a, {
    id,
    className,
    children,
    config
  } = _b, props = __objRest(_b, [
    "id",
    "className",
    "children",
    "config"
  ]);
  const uniqueId = React18.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ React18.createElement(ChartContext.Provider, { value: { config } }, /* @__PURE__ */ React18.createElement(
    "div",
    __spreadValues({
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      )
    }, props),
    /* @__PURE__ */ React18.createElement(ChartStyle, { id: chartId, config }),
    /* @__PURE__ */ React18.createElement(RechartsPrimitive.ResponsiveContainer, null, children)
  ));
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ React18.createElement(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            var _a;
            const color = ((_a = itemConfig.theme) == null ? void 0 : _a[theme]) || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React18.useMemo(() => {
    var _a;
    if (hideLabel || !(payload == null ? void 0 : payload.length)) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || (item == null ? void 0 : item.dataKey) || (item == null ? void 0 : item.name) || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? ((_a = config[label]) == null ? void 0 : _a.label) || label : itemConfig == null ? void 0 : itemConfig.label;
    if (labelFormatter) {
      return /* @__PURE__ */ React18.createElement("div", { className: cn("font-medium", labelClassName) }, labelFormatter(value, payload));
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ React18.createElement("div", { className: cn("font-medium", labelClassName) }, value);
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !(payload == null ? void 0 : payload.length)) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ React18.createElement(
    "div",
    {
      className: cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )
    },
    !nestLabel ? tooltipLabel : null,
    /* @__PURE__ */ React18.createElement("div", { className: "grid gap-1.5" }, payload.map((item, index) => {
      const key = `${nameKey || item.name || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const indicatorColor = color || item.payload.fill || item.color;
      return /* @__PURE__ */ React18.createElement(
        "div",
        {
          key: item.dataKey,
          className: cn(
            "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
            indicator === "dot" && "items-center"
          )
        },
        formatter && (item == null ? void 0 : item.value) !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ React18.createElement(React18.Fragment, null, (itemConfig == null ? void 0 : itemConfig.icon) ? /* @__PURE__ */ React18.createElement(itemConfig.icon, null) : !hideIndicator && /* @__PURE__ */ React18.createElement(
          "div",
          {
            className: cn(
              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
              {
                "h-2.5 w-2.5": indicator === "dot",
                "w-1": indicator === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                "my-0.5": nestLabel && indicator === "dashed"
              }
            ),
            style: {
              "--color-bg": indicatorColor,
              "--color-border": indicatorColor
            }
          }
        ), /* @__PURE__ */ React18.createElement(
          "div",
          {
            className: cn(
              "flex flex-1 justify-between leading-none",
              nestLabel ? "items-end" : "items-center"
            )
          },
          /* @__PURE__ */ React18.createElement("div", { className: "grid gap-1.5" }, nestLabel ? tooltipLabel : null, /* @__PURE__ */ React18.createElement("span", { className: "text-muted-foreground" }, (itemConfig == null ? void 0 : itemConfig.label) || item.name)),
          item.value && /* @__PURE__ */ React18.createElement("span", { className: "text-foreground font-mono font-medium tabular-nums" }, item.value.toLocaleString())
        ))
      );
    }))
  );
}
var ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!(payload == null ? void 0 : payload.length)) {
    return null;
  }
  return /* @__PURE__ */ React18.createElement(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )
    },
    payload.map((item) => {
      const key = `${nameKey || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      return /* @__PURE__ */ React18.createElement(
        "div",
        {
          key: item.value,
          className: cn(
            "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          )
        },
        (itemConfig == null ? void 0 : itemConfig.icon) && !hideIcon ? /* @__PURE__ */ React18.createElement(itemConfig.icon, null) : /* @__PURE__ */ React18.createElement(
          "div",
          {
            className: "h-2 w-2 shrink-0 rounded-[2px]",
            style: {
              backgroundColor: item.color
            }
          }
        ),
        itemConfig == null ? void 0 : itemConfig.label
      );
    })
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// src/components/ui/select.tsx
import * as React19 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon as CheckIcon2, ChevronDownIcon as ChevronDownIcon3, ChevronUpIcon } from "lucide-react";
function Select(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React19.createElement(SelectPrimitive.Root, __spreadValues({ "data-slot": "select" }, props));
}
function SelectGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React19.createElement(SelectPrimitive.Group, __spreadValues({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React19.createElement(SelectPrimitive.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    size = "default",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Trigger,
    __spreadValues({
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React19.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React19.createElement(ChevronDownIcon3, { className: "size-4 opacity-50" }))
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position"
  ]);
  return /* @__PURE__ */ React19.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Content,
    __spreadValues({
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props),
    /* @__PURE__ */ React19.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React19.createElement(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React19.createElement(SelectScrollDownButton, null)
  ));
}
function SelectLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Label,
    __spreadValues({
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className)
    }, props)
  );
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Item,
    __spreadValues({
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )
    }, props),
    /* @__PURE__ */ React19.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(CheckIcon2, { className: "size-4" }))),
    /* @__PURE__ */ React19.createElement(SelectPrimitive.ItemText, null, children)
  );
}
function SelectSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Separator,
    __spreadValues({
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)
    }, props)
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.ScrollUpButton,
    __spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React19.createElement(ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React19.createElement(
    SelectPrimitive.ScrollDownButton,
    __spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React19.createElement(ChevronDownIcon3, { className: "size-4" })
  );
}

// src/components/ui/toggle-group.tsx
import * as React21 from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// src/components/ui/toggle.tsx
import * as React20 from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva as cva3 } from "class-variance-authority";
var toggleVariants = cva3(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle(_a) {
  var _b = _a, {
    className,
    variant,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  return /* @__PURE__ */ React20.createElement(
    TogglePrimitive.Root,
    __spreadValues({
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
}

// src/components/ui/toggle-group.tsx
var ToggleGroupContext = React21.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ React21.createElement(
    ToggleGroupPrimitive.Root,
    __spreadValues({
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      className: cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )
    }, props),
    /* @__PURE__ */ React21.createElement(ToggleGroupContext.Provider, { value: { variant, size } }, children)
  );
}
function ToggleGroupItem(_a) {
  var _b = _a, {
    className,
    children,
    variant,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "variant",
    "size"
  ]);
  const context = React21.useContext(ToggleGroupContext);
  return /* @__PURE__ */ React21.createElement(
    ToggleGroupPrimitive.Item,
    __spreadValues({
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )
    }, props),
    children
  );
}

// src/components/chart-area-interactive.tsx
var description = "An interactive area chart";
var chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 }
];
var chartConfig = {
  visitors: {
    label: "Visitors"
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)"
  }
};
function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React22.useState("90d");
  React22.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = /* @__PURE__ */ new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return /* @__PURE__ */ React22.createElement(Card, { className: "@container/card" }, /* @__PURE__ */ React22.createElement(CardHeader, null, /* @__PURE__ */ React22.createElement(CardTitle, null, "Total Visitors"), /* @__PURE__ */ React22.createElement(CardDescription, null, /* @__PURE__ */ React22.createElement("span", { className: "hidden @[540px]/card:block" }, "Total for the last 3 months"), /* @__PURE__ */ React22.createElement("span", { className: "@[540px]/card:hidden" }, "Last 3 months")), /* @__PURE__ */ React22.createElement(CardAction, null, /* @__PURE__ */ React22.createElement(
    ToggleGroup,
    {
      type: "single",
      value: timeRange,
      onValueChange: setTimeRange,
      variant: "outline",
      className: "hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
    },
    /* @__PURE__ */ React22.createElement(ToggleGroupItem, { value: "90d" }, "Last 3 months"),
    /* @__PURE__ */ React22.createElement(ToggleGroupItem, { value: "30d" }, "Last 30 days"),
    /* @__PURE__ */ React22.createElement(ToggleGroupItem, { value: "7d" }, "Last 7 days")
  ), /* @__PURE__ */ React22.createElement(Select, { value: timeRange, onValueChange: setTimeRange }, /* @__PURE__ */ React22.createElement(
    SelectTrigger,
    {
      className: "flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden",
      size: "sm",
      "aria-label": "Select a value"
    },
    /* @__PURE__ */ React22.createElement(SelectValue, { placeholder: "Last 3 months" })
  ), /* @__PURE__ */ React22.createElement(SelectContent, { className: "rounded-xl" }, /* @__PURE__ */ React22.createElement(SelectItem, { value: "90d", className: "rounded-lg" }, "Last 3 months"), /* @__PURE__ */ React22.createElement(SelectItem, { value: "30d", className: "rounded-lg" }, "Last 30 days"), /* @__PURE__ */ React22.createElement(SelectItem, { value: "7d", className: "rounded-lg" }, "Last 7 days"))))), /* @__PURE__ */ React22.createElement(CardContent, { className: "px-2 pt-4 sm:px-6 sm:pt-6" }, /* @__PURE__ */ React22.createElement(
    ChartContainer,
    {
      config: chartConfig,
      className: "aspect-auto h-[250px] w-full"
    },
    /* @__PURE__ */ React22.createElement(AreaChart, { data: filteredData }, /* @__PURE__ */ React22.createElement("defs", null, /* @__PURE__ */ React22.createElement("linearGradient", { id: "fillDesktop", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React22.createElement(
      "stop",
      {
        offset: "5%",
        stopColor: "var(--color-desktop)",
        stopOpacity: 1
      }
    ), /* @__PURE__ */ React22.createElement(
      "stop",
      {
        offset: "95%",
        stopColor: "var(--color-desktop)",
        stopOpacity: 0.1
      }
    )), /* @__PURE__ */ React22.createElement("linearGradient", { id: "fillMobile", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React22.createElement(
      "stop",
      {
        offset: "5%",
        stopColor: "var(--color-mobile)",
        stopOpacity: 0.8
      }
    ), /* @__PURE__ */ React22.createElement(
      "stop",
      {
        offset: "95%",
        stopColor: "var(--color-mobile)",
        stopOpacity: 0.1
      }
    ))), /* @__PURE__ */ React22.createElement(CartesianGrid, { vertical: false }), /* @__PURE__ */ React22.createElement(
      XAxis,
      {
        dataKey: "date",
        tickLine: false,
        axisLine: false,
        tickMargin: 8,
        minTickGap: 32,
        tickFormatter: (value) => {
          const date = new Date(value);
          return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
          });
        }
      }
    ), /* @__PURE__ */ React22.createElement(
      ChartTooltip,
      {
        cursor: false,
        defaultIndex: isMobile ? -1 : 10,
        content: /* @__PURE__ */ React22.createElement(
          ChartTooltipContent,
          {
            labelFormatter: (value) => {
              return new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
              });
            },
            indicator: "dot"
          }
        )
      }
    ), /* @__PURE__ */ React22.createElement(
      Area,
      {
        dataKey: "mobile",
        type: "natural",
        fill: "url(#fillMobile)",
        stroke: "var(--color-mobile)",
        stackId: "a"
      }
    ), /* @__PURE__ */ React22.createElement(
      Area,
      {
        dataKey: "desktop",
        type: "natural",
        fill: "url(#fillDesktop)",
        stroke: "var(--color-desktop)",
        stackId: "a"
      }
    ))
  )));
}

// src/components/data-table.tsx
import * as React28 from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical as IconDotsVertical2,
  IconGripVertical,
  IconLayoutColumns,
  IconLoader,
  IconPlus,
  IconTrendingUp
} from "@tabler/icons-react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { Area as Area2, AreaChart as AreaChart2, CartesianGrid as CartesianGrid2, XAxis as XAxis2 } from "recharts";
import { toast } from "sonner";
import { z } from "zod";

// src/components/ui/badge.tsx
import * as React23 from "react";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { cva as cva4 } from "class-variance-authority";
var badgeVariants = cva4(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, {
    className,
    variant,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const Comp = asChild ? Slot3 : "span";
  return /* @__PURE__ */ React23.createElement(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/components/ui/checkbox.tsx
import * as React24 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon as CheckIcon3 } from "lucide-react";
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React24.createElement(
    CheckboxPrimitive.Root,
    __spreadValues({
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React24.createElement(
      CheckboxPrimitive.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ React24.createElement(CheckIcon3, { className: "size-3.5" })
    )
  );
}

// src/components/ui/drawer.tsx
import * as React25 from "react";
import { Drawer as DrawerPrimitive } from "vaul";
function Drawer(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React25.createElement(DrawerPrimitive.Root, __spreadValues({ "data-slot": "drawer" }, props));
}
function DrawerTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React25.createElement(DrawerPrimitive.Trigger, __spreadValues({ "data-slot": "drawer-trigger" }, props));
}
function DrawerPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React25.createElement(DrawerPrimitive.Portal, __spreadValues({ "data-slot": "drawer-portal" }, props));
}
function DrawerClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React25.createElement(DrawerPrimitive.Close, __spreadValues({ "data-slot": "drawer-close" }, props));
}
function DrawerOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React25.createElement(
    DrawerPrimitive.Overlay,
    __spreadValues({
      "data-slot": "drawer-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function DrawerContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React25.createElement(DrawerPortal, { "data-slot": "drawer-portal" }, /* @__PURE__ */ React25.createElement(DrawerOverlay, null), /* @__PURE__ */ React25.createElement(
    DrawerPrimitive.Content,
    __spreadValues({
      "data-slot": "drawer-content",
      className: cn(
        "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
        "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
        "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
        "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
        "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
        className
      )
    }, props),
    /* @__PURE__ */ React25.createElement("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
    children
  ));
}
function DrawerHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React25.createElement(
    "div",
    __spreadValues({
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )
    }, props)
  );
}
function DrawerFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React25.createElement(
    "div",
    __spreadValues({
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}
function DrawerTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React25.createElement(
    DrawerPrimitive.Title,
    __spreadValues({
      "data-slot": "drawer-title",
      className: cn("text-foreground font-semibold", className)
    }, props)
  );
}
function DrawerDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React25.createElement(
    DrawerPrimitive.Description,
    __spreadValues({
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}

// src/components/ui/table.tsx
import * as React26 from "react";
function Table(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto"
    },
    /* @__PURE__ */ React26.createElement(
      "table",
      __spreadValues({
        "data-slot": "table",
        className: cn("w-full caption-bottom text-sm", className)
      }, props)
    )
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "tbody",
    __spreadValues({
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
}
function TableFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "tfoot",
    __spreadValues({
      "data-slot": "table-footer",
      className: cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React26.createElement(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCaption(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React26.createElement(
    "caption",
    __spreadValues({
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className)
    }, props)
  );
}

// src/components/ui/tabs.tsx
import * as React27 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
function Tabs(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React27.createElement(
    TabsPrimitive.Root,
    __spreadValues({
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className)
    }, props)
  );
}
function TabsList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React27.createElement(
    TabsPrimitive.List,
    __spreadValues({
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )
    }, props)
  );
}
function TabsTrigger(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React27.createElement(
    TabsPrimitive.Trigger,
    __spreadValues({
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function TabsContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React27.createElement(
    TabsPrimitive.Content,
    __spreadValues({
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className)
    }, props)
  );
}

// src/components/data-table.tsx
var schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string()
});
function DragHandle({ id }) {
  const { attributes, listeners } = useSortable({
    id
  });
  return /* @__PURE__ */ React28.createElement(
    Button,
    __spreadProps(__spreadValues(__spreadValues({}, attributes), listeners), {
      variant: "ghost",
      size: "icon",
      className: "text-muted-foreground size-7 hover:bg-transparent"
    }),
    /* @__PURE__ */ React28.createElement(IconGripVertical, { className: "text-muted-foreground size-3" }),
    /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Drag to reorder")
  );
}
var columns = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => /* @__PURE__ */ React28.createElement(DragHandle, { id: row.original.id })
  },
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ React28.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React28.createElement(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all"
      }
    )),
    cell: ({ row }) => /* @__PURE__ */ React28.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React28.createElement(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row"
      }
    )),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "header",
    header: "Header",
    cell: ({ row }) => {
      return /* @__PURE__ */ React28.createElement(TableCellViewer, { item: row.original });
    },
    enableHiding: false
  },
  {
    accessorKey: "type",
    header: "Section Type",
    cell: ({ row }) => /* @__PURE__ */ React28.createElement("div", { className: "w-32" }, /* @__PURE__ */ React28.createElement(Badge, { variant: "outline", className: "text-muted-foreground px-1.5" }, row.original.type))
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => /* @__PURE__ */ React28.createElement(Badge, { variant: "outline", className: "text-muted-foreground px-1.5" }, row.original.status === "Done" ? /* @__PURE__ */ React28.createElement(IconCircleCheckFilled, { className: "fill-green-500 dark:fill-green-400" }) : /* @__PURE__ */ React28.createElement(IconLoader, null), row.original.status)
  },
  {
    accessorKey: "target",
    header: () => /* @__PURE__ */ React28.createElement("div", { className: "w-full text-right" }, "Target"),
    cell: ({ row }) => /* @__PURE__ */ React28.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1e3)), {
            loading: `Saving ${row.original.header}`,
            success: "Done",
            error: "Error"
          });
        }
      },
      /* @__PURE__ */ React28.createElement(Label2, { htmlFor: `${row.original.id}-target`, className: "sr-only" }, "Target"),
      /* @__PURE__ */ React28.createElement(
        Input,
        {
          className: "hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent",
          defaultValue: row.original.target,
          id: `${row.original.id}-target`
        }
      )
    )
  },
  {
    accessorKey: "limit",
    header: () => /* @__PURE__ */ React28.createElement("div", { className: "w-full text-right" }, "Limit"),
    cell: ({ row }) => /* @__PURE__ */ React28.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1e3)), {
            loading: `Saving ${row.original.header}`,
            success: "Done",
            error: "Error"
          });
        }
      },
      /* @__PURE__ */ React28.createElement(Label2, { htmlFor: `${row.original.id}-limit`, className: "sr-only" }, "Limit"),
      /* @__PURE__ */ React28.createElement(
        Input,
        {
          className: "hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent",
          defaultValue: row.original.limit,
          id: `${row.original.id}-limit`
        }
      )
    )
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
    cell: ({ row }) => {
      const isAssigned = row.original.reviewer !== "Assign reviewer";
      if (isAssigned) {
        return row.original.reviewer;
      }
      return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: `${row.original.id}-reviewer`, className: "sr-only" }, "Reviewer"), /* @__PURE__ */ React28.createElement(Select, null, /* @__PURE__ */ React28.createElement(
        SelectTrigger,
        {
          className: "w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate",
          size: "sm",
          id: `${row.original.id}-reviewer`
        },
        /* @__PURE__ */ React28.createElement(SelectValue, { placeholder: "Assign reviewer" })
      ), /* @__PURE__ */ React28.createElement(SelectContent, { align: "end" }, /* @__PURE__ */ React28.createElement(SelectItem, { value: "Eddie Lake" }, "Eddie Lake"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Jamik Tashpulatov" }, "Jamik Tashpulatov"))));
    }
  },
  {
    id: "actions",
    cell: () => /* @__PURE__ */ React28.createElement(DropdownMenu, null, /* @__PURE__ */ React28.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React28.createElement(
      Button,
      {
        variant: "ghost",
        className: "data-[state=open]:bg-muted text-muted-foreground flex size-8",
        size: "icon"
      },
      /* @__PURE__ */ React28.createElement(IconDotsVertical2, null),
      /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Open menu")
    )), /* @__PURE__ */ React28.createElement(DropdownMenuContent, { align: "end", className: "w-32" }, /* @__PURE__ */ React28.createElement(DropdownMenuItem, null, "Edit"), /* @__PURE__ */ React28.createElement(DropdownMenuItem, null, "Make a copy"), /* @__PURE__ */ React28.createElement(DropdownMenuItem, null, "Favorite"), /* @__PURE__ */ React28.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React28.createElement(DropdownMenuItem, { variant: "destructive" }, "Delete")))
  }
];
function DraggableRow({ row }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id
  });
  return /* @__PURE__ */ React28.createElement(
    TableRow,
    {
      "data-state": row.getIsSelected() && "selected",
      "data-dragging": isDragging,
      ref: setNodeRef,
      className: "relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80",
      style: {
        transform: CSS.Transform.toString(transform),
        transition
      }
    },
    row.getVisibleCells().map((cell) => /* @__PURE__ */ React28.createElement(TableCell, { key: cell.id }, flexRender(cell.column.columnDef.cell, cell.getContext())))
  );
}
function DataTable({
  data: initialData
}) {
  var _a;
  const [data2, setData] = React28.useState(() => initialData);
  const [rowSelection, setRowSelection] = React28.useState({});
  const [columnVisibility, setColumnVisibility] = React28.useState({});
  const [columnFilters, setColumnFilters] = React28.useState(
    []
  );
  const [sorting, setSorting] = React28.useState([]);
  const [pagination, setPagination] = React28.useState({
    pageIndex: 0,
    pageSize: 10
  });
  const sortableId = React28.useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );
  const dataIds = React28.useMemo(
    () => (data2 == null ? void 0 : data2.map(({ id }) => id)) || [],
    [data2]
  );
  const table = useReactTable({
    data: data2,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data3) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data3, oldIndex, newIndex);
      });
    }
  }
  return /* @__PURE__ */ React28.createElement(
    Tabs,
    {
      defaultValue: "outline",
      className: "w-full flex-col justify-start gap-6"
    },
    /* @__PURE__ */ React28.createElement("div", { className: "flex items-center justify-between px-4 lg:px-6" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "view-selector", className: "sr-only" }, "View"), /* @__PURE__ */ React28.createElement(Select, { defaultValue: "outline" }, /* @__PURE__ */ React28.createElement(
      SelectTrigger,
      {
        className: "flex w-fit @4xl/main:hidden",
        size: "sm",
        id: "view-selector"
      },
      /* @__PURE__ */ React28.createElement(SelectValue, { placeholder: "Select a view" })
    ), /* @__PURE__ */ React28.createElement(SelectContent, null, /* @__PURE__ */ React28.createElement(SelectItem, { value: "outline" }, "Outline"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "past-performance" }, "Past Performance"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "key-personnel" }, "Key Personnel"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "focus-documents" }, "Focus Documents"))), /* @__PURE__ */ React28.createElement(TabsList, { className: "**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex" }, /* @__PURE__ */ React28.createElement(TabsTrigger, { value: "outline" }, "Outline"), /* @__PURE__ */ React28.createElement(TabsTrigger, { value: "past-performance" }, "Past Performance ", /* @__PURE__ */ React28.createElement(Badge, { variant: "secondary" }, "3")), /* @__PURE__ */ React28.createElement(TabsTrigger, { value: "key-personnel" }, "Key Personnel ", /* @__PURE__ */ React28.createElement(Badge, { variant: "secondary" }, "2")), /* @__PURE__ */ React28.createElement(TabsTrigger, { value: "focus-documents" }, "Focus Documents")), /* @__PURE__ */ React28.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React28.createElement(DropdownMenu, null, /* @__PURE__ */ React28.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React28.createElement(Button, { variant: "outline", size: "sm" }, /* @__PURE__ */ React28.createElement(IconLayoutColumns, null), /* @__PURE__ */ React28.createElement("span", { className: "hidden lg:inline" }, "Customize Columns"), /* @__PURE__ */ React28.createElement("span", { className: "lg:hidden" }, "Columns"), /* @__PURE__ */ React28.createElement(IconChevronDown, null))), /* @__PURE__ */ React28.createElement(DropdownMenuContent, { align: "end", className: "w-56" }, table.getAllColumns().filter(
      (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
    ).map((column) => {
      return /* @__PURE__ */ React28.createElement(
        DropdownMenuCheckboxItem,
        {
          key: column.id,
          className: "capitalize",
          checked: column.getIsVisible(),
          onCheckedChange: (value) => column.toggleVisibility(!!value)
        },
        column.id
      );
    }))), /* @__PURE__ */ React28.createElement(Button, { variant: "outline", size: "sm" }, /* @__PURE__ */ React28.createElement(IconPlus, null), /* @__PURE__ */ React28.createElement("span", { className: "hidden lg:inline" }, "Add Section")))),
    /* @__PURE__ */ React28.createElement(
      TabsContent,
      {
        value: "outline",
        className: "relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      },
      /* @__PURE__ */ React28.createElement("div", { className: "overflow-hidden rounded-lg border" }, /* @__PURE__ */ React28.createElement(
        DndContext,
        {
          collisionDetection: closestCenter,
          modifiers: [restrictToVerticalAxis],
          onDragEnd: handleDragEnd,
          sensors,
          id: sortableId
        },
        /* @__PURE__ */ React28.createElement(Table, null, /* @__PURE__ */ React28.createElement(TableHeader, { className: "bg-muted sticky top-0 z-10" }, table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ React28.createElement(TableRow, { key: headerGroup.id }, headerGroup.headers.map((header) => {
          return /* @__PURE__ */ React28.createElement(TableHead, { key: header.id, colSpan: header.colSpan }, header.isPlaceholder ? null : flexRender(
            header.column.columnDef.header,
            header.getContext()
          ));
        })))), /* @__PURE__ */ React28.createElement(TableBody, { className: "**:data-[slot=table-cell]:first:w-8" }, ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? /* @__PURE__ */ React28.createElement(
          SortableContext,
          {
            items: dataIds,
            strategy: verticalListSortingStrategy
          },
          table.getRowModel().rows.map((row) => /* @__PURE__ */ React28.createElement(DraggableRow, { key: row.id, row }))
        ) : /* @__PURE__ */ React28.createElement(TableRow, null, /* @__PURE__ */ React28.createElement(
          TableCell,
          {
            colSpan: columns.length,
            className: "h-24 text-center"
          },
          "No results."
        ))))
      )),
      /* @__PURE__ */ React28.createElement("div", { className: "flex items-center justify-between px-4" }, /* @__PURE__ */ React28.createElement("div", { className: "text-muted-foreground hidden flex-1 text-sm lg:flex" }, table.getFilteredSelectedRowModel().rows.length, " of", " ", table.getFilteredRowModel().rows.length, " row(s) selected."), /* @__PURE__ */ React28.createElement("div", { className: "flex w-full items-center gap-8 lg:w-fit" }, /* @__PURE__ */ React28.createElement("div", { className: "hidden items-center gap-2 lg:flex" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "rows-per-page", className: "text-sm font-medium" }, "Rows per page"), /* @__PURE__ */ React28.createElement(
        Select,
        {
          value: `${table.getState().pagination.pageSize}`,
          onValueChange: (value) => {
            table.setPageSize(Number(value));
          }
        },
        /* @__PURE__ */ React28.createElement(SelectTrigger, { size: "sm", className: "w-20", id: "rows-per-page" }, /* @__PURE__ */ React28.createElement(
          SelectValue,
          {
            placeholder: table.getState().pagination.pageSize
          }
        )),
        /* @__PURE__ */ React28.createElement(SelectContent, { side: "top" }, [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ React28.createElement(SelectItem, { key: pageSize, value: `${pageSize}` }, pageSize)))
      )), /* @__PURE__ */ React28.createElement("div", { className: "flex w-fit items-center justify-center text-sm font-medium" }, "Page ", table.getState().pagination.pageIndex + 1, " of", " ", table.getPageCount()), /* @__PURE__ */ React28.createElement("div", { className: "ml-auto flex items-center gap-2 lg:ml-0" }, /* @__PURE__ */ React28.createElement(
        Button,
        {
          variant: "outline",
          className: "hidden h-8 w-8 p-0 lg:flex",
          onClick: () => table.setPageIndex(0),
          disabled: !table.getCanPreviousPage()
        },
        /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Go to first page"),
        /* @__PURE__ */ React28.createElement(IconChevronsLeft, null)
      ), /* @__PURE__ */ React28.createElement(
        Button,
        {
          variant: "outline",
          className: "size-8",
          size: "icon",
          onClick: () => table.previousPage(),
          disabled: !table.getCanPreviousPage()
        },
        /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Go to previous page"),
        /* @__PURE__ */ React28.createElement(IconChevronLeft, null)
      ), /* @__PURE__ */ React28.createElement(
        Button,
        {
          variant: "outline",
          className: "size-8",
          size: "icon",
          onClick: () => table.nextPage(),
          disabled: !table.getCanNextPage()
        },
        /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Go to next page"),
        /* @__PURE__ */ React28.createElement(IconChevronRight, null)
      ), /* @__PURE__ */ React28.createElement(
        Button,
        {
          variant: "outline",
          className: "hidden size-8 lg:flex",
          size: "icon",
          onClick: () => table.setPageIndex(table.getPageCount() - 1),
          disabled: !table.getCanNextPage()
        },
        /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Go to last page"),
        /* @__PURE__ */ React28.createElement(IconChevronsRight, null)
      ))))
    ),
    /* @__PURE__ */ React28.createElement(
      TabsContent,
      {
        value: "past-performance",
        className: "flex flex-col px-4 lg:px-6"
      },
      /* @__PURE__ */ React28.createElement("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
    ),
    /* @__PURE__ */ React28.createElement(TabsContent, { value: "key-personnel", className: "flex flex-col px-4 lg:px-6" }, /* @__PURE__ */ React28.createElement("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })),
    /* @__PURE__ */ React28.createElement(
      TabsContent,
      {
        value: "focus-documents",
        className: "flex flex-col px-4 lg:px-6"
      },
      /* @__PURE__ */ React28.createElement("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
    )
  );
}
var chartData2 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
];
var chartConfig2 = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)"
  }
};
function TableCellViewer({ item }) {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ React28.createElement(Drawer, { direction: isMobile ? "bottom" : "right" }, /* @__PURE__ */ React28.createElement(DrawerTrigger, { asChild: true }, /* @__PURE__ */ React28.createElement(Button, { variant: "link", className: "text-foreground w-fit px-0 text-left" }, item.header)), /* @__PURE__ */ React28.createElement(DrawerContent, null, /* @__PURE__ */ React28.createElement(DrawerHeader, { className: "gap-1" }, /* @__PURE__ */ React28.createElement(DrawerTitle, null, item.header), /* @__PURE__ */ React28.createElement(DrawerDescription, null, "Showing total visitors for the last 6 months")), /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-4 overflow-y-auto px-4 text-sm" }, !isMobile && /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(ChartContainer, { config: chartConfig2 }, /* @__PURE__ */ React28.createElement(
    AreaChart2,
    {
      accessibilityLayer: true,
      data: chartData2,
      margin: {
        left: 0,
        right: 10
      }
    },
    /* @__PURE__ */ React28.createElement(CartesianGrid2, { vertical: false }),
    /* @__PURE__ */ React28.createElement(
      XAxis2,
      {
        dataKey: "month",
        tickLine: false,
        axisLine: false,
        tickMargin: 8,
        tickFormatter: (value) => value.slice(0, 3),
        hide: true
      }
    ),
    /* @__PURE__ */ React28.createElement(
      ChartTooltip,
      {
        cursor: false,
        content: /* @__PURE__ */ React28.createElement(ChartTooltipContent, { indicator: "dot" })
      }
    ),
    /* @__PURE__ */ React28.createElement(
      Area2,
      {
        dataKey: "mobile",
        type: "natural",
        fill: "var(--color-mobile)",
        fillOpacity: 0.6,
        stroke: "var(--color-mobile)",
        stackId: "a"
      }
    ),
    /* @__PURE__ */ React28.createElement(
      Area2,
      {
        dataKey: "desktop",
        type: "natural",
        fill: "var(--color-desktop)",
        fillOpacity: 0.4,
        stroke: "var(--color-desktop)",
        stackId: "a"
      }
    )
  )), /* @__PURE__ */ React28.createElement(Separator2, null), /* @__PURE__ */ React28.createElement("div", { className: "grid gap-2" }, /* @__PURE__ */ React28.createElement("div", { className: "flex gap-2 leading-none font-medium" }, "Trending up by 5.2% this month", " ", /* @__PURE__ */ React28.createElement(IconTrendingUp, { className: "size-4" })), /* @__PURE__ */ React28.createElement("div", { className: "text-muted-foreground" }, "Showing total visitors for the last 6 months. This is just some random text to test the layout. It spans multiple lines and should wrap around.")), /* @__PURE__ */ React28.createElement(Separator2, null)), /* @__PURE__ */ React28.createElement("form", { className: "flex flex-col gap-4" }, /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "header" }, "Header"), /* @__PURE__ */ React28.createElement(Input, { id: "header", defaultValue: item.header })), /* @__PURE__ */ React28.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "type" }, "Type"), /* @__PURE__ */ React28.createElement(Select, { defaultValue: item.type }, /* @__PURE__ */ React28.createElement(SelectTrigger, { id: "type", className: "w-full" }, /* @__PURE__ */ React28.createElement(SelectValue, { placeholder: "Select a type" })), /* @__PURE__ */ React28.createElement(SelectContent, null, /* @__PURE__ */ React28.createElement(SelectItem, { value: "Table of Contents" }, "Table of Contents"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Executive Summary" }, "Executive Summary"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Technical Approach" }, "Technical Approach"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Design" }, "Design"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Capabilities" }, "Capabilities"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Focus Documents" }, "Focus Documents"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Narrative" }, "Narrative"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Cover Page" }, "Cover Page")))), /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "status" }, "Status"), /* @__PURE__ */ React28.createElement(Select, { defaultValue: item.status }, /* @__PURE__ */ React28.createElement(SelectTrigger, { id: "status", className: "w-full" }, /* @__PURE__ */ React28.createElement(SelectValue, { placeholder: "Select a status" })), /* @__PURE__ */ React28.createElement(SelectContent, null, /* @__PURE__ */ React28.createElement(SelectItem, { value: "Done" }, "Done"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "In Progress" }, "In Progress"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Not Started" }, "Not Started"))))), /* @__PURE__ */ React28.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "target" }, "Target"), /* @__PURE__ */ React28.createElement(Input, { id: "target", defaultValue: item.target })), /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "limit" }, "Limit"), /* @__PURE__ */ React28.createElement(Input, { id: "limit", defaultValue: item.limit }))), /* @__PURE__ */ React28.createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ React28.createElement(Label2, { htmlFor: "reviewer" }, "Reviewer"), /* @__PURE__ */ React28.createElement(Select, { defaultValue: item.reviewer }, /* @__PURE__ */ React28.createElement(SelectTrigger, { id: "reviewer", className: "w-full" }, /* @__PURE__ */ React28.createElement(SelectValue, { placeholder: "Select a reviewer" })), /* @__PURE__ */ React28.createElement(SelectContent, null, /* @__PURE__ */ React28.createElement(SelectItem, { value: "Eddie Lake" }, "Eddie Lake"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Jamik Tashpulatov" }, "Jamik Tashpulatov"), /* @__PURE__ */ React28.createElement(SelectItem, { value: "Emily Whalen" }, "Emily Whalen")))))), /* @__PURE__ */ React28.createElement(DrawerFooter, null, /* @__PURE__ */ React28.createElement(Button, null, "Submit"), /* @__PURE__ */ React28.createElement(DrawerClose, { asChild: true }, /* @__PURE__ */ React28.createElement(Button, { variant: "outline" }, "Done")))));
}

// src/components/nav-projects.tsx
import {
  Folder,
  MoreHorizontal,
  Share,
  Trash2
} from "lucide-react";
function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ React.createElement(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden" }, /* @__PURE__ */ React.createElement(SidebarGroupLabel, null, "Projects"), /* @__PURE__ */ React.createElement(SidebarMenu, null, projects.map((item) => /* @__PURE__ */ React.createElement(SidebarMenuItem, { key: item.name }, /* @__PURE__ */ React.createElement(SidebarMenuButton, { asChild: true }, /* @__PURE__ */ React.createElement("a", { href: item.url }, /* @__PURE__ */ React.createElement(item.icon, null), /* @__PURE__ */ React.createElement("span", null, item.name))), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(SidebarMenuAction, { showOnHover: true }, /* @__PURE__ */ React.createElement(MoreHorizontal, null), /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "More"))), /* @__PURE__ */ React.createElement(
    DropdownMenuContent,
    {
      className: "w-48",
      side: isMobile ? "bottom" : "right",
      align: isMobile ? "end" : "start"
    },
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(Folder, { className: "text-muted-foreground" }), /* @__PURE__ */ React.createElement("span", null, "View Project")),
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(Share, { className: "text-muted-foreground" }), /* @__PURE__ */ React.createElement("span", null, "Share Project")),
    /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null),
    /* @__PURE__ */ React.createElement(DropdownMenuItem, null, /* @__PURE__ */ React.createElement(Trash2, { className: "text-muted-foreground" }), /* @__PURE__ */ React.createElement("span", null, "Delete Project"))
  )))), /* @__PURE__ */ React.createElement(SidebarMenuItem, null, /* @__PURE__ */ React.createElement(SidebarMenuButton, null, /* @__PURE__ */ React.createElement(MoreHorizontal, null), /* @__PURE__ */ React.createElement("span", null, "More")))));
}

// src/components/search-form.tsx
import { Search } from "lucide-react";
function SearchForm(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement("form", __spreadValues({}, props), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Label2, { htmlFor: "search", className: "sr-only" }, "Search"), /* @__PURE__ */ React.createElement(
    SidebarInput,
    {
      id: "search",
      placeholder: "Type to search...",
      className: "h-8 pl-7"
    }
  ), /* @__PURE__ */ React.createElement(Search, { className: "pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" })));
}

// src/components/section-cards.tsx
import { IconTrendingDown, IconTrendingUp as IconTrendingUp2 } from "@tabler/icons-react";
function SectionCards() {
  return /* @__PURE__ */ React.createElement("div", { className: "*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4" }, /* @__PURE__ */ React.createElement(Card, { className: "@container/card" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardDescription, null, "Total Revenue"), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" }, "$1,250.00"), /* @__PURE__ */ React.createElement(CardAction, null, /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, /* @__PURE__ */ React.createElement(IconTrendingUp2, null), "+12.5%"))), /* @__PURE__ */ React.createElement(CardFooter, { className: "flex-col items-start gap-1.5 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "line-clamp-1 flex gap-2 font-medium" }, "Trending up this month ", /* @__PURE__ */ React.createElement(IconTrendingUp2, { className: "size-4" })), /* @__PURE__ */ React.createElement("div", { className: "text-muted-foreground" }, "Visitors for the last 6 months"))), /* @__PURE__ */ React.createElement(Card, { className: "@container/card" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardDescription, null, "New Customers"), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" }, "1,234"), /* @__PURE__ */ React.createElement(CardAction, null, /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, /* @__PURE__ */ React.createElement(IconTrendingDown, null), "-20%"))), /* @__PURE__ */ React.createElement(CardFooter, { className: "flex-col items-start gap-1.5 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "line-clamp-1 flex gap-2 font-medium" }, "Down 20% this period ", /* @__PURE__ */ React.createElement(IconTrendingDown, { className: "size-4" })), /* @__PURE__ */ React.createElement("div", { className: "text-muted-foreground" }, "Acquisition needs attention"))), /* @__PURE__ */ React.createElement(Card, { className: "@container/card" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardDescription, null, "Active Accounts"), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" }, "45,678"), /* @__PURE__ */ React.createElement(CardAction, null, /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, /* @__PURE__ */ React.createElement(IconTrendingUp2, null), "+12.5%"))), /* @__PURE__ */ React.createElement(CardFooter, { className: "flex-col items-start gap-1.5 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "line-clamp-1 flex gap-2 font-medium" }, "Strong user retention ", /* @__PURE__ */ React.createElement(IconTrendingUp2, { className: "size-4" })), /* @__PURE__ */ React.createElement("div", { className: "text-muted-foreground" }, "Engagement exceed targets"))), /* @__PURE__ */ React.createElement(Card, { className: "@container/card" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardDescription, null, "Growth Rate"), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl" }, "4.5%"), /* @__PURE__ */ React.createElement(CardAction, null, /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, /* @__PURE__ */ React.createElement(IconTrendingUp2, null), "+4.5%"))), /* @__PURE__ */ React.createElement(CardFooter, { className: "flex-col items-start gap-1.5 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "line-clamp-1 flex gap-2 font-medium" }, "Steady performance increase ", /* @__PURE__ */ React.createElement(IconTrendingUp2, { className: "size-4" })), /* @__PURE__ */ React.createElement("div", { className: "text-muted-foreground" }, "Meets growth projections"))));
}

// src/components/site-header.tsx
function SiteHeader() {
  return /* @__PURE__ */ React.createElement("header", { className: "flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)" }, /* @__PURE__ */ React.createElement("div", { className: "flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6" }, /* @__PURE__ */ React.createElement(SidebarTrigger, { className: "-ml-1" }), /* @__PURE__ */ React.createElement(
    Separator2,
    {
      orientation: "vertical",
      className: "mx-2 data-[orientation=vertical]:h-4"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-base font-medium" }, "Documents"), /* @__PURE__ */ React.createElement("div", { className: "ml-auto flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", asChild: true, size: "sm", className: "hidden sm:flex" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard",
      rel: "noopener noreferrer",
      target: "_blank",
      className: "dark:text-foreground"
    },
    "GitHub"
  )))));
}

// src/components/theme-provider.tsx
import * as React29 from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React29.createElement(NextThemesProvider, __spreadValues({}, props), children);
}

// src/components/theme-toggle.tsx
import * as React30 from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
function ModeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ React30.createElement(DropdownMenu, null, /* @__PURE__ */ React30.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React30.createElement(Button, { variant: "outline", size: "icon" }, /* @__PURE__ */ React30.createElement(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), /* @__PURE__ */ React30.createElement(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), /* @__PURE__ */ React30.createElement("span", { className: "sr-only" }, "Toggle theme"))), /* @__PURE__ */ React30.createElement(DropdownMenuContent, { align: "end" }, /* @__PURE__ */ React30.createElement(DropdownMenuItem, { onClick: () => setTheme("light") }, "Light"), /* @__PURE__ */ React30.createElement(DropdownMenuItem, { onClick: () => setTheme("dark") }, "Dark"), /* @__PURE__ */ React30.createElement(DropdownMenuItem, { onClick: () => setTheme("system") }, "System")));
}

// src/components/version-switcher.tsx
import * as React31 from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";
function VersionSwitcher({
  versions,
  defaultVersion
}) {
  const [selectedVersion, setSelectedVersion] = React31.useState(defaultVersion);
  return /* @__PURE__ */ React31.createElement(SidebarMenu, null, /* @__PURE__ */ React31.createElement(SidebarMenuItem, null, /* @__PURE__ */ React31.createElement(DropdownMenu, null, /* @__PURE__ */ React31.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React31.createElement(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    },
    /* @__PURE__ */ React31.createElement("div", { className: "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg" }, /* @__PURE__ */ React31.createElement(GalleryVerticalEnd, { className: "size-4" })),
    /* @__PURE__ */ React31.createElement("div", { className: "flex flex-col gap-0.5 leading-none" }, /* @__PURE__ */ React31.createElement("span", { className: "font-medium" }, "Documentation"), /* @__PURE__ */ React31.createElement("span", { className: "" }, "v", selectedVersion)),
    /* @__PURE__ */ React31.createElement(ChevronsUpDown, { className: "ml-auto" })
  )), /* @__PURE__ */ React31.createElement(
    DropdownMenuContent,
    {
      className: "w-(--radix-dropdown-menu-trigger-width)",
      align: "start"
    },
    versions.map((version) => /* @__PURE__ */ React31.createElement(
      DropdownMenuItem,
      {
        key: version,
        onSelect: () => setSelectedVersion(version)
      },
      "v",
      version,
      " ",
      version === selectedVersion && /* @__PURE__ */ React31.createElement(Check, { className: "ml-auto" })
    ))
  ))));
}

// src/components/ui/accordion.tsx
import * as React32 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon as ChevronDownIcon4 } from "lucide-react";
function Accordion(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React32.createElement(AccordionPrimitive.Root, __spreadValues({ "data-slot": "accordion" }, props));
}
function AccordionItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React32.createElement(
    AccordionPrimitive.Item,
    __spreadValues({
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className)
    }, props)
  );
}
function AccordionTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React32.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React32.createElement(
    AccordionPrimitive.Trigger,
    __spreadValues({
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React32.createElement(ChevronDownIcon4, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
  ));
}
function AccordionContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React32.createElement(
    AccordionPrimitive.Content,
    __spreadValues({
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    }, props),
    /* @__PURE__ */ React32.createElement("div", { className: cn("pt-0 pb-4", className) }, children)
  );
}

// src/components/ui/alert-dialog.tsx
import * as React33 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
function AlertDialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React33.createElement(AlertDialogPrimitive.Root, __spreadValues({ "data-slot": "alert-dialog" }, props));
}
function AlertDialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React33.createElement(AlertDialogPrimitive.Trigger, __spreadValues({ "data-slot": "alert-dialog-trigger" }, props));
}
function AlertDialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React33.createElement(AlertDialogPrimitive.Portal, __spreadValues({ "data-slot": "alert-dialog-portal" }, props));
}
function AlertDialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Overlay,
    __spreadValues({
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function AlertDialogContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(AlertDialogPortal, null, /* @__PURE__ */ React33.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Content,
    __spreadValues({
      "data-slot": "alert-dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )
    }, props)
  ));
}
function AlertDialogHeader(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className)
    }, props)
  );
}
function AlertDialogFooter(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )
    }, props)
  );
}
function AlertDialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Title,
    __spreadValues({
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className)
    }, props)
  );
}
function AlertDialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Description,
    __spreadValues({
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function AlertDialogAction(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Action,
    __spreadValues({
      className: cn(buttonVariants(), className)
    }, props)
  );
}
function AlertDialogCancel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React33.createElement(
    AlertDialogPrimitive.Cancel,
    __spreadValues({
      className: cn(buttonVariants({ variant: "outline" }), className)
    }, props)
  );
}

// src/components/ui/alert.tsx
import * as React34 from "react";
import { cva as cva5 } from "class-variance-authority";
var alertVariants = cva5(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert(_a) {
  var _b = _a, {
    className,
    variant
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ React34.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
}
function AlertTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React34.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )
    }, props)
  );
}
function AlertDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React34.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )
    }, props)
  );
}

// src/components/ui/aspect-ratio.tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
function AspectRatio(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(AspectRatioPrimitive.Root, __spreadValues({ "data-slot": "aspect-ratio" }, props));
}

// src/components/ui/breadcrumb.tsx
import * as React35 from "react";
import { Slot as Slot4 } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal as MoreHorizontal2 } from "lucide-react";
function Breadcrumb(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React35.createElement("nav", __spreadValues({ "aria-label": "breadcrumb", "data-slot": "breadcrumb" }, props));
}
function BreadcrumbList(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React35.createElement(
    "ol",
    __spreadValues({
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )
    }, props)
  );
}
function BreadcrumbItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React35.createElement(
    "li",
    __spreadValues({
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
}
function BreadcrumbLink(_a) {
  var _b = _a, {
    asChild,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "className"
  ]);
  const Comp = asChild ? Slot4 : "a";
  return /* @__PURE__ */ React35.createElement(
    Comp,
    __spreadValues({
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className)
    }, props)
  );
}
function BreadcrumbPage(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React35.createElement(
    "span",
    __spreadValues({
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className)
    }, props)
  );
}
function BreadcrumbSeparator(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ React35.createElement(
    "li",
    __spreadValues({
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className)
    }, props),
    children != null ? children : /* @__PURE__ */ React35.createElement(ChevronRight, null)
  );
}
function BreadcrumbEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React35.createElement(
    "span",
    __spreadValues({
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className)
    }, props),
    /* @__PURE__ */ React35.createElement(MoreHorizontal2, { className: "size-4" }),
    /* @__PURE__ */ React35.createElement("span", { className: "sr-only" }, "More")
  );
}

// src/components/ui/carousel.tsx
import * as React36 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
var CarouselContext = React36.createContext(null);
function useCarousel() {
  const context = React36.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel(_a) {
  var _b = _a, {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children
  } = _b, props = __objRest(_b, [
    "orientation",
    "opts",
    "setApi",
    "plugins",
    "className",
    "children"
  ]);
  const [carouselRef, api] = useEmblaCarousel(
    __spreadProps(__spreadValues({}, opts), {
      axis: orientation === "horizontal" ? "x" : "y"
    }),
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React36.useState(false);
  const [canScrollNext, setCanScrollNext] = React36.useState(false);
  const onSelect = React36.useCallback((api2) => {
    if (!api2)
      return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React36.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React36.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React36.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React36.useEffect(() => {
    if (!api || !setApi)
      return;
    setApi(api);
  }, [api, setApi]);
  React36.useEffect(() => {
    if (!api)
      return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ React36.createElement(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      }
    },
    /* @__PURE__ */ React36.createElement(
      "div",
      __spreadValues({
        onKeyDownCapture: handleKeyDown,
        className: cn("relative", className),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel"
      }, props),
      children
    )
  );
}
function CarouselContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ React36.createElement(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content"
    },
    /* @__PURE__ */ React36.createElement(
      "div",
      __spreadValues({
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )
      }, props)
    )
  );
}
function CarouselItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation } = useCarousel();
  return /* @__PURE__ */ React36.createElement(
    "div",
    __spreadValues({
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )
    }, props)
  );
}
function CarouselPrevious(_a) {
  var _b = _a, {
    className,
    variant = "outline",
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ React36.createElement(
    Button,
    __spreadValues({
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props),
    /* @__PURE__ */ React36.createElement(ArrowLeft, null),
    /* @__PURE__ */ React36.createElement("span", { className: "sr-only" }, "Previous slide")
  );
}
function CarouselNext(_a) {
  var _b = _a, {
    className,
    variant = "outline",
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ React36.createElement(
    Button,
    __spreadValues({
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props),
    /* @__PURE__ */ React36.createElement(ArrowRight, null),
    /* @__PURE__ */ React36.createElement("span", { className: "sr-only" }, "Next slide")
  );
}

// src/components/ui/collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
function Collapsible(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(CollapsiblePrimitive.Root, __spreadValues({ "data-slot": "collapsible" }, props));
}
function CollapsibleTrigger2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleTrigger,
    __spreadValues({
      "data-slot": "collapsible-trigger"
    }, props)
  );
}
function CollapsibleContent2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleContent,
    __spreadValues({
      "data-slot": "collapsible-content"
    }, props)
  );
}

// src/components/ui/command.tsx
import * as React38 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/components/ui/dialog.tsx
import * as React37 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon as XIcon2 } from "lucide-react";
function Dialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React37.createElement(DialogPrimitive.Root, __spreadValues({ "data-slot": "dialog" }, props));
}
function DialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React37.createElement(DialogPrimitive.Trigger, __spreadValues({ "data-slot": "dialog-trigger" }, props));
}
function DialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React37.createElement(DialogPrimitive.Portal, __spreadValues({ "data-slot": "dialog-portal" }, props));
}
function DialogClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React37.createElement(DialogPrimitive.Close, __spreadValues({ "data-slot": "dialog-close" }, props));
}
function DialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React37.createElement(
    DialogPrimitive.Overlay,
    __spreadValues({
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function DialogContent(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ React37.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React37.createElement(DialogOverlay, null), /* @__PURE__ */ React37.createElement(
    DialogPrimitive.Content,
    __spreadValues({
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )
    }, props),
    children,
    showCloseButton && /* @__PURE__ */ React37.createElement(
      DialogPrimitive.Close,
      {
        "data-slot": "dialog-close",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      },
      /* @__PURE__ */ React37.createElement(XIcon2, null),
      /* @__PURE__ */ React37.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React37.createElement(
    "div",
    __spreadValues({
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className)
    }, props)
  );
}
function DialogFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React37.createElement(
    "div",
    __spreadValues({
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )
    }, props)
  );
}
function DialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React37.createElement(
    DialogPrimitive.Title,
    __spreadValues({
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className)
    }, props)
  );
}
function DialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React37.createElement(
    DialogPrimitive.Description,
    __spreadValues({
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}

// src/components/ui/command.tsx
function Command(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive,
    __spreadValues({
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )
    }, props)
  );
}
function CommandDialog(_a) {
  var _b = _a, {
    title = "Command Palette",
    description: description2 = "Search for a command to run...",
    children,
    className,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "title",
    "description",
    "children",
    "className",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ React38.createElement(Dialog, __spreadValues({}, props), /* @__PURE__ */ React38.createElement(DialogHeader, { className: "sr-only" }, /* @__PURE__ */ React38.createElement(DialogTitle, null, title), /* @__PURE__ */ React38.createElement(DialogDescription, null, description2)), /* @__PURE__ */ React38.createElement(
    DialogContent,
    {
      className: cn("overflow-hidden p-0", className),
      showCloseButton
    },
    /* @__PURE__ */ React38.createElement(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children)
  ));
}
function CommandInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3"
    },
    /* @__PURE__ */ React38.createElement(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ React38.createElement(
      CommandPrimitive.Input,
      __spreadValues({
        "data-slot": "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }, props)
    )
  );
}
function CommandList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive.List,
    __spreadValues({
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )
    }, props)
  );
}
function CommandEmpty(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive.Empty,
    __spreadValues({
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm"
    }, props)
  );
}
function CommandGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive.Group,
    __spreadValues({
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )
    }, props)
  );
}
function CommandSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive.Separator,
    __spreadValues({
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className)
    }, props)
  );
}
function CommandItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    CommandPrimitive.Item,
    __spreadValues({
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function CommandShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React38.createElement(
    "span",
    __spreadValues({
      "data-slot": "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}

// src/components/ui/context-menu.tsx
import * as React39 from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon as CheckIcon4, ChevronRightIcon as ChevronRightIcon3, CircleIcon as CircleIcon2 } from "lucide-react";
function ContextMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Root, __spreadValues({ "data-slot": "context-menu" }, props));
}
function ContextMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Trigger, __spreadValues({ "data-slot": "context-menu-trigger" }, props));
}
function ContextMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Group, __spreadValues({ "data-slot": "context-menu-group" }, props));
}
function ContextMenuPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Portal, __spreadValues({ "data-slot": "context-menu-portal" }, props));
}
function ContextMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Sub, __spreadValues({ "data-slot": "context-menu-sub" }, props));
}
function ContextMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.RadioGroup,
    __spreadValues({
      "data-slot": "context-menu-radio-group"
    }, props)
  );
}
function ContextMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.SubTrigger,
    __spreadValues({
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React39.createElement(ChevronRightIcon3, { className: "ml-auto" })
  );
}
function ContextMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.SubContent,
    __spreadValues({
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}
function ContextMenuContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.Portal, null, /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ));
}
function ContextMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function ContextMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.CheckboxItem,
    __spreadValues({
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React39.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React39.createElement(CheckIcon4, { className: "size-4" }))),
    children
  );
}
function ContextMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.RadioItem,
    __spreadValues({
      "data-slot": "context-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    /* @__PURE__ */ React39.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React39.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React39.createElement(CircleIcon2, { className: "size-2 fill-current" }))),
    children
  );
}
function ContextMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.Label,
    __spreadValues({
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function ContextMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React39.createElement(
    ContextMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function ContextMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React39.createElement(
    "span",
    __spreadValues({
      "data-slot": "context-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}

// src/components/ui/form.tsx
import * as React40 from "react";
import { Slot as Slot5 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";
var Form = FormProvider;
var FormFieldContext = React40.createContext(
  {}
);
var FormField = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React40.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React40.createElement(Controller, __spreadValues({}, props)));
};
var useFormField = () => {
  const fieldContext = React40.useContext(FormFieldContext);
  const itemContext = React40.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return __spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React40.createContext(
  {}
);
function FormItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React40.useId();
  return /* @__PURE__ */ React40.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React40.createElement(
    "div",
    __spreadValues({
      "data-slot": "form-item",
      className: cn("grid gap-2", className)
    }, props)
  ));
}
function FormLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ React40.createElement(
    Label2,
    __spreadValues({
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId
    }, props)
  );
}
function FormControl(_a) {
  var props = __objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ React40.createElement(
    Slot5,
    __spreadValues({
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
}
function FormDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ React40.createElement(
    "p",
    __spreadValues({
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function FormMessage(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  var _a2;
  const { error, formMessageId } = useFormField();
  const body = error ? String((_a2 = error == null ? void 0 : error.message) != null ? _a2 : "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ React40.createElement(
    "p",
    __spreadValues({
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className)
    }, props),
    body
  );
}

// src/components/ui/hover-card.tsx
import * as React41 from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
function HoverCard(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React41.createElement(HoverCardPrimitive.Root, __spreadValues({ "data-slot": "hover-card" }, props));
}
function HoverCardTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React41.createElement(HoverCardPrimitive.Trigger, __spreadValues({ "data-slot": "hover-card-trigger" }, props));
}
function HoverCardContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React41.createElement(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal" }, /* @__PURE__ */ React41.createElement(
    HoverCardPrimitive.Content,
    __spreadValues({
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ));
}

// src/components/ui/input-otp.tsx
import * as React42 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
function InputOTP(_a) {
  var _b = _a, {
    className,
    containerClassName
  } = _b, props = __objRest(_b, [
    "className",
    "containerClassName"
  ]);
  return /* @__PURE__ */ React42.createElement(
    OTPInput,
    __spreadValues({
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className)
    }, props)
  );
}
function InputOTPGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React42.createElement(
    "div",
    __spreadValues({
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className)
    }, props)
  );
}
function InputOTPSlot(_a) {
  var _b = _a, {
    index,
    className
  } = _b, props = __objRest(_b, [
    "index",
    "className"
  ]);
  var _a2;
  const inputOTPContext = React42.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = (_a2 = inputOTPContext == null ? void 0 : inputOTPContext.slots[index]) != null ? _a2 : {};
  return /* @__PURE__ */ React42.createElement(
    "div",
    __spreadValues({
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )
    }, props),
    char,
    hasFakeCaret && /* @__PURE__ */ React42.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React42.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }))
  );
}
function InputOTPSeparator(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React42.createElement("div", __spreadValues({ "data-slot": "input-otp-separator", role: "separator" }, props), /* @__PURE__ */ React42.createElement(MinusIcon, null));
}

// src/components/ui/menubar.tsx
import * as React43 from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon as CheckIcon5, ChevronRightIcon as ChevronRightIcon4, CircleIcon as CircleIcon3 } from "lucide-react";
function Menubar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Root,
    __spreadValues({
      "data-slot": "menubar",
      className: cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )
    }, props)
  );
}
function MenubarMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React43.createElement(MenubarPrimitive.Menu, __spreadValues({ "data-slot": "menubar-menu" }, props));
}
function MenubarGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React43.createElement(MenubarPrimitive.Group, __spreadValues({ "data-slot": "menubar-group" }, props));
}
function MenubarPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React43.createElement(MenubarPrimitive.Portal, __spreadValues({ "data-slot": "menubar-portal" }, props));
}
function MenubarRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React43.createElement(MenubarPrimitive.RadioGroup, __spreadValues({ "data-slot": "menubar-radio-group" }, props));
}
function MenubarTrigger(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Trigger,
    __spreadValues({
      "data-slot": "menubar-trigger",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )
    }, props)
  );
}
function MenubarContent(_a) {
  var _b = _a, {
    className,
    align = "start",
    alignOffset = -4,
    sideOffset = 8
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "alignOffset",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React43.createElement(MenubarPortal, null, /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Content,
    __spreadValues({
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ));
}
function MenubarItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Item,
    __spreadValues({
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function MenubarCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.CheckboxItem,
    __spreadValues({
      "data-slot": "menubar-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React43.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React43.createElement(MenubarPrimitive.ItemIndicator, null, /* @__PURE__ */ React43.createElement(CheckIcon5, { className: "size-4" }))),
    children
  );
}
function MenubarRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.RadioItem,
    __spreadValues({
      "data-slot": "menubar-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    /* @__PURE__ */ React43.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React43.createElement(MenubarPrimitive.ItemIndicator, null, /* @__PURE__ */ React43.createElement(CircleIcon3, { className: "size-2 fill-current" }))),
    children
  );
}
function MenubarLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Label,
    __spreadValues({
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function MenubarSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.Separator,
    __spreadValues({
      "data-slot": "menubar-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function MenubarShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React43.createElement(
    "span",
    __spreadValues({
      "data-slot": "menubar-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function MenubarSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React43.createElement(MenubarPrimitive.Sub, __spreadValues({ "data-slot": "menubar-sub" }, props));
}
function MenubarSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.SubTrigger,
    __spreadValues({
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React43.createElement(ChevronRightIcon4, { className: "ml-auto h-4 w-4" })
  );
}
function MenubarSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React43.createElement(
    MenubarPrimitive.SubContent,
    __spreadValues({
      "data-slot": "menubar-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}

// src/components/ui/navigation-menu.tsx
import * as React44 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva6 } from "class-variance-authority";
import { ChevronDownIcon as ChevronDownIcon5 } from "lucide-react";
function NavigationMenu(_a) {
  var _b = _a, {
    className,
    children,
    viewport = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "viewport"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Root,
    __spreadValues({
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )
    }, props),
    children,
    viewport && /* @__PURE__ */ React44.createElement(NavigationMenuViewport, null)
  );
}
function NavigationMenuList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.List,
    __spreadValues({
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )
    }, props)
  );
}
function NavigationMenuItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "navigation-menu-item",
      className: cn("relative", className)
    }, props)
  );
}
var navigationMenuTriggerStyle = cva6(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Trigger,
    __spreadValues({
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props),
    children,
    " ",
    /* @__PURE__ */ React44.createElement(
      ChevronDownIcon5,
      {
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      }
    )
  );
}
function NavigationMenuContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )
    }, props)
  );
}
function NavigationMenuViewport(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )
    },
    /* @__PURE__ */ React44.createElement(
      NavigationMenuPrimitive.Viewport,
      __spreadValues({
        "data-slot": "navigation-menu-viewport",
        className: cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )
      }, props)
    )
  );
}
function NavigationMenuLink(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Link,
    __spreadValues({
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function NavigationMenuIndicator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React44.createElement(
    NavigationMenuPrimitive.Indicator,
    __spreadValues({
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )
    }, props),
    /* @__PURE__ */ React44.createElement("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
  );
}

// src/components/ui/pagination.tsx
import * as React45 from "react";
import {
  ChevronLeftIcon as ChevronLeftIcon2,
  ChevronRightIcon as ChevronRightIcon5,
  MoreHorizontalIcon
} from "lucide-react";
function Pagination(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React45.createElement(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
}
function PaginationContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React45.createElement(
    "ul",
    __spreadValues({
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
}
function PaginationItem(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React45.createElement("li", __spreadValues({ "data-slot": "pagination-item" }, props));
}
function PaginationLink(_a) {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ React45.createElement(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      )
    }, props)
  );
}
function PaginationPrevious(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React45.createElement(
    PaginationLink,
    __spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className)
    }, props),
    /* @__PURE__ */ React45.createElement(ChevronLeftIcon2, null),
    /* @__PURE__ */ React45.createElement("span", { className: "hidden sm:block" }, "Previous")
  );
}
function PaginationNext(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React45.createElement(
    PaginationLink,
    __spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className)
    }, props),
    /* @__PURE__ */ React45.createElement("span", { className: "hidden sm:block" }, "Next"),
    /* @__PURE__ */ React45.createElement(ChevronRightIcon5, null)
  );
}
function PaginationEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React45.createElement(
    "span",
    __spreadValues({
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className)
    }, props),
    /* @__PURE__ */ React45.createElement(MoreHorizontalIcon, { className: "size-4" }),
    /* @__PURE__ */ React45.createElement("span", { className: "sr-only" }, "More pages")
  );
}

// src/components/ui/progress.tsx
import * as React46 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
function Progress(_a) {
  var _b = _a, {
    className,
    value
  } = _b, props = __objRest(_b, [
    "className",
    "value"
  ]);
  return /* @__PURE__ */ React46.createElement(
    ProgressPrimitive.Root,
    __spreadValues({
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )
    }, props),
    /* @__PURE__ */ React46.createElement(
      ProgressPrimitive.Indicator,
      {
        "data-slot": "progress-indicator",
        className: "bg-primary h-full w-full flex-1 transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  );
}

// src/components/ui/radio-group.tsx
import * as React47 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon as CircleIcon4 } from "lucide-react";
function RadioGroup4(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React47.createElement(
    RadioGroupPrimitive.Root,
    __spreadValues({
      "data-slot": "radio-group",
      className: cn("grid gap-3", className)
    }, props)
  );
}
function RadioGroupItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React47.createElement(
    RadioGroupPrimitive.Item,
    __spreadValues({
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React47.createElement(
      RadioGroupPrimitive.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center"
      },
      /* @__PURE__ */ React47.createElement(CircleIcon4, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
    )
  );
}

// src/components/ui/resizable.tsx
import * as React48 from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
function ResizablePanelGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React48.createElement(
    ResizablePrimitive.PanelGroup,
    __spreadValues({
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )
    }, props)
  );
}
function ResizablePanel(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React48.createElement(ResizablePrimitive.Panel, __spreadValues({ "data-slot": "resizable-panel" }, props));
}
function ResizableHandle(_a) {
  var _b = _a, {
    withHandle,
    className
  } = _b, props = __objRest(_b, [
    "withHandle",
    "className"
  ]);
  return /* @__PURE__ */ React48.createElement(
    ResizablePrimitive.PanelResizeHandle,
    __spreadValues({
      "data-slot": "resizable-handle",
      className: cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )
    }, props),
    withHandle && /* @__PURE__ */ React48.createElement("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border" }, /* @__PURE__ */ React48.createElement(GripVerticalIcon, { className: "size-2.5" }))
  );
}

// src/components/ui/scroll-area.tsx
import * as React49 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
function ScrollArea(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React49.createElement(
    ScrollAreaPrimitive.Root,
    __spreadValues({
      "data-slot": "scroll-area",
      className: cn("relative", className)
    }, props),
    /* @__PURE__ */ React49.createElement(
      ScrollAreaPrimitive.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      },
      children
    ),
    /* @__PURE__ */ React49.createElement(ScrollBar, null),
    /* @__PURE__ */ React49.createElement(ScrollAreaPrimitive.Corner, null)
  );
}
function ScrollBar(_a) {
  var _b = _a, {
    className,
    orientation = "vertical"
  } = _b, props = __objRest(_b, [
    "className",
    "orientation"
  ]);
  return /* @__PURE__ */ React49.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    __spreadValues({
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      )
    }, props),
    /* @__PURE__ */ React49.createElement(
      ScrollAreaPrimitive.ScrollAreaThumb,
      {
        "data-slot": "scroll-area-thumb",
        className: "bg-border relative flex-1 rounded-full"
      }
    )
  );
}

// src/components/ui/slider.tsx
import * as React50 from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
function Slider(_a) {
  var _b = _a, {
    className,
    defaultValue,
    value,
    min = 0,
    max = 100
  } = _b, props = __objRest(_b, [
    "className",
    "defaultValue",
    "value",
    "min",
    "max"
  ]);
  const _values = React50.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ React50.createElement(
    SliderPrimitive.Root,
    __spreadValues({
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )
    }, props),
    /* @__PURE__ */ React50.createElement(
      SliderPrimitive.Track,
      {
        "data-slot": "slider-track",
        className: cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )
      },
      /* @__PURE__ */ React50.createElement(
        SliderPrimitive.Range,
        {
          "data-slot": "slider-range",
          className: cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )
        }
      )
    ),
    Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ React50.createElement(
      SliderPrimitive.Thumb,
      {
        "data-slot": "slider-thumb",
        key: index,
        className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
      }
    ))
  );
}

// src/components/ui/sonner.tsx
import { useTheme as useTheme2 } from "next-themes";
import { Toaster as Sonner } from "sonner";
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = useTheme2();
  return /* @__PURE__ */ React.createElement(
    Sonner,
    __spreadValues({
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      }
    }, props)
  );
};

// src/components/ui/switch.tsx
import * as React51 from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
function Switch(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React51.createElement(
    SwitchPrimitive.Root,
    __spreadValues({
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React51.createElement(
      SwitchPrimitive.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

// src/components/ui/textarea.tsx
import * as React52 from "react";
function Textarea(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React52.createElement(
    "textarea",
    __spreadValues({
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )
    }, props)
  );
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AppSidebar,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  CalendarDayButton,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartAreaInteractive,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent2 as CollapsibleContent,
  CollapsibleTrigger2 as CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label2 as Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  ModeToggle,
  NavDocuments,
  NavMain,
  NavProjects,
  NavSecondary,
  NavUser,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup4 as RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  SearchForm,
  SectionCards,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator2 as Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  SiteHeader,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  VersionSwitcher,
  badgeVariants,
  buttonVariants,
  description,
  navigationMenuTriggerStyle,
  schema,
  toggleVariants,
  useFormField,
  useSidebar
};
