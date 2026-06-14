"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import ThemeToggle from "./themeToggle";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="hidden h-20 items-center justify-between lg:flex">
          <Link
            href="/"
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <span className="bg-linear-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text text-3xl font-black tracking-tight text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
              CCMovies
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex overflow-hidden rounded-full border border-border bg-card shadow-sm transition-all duration-300 focus-within:border-zinc-400 focus-within:shadow-md dark:focus-within:border-zinc-600">
              <div className="relative flex items-center">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Movies or Web Series..."
                  className="
                  h-11
                  w-105
                  bg-transparent
                  pl-12
                  pr-10
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  "
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <ThemeToggle />
          </div>
        </div>

        <div className="py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <span className="bg-linear-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-black tracking-tight text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
                CCMovies
              </span>
            </Link>

            <ThemeToggle />
          </div>

          <div className="mt-4">
            <div className="flex overflow-hidden rounded-full border border-border bg-card shadow-sm transition-all duration-300 focus-within:border-zinc-400 dark:focus-within:border-zinc-600">
              <div className="relative flex-1 flex items-center">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Movies..."
                  className="
                  h-11
                  w-full
                  bg-transparent
                  pl-12
                  pr-10
                  text-sm
                  text-foreground
                  outline-none
                  placeholder:text-muted-foreground
                  "
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
