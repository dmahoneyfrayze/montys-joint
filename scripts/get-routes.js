
export const BASE_URL = 'https://montysjoint.com';
export const RSS_URL = 'https://rss-link.com/feed/l8CVOHqx40wEE90Dx7g2?blogId=x7Atd0cEqBqbS7acApJl&limit=100&loadContent=false';

export const STATIC_ROUTES = [
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
    '/thank-you',
    '/offer-claimed'
];

export const getBlogRoutes = async () => {
    try {
        console.log('Fetching RSS for prerendering...');
        // Node 18+ has global fetch
        const response = await fetch(RSS_URL);
        if (!response.ok) throw new Error(`Failed to fetch RSS: ${response.statusText}`);
        const xml = await response.text();

        const posts = [];
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        let match;

        while ((match = itemRegex.exec(xml)) !== null) {
            const itemContent = match[1];
            const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
            const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemContent.match(/<title>(.*?)<\/title>/);
            const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);

            // Extract image if available
            const mediaMatch = itemContent.match(/<media:content[^>]*url="(.*?)"/) || itemContent.match(/<img[^>]+src="(.*?)"/);
            const image = mediaMatch ? mediaMatch[1] : null;

            if (linkMatch) {
                const originalLink = linkMatch[1];
                const slug = originalLink.split('/').pop();
                const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
                const title = titleMatch ? titleMatch[1] : 'Untitled Post';

                posts.push({
                    url: `/blog/${slug}`, // Relative URL for prerenderer matches
                    fullUrl: `${BASE_URL}/blog/${slug}`, // Absolute URL for sitemap
                    title,
                    lastmod: date,
                    images: image ? [{ loc: image, title: title }] : []
                });
            }
        }
        return posts;
    } catch (error) {
        console.error('Error fetching dynamic routes:', error);
        return [];
    }
};

export const getAllRoutes = async () => {
    const blogPosts = await getBlogRoutes();
    return [...STATIC_ROUTES, ...blogPosts.map(p => p.url)];
};
