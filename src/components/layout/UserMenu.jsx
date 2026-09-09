import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";
import BearIcon from "../ui/BearIcon";

export default function UserMenu({ name, grade }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/60">
          <BearIcon className="h-6 w-6" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-brand-500 ring-2 ring-canvas dark:ring-canvas-dark" />
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-sm font-semibold leading-tight text-ink dark:text-ink-dark">
            {name}
          </span>
          <span className="block text-xs leading-tight text-ink-soft dark:text-ink-soft-dark">
            {grade}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-ink-soft transition-transform dark:text-ink-soft-dark ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="animate-pop-in absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-2xl border border-black/5 bg-surface p-1.5 shadow-xl dark:border-white/10 dark:bg-surface-dark">
          {[
            { icon: User, label: "Profile" },
            { icon: Settings, label: "Settings" },
            { icon: LogOut, label: "Log out" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink dark:text-ink-soft-dark dark:hover:bg-white/5 dark:hover:text-ink-dark"
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
