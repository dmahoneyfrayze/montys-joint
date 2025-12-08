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

const LLMS_TXT_PATH = path.join(PUBLIC_DIR, 'llms.txt');

const extractBlogPosts = (xml) => {
    const posts = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
        const itemContent = match[1];
        const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
        const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemContent.match(/<title>(.*?)<\/title>/);
        const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);

        // Extract image if available (media:content or encoded content img tag)
        const mediaMatch = itemContent.match(/<media:content[^>]*url="(.*?)"/) || itemContent.match(/<img[^>]+src="(.*?)"/);
        const image = mediaMatch ? mediaMatch[1] : null;

        if (linkMatch) {
            const originalLink = linkMatch[1];
            const slug = originalLink.split('/').pop();
            const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
            const title = titleMatch ? titleMatch[1] : 'Untitled Post';

            posts.push({
                title,
                url: `${BASE_URL}/blog/${slug}`,
                lastmod: date,
                changefreq: 'monthly',
                priority: 0.6,
                images: image ? [{ loc: image, title: title }] : []
            });
        }
    }
    return posts;
};

const updateLLMsTxt = (posts) => {
    if (!fs.existsSync(LLMS_TXT_PATH)) return;

    let content = fs.readFileSync(LLMS_TXT_PATH, 'utf-8');
    const header = '## Latest from the Blog';

    // Remove existing dynamic section if it exists
    if (content.includes(header)) {
        content = content.split(header)[0].trim();
    }

    // Append new section
    if (posts.length > 0) {
        const recentPosts = posts.slice(0, 5);
        const blogSection = `\n\n${header}\n` + recentPosts.map(p => `- [${p.title}](${p.url}) (${p.lastmod})`).join('\n');
        content += blogSection;
    }

    fs.writeFileSync(LLMS_TXT_PATH, content);
    console.log('Updated llms.txt with latest blog posts');
};

const generateSitemap = async () => {
    console.log('Fetching RSS feed...');
    const rssXml = await fetchRSS();
    const blogPosts = rssXml ? extractBlogPosts(rssXml) : [];
    console.log(`Found ${blogPosts.length} blog posts.`);

    // Extract images from RSS items for blog posts
    // Note: extractBlogPosts already runs over the XML; we could modify it to extract images too.
    // For now, let's assume the simplified version, but we can enhance it if the RSS has images.
    // Re-running extraction with image awareness would be cleaner but let's just make sure the XML namespace is correct first.

    const staticUrls = STATIC_ROUTES.map(route => {
        const pageData = {
            url: `${BASE_URL}${route === '/' ? '' : route}`,
            lastmod: new Date().toISOString().split('T')[0],
            changefreq: route === '/' ? 'daily' : 'weekly',
            priority: route === '/' ? 1.0 : 0.8,
            images: []
        };

        // Add specific images for key pages
        if (route === '/') {
            pageData.images.push({
                loc: 'https://montysjoint.com/assets/venue-hero.webp',
                title: 'Monty’s Joint Venue'
            });
        }
        return pageData;
    });

    const allUrls = [...staticUrls, ...blogPosts];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.images && url.images.length > 0 ? '\n' + url.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>${img.title ? `\n      <image:title>${img.title}</image:title>` : ''}
    </image:image>`).join('\n') : ''}
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log('Sitemap generated.');

    // Update LLMs.txt
    updateLLMsTxt(blogPosts);
};

generateSitemap();
