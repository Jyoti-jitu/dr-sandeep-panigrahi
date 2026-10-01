export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://drsandeepkumarpanigrahi.com";
  const routes = [
    "",
    "/about",
    "/clinical-care",
    "/research",
    "/publications",
    "/health-insights",
    "/podcast",
    "/media",
    "/contact",
    "/appointment",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
