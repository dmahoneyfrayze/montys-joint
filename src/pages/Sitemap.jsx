import React from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const Sitemap = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Specials & Events', path: '/promotions' },
        { name: 'Private Events', path: '/private-events' },
        { name: 'Christmas Party Packages', path: '/christmas-party' },
        { name: 'Blog', path: '/blog' },
        { name: 'Birthday Club', path: '/birthday-club' },
        { name: 'Contact', path: '/contact' },
        { name: 'Reservations', path: '/reservations' },
        { name: 'Order Online', path: '/order' },
        { name: 'Careers', path: '/careers' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
    ];

    return (
        <Layout>
            <SEO
                title="Sitemap"
                description="Sitemap for Monty’s Joint website. Find links to all our pages including Menu, Specials, Private Events, and more."
                url="https://montysjoint.com/sitemap/"
            />
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
                <MotionSection>
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-yellow)', marginBottom: '2rem', textAlign: 'center' }}>Sitemap</h1>
                    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {links.map((link, index) => (
                                <li key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                                    <Link to={link.path} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', display: 'block' }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default Sitemap;
