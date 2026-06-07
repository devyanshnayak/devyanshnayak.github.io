import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://devyansh.site",
});

const routes = ["/", "/about", "/projects", "/contact"];

routes.forEach((route) => sitemap.write({ url: route }));

sitemap.end();

const xml = await streamToPromise(sitemap);

writeFileSync("./static/sitemap.xml", xml.toString());

console.log("Sitemap generated");
