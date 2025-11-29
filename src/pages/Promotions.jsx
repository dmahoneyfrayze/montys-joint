import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Promotions = () => {
    return (
        <Layout>
            <Helmet>
                <title>Promotions & Specials | Monty’s Joint</title>
                <meta name="description" content="Check out the latest specials and promotions at Monty’s Joint. Great deals on food and drinks in Thunder Bay." />
            </Helmet>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-yellow)' }}>Specials & Promotions</h1>

                {/* Featured Promotion */}
                <div style={{ background: 'var(--color-yellow)', color: '#000', padding: '3rem 2rem', borderRadius: '8px', textAlign: 'center', marginBottom: '4rem', backgroundImage: 'url(/assets/checker-yellow.png)', backgroundSize: '100px', backgroundBlendMode: 'soft-light' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Holiday Classic Tournament</h2>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Northwood Hockey League</h3>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', fontWeight: '500' }}>
                        Welcome players and families! We are located right next door to the arena.
                        Sign up below to receive a <strong>10% discount</strong> on all food orders during the tournament.
                    </p>
                    <a
                        href="https://go.montysjoint.com/widget/form/il02Xf37ptnFTbR5pJ2z"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: '#000',
                            color: 'var(--color-yellow)',
                            padding: '1rem 2rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}
                    >
                        Get Your 10% Discount
                    </a>
                </div>

                {/* Novemburger Promotion */}
                <div style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/assets/novemburger.jpg" alt="Novemburger - The Jam Session" style={{ width: '100%', maxWidth: '800px', height: 'auto' }} />
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>Novemburger: The Jam Session</h2>
                        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 1rem auto' }}>
                            Try our signature creation for this year's Novemburger! A perfect harmony of flavours that will rock your tastebuds.
                        </p>
                        <p style={{ color: 'var(--color-yellow)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Available for a Limited Time Only!</p>
                        <Link to="/order" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
                            Order it before it's too late &rarr;
                        </Link>
                    </div>
                </div>

                <div style={{ textAlign: 'center', padding: '4rem', background: '#1a1a1a', borderRadius: '8px' }}>
                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Weekly Features</h2>
                    <p style={{ color: '#ccc', fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Stop by to see what's new on the board! We rotate our specials regularly to bring you fresh flavours.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
                            <h3 style={{ color: 'var(--color-yellow)' }}>Happy Hour</h3>
                            <p style={{ color: '#ccc' }}>Join us daily from 2pm - 5pm for drink specials and half-price apps.</p>
                        </div>
                        <div style={{ border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
                            <h3 style={{ color: 'var(--color-yellow)' }}>Wing Night</h3>
                            <p style={{ color: '#ccc' }}>Thursdays are for wings! Special pricing on our famous wings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Promotions;
