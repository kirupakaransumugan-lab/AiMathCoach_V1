import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/navItems";
import BearIcon from "../ui/BearIcon";
import ThemeToggle from "../ui/ThemeToggle";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

export default function TopNav({ activeTab, onTabChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleSelect(id) {
    onTabChange(id);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-canvas/80 backdrop-blur-md transition-colors dark:border-white/5 dark:bg-canvas-dark/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/60">
            <BearIcon className="h-6 w-6" />
          </span>
          <span className="font-display text-lg font-bold leading-none tracking-tight text-ink dark:text-ink-dark">
            AI Math<span className="text-brand-500"> Coach</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="scroll-thin ml-2 hidden flex-1 items-center gap-1 overflow-x-auto lg:flex">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                className={`group relative flex shrink-0 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                  active
                    ? "text-brand-600 dark:text-brand-300"
                    : "text-ink-soft hover:text-ink dark:text-ink-soft-dark dark:hover:text-ink-dark"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-transform group-hover:-translate-y-0.5 ${
                    active ? "scale-110" : ""
                  }`}
                />
                {label}
                <span
                  className={`absolute -bottom-0.5 h-0.5 w-6 rounded-full bg-brand-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex-1 lg:hidden" />

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <NotificationBell />
          <UserMenu name="Kumar" grade="Grade 13" />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-ink-soft shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-soft-dark lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="animate-fade-up grid grid-cols-3 gap-1 border-t border-black/5 px-4 py-3 dark:border-white/5 lg:hidden">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-600 dark:bg-white/5 dark:text-brand-300"
                    : "text-ink-soft dark:text-ink-soft-dark"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
