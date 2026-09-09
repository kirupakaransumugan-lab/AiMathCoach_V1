import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 up to `target` over `duration` ms.
 * Runs once when `start` flips to true (so a whole group of stats
 * can be triggered together after the hero's entrance animation).
 */
export function useCountUp(target, { duration = 1200, start = true, delay = 0 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef();

  useEffect(() => {
    if (!start) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setValue(target);
      return undefined;
    }

    let startTime = null;
    const timeoutId = setTimeout(() => {
      const step = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) {
          frame.current = requestAnimationFrame(step);
        }
      };
      frame.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, start, delay]);

  return value;
}
