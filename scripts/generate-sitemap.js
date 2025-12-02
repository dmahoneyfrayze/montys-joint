import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const RSS_URL = 'https://rss-link.com/feed/l8CVOHqx40wEE90Dx7g2?blogId=x7Atd0cEqBqbS7acApJl&limit=100&loadContent=false';
const BASE_URL = 'https://montysjoint.com';

const STATIC_ROUTES = [
    '/',
    '/menu',
    '/promotions',
    '/reservations',
    '/order',
    '/contact',
    '/blog',
    '/birthday-club',
    '/careers',
    '/terms-of-service',
    '/privacy-policy',
    '/private-events',
    '/sitemap'
];

const fetchRSS = async () => {
    try {
        const response = await fetch(RSS_URL);
        if (!response.ok) throw new Error(`Failed to fetch RSS: ${response.statusText}`);
        return await response.text();
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return null;
    }
};

const extractBlogPosts = (xml) => {
    const posts = [];
    // Simple regex to find items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
        const itemContent = match[1];

        // Extract link
        const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
        const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);

        if (linkMatch) {
            const originalLink = linkMatch[1];
            const slug = originalLink.split('/').pop();
            const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

            posts.push({
                url: `${BASE_URL}/blog/${slug}`,
                lastmod: date,
                changefreq: 'monthly',
                priority: 0.6
            });
        }
    }
    return posts;
};

const generateSitemap = async () => {
    const rssXml = await fetchRSS();
    const blogPosts = rssXml ? extractBlogPosts(rssXml) : [];

    const staticUrls = STATIC_ROUTES.map(route => ({
        url: `${BASE_URL}${route === '/' ? '' : route}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1.0 : 0.8
    }));

    const allUrls = [...staticUrls, ...blogPosts];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
};

generateSitemap();
