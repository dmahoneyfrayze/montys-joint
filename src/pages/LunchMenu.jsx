import React, { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import { Clock, Utensils } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import { Link } from 'react-router-dom';
import { trackLunchMenuView, trackNewsletterSignup } from '../utils/tracking';

const LunchMenu = () => {
    // Track page view on mount
    useEffect(() => {
        trackLunchMenuView('direct');
    }, []);

    return (
        <Layout>
            <SEO
                title="Lunch Menu"
                description="Monty's Joint lunch menu coming soon! Stay tuned for delicious midday options in Thunder Bay."
                url="https://montysjoint.com/lunch-menu/"
                image="https://montysjoint.com/assets/montys-interior-food-1.webp"
            />

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("/assets/montys-interior-food-1.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '200px 2rem 120px',
                textAlign: 'center',
                marginBottom: '4rem',
                borderBottom: '3px solid var(--color-yellow)'
            }}>
                <MotionSection>
                    <div style={{ marginBottom: '2rem' }}>
                        <Utensils size={64} style={{ color: 'var(--color-yellow)', margin: '0 auto' }} />
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        color: '#fff',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        LUNCH MENU
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        color: 'var(--color-yellow)',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        COMING SOON
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: '#ccc',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        We're crafting something special for your midday cravings
                    </p>
                </MotionSection>
            </div>

            <div className="container" style={{ paddingBottom: '6rem' }}>
                <MotionSection delay={0.2}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        background: '#1a1a1a',
                        padding: '3rem 2rem',
                        borderRadius: '12px',
                        border: '1px solid #333'
                    }}>
                        <Clock size={48} style={{ color: 'var(--color-yellow)', margin: '0 auto 1.5rem' }} />
                        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            What to Expect
                        </h2>
                        <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Our lunch menu will feature quick, delicious options perfect for your lunch break.
                            From hearty sandwiches to fresh salads and daily specials, we're designing a menu
                            that brings the same bold flavors you love, optimized for midday dining.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '2rem',
                            marginTop: '3rem'
                        }}>
                            <div>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    Quick Service
                                </h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
                                    Perfect for your lunch hour
                                </p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    Fresh Ingredients
                                </h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
                                    Quality you can taste
                                </p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    Daily Specials
                                </h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
                                    Something new every day
                                </p>
                            </div>
                        </div>
                    </div>
                </MotionSection>

                <MotionSection delay={0.4}>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            In the meantime, check out our full menu
                        </h3>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                to="/menu/"
                                style={{
                                    background: 'var(--color-yellow)',
                                    color: '#000',
                                    padding: '1rem 2rem',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                View Full Menu
                            </Link>
                            <Link
                                to="/order/"
                                style={{
                                    background: 'transparent',
                                    color: '#fff',
                                    padding: '1rem 2rem',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    border: '2px solid var(--color-yellow)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'var(--color-yellow)';
                                    e.target.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#fff';
                                }}
                            >
                                Order Online
                            </Link>
                        </div>
                    </div>
                </MotionSection>

                {/* Newsletter Signup */}
                <MotionSection delay={0.6}>
                    <div style={{
                        maxWidth: '600px',
                        margin: '4rem auto 0',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
                        padding: '2.5rem 2rem',
                        borderRadius: '12px',
                        border: '2px solid var(--color-yellow)'
                    }}>
                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                            Be the First to Know
                        </h3>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                            Sign up for our newsletter to get notified when the lunch menu launches
                        </p>
                        <form style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    borderRadius: '4px',
                                    border: '1px solid #333',
                                    background: '#0a0a0a',
                                    color: '#fff',
                                    fontSize: '1rem'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: 'var(--color-yellow)',
                                    color: '#000',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    transition: 'transform 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Notify Me
                            </button>
                        </form>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default LunchMenu;
