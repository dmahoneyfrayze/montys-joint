import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';

const NotFound = () => {
    return (
        <Layout>
            <SEO
                title="Page Not Found"
                description="Oops! The page you are looking for does not exist."
                url="https://montysjoint.com/404/"
            >
                <meta name="robots" content="noindex" />
            </SEO>
            <div style={{ paddingTop: '150px', paddingBottom: '8rem', textAlign: 'center' }} className="container">
                <h1 style={{ fontSize: '5rem', color: 'var(--color-yellow)', marginBottom: '1rem' }}>404</h1>
                <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Page Not Found</h2>
                <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Looks like you've taken a wrong turn. The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                    Back to Home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;
