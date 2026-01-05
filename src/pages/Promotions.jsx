import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import { getOptimizedImage } from '../utils/rss';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} style={{ margin: '0 0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-yellow)' }}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div style={{ textAlign: 'center', padding: '2rem', background: '#1a1a1a', marginBottom: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Next Big Event Starts In:</h3>
            {timerComponents.length ? timerComponents : <span>Event Started!</span>}
        </div>
    );
};

const Promotions = () => {
    const recurringSpecials = [
        { title: 'Live Music Friday', day: 'Friday', time: '6pm - 9pm', image: '/assets/montys-interior-gallery-6.webp', cta: '/reservations/' },
        { title: 'Hockey Night', day: 'Game Nights', time: 'Live', image: '/assets/montys-interior-live-sports.webp', cta: '/reservations/' }
    ];

    const upcomingEvents = [];

    const pastSpecials = [
        {
            title: 'Holiday Classic Tournament',
            date: 'Dec 5 - Dec 8',
            description: 'Northwood Hockey League. Welcome players and families!',
            image: '/assets/montys-interior-live-sports.webp'
        },
        {
            title: 'Novemburger: The Jam Session',
            date: 'November 2025',
            description: "Try our signature creation for this year's Novemburger! A perfect harmony of flavours that will rock your tastebuds.",
            image: '/assets/novemburger.jpg'
        }
    ];

    return (
        <Layout>
            <SEO
                title="Specials & Events"
                description="Check out our recurring specials, upcoming events, and past celebrations at Monty’s Joint."
                url="https://montysjoint.com/promotions/"
                image="https://montysjoint.com/assets/gallery-6.webp"
            >
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Event",
                            "name": "Weekly Specials & Live Music",
                            "location": {
                                "@type": "Place",
                                "name": "Monty's Joint",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "513 Victoria Ave E",
                                    "addressLocality": "Thunder Bay",
                                    "addressRegion": "ON",
                                    "postalCode": "P7C 1A8",
                                    "addressCountry": "CA"
                                }
                            },
                            "image": "https://montysjoint.com/assets/gallery-6.webp",
                            "description": "Join us for weekly specials and live music events at Monty's Joint."
                        }
                    `}
                </script>
            </SEO>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-yellow)' }}>Specials & Events</h1>

                {/* Countdown Timer */}
                <CountdownTimer targetDate="2025-12-31T00:00:00" />



                {/* Recurring Specials Grid */}
                <MotionSection>
                    <h2 style={{ color: '#fff', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Weekly Specials</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {recurringSpecials.map((special, index) => (
                            <div key={index} style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                                <img src={getOptimizedImage(special.image, 600)} alt={special.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} width="600" height="200" loading="lazy" />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>{special.title}</h3>
                                    <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.5rem' }}>{special.day} • {special.time}</p>
                                    {special.description && <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>{special.description}</p>}
                                    {special.cta && (
                                        <Link to={special.cta} className="btn-outline" style={{ display: 'inline-block', marginTop: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                            Learn More
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionSection>

                {/* Events Calendar */}
                <MotionSection delay={0.2}>
                    <h2 style={{ color: '#fff', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Upcoming Events</h2>
                    {upcomingEvents.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
                            {upcomingEvents.map((event, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ minWidth: '100px', textAlign: 'center', borderRight: '1px solid #333', paddingRight: '1rem' }}>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-yellow)' }}>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{event.time}</div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ color: '#fff', margin: 0, fontSize: '1.2rem' }}>{event.artist}</h3>
                                        <p style={{ color: '#ccc', margin: '0.25rem 0 0 0' }}>{event.description}</p>
                                    </div>
                                    {event.isExternal ? (
                                        <a href={event.cta} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                                            Get Discount
                                        </a>
                                    ) : (
                                        <Link to={event.cta} className="btn" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                                            Book Now
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem', background: '#1a1a1a', borderRadius: '8px', border: '1px solid #333', marginBottom: '4rem', color: '#ccc' }}>
                            <p style={{ fontSize: '1.2rem' }}>Coming Soon</p>
                        </div>
                    )}
                </MotionSection>

                {/* Archive (Masonry Grid) */}
                <MotionSection delay={0.4}>
                    <h2 style={{ color: '#fff', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Past Events Archive</h2>
                    {pastSpecials.length > 0 ? (
                        <div style={{ columnCount: 3, columnGap: '1rem' }}>
                            {pastSpecials.map((special, index) => (
                                <div key={index} style={{ breakInside: 'avoid', marginBottom: '1rem', background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                                    <img src={getOptimizedImage(special.image, 500)} alt={special.title} style={{ width: '100%', display: 'block' }} width="500" height="300" loading="lazy" />
                                    <div style={{ padding: '1rem' }}>
                                        <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{special.title}</h3>
                                        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{special.date}</p>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{special.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem', background: '#1a1a1a', borderRadius: '8px', border: '1px solid #333', color: '#ccc' }}>
                            <p style={{ fontSize: '1.2rem' }}>Coming Soon</p>
                        </div>
                    )}
                </MotionSection>
                <style>{`
                        @media (max-width: 768px) {
                            div[style*="columnCount"] {
                                column-count: 1 !important;
                            }
                        }
                    `}</style>

            </div>
        </Layout >
    );
};

export default Promotions;
