import { Clock, Target, ClipboardList, TrendingUp } from "lucide-react";

// `value` / `decimals` drive the count-up animation. `display` formats
// the finished number back into the label shown in the mock (e.g. "8h 45m").
export const studyStats = [
  {
    id: "study-time",
    label: "Study Time",
    icon: Clock,
    iconClass: "text-brand-500",
    value: 8.75,
    decimals: 0,
    format: (n) => {
      const hours = Math.floor(n);
      const minutes = Math.round((n - hours) * 60);
      return `${hours}h ${minutes}m`;
    },
    delta: "+12%",
    deltaLabel: "from last week",
  },
  {
    id: "topics-mastered",
    label: "Topics Mastered",
    icon: Target,
    iconClass: "text-violet-500",
    value: 18,
    decimals: 0,
    format: (n) => `${Math.round(n)}`,
    delta: "+4",
    deltaLabel: "from last week",
  },
  {
    id: "quizzes-taken",
    label: "Quizzes Taken",
    icon: ClipboardList,
    iconClass: "text-amber-500",
    value: 24,
    decimals: 0,
    format: (n) => `${Math.round(n)}`,
    delta: "+5",
    deltaLabel: "from last week",
  },
  {
    id: "average-score",
    label: "Average Score",
    icon: TrendingUp,
    iconClass: "text-sky-500",
    value: 72,
    decimals: 0,
    format: (n) => `${Math.round(n)}%`,
    delta: "+8%",
    deltaLabel: "from last week",
  },
];
