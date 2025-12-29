import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BASE_URL, getBlogRoutes, STATIC_ROUTES } from './get-routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const LLMS_TXT_PATH = path.join(PUBLIC_DIR, 'llms.txt');

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
        const blogSection = `\n\n${header}\n` + recentPosts.map(p => `- [${p.title}](${p.fullUrl}) (${p.lastmod})`).join('\n');
        content += blogSection;
    }

    fs.writeFileSync(LLMS_TXT_PATH, content);
    console.log('Updated llms.txt with latest blog posts');
};

const generateSitemap = async () => {
    console.log('Generating sitemap...');
    const blogPosts = await getBlogRoutes();
    console.log(`Found ${blogPosts.length} blog posts.`);

    const staticUrls = STATIC_ROUTES.map(route => {
        const pageData = {
            url: `${BASE_URL}${route === '/' ? '/' : route.endsWith('/') ? route : route + '/'}`,
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

    // Map blog posts to sitemap format
    const blogUrls = blogPosts.map(post => ({
        url: post.fullUrl,
        lastmod: post.lastmod,
        changefreq: 'monthly',
        priority: 0.6,
        images: post.images
    }));

    const allUrls = [...staticUrls, ...blogUrls];

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
