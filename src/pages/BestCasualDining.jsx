import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import './PillarPage.css';

const BestCasualDining = () => {
    return (
        <Layout>
            <SEO
                title="Best Casual Dining in Thunder Bay | Monty’s Joint"
                description="Monty’s Joint is one of the best casual dining restaurants in Thunder Bay — known for wings, burgers, late nights, and a relaxed atmosphere. View the menu or reserve a table."
                url="https://montysjoint.com/best-casual-dining-thunder-bay/"
            />

            <div className="pillar-page">
                {/* Hero Section */}
                <header className="pillar-hero" style={{ backgroundImage: 'url(/assets/montys-interior-story.webp)' }}>
                    <div className="pillar-hero-content">
                        <MotionSection>
                            <h1>Best Casual Dining in Thunder Bay</h1>
                            <p>Relaxed Atmosphere, Great Food, and Late Nights.</p>
                        </MotionSection>
                    </div>
                </header>

                <div className="pillar-content">
                    <MotionSection className="pillar-section">
                        <p className="intro-text">
                            Casual dining is one of the most popular ways to eat in Thunder Bay. It’s about enjoying good food in a relaxed environment — without the formality of fine dining or the rush of fast food.
                        </p>
                        <p>
                            For locals and visitors alike, Monty’s Joint has become a trusted option for casual dining thanks to its comfort-focused menu, welcoming atmosphere, and flexible seating.
                        </p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Why Monty’s Joint Is Known for Casual Dining</h2>
                        <p>Monty’s Joint offers a casual dining experience that works for a wide range of occasions:</p>

                        <ul className="pillar-features-list">
                            <li className="pillar-feature-item">
                                <strong>Comfort Staples</strong>
                                Wings, burgers, nachos, and poutine made right.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Social Vibe</strong>
                                A relaxed atmosphere perfect for hanging out.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Open Late</strong>
                                Food and drinks available when others are closed.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Group Friendly</strong>
                                Seating that accommodates groups easily.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Downtown</strong>
                                Located centrally in the heart of Thunder Bay.
                            </li>
                        </ul>

                        <p>It’s a restaurant where you can come as you are — whether you’re grabbing dinner, meeting friends, or staying late.</p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/menu/" className="btn">View Our Menu</Link>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Trusted by Locals</h2>
                        <p>Monty’s Joint is a familiar name among Thunder Bay restaurants, especially for casual dining and social nights out.</p>
                        <ul className="pillar-list">
                            <li>Highly rated on Google</li>
                            <li>Popular with regulars and returning guests</li>
                            <li>Known for consistency and atmosphere</li>
                        </ul>
                        <p>That combination is why many diners consider it one of the best casual dining restaurants in Thunder Bay.</p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Quick Visit Information</h2>

                        <div className="pillar-feature-item" style={{ maxWidth: '600px' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Status:</strong> Open now (based on today’s hours)</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> Downtown Thunder Bay</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Parking:</strong> Nearby parking available</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Reservations:</strong> Accepted</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Walk-ins:</strong> Welcome</li>
                            </ul>
                        </div>

                        <p style={{ marginTop: '1.5rem' }}>📍 <Link to="/contact/" className="pillar-link">Directions & contact</Link></p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Menu Highlights</h2>
                        <p>Casual dining at Monty’s Joint means food that’s easy to enjoy and made to share.</p>

                        <div className="pillar-features-list">
                            <div className="pillar-feature-item">
                                <strong>Wings</strong>
                                <Link to="/menu/" className="pillar-link">See Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Burgers</strong>
                                <Link to="/menu/" className="pillar-link">See Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Nachos</strong>
                                <Link to="/menu/" className="pillar-link">See Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Late Night</strong>
                                <Link to="/menu/" className="pillar-link">See Menu</Link>
                            </div>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Group Dining & Casual Events</h2>
                        <p>Looking for a casual place to host a group night, birthday, or gathering?</p>
                        <p>Monty’s Joint regularly hosts group dining and private events in a relaxed setting.</p>
                        <div className="pillar-cta-block">
                            <div className="pillar-cta-title">Plan an Event</div>
                            <Link to="/private-events/" className="btn">Learn More</Link>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Casual Dining FAQ</h2>
                        <div className="pillar-faq-grid">
                            <div className="pillar-faq-item">
                                <h3>What is casual dining?</h3>
                                <p>Casual dining refers to restaurants that offer quality food in a relaxed, informal atmosphere without strict dress codes or fine-dining formality.</p>
                            </div>
                            <div className="pillar-faq-item">
                                <h3>Is Monty’s Joint good for groups?</h3>
                                <p>Yes. Monty’s Joint is a popular choice for group dining, celebrations, and casual events in Thunder Bay.</p>
                            </div>
                            <div className="pillar-faq-item">
                                <h3>Do I need a reservation?</h3>
                                <p>Reservations are recommended for groups, but walk-ins are always welcome.</p>
                            </div>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h2>Looking for Casual Dining Tonight?</h2>
                        <p>If you want a comfortable place to eat, drink, and spend time with friends, Monty’s Joint offers one of the best casual dining experiences in Thunder Bay.</p>
                        <div className="pillar-links" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                            <Link to="/menu/" className="btn">View Menu</Link>
                            <Link to="/reservations/" className="btn btn-outline">Reserve Table</Link>
                        </div>
                    </MotionSection>
                </div>
            </div>
        </Layout>
    );
};

export default BestCasualDining;
