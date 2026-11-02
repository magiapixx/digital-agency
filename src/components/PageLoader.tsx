import { useEffect, useState } from "react";
import Logo from "./Logo";

const FADE_MS = 400;
const HOLD_MS = 900;

const PageLoader = () => {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), HOLD_MS);
    const removeTimer = setTimeout(() => setGone(true), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-fade-in">
        <Logo className="text-4xl" />
      </div>
      <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-full origin-left bg-accent animate-loader-bar" />
      </div>
    </div>
  );
};

export default PageLoader;
