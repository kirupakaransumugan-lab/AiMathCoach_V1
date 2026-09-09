import leafCorner from "../../assets/images/leaf-corner.webp";

// Purely decorative foliage frame. Fixed to the viewport so it reads
// as "the coach's little garden corner" no matter how tall the page
// content grows, and never intercepts clicks.
export default function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[38vh] min-h-[220px] overflow-hidden"
    >
      <img
        src={leafCorner}
        alt=""
        className="absolute -bottom-6 -right-10 w-[62vw] max-w-[720px] min-w-[420px] select-none opacity-95"
      />
      <img
        src={leafCorner}
        alt=""
        className="absolute -bottom-6 -left-10 w-[62vw] max-w-[720px] min-w-[420px] -scale-x-100 select-none opacity-95"
      />
      {/* soft fade so foliage never fights with foreground text */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent dark:from-canvas-dark" />
    </div>
  );
}
