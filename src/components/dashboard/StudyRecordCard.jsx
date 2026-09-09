import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Crown, ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";
import { studyStats } from "../../data/statsData";
import StatPill from "./StatPill";
import MiniChart from "./MiniChart";

const chartToggles = [
  { id: "bar", icon: BarChart3, label: "Bar chart view" },
  { id: "line", icon: LineChart, label: "Line chart view" },
  { id: "donut", icon: PieChart, label: "Topic breakdown view" },
];

export default function StudyRecordCard({ start }) {
  const [expanded, setExpanded] = useState(false);
  const [chartType, setChartType] = useState("bar");

  function selectChart(id) {
    setChartType(id);
    setExpanded(true);
  }

  return (
    <div className="relative rounded-3xl border border-black/5 bg-surface/90 p-5 shadow-xl shadow-black/5 backdrop-blur-sm sm:p-6 dark:border-white/10 dark:bg-surface-dark/80 dark:shadow-black/30">
      <span className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-600 shadow-sm dark:bg-amber-400/15 dark:text-amber-300">
        <Crown className="h-3.5 w-3.5" /> 2.4 MB
      </span>

      <div className="flex items-center gap-2 text-sm font-semibold text-ink dark:text-ink-dark">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
        </span>
        Study Record
        <Activity className="h-4 w-4 text-brand-400" />
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl dark:text-ink-dark">
          02:52
        </span>
        <span className="font-display text-2xl font-bold text-brand-500">26</span>
      </div>
      <p className="-mt-1 text-xs text-ink-soft dark:text-ink-soft-dark">
        hours this month &middot; <span className="font-semibold text-brand-500">26</span>-day streak
      </p>

      <div className="my-5 h-px w-full bg-black/5 dark:bg-white/10" />

      <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4">
        {studyStats.map((stat, i) => (
          <StatPill key={stat.id} stat={stat} start={start} delay={i * 120} />
        ))}
      </div>

      <div className="my-5 h-px w-full bg-black/5 dark:bg-white/10" />

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="group inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-100 dark:bg-white/5 dark:text-brand-300 dark:hover:bg-white/10"
        >
          See Progress
          <ArrowRight
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
          />
        </button>

        <div className="flex items-center gap-1.5">
          {chartToggles.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-pressed={expanded && chartType === id}
              onClick={() => selectChart(id)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                expanded && chartType === id
                  ? "border-brand-300 bg-brand-100 text-brand-600 dark:border-brand-400/40 dark:bg-brand-400/15 dark:text-brand-300"
                  : "border-black/5 bg-white/70 text-ink-soft hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-soft-dark"
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="chart"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-2xl bg-black/[0.02] p-4 dark:bg-white/[0.03]">
              <MiniChart type={chartType} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
