import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Tv, Music, Dices, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Monty’s Joint | Gastropub & Local Restaurant In Thunder Bay</title>
                <meta name="description" content="Monty’s Joint is Thunder Bay’s neighbourhood gastropub serving great food, the coldest draught, and a relaxed pub atmosphere. Enjoy dine-in, takeout, catering, and private bookings." />
            </Helmet>
            <Hero />

            {/* Social Proof & Intro */}
            <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <div style={{ background: '#222', display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', border: '1px solid #333' }}>
                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>Google Rating 4.8 ★</span>
                    <span style={{ color: '#666' }}>|</span>
                    <span style={{ color: '#ccc' }}>"Best wings in town!"</span>
                </div>

                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>
                    Eat. Drink. Be Social.
                </h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem' }}>
                    Monty’s Joint is your local spot for good food, cold draught, and a relaxed atmosphere.
                    From comfort classics to our new kids menu, we serve up dishes that hit the table hot.
                </p>

                {/* Menu Highlights */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Guest Favourites</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>Homemade Mozza Sticks</h4>
                            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Fresh made in-house with marinara.</p>
                        </div>
                        <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>The United Burger</h4>
                            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Caribbean spices, grilled red onion, provolone.</p>
                        </div>
                        <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>Classic Poutine</h4>
                            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Golden fries, gravy, curds and mozzarella.</p>
                        </div>
                    </div>
                    <div className="hero-actions">
                        <Link to="/reservations" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                            Book a Table
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="tel:18073430001" style={{ background: '#fff', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Call Now</a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--color-yellow)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Get Directions</a>
            </div>
        </div>

                {/* Reviews Widget */ }
                <div style={{ marginTop: '4rem', padding: '2rem', background: '#fff', borderRadius: '8px' }}>
                    <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '2rem' }}>What People Are Saying</h2>
                    <iframe
                        src="https://go.montysjoint.com/reputation/widgets/review_widget/l8CVOHqx40wEE90Dx7g2"
                        style={{ minWidth: '100%', width: '100%', border: 'none', minHeight: '800px', overflow: 'hidden' }}
                        title="Reviews"
                        scrolling="no"
                    ></iframe>
                    <script type='text/javascript' src='https://go.montysjoint.com/reputation/assets/review-widget.js'></script>
                </div>

                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <img src="/assets/theme-big-flavour.png" alt="Big Flavour, Bigger Impact" style={{ width: '150px', height: 'auto', opacity: 0.8 }} />
                </div>
            </section >
        </Layout >
    );
};

export default Home;
