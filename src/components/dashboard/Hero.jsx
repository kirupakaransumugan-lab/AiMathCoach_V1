import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Lightbulb } from "lucide-react";
import bearStudy from "../../assets/images/bear-study.webp";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ userName = "Kumar", onStartLearning, onRevealed }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        onAnimationComplete={onRevealed}
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft dark:text-ink-soft-dark"
        >
          <span className="text-base">☀️</span> {getGreeting()}, {userName}!{" "}
          <span className="inline-block animate-bob">👋</span>
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-3 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem] dark:text-ink-dark"
        >
          Master Combined
          <br />
          Maths{" "}
          <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
            your way.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-md text-base text-ink-soft sm:text-lg dark:text-ink-soft-dark"
        >
          Your AI learning companion that understands you.
        </motion.p>

        <motion.div variants={item} className="mt-7 flex items-center gap-3">
          <button
            type="button"
            onClick={onStartLearning}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40 active:translate-y-0"
          >
            Start Learning
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            aria-label="Ask the AI something"
            onClick={onStartLearning}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/70 text-brand-500 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 hover:scale-105 dark:border-white/10 dark:bg-white/5"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-sm lg:max-w-md"
      >
        <div className="animate-float-slow relative">
          <img src={bearStudy} alt="Mascot studying with a laptop and books" className="w-full drop-shadow-2xl" />

          <span className="animate-float-slower absolute -top-2 right-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-500 shadow-md dark:bg-amber-400/10">
            <Lightbulb className="h-6 w-6" />
          </span>
          <span className="absolute left-2 top-10 text-2xl font-bold text-brand-300/70 [animation:float_7s_ease-in-out_infinite]">
            x²+y²
          </span>
        </div>
      </motion.div>
    </div>
  );
}
