import BearIcon from "../ui/BearIcon";

export default function TypingDots() {
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/60">
        <BearIcon className="h-5 w-5" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-black/[0.03] px-4 py-3 dark:bg-white/[0.06]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
            className="animate-typing-dot h-1.5 w-1.5 rounded-full bg-ink-soft dark:bg-ink-soft-dark"
          />
        ))}
      </div>
    </div>
  );
}
