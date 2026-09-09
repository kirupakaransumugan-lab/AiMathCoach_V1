import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Mic, SendHorizonal, X } from "lucide-react";
import { quickActions, fallbackReply } from "../../data/chatData";
import ChatMessage from "./ChatMessage";
import TypingDots from "./TypingDots";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  function sendReply(replyText) {
    setTyping(true);
    const delay = 650 + Math.random() * 500;
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "coach", text: replyText }]);
    }, delay);
  }

  function handleQuickAction(action) {
    setPanelOpen(true);
    setMessages((prev) => [...prev, { role: "user", text: action.label }]);
    sendReply(action.reply);
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setPanelOpen(true);
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    sendReply(fallbackReply);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="relative z-20 mx-auto w-full max-w-3xl">
      <AnimatePresence>
        {panelOpen && messages.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mb-3 rounded-2xl border border-black/5 bg-surface/95 shadow-lg backdrop-blur dark:border-white/10 dark:bg-surface-dark/90">
              <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft dark:text-ink-soft-dark">
                  Coach chat
                </p>
                <button
                  type="button"
                  onClick={() => setPanelOpen(false)}
                  aria-label="Minimize chat"
                  className="rounded-full p-1 text-ink-soft transition-colors hover:bg-black/5 hover:text-ink dark:text-ink-soft-dark dark:hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="scroll-thin max-h-72 space-y-3 overflow-y-auto px-4 py-4">
                {messages.map((m, i) => (
                  <ChatMessage key={i} role={m.role} text={m.text} />
                ))}
                {typing && <TypingDots />}
                <div ref={logEndRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 pb-3">
        {quickActions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => handleQuickAction(action)}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/70 px-3.5 py-2 text-xs font-medium text-ink-soft shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-soft-dark dark:hover:text-brand-300"
          >
            <action.icon className="h-3.5 w-3.5" />
            {action.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-full border border-black/5 bg-surface/90 py-2 pl-4 pr-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-surface-dark/80">
        <Sparkles className="h-4 w-4 shrink-0 text-brand-400" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Ask me anything about Combined Maths..."
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft/70 focus:outline-none dark:text-ink-dark dark:placeholder:text-ink-soft-dark/70"
        />
        <button
          type="button"
          aria-label="Voice input"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 hover:text-ink dark:text-ink-soft-dark dark:hover:bg-white/10"
        >
          <Mic className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleSend}
          aria-label="Send message"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-md transition-transform hover:scale-105 hover:bg-brand-600 active:scale-95"
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
