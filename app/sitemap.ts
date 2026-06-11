import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ccmovies.vercel.app",
      lastModified: new Date(),
    },
  ];
}
