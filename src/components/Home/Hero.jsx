import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Big Flavour<br />
                    <span className="text-yellow">Bigger Impact</span>
                </h1>
                <p className="hero-subtitle">
                    Great burgers, live music, and the coldest draught in Thunder Bay—book your next night out at Monty’s Joint.
                </p>
                <div className="hero-actions">
                    <Link to="/reservations" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none' }}>Book a Table</Link>
                    <Link to="/menu" className="btn btn-outline">View Menu</Link>
                </div>
                <div style={{ marginTop: '1.5rem', color: '#fff', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-yellow)' }}>★★★★★</span> 4.8 rating from 28+ reviews
                </div>
            </div>
        </section>
    );
};

export default Hero;
