import { Lightbulb, FileText, Sigma } from "lucide-react";

export const quickActions = [
  {
    id: "explain",
    label: "Explain this concept",
    icon: Lightbulb,
    reply:
      "Sure — tell me the topic (e.g. \"resolving forces\" or \"binomial expansion\") and I'll break it down step by step, starting from what you already know.",
  },
  {
    id: "practice",
    label: "Give me a practice question",
    icon: FileText,
    reply:
      "Here's one to try: A particle of mass 2 kg rests on a rough plane inclined at 30°. Find the least coefficient of friction for the particle to remain in equilibrium. Want a hint before you attempt it?",
  },
  {
    id: "help",
    label: "Help with a problem",
    icon: Sigma,
    reply:
      "Paste the question in and I'll ask a couple of guiding questions first — the goal is to get you to the method yourself before I show any working.",
  },
];

export const fallbackReply =
  "Good question. Let's take it one step at a time — what have you tried so far, or where exactly did you get stuck?";
