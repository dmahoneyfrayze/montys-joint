import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { fetchBlogPosts } from '../utils/rss';
import MotionSection from '../components/UI/MotionSection';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            const fetchedPosts = await fetchBlogPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };

        loadPosts();
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Blog | Monty’s Joint</title>
                <meta name="description" content="Read the latest news, stories, and updates from Monty’s Joint. Food, community, and culture in Thunder Bay." />
            </Helmet>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <MotionSection>
                    <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>The Monty's Blog</h1>
                    <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '4rem', fontSize: '1.2rem' }}>News, stories, and updates from the team.</p>
                </MotionSection>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div className="spinner">Loading posts...</div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
                        {posts.map((post, index) => (
                            <MotionSection key={post.id} delay={index * 0.1}>
                                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                    <article style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }} className="blog-card">
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                        </div>
                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ color: 'var(--color-yellow)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{post.date}</div>
                                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', lineHeight: '1.3' }}>{post.title}</h2>
                                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                                            <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}>
                                                Read More <span style={{ marginLeft: '0.5rem' }}>&rarr;</span>
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </MotionSection>
                        ))}
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#ccc', padding: '4rem' }}>
                        <p>No posts found. Please check back later!</p>
                    </div>
                )}

                <style>{`
                    .blog-card:hover {
                        transform: translateY(-5px);
                        border-color: var(--color-yellow) !important;
                    }
                    .blog-card:hover img {
                        transform: scale(1.05);
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default Blog;
