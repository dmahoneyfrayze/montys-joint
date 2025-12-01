/**
 * Fetches and parses the Monty's Joint RSS feed.
 * @returns {Promise<Array>} Array of blog post objects
 */
export const fetchBlogPosts = async () => {
    const RSS_URL = 'https://rss-link.com/feed/l8CVOHqx40wEE90Dx7g2?blogId=x7Atd0cEqBqbS7acApJl&limit=25&loadContent=true';

    try {
        const response = await fetch(RSS_URL);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        return Array.from(items).map(item => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            // Extract slug from the link (e.g., https://blog.montysjoint.com/post/welcome-to-montys-new-blog -> welcome-to-montys-new-blog)
            const slug = link.split('/').pop() || '';

            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const date = new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Description often contains HTML, we might want to strip it for the excerpt
            const descriptionHtml = item.querySelector('description')?.textContent || '';
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = descriptionHtml;
            const excerpt = tempDiv.textContent.substring(0, 150) + '...';

            // Content might be in content:encoded or just description if loadContent=true
            // The feed sample shows content in description mostly for now, but let's check both
            const contentEncoded = item.getElementsByTagNameNS('http://purl.org/rss/1.0/modules/content/', 'encoded')[0]?.textContent;
            const content = contentEncoded || descriptionHtml;

            // Image
            // Try media:content first, then enclosure, then parse from description
            let image = '/assets/venue-hero.webp'; // Default fallback

            const mediaContent = item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0];
            const enclosure = item.querySelector('enclosure');

            if (mediaContent && mediaContent.getAttribute('url')) {
                image = mediaContent.getAttribute('url');
            } else if (enclosure && enclosure.getAttribute('url')) {
                image = enclosure.getAttribute('url');
            } else {
                // Try to find first img in description
                const imgMatch = descriptionHtml.match(/<img[^>]+src="([^">]+)"/);
                if (imgMatch) {
                    image = imgMatch[1];
                }
            }

            // Author
            const author = item.querySelector('creator')?.textContent || 'Monty\'s Team';

            // Category
            // RSS items can have multiple categories, we'll take the first one or default to 'Community'
            const category = item.querySelector('category')?.textContent || 'Community';

            // Read Time Calculation
            const textContent = tempDiv.textContent || '';
            const wordCount = textContent.split(/\s+/).length;
            const readTime = Math.ceil(wordCount / 200) + ' min read';

            return {
                id: slug, // Use slug as ID for simplicity in routing
                title,
                slug,
                date,
                excerpt,
                content,
                image,
                link, // Original link
                author,
                category,
                readTime
            };
        });
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
};
