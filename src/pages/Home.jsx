import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import MotionSection from '../components/UI/MotionSection';

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
                <MotionSection>
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
                </MotionSection>

                {/* Menu Highlights */}
                <div style={{ marginBottom: '4rem' }}>
                    <MotionSection delay={0.2}>
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
                        <div className="hero-actions" style={{ marginTop: '2rem' }}>
                            <Link to="/reservations" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                                Book a Table
                            </Link>
                        </div>
                    </MotionSection>
                </div>
                {/* Mark Potvin Feature */}
                <div style={{ marginBottom: '4rem' }}>
                    <MotionSection delay={0.25}>
                        <div style={{
                            background: '#1a1a1a',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid #333',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            alignItems: 'center'
                        }}>
                            <div style={{ height: '100%', minHeight: '300px' }}>
                                <img
                                    src="/assets/mark-potvin.jpg"
                                    alt="The Mark Potvin Trio"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem', textAlign: 'left' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-yellow)' }}>The Mark Potvin Trio</h2>
                                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', fontWeight: 'normal' }}>Vintage Jazz and Blues</h3>

                                <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    Join us for an evening of vintage jazz and blues for your listening pleasure.
                                </p>

                                <div style={{ display: 'inline-block', background: '#333', padding: '0.75rem 1.5rem', borderRadius: '50px' }}>
                                    <p style={{ margin: 0, fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}>
                                        FRIDAYS • 6-9 PM • NO COVER
                                    </p>
                                </div>
                            </div>
                        </div>
                    </MotionSection>
                </div>

                {/* Private Events Mini-Landing */}
                <div id="private-events" style={{ marginBottom: '4rem' }}>
                    <MotionSection delay={0.25}>
                        <div style={{
                            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/private-events.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '4rem 2rem',
                            borderRadius: '16px',
                            border: '1px solid #333',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem' }}>HOST YOUR NEXT EVENT</h2>
                            <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
                                From birthday bashes to corporate gatherings, our private room is the perfect spot.
                                Custom menus, dedicated service, and a vibe you won't find anywhere else.
                            </p>
                            <a href="https://go.montysjoint.com/widget/form/EEy6e5HE9WudRN8PzSJC" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{
                                background: 'var(--color-yellow)',
                                color: '#000',
                                border: 'none',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                display: 'inline-block'
                            }}>
                                Inquire Now
                            </a>
                        </div>
                    </MotionSection>
                </div>
                <MotionSection delay={0.3}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                        <a href="tel:18073430001" style={{ background: '#fff', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Call Now</a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--color-yellow)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Get Directions</a>
                    </div>
                </MotionSection>

                {/* Reviews Widget */}
                <MotionSection delay={0.4}>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px' }}>
                        <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '2rem' }}>What People Are Saying</h2>
                        <ReviewWidget />
                    </div>
                </MotionSection>

                <MotionSection delay={0.5}>
                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                        <img src="/assets/theme-big-flavour.png" alt="Big Flavour, Bigger Impact" loading="lazy" style={{ width: '150px', height: 'auto', opacity: 0.8 }} />
                    </div>
                </MotionSection>
            </section>
        </Layout>
    );
};

const ReviewWidget = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const widgetRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (widgetRef.current) {
            observer.observe(widgetRef.current);
        }

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (isVisible) {
            // Load script for mobile widget
            const script = document.createElement('script');
            script.src = 'https://go.montysjoint.com/reputation/assets/review-widget.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isVisible]);

    return (
        <div ref={widgetRef} style={{ minHeight: '800px' }}>
            {isVisible ? (
                <>
                    {/* Desktop Widget */}
                    <div className="desktop-only">
                        <iframe
                            src="https://go.montysjoint.com/reputation/widgets/review_widget/l8CVOHqx40wEE90Dx7g2"
                            style={{ minWidth: '100%', width: '100%', border: 'none', minHeight: '800px', overflow: 'hidden' }}
                            title="Reviews Desktop"
                            scrolling="no"
                        ></iframe>
                    </div>

                    {/* Mobile Widget */}
                    <div className="mobile-only">
                        <iframe
                            className="lc_reviews_widget"
                            src="https://go.montysjoint.com/reputation/widgets/review_widget/l8CVOHqx40wEE90Dx7g2?widgetId=692d418b97baf0403c3a7758"
                            frameBorder="0"
                            scrolling="no"
                            style={{ minWidth: '100%', width: '100%', minHeight: '800px' }}
                            title="Reviews Mobile"
                        ></iframe>
                    </div>

                    <style>{`
                        .desktop-only { display: block; }
                        .mobile-only { display: none; }
                        
                        @media (max-width: 768px) {
                            .desktop-only { display: none; }
                            .mobile-only { display: block; }
                        }
                    `}</style>
                </>
            ) : (
                <div style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>Loading reviews...</div>
            )}
        </div>
    );
};

export default Home;
