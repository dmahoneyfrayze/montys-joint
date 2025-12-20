import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import { fetchBlogPosts } from '../utils/rss';
import MotionSection from '../components/UI/MotionSection';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const posts = await fetchBlogPosts();
                const foundPost = posts.find(p => p.slug === slug);

                if (foundPost) {
                    setPost(foundPost);
                    // Find related posts (same category, excluding current)
                    const related = posts
                        .filter(p => p.category === foundPost.category && p.slug !== foundPost.slug)
                        .slice(0, 3);

                    // If not enough related posts, just take recent ones
                    if (related.length < 3) {
                        const others = posts
                            .filter(p => p.slug !== foundPost.slug && !related.includes(p))
                            .slice(0, 3 - related.length);
                        setRelatedPosts([...related, ...others]);
                    } else {
                        setRelatedPosts(related);
                    }
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Failed to load post", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="spinner">Loading...</div>
                </div>
            </Layout>
        );
    }

    if (error || !post) {
        return (
            <Layout>
                <div style={{ paddingTop: '100px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh' }} className="container">
                    <h1 style={{ color: 'var(--color-yellow)', marginBottom: '1rem' }}>Post Not Found</h1>
                    <p style={{ color: '#ccc', marginBottom: '2rem' }}>The article you are looking for does not exist or has been moved.</p>
                    <Link to="/blog" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                        Back to Blog
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Helmet>
                <title>{post.title} | Monty’s Joint, Thunder Bay</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <link rel="canonical" href={`https://montysjoint.com/blog/${post.slug}/`} />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": "${post.title}",
                            "image": "${post.image}",
                            "author": {
                                "@type": "Person",
                                "name": "${post.author}"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Monty's Joint",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://montysjoint.com/assets/logo-main.png"
                                }
                            },
                            "datePublished": "${post.date}",
                            "description": "${post.excerpt}"
                        }
                    `}
                </script>
            </Helmet>

            <article className="blog-post-page">
                {/* Hero Image */}
                <div style={{
                    height: '50vh',
                    minHeight: '400px',
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    paddingBottom: '4rem'
                }}>
                    <div className="container">
                        <MotionSection>
                            <Link to="/blog" style={{ color: 'var(--color-yellow)', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
                                &larr; Back to Blog
                            </Link>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ background: 'var(--color-yellow)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    {post.category}
                                </span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
                                {post.title}
                            </h1>
                            <div style={{ color: '#ccc', fontSize: '1.1rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <span>By {post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </MotionSection>
                    </div>
                </div>

                {/* Content */}
                <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                    <MotionSection delay={0.2}>
                        <div
                            className="blog-content"
                            style={{ color: '#ddd', fontSize: '1.1rem', lineHeight: '1.8' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </MotionSection>

                    <div style={{ marginTop: '4rem', borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--color-yellow)', marginBottom: '1rem' }}>Enjoyed this article?</h3>
                        <p style={{ color: '#ccc', marginBottom: '2rem' }}>Stop by Monty's Joint to experience it for yourself!</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/menu" className="btn" style={{ background: '#fff', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                                View Menu
                            </Link>
                            <Link to="/reservations" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                                Book a Table
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div style={{ background: '#111', padding: '4rem 0' }}>
                    <div className="container">
                        <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Related Posts</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {relatedPosts.map((related) => (
                                <Link key={related.id} to={`/blog/${related.slug}`} style={{ textDecoration: 'none' }}>
                                    <div style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <img src={related.image} alt={related.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '1.5rem', flex: 1 }}>
                                            <div style={{ color: 'var(--color-yellow)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{related.category}</div>
                                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{related.title}</h4>
                                            <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5' }}>{related.excerpt.substring(0, 100)}...</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <style>{`
                .blog-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 2rem 0;
                }
                .blog-content h2 {
                    color: var(--color-yellow);
                    font-size: 2rem;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content h3 {
                    color: #fff;
                    font-size: 1.5rem;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul, .blog-content ol {
                    margin-bottom: 1.5rem;
                    padding-left: 2rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                }
                .blog-content a {
                    color: var(--color-yellow);
                    text-decoration: underline;
                }
                .blog-content blockquote {
                    border-left: 4px solid var(--color-yellow);
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: #aaa;
                }
            `}</style>
        </Layout>
    );
};

export default BlogPost;
