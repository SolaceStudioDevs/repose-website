// sitemap.xml: every page and blog post, for search engines. Built from the pages in
// this folder and the blog collection, so a new page or post is included on its own.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const pageFiles = Object.keys(import.meta.glob("./*.astro"));

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://reposesleep.net");

  // "./index.astro" -> "/", "./about.astro" -> "/about/" (the site's URLs end in a slash)
  const pages = pageFiles
    .map((file) => file.replace(/^\.\//, "").replace(/\.astro$/, ""))
    .filter((name) => name !== "404")
    .map((name) => ({ loc: new URL(name === "index" ? "/" : `/${name}/`, base).href, lastmod: undefined as string | undefined }));

  const posts = (await getCollection("blog"))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map((post) => ({ loc: new URL(`/blog/${post.id}/`, base).href, lastmod: post.data.pubDate.toISOString().slice(0, 10) }));

  const urls = [...pages, { loc: new URL("/blog/", base).href, lastmod: posts[0]?.lastmod }, ...posts];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`).join("\n") +
    `\n</urlset>\n`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
