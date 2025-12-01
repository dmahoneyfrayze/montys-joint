import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import { fetchBlogPosts } from '../utils/rss';
import MotionSection from '../components/UI/MotionSection';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const posts = await fetchBlogPosts();
                const foundPost = posts.find(p => p.slug === slug);

                if (foundPost) {
                    setPost(foundPost);
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
                <title>{post.title} | Monty’s Joint</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
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
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
                                {post.title}
                            </h1>
                            <div style={{ color: '#ccc', fontSize: '1.1rem' }}>
                                Published on {post.date}
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
