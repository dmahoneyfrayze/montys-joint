import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import MotionSection from '../components/UI/MotionSection';
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Thunder Bay Gastropub | Monty’s Joint</title>
                <meta name="description" content="Monty’s Joint is Thunder Bay’s neighbourhood gastropub serving great food, the coldest draught, and a relaxed pub atmosphere. Enjoy dine-in, takeout, catering, and private bookings." />
                <link rel="canonical" href="https://montysjoint.com/" />
                <meta property="og:title" content="Thunder Bay Gastropub | Monty’s Joint" />
                <meta property="og:description" content="Monty’s Joint is Thunder Bay’s neighbourhood gastropub serving great food, the coldest draught, and a relaxed pub atmosphere." />
                <meta property="og:image" content="https://montysjoint.com/assets/logo-main.png" />
                <meta property="og:url" content="https://montysjoint.com/" />
                <meta property="og:type" content="website" />
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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left', marginBottom: '4rem' }}>
                        <div>
                            <img src="/assets/montys-exterior.webp" alt="Monty's Joint Exterior" style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>
                                The Story Behind Monty’s Joint
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Monty’s Joint is your local spot for good food, cold draught, and a relaxed atmosphere. From comfort classics to our new kids menu, we serve up dishes that hit the table hot. We believe in great food, cold beer, live music, and a place to feel at home. Come join us and see what makes us Thunder Bay's favourite neighbourhood gastropub.
                            </p>
                            <Link to="/blog/the-story-behind-montys-joint" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '0.8rem 1.5rem', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                                Read Full Story
                            </Link>
                        </div>
                    </div>
                </MotionSection>

                {/* Menu Highlights */}
                <div style={{ marginBottom: '4rem' }}>
                    <MotionSection delay={0.2}>
                        <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Guest Favourites</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                <img src="/assets/montys-cigars.jpg" alt="Monty's Cigars" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                                <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>Monty's Cigars</h4>
                                <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>Premium selection available.</p>
                                <Link to="/menu" style={{ color: 'var(--color-yellow)', textDecoration: 'underline' }}>See Full Menu</Link>
                            </div>
                            <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                <img src="/assets/buttermilk-chicken.jpg" alt="Buttermilk Chicken Sandwich" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                                <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>Buttermilk Chicken Sandwich</h4>
                                <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>Crispy buttermilk chicken breast.</p>
                                <Link to="/menu" style={{ color: 'var(--color-yellow)', textDecoration: 'underline' }}>See Full Menu</Link>
                            </div>
                            <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                <img src="/assets/gallery-2.webp" alt="Classic Poutine" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                                <h4 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>Classic Poutine</h4>
                                <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>Golden fries, gravy, curds and mozzarella.</p>
                                <Link to="/menu" style={{ color: 'var(--color-yellow)', textDecoration: 'underline' }}>See Full Menu</Link>
                            </div>
                        </div>
                        <div className="hero-actions" style={{ marginTop: '2rem' }}>
                            <Link to="/reservations" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                                Book a Table
                            </Link>
                        </div>
                    </MotionSection>
                </div>

                {/* Photo Gallery */}
                <div style={{ marginBottom: '4rem' }}>
                    <MotionSection delay={0.2}>
                        <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Gallery</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                            <img src="/assets/montys-interior-live-music.webp" alt="Live Music at Monty's" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src="/assets/montys-interior-venue-2.webp" alt="Monty's Venue Interior" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src="/assets/montys-interior-live-sports.webp" alt="Live Sports at Monty's" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src="/assets/montys-interior-gallery-6.webp" alt="Monty's Atmosphere" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src="/assets/montys-interior-food-3.webp" alt="Dining at Monty's" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src="/assets/montys-interior-food-1.webp" alt="Monty's Interior Detail" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                    </MotionSection>
                </div>

                {/* Online Ordering Badges */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <MotionSection delay={0.2}>
                        <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Order Online</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <a href="https://www.ubereats.com/ca/store/montys-joint-513-victoria-e/w2fMzhYDW7qzrF_d4y3GSw" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#06C167', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>Uber Eats</a>
                            <a href="https://www.skipthedishes.com/montys-joint-513" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#D21243', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>SkipTheDishes</a>
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
                            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/private-events-landing.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '4rem 2rem',
                            borderRadius: '16px',
                            border: '1px solid #333',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem' }}>HOST YOUR NEXT EVENT</h2>
                            <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
                                From birthday bashes to corporate gatherings, our venue is the perfect spot.
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
                    <div className="review-widget-container">
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

    return (
        <div ref={widgetRef} style={{ minHeight: '800px' }}>
            {isVisible ? (
                <iframe
                    src="https://go.montysjoint.com/reputation/widgets/review_widget/l8CVOHqx40wEE90Dx7g2"
                    style={{ minWidth: '100%', width: '100%', border: 'none', minHeight: '800px', overflow: 'hidden' }}
                    title="Reviews"
                    scrolling="no"
                ></iframe>
            ) : (
                <div style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>Loading reviews...</div>
            )}
        </div>
    );
};

export default Home;
