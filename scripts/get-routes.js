
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

        const routes = [];
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        let match;

        while ((match = itemRegex.exec(xml)) !== null) {
            const itemContent = match[1];
            const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
            if (linkMatch) {
                const originalLink = linkMatch[1];
                const slug = originalLink.split('/').pop();
                // Ensure consistency with how the app handles routes. 
                // Using /blog/slug (no trailing slash usually in react router unless configured, but sitemap enforced trailing slashes)
                // Let's stick to /blog/slug for the prerenderer to match the link structure
                routes.push(`/blog/${slug}`);
            }
        }
        return routes;
    } catch (error) {
        console.error('Error fetching dynamic routes:', error);
        return [];
    }
};

export const getAllRoutes = async () => {
    const blogRoutes = await getBlogRoutes();
    return [...STATIC_ROUTES, ...blogRoutes];
};
