import Link from "next/link";
import { Search } from "lucide-react";
import ThemeToggle from "./themeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Desktop */}
        <div className="hidden h-20 items-center justify-between lg:flex">
          {/* Logo */}
          <Link
            href="/"
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text text-3xl font-black tracking-tight text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
              CCMovies
            </span>
          </Link>

          {/* Search + Theme */}
          <div className="flex items-center gap-4">
            <div className="flex overflow-hidden rounded-full border border-border bg-card shadow-sm transition-all duration-300 focus-within:border-zinc-400 focus-within:shadow-md dark:focus-within:border-zinc-600">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  placeholder="Search Movies or Web Series..."
                  className="
                  h-11
                  w-[420px]
                  bg-transparent
                  pl-12
                  pr-4
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  "
                />
              </div>

              <button
                type="button"
                className="
                cursor-pointer
                border-l
                border-border
                bg-black
                px-8
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-zinc-800
                active:scale-95
                dark:bg-white
                dark:text-black
                dark:hover:bg-zinc-200
                "
              >
                Search
              </button>
            </div>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="py-4 lg:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-black tracking-tight text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
                CCMovies
              </span>
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Search */}
          <div className="mt-4">
            <div className="flex overflow-hidden rounded-full border border-border bg-card shadow-sm transition-all duration-300 focus-within:border-zinc-400 dark:focus-within:border-zinc-600">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  placeholder="Search Movies..."
                  className="
                  h-11
                  w-full
                  bg-transparent
                  pl-12
                  pr-4
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  "
                />
              </div>

              <button
                type="button"
                className="
                cursor-pointer
                border-l
                border-border
                bg-black
                px-5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-zinc-800
                active:scale-95
                dark:bg-white
                dark:text-black
                dark:hover:bg-zinc-200
                "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
