export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          {/* Logo & Description */}
          <div>
            <h3 className="bg-gradient-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text text-2xl font-black text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
              CCMovies
            </h3>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Discover trending movies, series, trailers, ratings, reviews, and
              the latest entertainment updates all in one place.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CCMovies. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
