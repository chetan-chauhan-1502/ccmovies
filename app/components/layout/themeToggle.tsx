"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 animate-pulse rounded-full border border-border bg-card" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
group
cursor-pointer
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-border
bg-card
text-foreground
shadow-sm
transition-all
duration-300
hover:scale-105
hover:border-zinc-400
hover:bg-accent
active:scale-95
dark:hover:border-zinc-600
"
    >
      {isDark ? (
        <Sun
          size={18}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      ) : (
        <Moon
          size={18}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
