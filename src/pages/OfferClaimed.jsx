import React from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const OfferClaimed = () => {
    return (
        <Layout>
            <SEO
                title="Offer Claimed!"
                description="You're all set! Check your messages for your voucher."
                url="https://montysjoint.com/offer-claimed/"
            >
                <meta name="robots" content="noindex" />
            </SEO>

            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#111',
                padding: '4rem 1rem',
                textAlign: 'center'
            }}>
                <MotionSection>
                    <div style={{
                        maxWidth: '600px',
                        width: '100%',
                        background: '#1a1a1a',
                        padding: '3rem 2rem',
                        borderRadius: '16px',
                        border: '1px solid #333'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--color-yellow)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem',
                            fontSize: '2.5rem',
                            color: '#000'
                        }}>
                            ✓
                        </div>

                        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>You're All Set!</h1>
                        <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Check your text messages (and email) for your $10 OFF voucher.
                            <br />
                            Simply show it to your server when you arrive.
                        </p>

                        <div style={{
                            background: '#222',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px dashed #666',
                            marginBottom: '2rem'
                        }}>
                            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>YOUR REDEMPTION CODE</p>
                            <p style={{ color: 'var(--color-yellow)', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>SENT VIA SMS</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="https://maps.google.com/?q=Monty's+Joint+Thunder+Bay"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    padding: '1rem',
                                    background: 'var(--color-yellow)',
                                    color: '#000',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Get Directions to Monty's
                            </a>

                            <Link
                                to="/reservations"
                                style={{
                                    display: 'block',
                                    padding: '1rem',
                                    background: 'transparent',
                                    color: '#fff',
                                    border: '1px solid #fff',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                }}
                            >
                                Reserve a Table
                            </Link>
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                            <p style={{ color: '#888', marginBottom: '1rem' }}>Want exclusive updates on live music?</p>
                            <Link
                                to="/birthday-club"
                                style={{ color: 'var(--color-yellow)', textDecoration: 'underline' }}
                            >
                                Join our VIP Club
                            </Link>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default OfferClaimed;
