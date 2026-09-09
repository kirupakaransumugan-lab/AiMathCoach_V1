import bearPeek from "../../assets/images/bear-peek.webp";

export default function BearMascot() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 left-2 z-10 hidden w-40 select-none sm:block sm:w-48 md:left-6 md:w-56"
    >
      <div className="animate-bob relative">
        <div className="animate-fade-up absolute -top-9 left-1/2 w-max -translate-x-1/2 rounded-2xl rounded-bl-sm bg-surface px-3 py-1.5 text-xs font-semibold text-ink shadow-md [animation-delay:1.1s] dark:bg-surface-dark dark:text-ink-dark">
          Let's learn together! 🐾
        </div>
        <img src={bearPeek} alt="" className="w-full drop-shadow-lg" />
      </div>
    </div>
  );
}
