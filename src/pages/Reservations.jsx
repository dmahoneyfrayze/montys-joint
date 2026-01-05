import React, { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { trackBookingStart, trackCallClick } from '../utils/tracking';

const Reservations = () => {
    useEffect(() => {
        // Track booking start when user lands on reservations page
        trackBookingStart('direct_page_visit');
    }, []);

    return (
        <Layout>
            <SEO
                title="Book a Table"
                description="Reserve your table at Monty’s Joint. For groups larger than 8, please call us directly."
                url="https://montysjoint.com/reservations/"
                image="https://montysjoint.com/assets/montys-interior-live-music.webp"
            />
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-yellow)' }}>RESERVATIONS</h1>
                    <p style={{ fontSize: '1.25rem', color: '#ccc', marginBottom: '3rem' }}>
                        To ensure the best experience and guarantee your table, please call us directly to book your reservation.
                    </p>

                    <a href="tel:18073430001" className="btn btn-primary" style={{
                        background: 'var(--color-yellow)',
                        color: '#000',
                        padding: '1.5rem 3rem',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        display: 'inline-block',
                        textDecoration: 'none'
                    }} onClick={() => trackCallClick('reservations_page')}>
                        Call 1 (807) 343-0001
                    </a>

                    <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid #333', borderRadius: '12px', background: '#1a1a1a' }}>
                        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Walk-ins Welcome!</h2>
                        <p style={{ color: '#ccc' }}>
                            We always keep space for walk-in guests, but reservations are recommended for Friday nights and during live sports events.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Reservations;
