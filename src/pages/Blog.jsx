import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { fetchBlogPosts } from '../utils/rss';
import MotionSection from '../components/UI/MotionSection';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Food', 'Events', 'Community', 'Behind the Scenes', 'Specials'];

    useEffect(() => {
        const loadPosts = async () => {
            const fetchedPosts = await fetchBlogPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };

        loadPosts();
    }, []);

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <Layout>
            <SEO
                title="Blog"
                description="Stay up to date with the latest news, special events, and behind-the-scenes stories from Monty’s Joint - Thunder Bay's favourite neighbourhood gastropub."
                url="https://montysjoint.com/blog/"
                image="https://montysjoint.com/assets/logo-main.png"
            />
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <MotionSection>
                    <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>The Monty's Blog</h1>
                    <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '3rem', fontSize: '1.2rem' }}>News, stories, and updates from the team.</p>

                    {/* Categories */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    background: activeCategory === cat ? 'var(--color-yellow)' : 'transparent',
                                    color: activeCategory === cat ? '#000' : '#fff',
                                    border: '1px solid var(--color-yellow)',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </MotionSection>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div className="spinner">Loading posts...</div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
                        {filteredPosts.map((post, index) => (
                            <MotionSection key={post.id} delay={index * 0.1}>
                                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                    <article style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }} className="blog-card">
                                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-yellow)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                {post.category}
                                            </span>
                                        </div>
                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', lineHeight: '1.3' }}>{post.title}</h2>
                                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                                <span style={{ color: '#888', fontSize: '0.9rem' }}>By {post.author}</span>
                                                <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}>
                                                    Read More <span style={{ marginLeft: '0.5rem' }}>&rarr;</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </MotionSection>
                        ))}
                    </div>
                )}

                {!loading && filteredPosts.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#ccc', padding: '4rem' }}>
                        <p>No posts found in this category.</p>
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
