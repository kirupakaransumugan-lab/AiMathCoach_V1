import { useCountUp } from "../../hooks/useCountUp";

export default function StatPill({ stat, start, delay }) {
  const { icon: Icon, label, format, value, delta, deltaLabel, iconClass } = stat;
  const animated = useCountUp(value, { start, delay });

  return (
    <div className="rounded-xl px-1 py-1 text-left">
      <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-ink-soft dark:text-ink-soft-dark">
        <Icon className={`h-3.5 w-3.5 ${iconClass}`} />
        {label}
      </div>
      <p className="font-display text-xl font-bold text-ink dark:text-ink-dark">
        {format(animated)}
      </p>
      <p className="mt-0.5 text-xs">
        <span className="font-semibold text-brand-500">{delta}</span>{" "}
        <span className="text-ink-soft dark:text-ink-soft-dark">{deltaLabel}</span>
      </p>
    </div>
  );
}
