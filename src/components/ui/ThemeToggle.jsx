import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="relative h-10 w-10 shrink-0 rounded-full border border-black/5 bg-white/70 text-ink-soft shadow-sm backdrop-blur transition-colors hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-soft-dark dark:hover:text-brand-300"
    >
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark ? "-translate-y-8 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-8 -rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
