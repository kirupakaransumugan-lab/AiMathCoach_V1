import { motion } from "framer-motion";
import BearIcon from "../ui/BearIcon";

export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}
    >
      {!isUser && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/60">
          <BearIcon className="h-5 w-5" />
        </span>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-sm bg-brand-500 text-white"
            : "rounded-bl-sm bg-black/[0.03] text-ink dark:bg-white/[0.06] dark:text-ink-dark"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}
