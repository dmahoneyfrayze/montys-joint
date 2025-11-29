import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Story Behind Monty's Joint",
            date: "November 28, 2025",
            excerpt: "Discover how we started and what drives our passion for great food and community impact.",
            image: "/assets/venue-hero.webp"
        },
        {
            id: 2,
            title: "Why We Love Thunder Bay",
            date: "November 15, 2025",
            excerpt: "From the sleeping giant to the local music scene, here's why we're proud to call this place home.",
            image: "/assets/checker-yellow.png"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Blog | Monty’s Joint</title>
                <meta name="description" content="Read the latest news, stories, and updates from Monty’s Joint. Food, community, and culture in Thunder Bay." />
            </Helmet>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>The Monty's Blog</h1>
                <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '4rem', fontSize: '1.2rem' }}>News, stories, and updates from the team.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
                    {posts.map(post => (
                        <article key={post.id} style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ color: 'var(--color-yellow)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{post.date}</div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{post.title}</h2>
                                <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                                <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', cursor: 'pointer' }}>Read More →</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
