import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/processus`, priority: 0.8 },
    { url: `${base}/services`, priority: 0.8 },
    { url: `${base}/realisations`, priority: 0.7 },
    { url: `${base}/a-propos`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.6 },
    { url: `${base}/mentions-legales`, priority: 0.3 },
    { url: `${base}/confidentialite`, priority: 0.3 }
  ];
}
