import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";

const NOTIFICATIONS = [
  { id: 1, text: "Your Mechanics quiz has been graded — 82%.", time: "10m ago" },
  { id: 2, text: "New practice set unlocked: Applications of Vectors.", time: "2h ago" },
  { id: 3, text: "Streak reminder: study today to keep your 26-day streak.", time: "5h ago" },
];

export default function NotificationBell() {
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
        aria-label="Notifications"
        aria-expanded={open}
        className="relative h-10 w-10 rounded-full border border-black/5 bg-white/70 text-ink-soft shadow-sm backdrop-blur transition-colors hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-soft-dark dark:hover:text-brand-300"
      >
        <Bell className="mx-auto h-5 w-5" />
        {NOTIFICATIONS.length > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-glow-pulse items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white ring-2 ring-canvas dark:ring-canvas-dark">
            {NOTIFICATIONS.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="animate-pop-in absolute right-0 z-30 mt-2 w-80 origin-top-right rounded-2xl border border-black/5 bg-surface p-2 shadow-xl dark:border-white/10 dark:bg-surface-dark"
        >
          <p className="px-3 py-2 text-sm font-semibold text-ink dark:text-ink-dark">
            Notifications
          </p>
          <ul className="max-h-64 space-y-1 overflow-y-auto scroll-thin">
            {NOTIFICATIONS.map((n) => (
              <li
                key={n.id}
                className="rounded-xl px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-brand-50 dark:text-ink-soft-dark dark:hover:bg-white/5"
              >
                <p className="text-ink dark:text-ink-dark">{n.text}</p>
                <p className="mt-0.5 text-xs text-ink-soft dark:text-ink-soft-dark">{n.time}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
