import { CalendarDays, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/movies/${movie.id}`} className="block">
      <article
        className="
        movie-card
        movie-card-glow
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        transition-all
        duration-500
        "
      >
        <div className="relative aspect-2/3 overflow-hidden">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 16vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute right-3 top-3 z-20">
            <div className="rating-badge flex items-center gap-1 rounded-full px-3 py-1.5">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-white">
                {movie.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{movie.date}</span>
          </div>

          <h3
            className="
            mb-3
            line-clamp-2
            min-h-13
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

          <div className="flex flex-wrap gap-2">
            {movie.genre.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="genre-badge rounded-full px-3 py-1 text-[11px] font-medium"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
