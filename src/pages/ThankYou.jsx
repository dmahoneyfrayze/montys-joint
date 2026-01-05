import React from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const ThankYou = () => {
    return (
        <Layout>
            <SEO
                title="Thank You"
                description="Thank you for reaching out to Monty’s Joint. We have received your message and will be in touch soon."
                url="https://montysjoint.com/thank-you/"
            />
            <div style={{ paddingTop: '150px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh' }} className="container">
                <h1 style={{ fontSize: '3rem', color: 'var(--color-yellow)', marginBottom: '1.5rem' }}>Thank You!</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
                    Your message was received. Our team will get back to you shortly.
                </p>
                <Link to="/" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                    Return Home
                </Link>
            </div>
        </Layout>
    );
};

export default ThankYou;
