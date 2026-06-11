import { CalendarDays, Star } from "lucide-react";
import Image from "next/image";

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    image: string;
    date: string;
    genre: string[];
    rating: number;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article
      className="
      group
      cursor-pointer
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-card
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-zinc-400/50
      hover:shadow-2xl
      dark:hover:border-zinc-700
      "
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 16vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Rating */}
        <div className="absolute right-3 top-3 z-20">
          <div className="flex items-center gap-1 rounded-full bg-black/80 px-3 py-1.5 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-white">{movie.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>{movie.date}</span>
        </div>

        {/* Title */}
        <h3
          className="
          mb-3
          line-clamp-2
          min-h-[52px]
          text-base
          font-bold
          text-foreground
          transition-colors
          duration-300
          group-hover:text-zinc-600
          dark:group-hover:text-zinc-300
          "
        >
          {movie.title}
        </h3>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {movie.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="
              rounded-full
              border
              border-zinc-300
              bg-zinc-100
              px-3
              py-1
              text-[11px]
              font-medium
              text-zinc-700
              dark:border-zinc-700
              dark:bg-zinc-800
              dark:text-zinc-300
              "
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
