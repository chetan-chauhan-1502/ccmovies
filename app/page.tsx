import MovieCard from "./components/movies/movieCard";

export default function Home() {
  const MOVIES = [
    {
      id: "1",
      title: "Stranger Things: Season 5",
      image:
        "https://vegamovies.mq/wp-content/uploads/2025/11/Stranger-Things-Hindi.jpg",
      date: "November 26, 2025",
      genre: ["Sci-Fi", "Drama"],
      rating: 9.2,
    },
    {
      id: "2",
      title: "Wednesday Season 2",
      image:
        "https://vegamovies.mq/wp-content/uploads/2025/09/Lilo-Stitchss.jpg",
      date: "August 6, 2025",
      genre: ["Fantasy", "Mystery"],
      rating: 8.8,
    },
    {
      id: "3",
      title: "Squid Game Season 3",
      image:
        "https://vegamovies.mq/wp-content/uploads/2025/06/Ojing-eo-geim.jpg",
      date: "June 27, 2025",
      genre: ["Thriller", "Drama"],
      rating: 8.9,
    },
    {
      id: "4",
      title: "The Last of Us Season 2",
      image:
        "https://vegamovies.mq/wp-content/uploads/2023/02/The-Last-Of-Us-New-Poster.jpg",
      date: "April 13, 2025",
      genre: ["Action", "Adventure"],
      rating: 9.0,
    },
    {
      id: "5",
      title: "House of the Dragon Season 3",
      image:
        "https://vegamovies.mq/wp-content/uploads/2026/06/House-of-the-Dragon-2026-3.jpg",
      date: "June 2026",
      genre: ["Fantasy", "Drama"],
      rating: 8.7,
    },
    {
      id: "6",
      title: "Dune: Part Two",
      image:
        "https://vegamovies.mq/wp-content/uploads/2024/04/Dune-Part-Two-2024-ORG-Vegamovies-poster.jpg",
      date: "March 1, 2024",
      genre: ["Sci-Fi", "Adventure"],
      rating: 8.9,
    },
  ];

  return (
    <main>
      {/* Latest Releases */}
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="mb-10">
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            Latest Releases
          </h2>
        </div>

        <div
          className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          "
        >
          {MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
