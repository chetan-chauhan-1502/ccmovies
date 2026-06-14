import {
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  Download,
  Film,
  Layers,
  Star,
  Tv,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MovieDetail {
  id: string;
  title: string;
  image: string;
  date: string;
  genre: string[];
  rating: number;
  synopsis: string;
  language: string;
  quality: string;
  screenshots: string[];
  trailerId?: string;
  downloadLinks: {
    "480p": string;
    "720p": string;
    "1080p": string;
    "4K": string;
  };
}

type QualityKey = keyof MovieDetail["downloadLinks"];

const MOVIES_DATA: MovieDetail[] = [
  {
    id: "1",
    title: "Stranger Things: Season 5",
    image:
      "https://vegamovies.mq/wp-content/uploads/2025/11/Stranger-Things-Hindi.jpg",
    date: "November 26, 2025",
    genre: ["Sci-Fi", "Drama", "Horror"],
    rating: 9.2,
    synopsis:
      "The final season brings the battle against Vecna and the Upside Down to an ultimate, heartbreaking conclusion as Hawkins falls deeper into chaos.",
    language: "Hindi + English",
    quality: "480p | 720p | 1080p | 2160p",
    screenshots: [
      "/screenshot/screenshot1.jpg",
      "/screenshot/screenshot2.jpg",
      "/screenshot/screenshot3.jpg",
      "/screenshot/screenshot4.jpg",
      "/screenshot/screenshot5.jpg",
      "/screenshot/screenshot6.jpg",
      "/screenshot/screenshot7.jpg",
      "/screenshot/screenshot8.jpg",
    ],
    trailerId: "b9EkMc79ZSU",
    downloadLinks: {
      "480p":
        "https://556138dca7367763ed46eecaa4284eca.r2.cloudflarestorage.com/hub2/Stranger.Things.S05V1.480p.WEB-DL.HIN-ENG.x264.ESub-Vegamovies.Hot.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=26b6cf8a0399b5880643f585c8c3dbe5%2F20260614%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260614T041603Z&X-Amz-Expires=10800&X-Amz-SignedHeaders=host&response-content-disposition=Stranger.Things.S05V1.480p.WEB-DL.HIN-ENG.x264.ESub-Vegamovies.Hot.zip&X-Amz-Signature=5cd2260375e964c863696989415de563287ad943ca05493377ed19ce72972023",
      "720p":
        "https://556138dca7367763ed46eecaa4284eca.r2.cloudflarestorage.com/hub2/Stranger%20Things%20S05E01-4%20720p%2010bit%20x265%20HEVC%20ESubs%20VegaMovies.Hot.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=26b6cf8a0399b5880643f585c8c3dbe5%2F20260614%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260614T042317Z&X-Amz-Expires=10800&X-Amz-SignedHeaders=host&response-content-disposition=Stranger%20Things%20S05E01-4%20720p%2010bit%20x265%20HEVC%20ESubs%20VegaMovies.Hot.zip&X-Amz-Signature=2e5fcabd3982a225c61ea9c3d7851fbfaa9af340d06441d52285806f06a83ee2",
      "1080p":
        "https://556138dca7367763ed46eecaa4284eca.r2.cloudflarestorage.com/hub2/Stranger.Things.S05V1.1080p.NF.WEB-DL.DUAL.DDP5.1-Vegamovies.hot.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=26b6cf8a0399b5880643f585c8c3dbe5%2F20260614%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260614T042347Z&X-Amz-Expires=10800&X-Amz-SignedHeaders=host&response-content-disposition=Stranger.Things.S05V1.1080p.NF.WEB-DL.DUAL.DDP5.1-Vegamovies.hot.zip&X-Amz-Signature=3e224ade3a5deb4d16b0811b194cda1dd03ffd1a56c6f8f9fe90a7c64e518176",
      "4K": "https://556138dca7367763ed46eecaa4284eca.r2.cloudflarestorage.com/hub2/Stranger.Things.S05E01-4.2160p.4K-SDR.NF.WEB-DL.DDP5.1.H.265-Vegamovies.Hot.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=26b6cf8a0399b5880643f585c8c3dbe5%2F20260614%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260614T042417Z&X-Amz-Expires=10800&X-Amz-SignedHeaders=host&response-content-disposition=Stranger.Things.S05E01-4.2160p.4K-SDR.NF.WEB-DL.DDP5.1.H.265-Vegamovies.Hot.zip&X-Amz-Signature=a04280580b8aa3d8418345d8be3b9e6b513ac0445c0025f904418c410da043c1",
    },
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const movie = MOVIES_DATA.find((item) => item.id === id);

  if (!movie) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center antialiased">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.03),transparent_50%)] pointer-events-none" />

        <div className="relative glass rounded-[2.5rem] p-10 max-w-md w-full border border-destructive/20 shadow-2xl space-y-6 backdrop-blur-xl">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive animate-pulse">
            <AlertCircle size={32} />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight text-foreground">
              Content Not Found
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The movie index or video serial reference parameter
              <span className="font-mono font-bold bg-muted px-1.5 py-0.5 rounded border border-border text-foreground">
                id: {id}
              </span>
              does not exist or has been modified.
            </p>
          </div>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full h-11 text-xs font-bold uppercase tracking-wider bg-foreground text-background rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            <ArrowLeft size={14} /> Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24 bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.08] dark:opacity-20 scale-105 blur-sm transform pointer-events-none transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_90%)]" />
      </div>

      <div className="mx-auto mt-[-38vh] max-w-7xl px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground transition-all hover:text-foreground group bg-card/40 hover:bg-card border border-border/40 backdrop-blur-xl px-5 h-10 rounded-full shadow-sm"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Explore
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-12">
            <div className="relative aspect-2/3 w-full max-w-85 mx-auto lg:mx-0 overflow-hidden rounded-[2.5rem] border border-white/10 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:shadow-primary/5">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                priority
                sizes="(max-width: 768px) 340px, 25vw"
                className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="flex items-center gap-1 rounded-full px-3 h-7 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black shadow-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-500" />
                  <span>{movie.rating} IMDB</span>
                </div>
                <span className="text-xs font-bold text-muted-foreground bg-card/60 px-3 h-7 rounded-full border border-border/40 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <CalendarDays size={13} /> {movie.date}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-gradient py-1">
                {movie.title}
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="rounded-full px-4 h-7 flex items-center text-xs font-bold bg-foreground text-background border border-transparent shadow-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-4xl p-6 sm:p-8 shadow-sm border border-border/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h2 className="font-extrabold text-lg mb-3 tracking-tight flex items-center gap-2">
                Storyline Overview
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                {movie.synopsis}
              </p>
            </div>
            {movie.trailerId && (
              <div className="space-y-4">
                <h2 className="text-lg font-black tracking-tight flex items-center gap-2 text-muted-foreground">
                  <Tv size={18} /> Direct Media Teaser
                </h2>
                <div className="relative aspect-video w-full rounded-4xl overflow-hidden border border-border shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] bg-black group">
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.trailerId}?rel=0&showinfo=0&autoplay=0`}
                    title={`${movie.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-lg font-black tracking-tight text-muted-foreground">
                Technical Specification
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-card/40 border border-border/60 backdrop-blur-md p-4 rounded-2xl shadow-sm flex items-center gap-3">
                  <Film className="text-muted-foreground" size={18} />
                  <div>
                    <p className="text-[10px] uppercase font-extrabold tracking-wider text-muted-foreground">
                      Language
                    </p>
                    <p className="text-xs font-bold text-foreground mt-0.5 truncate">
                      {movie.language}
                    </p>
                  </div>
                </div>
                <div className="bg-card/40 border border-border/60 backdrop-blur-md p-4 rounded-2xl shadow-sm flex items-center gap-3">
                  <Layers className="text-muted-foreground" size={18} />
                  <div>
                    <p className="text-[10px] uppercase font-extrabold tracking-wider text-muted-foreground">
                      Format Match
                    </p>
                    <p className="text-xs font-bold text-foreground mt-1 truncate">
                      {movie.quality}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movie.screenshots.map((screen, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border/80 bg-muted"
                >
                  <Image
                    src={screen}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none" />

              <div className="space-y-3">
                {(
                  [
                    { label: "480p SD", key: "480p" },
                    { label: "720p HD", key: "720p" },
                    { label: "1080p FHD", key: "1080p" },
                    { label: "4K UHD", key: "4K", premium: true },
                  ] as {
                    label: string;
                    key: QualityKey;
                    premium?: boolean;
                  }[]
                ).map((item) => {
                  const downloadHref = movie.downloadLinks[item.key];
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl border border-border/60 bg-background/30 hover:bg-background/80 hover:border-foreground/20 transition-all duration-300 ease-out gap-4 group hover:translate-x-1"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110 ${
                            item.premium
                              ? "bg-primary text-background border-primary shadow-md shadow-primary/10"
                              : "bg-muted/80 text-muted-foreground border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20"
                          }`}
                        >
                          {item.premium ? (
                            <Zap
                              size={16}
                              className="fill-background animate-pulse"
                            />
                          ) : (
                            <Download
                              size={16}
                              className="transition-transform group-hover:translate-y-0.5"
                            />
                          )}
                        </div>
                        <div className="truncate">
                          <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                            {item.label}
                            <span className="text-[10px] font-black bg-secondary border border-border px-2 py-0.5 rounded-md text-muted-foreground">
                              {item.key}
                            </span>
                          </h4>
                        </div>
                      </div>

                      {/* Next.js Link tag integration with accurate animated button styling framework */}
                      <Link
                        href={downloadHref}
                        className={`flex items-center gap-2 px-5 h-11 rounded-xl text-xs font-bold w-full sm:w-auto justify-center cursor-pointer transition-all active:scale-95 duration-200 ${
                          item.premium
                            ? "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5"
                            : "bg-secondary text-secondary-foreground border border-border hover:bg-foreground hover:text-background hover:border-transparent"
                        }`}
                      >
                        {item.premium ? "Unlock Mirror" : "Download Now"}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
