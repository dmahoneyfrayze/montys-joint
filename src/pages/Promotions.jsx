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

                {/* New Specials */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-yellow)' }}>Chef's Specials</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Gnocchi Al Sugo De Peperoni</h3>
                                <span style={{ color: 'var(--color-yellow)', fontSize: '1.25rem', fontWeight: 'bold' }}>$17.00</span>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                                Gnocchi with rose red pepper sauce. Red peppers and Italian sausage. With some cayenne and parmesan.
                            </p>
                        </div>

                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Broilers</h3>
                                <span style={{ color: 'var(--color-yellow)', fontSize: '1.25rem', fontWeight: 'bold' }}>$15.00</span>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                                Sausage meatballs stuffed with spinach and goat cheese. Wrapped in bacon and broiled. Served over marinara and bread for dipping.
                            </p>
                        </div>

                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Butternut Squash Ravioli</h3>
                                <span style={{ color: 'var(--color-yellow)', fontSize: '1.25rem', fontWeight: 'bold' }}>$18.00</span>
                            </div>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                                Squash and ricotta filled Ravioli. On a bed of sweet potato puree. Drizzled with maple brown butter sauce topped with crispy sage and gremalata.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Friday Band Event */}
                <div style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-yellow)' }}>The Mark Potvin Trio</h2>
                        <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>Vintage Jazz and Blues</h3>
                        
                        <div style={{ display: 'inline-block', background: '#333', padding: '1rem 2rem', borderRadius: '50px', marginBottom: '2rem' }}>
                            <p style={{ margin: 0, fontSize: '1.2rem', color: '#fff', fontWeight: 'bold' }}>
                                FRIDAYS • 6-9 PM • NO COVER
                            </p>
                        </div>

                        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
                            Join us for an evening of vintage jazz and blues for your listening pleasure.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Promotions;
