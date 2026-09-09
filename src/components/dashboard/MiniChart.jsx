import { motion } from "framer-motion";
import { weeklyMinutes, topicBreakdown } from "../../data/chartData";

const WIDTH = 280;
const HEIGHT = 120;
const PADDING = 18;

function BarChart() {
  const max = Math.max(...weeklyMinutes.map((d) => d.value));
  const slot = (WIDTH - PADDING * 2) / weeklyMinutes.length;

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full">
      {weeklyMinutes.map((d, i) => {
        const barHeight = ((HEIGHT - PADDING * 2) * d.value) / max;
        const x = PADDING + i * slot + slot * 0.2;
        return (
          <g key={d.label}>
            <motion.rect
              initial={{ height: 0, y: HEIGHT - PADDING }}
              animate={{ height: barHeight, y: HEIGHT - PADDING - barHeight }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              x={x}
              width={slot * 0.6}
              rx={4}
              className="fill-brand-400"
            />
            <text
              x={x + (slot * 0.6) / 2}
              y={HEIGHT - 3}
              textAnchor="middle"
              className="fill-current text-[9px] text-ink-soft dark:text-ink-soft-dark"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart() {
  const max = Math.max(...weeklyMinutes.map((d) => d.value));
  const slot = (WIDTH - PADDING * 2) / (weeklyMinutes.length - 1);
  const points = weeklyMinutes.map((d, i) => {
    const x = PADDING + i * slot;
    const y = PADDING + (HEIGHT - PADDING * 2) * (1 - d.value / max);
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full">
      <motion.polyline
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        points={points.join(" ")}
        fill="none"
        strokeWidth="2.5"
        className="stroke-brand-500"
      />
      {weeklyMinutes.map((d, i) => {
        const x = PADDING + i * slot;
        const y = PADDING + (HEIGHT - PADDING * 2) * (1 - d.value / max);
        return (
          <motion.circle
            key={d.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05 }}
            cx={x}
            cy={y}
            r={3.5}
            className="fill-brand-500"
          />
        );
      })}
    </svg>
  );
}

function DonutChart() {
  const total = topicBreakdown.reduce((sum, d) => sum + d.value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Precompute each slice's cumulative start offset (no mutation during render).
  const segments = topicBreakdown.reduce((acc, d, i) => {
    const prevEnd = i === 0 ? 0 : acc[i - 1].end;
    const length = (d.value / total) * circumference;
    acc.push({ ...d, start: prevEnd, end: prevEnd + length, length });
    return acc;
  }, []);

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-28 w-28 shrink-0 -rotate-90">
        <circle cx="50" cy="50" r={radius} strokeWidth="14" className="fill-none stroke-black/5 dark:stroke-white/5" />
        {segments.map((d, i) => {
          const dasharray = `${d.length} ${circumference - d.length}`;
          const currentOffset = d.start;
          return (
            <motion.circle
              key={d.label}
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="14"
              fill="none"
              stroke={d.color}
              strokeDasharray={dasharray}
              strokeDashoffset={-currentOffset}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          );
        })}
      </svg>
      <ul className="space-y-1.5 text-xs">
        {topicBreakdown.map((d) => (
          <li key={d.label} className="flex items-center gap-2 text-ink-soft dark:text-ink-soft-dark">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            {d.label} <span className="font-semibold text-ink dark:text-ink-dark">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MiniChart({ type }) {
  if (type === "line") return <LineChart />;
  if (type === "donut") return <DonutChart />;
  return <BarChart />;
}
