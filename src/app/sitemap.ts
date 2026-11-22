import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/work", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: new Date() })),
  ];
}
