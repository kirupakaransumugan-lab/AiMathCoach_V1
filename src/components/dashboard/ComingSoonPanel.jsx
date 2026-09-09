import { motion } from "framer-motion";

const copy = {
  learn: {
    title: "Your lessons are being packed.",
    body: "This is where topic-by-topic lessons for the Combined Maths syllabus will live, each broken into bite-sized steps.",
  },
  "ai-tutor": {
    title: "The tutor is warming up.",
    body: "A focused 1:1 chat for working through a specific problem, hint by hint, will open here. Try the chat bar below in the meantime.",
  },
  practice: {
    title: "Practice sets are loading.",
    body: "Short, targeted question sets for whichever topic you're shakiest on will show up here.",
  },
  quizzes: {
    title: "Quiz mode is almost ready.",
    body: "Timed quizzes that mirror the real exam format will be built out here, with instant scoring.",
  },
  progress: {
    title: "Your full progress view is coming.",
    body: "A detailed breakdown of every topic, streak, and score over time — the Study Record card on Home is a first look.",
  },
  mistakes: {
    title: "Your mistake log starts here.",
    body: "Questions you've gotten wrong will be collected here so you can revisit and re-attempt them later.",
  },
  upload: {
    title: "Upload is being wired up.",
    body: "Drop in a past paper or your own notes here and the coach will turn them into practice questions.",
  },
  reports: {
    title: "Reports are in the works.",
    body: "Weekly and monthly summaries you can share with a parent or teacher will be generated here.",
  },
  calendar: {
    title: "Your study calendar is next.",
    body: "Plan sessions around your school timetable and exam dates from here.",
  },
  settings: {
    title: "Settings are on the way.",
    body: "Language, notification, and account preferences will live here.",
  },
};

export default function ComingSoonPanel({ tabId }) {
  const content = copy[tabId] ?? copy.learn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-dashed border-black/10 bg-white/50 px-8 py-14 text-center backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
    >
      <span className="animate-bob text-4xl">🐻</span>
      <h2 className="font-display mt-4 text-xl font-bold text-ink dark:text-ink-dark">
        {content.title}
      </h2>
      <p className="mt-2 text-sm text-ink-soft dark:text-ink-soft-dark">{content.body}</p>
    </motion.div>
  );
}
