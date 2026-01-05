import React from 'react';
import { Link } from 'react-router-dom';
import { trackBookingStart } from '../../utils/tracking';
import { getOptimizedImage } from '../../utils/rss';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <img
                src="/.netlify/images?url=%2Fassets%2Fvenue-hero.webp&w=800&q=80"
                srcSet="/.netlify/images?url=%2Fassets%2Fvenue-hero.webp&w=800&q=80 800w, /.netlify/images?url=%2Fassets%2Fvenue-hero.webp&w=1600&q=80 1600w"
                sizes="100vw"
                alt="Monty's Joint Venue"
                className="hero-bg-img"
                fetchPriority="high"
            />
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Thunder Bay’s<br />
                    <span className="text-yellow">Neighbourhood Gastropub</span>
                </h1>
                <p className="hero-subtitle">
                    Great food, cold beer, live music, and a place to feel at home.
                </p>
                <div className="hero-actions">
                    <Link to="/menu/" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none' }}>View Menu</Link>
                    <a href="tel:18073430001" className="btn btn-outline" onClick={() => trackBookingStart('hero_cta')}>Book a Table</a>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <Link to="/offer/" className="btn" style={{
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        fontWeight: 'bold',
                        padding: '0.8rem 2rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                    }}>
                        Get $10 OFF Your First Visit
                    </Link>
                </div>
                <div style={{ marginTop: '1.5rem', color: '#fff', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-yellow)' }}>★★★★★</span> 4.8 rating from 28+ reviews
                </div>
            </div>
        </section>
    );
};

export default Hero;
