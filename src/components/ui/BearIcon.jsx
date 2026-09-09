// A small, crisp vector version of the mascot's face for places the
// big illustrations are too heavy for (nav logo, avatar badge).
export default function BearIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="12" cy="10" r="6" fill="#8a5a34" />
      <circle cx="36" cy="10" r="6" fill="#8a5a34" />
      <circle cx="12" cy="10" r="3" fill="#6b4526" />
      <circle cx="36" cy="10" r="3" fill="#6b4526" />
      <circle cx="24" cy="24" r="18" fill="#a9713f" />
      <path
        d="M8 30c0 9 7 15 16 15s16-6 16-15"
        fill="#3fae5c"
      />
      <ellipse cx="24" cy="27" rx="10" ry="9" fill="#f3e2c6" />
      <ellipse cx="24" cy="25" rx="2.6" ry="2.2" fill="#1c140c" />
      <path
        d="M16 30q8 6 16 0"
        stroke="#1c140c"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 17q3-3 6 0M27 17q3-3 6 0"
        stroke="#1c140c"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
