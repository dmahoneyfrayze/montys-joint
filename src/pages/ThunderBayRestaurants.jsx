import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import './PillarPage.css';

const ThunderBayRestaurants = () => {
    return (
        <Layout>
            <SEO
                title="Best Restaurants in Thunder Bay (Local Dining Guide) | Monty’s Joint"
                description="Looking for the best restaurants in Thunder Bay? This local dining guide covers where to eat, what to order, and why Monty’s Joint is a top choice for casual dining, wings, burgers, and late nights."
                url="https://montysjoint.com/thunder-bay-restaurants/"
            />

            <div className="pillar-page">
                {/* Hero Section */}
                <header className="pillar-hero" style={{ backgroundImage: 'url(/assets/venue-hero.webp)' }}>
                    <div className="pillar-hero-content">
                        <MotionSection>
                            <h1>Best Restaurants in Thunder Bay</h1>
                            <p>A Local Dining Guide to Casual Eats & Late Nights</p>
                        </MotionSection>
                    </div>
                </header>

                <div className="pillar-content">
                    <MotionSection className="pillar-section">
                        <p className="intro-text">
                            Thunder Bay has a diverse restaurant scene, offering everything from quick lunches to late-night dining and group-friendly venues. Whether you’re visiting the city or deciding where to eat tonight, the best restaurants in Thunder Bay tend to share a few key qualities: consistent food, a welcoming atmosphere, flexible seating, and convenient downtown access.
                        </p>
                        <p>
                            This guide is designed to help diners navigate Thunder Bay restaurants based on real-world needs — casual dining, late hours, comfort food, and social experiences — rather than one-off hype. Among the many options available, Monty’s Joint continues to stand out as a go-to spot for locals looking to combine food, drinks, and atmosphere in one place.
                        </p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>What Makes a Restaurant One of the Best in Thunder Bay?</h2>
                        <p>When people search for restaurants in Thunder Bay, they’re usually looking for more than just a menu. The most popular local restaurants tend to offer:</p>

                        <ul className="pillar-features-list">
                            <li className="pillar-feature-item">
                                <strong>Casual Atmosphere</strong>
                                An approachable dining environment that feels welcoming.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Comfort Menu</strong>
                                Menus packed with crowd favourites like burgers and wings.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Late-Night Hours</strong>
                                Kitchens that stay open late for food and drinks.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Group Seating</strong>
                                Flexible layouts for birthdays and social nights.
                            </li>
                            <li className="pillar-feature-item">
                                <strong>Central Location</strong>
                                Easy access in downtown with nearby parking.
                            </li>
                        </ul>

                        <p>Monty’s Joint checks these boxes by focusing on consistency, atmosphere, and flexibility — whether you’re stopping in for dinner, drinks, or an evening out.</p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Why Monty’s Joint Is a Local Favourite</h2>
                        <p>Monty’s Joint is best known in Thunder Bay for casual dining that works for almost any occasion. Guests regularly choose Monty’s for:</p>
                        <ul className="pillar-list">
                            <li>Wings, burgers, nachos, and poutine</li>
                            <li>Relaxed, social dining without fine-dining pressure</li>
                            <li>Late-night food options</li>
                            <li>Group gatherings, birthdays, and celebrations</li>
                            <li>Billiards, live events, and entertainment nights</li>
                        </ul>
                        <p>Unlike restaurants that focus on a single niche, Monty’s offers a well-rounded experience that appeals to both regulars and first-time visitors.</p>

                        <div className="pillar-cta-block">
                            <div className="pillar-cta-title">Ready to Eat?</div>
                            <div className="pillar-links">
                                <Link to="/menu/" className="btn">View Full Menu</Link>
                                <Link to="/reservations/" className="btn btn-outline">Reserve a Table</Link>
                            </div>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Location, Hours & Visiting Information</h2>
                        <p>Monty’s Joint is located in downtown Thunder Bay, making it easy to access for both locals and visitors.</p>

                        <div className="pillar-feature-item" style={{ maxWidth: '600px' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Status:</strong> Open now (based on today’s hours)</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> Downtown Thunder Bay</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Parking:</strong> Convenient nearby parking available</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Reservations:</strong> Accepted for dining and groups</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Walk-ins:</strong> Always welcome</li>
                            </ul>
                        </div>

                        <p style={{ marginTop: '1.5rem' }}>For diners searching “restaurants thunder bay open now”, clear hours and a central location are often deciding factors.</p>
                        <p>📍 <Link to="/contact/" className="pillar-link">Get directions or contact the restaurant</Link></p>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Explore the Menu & Experience</h2>
                        <p>One of the reasons Monty’s Joint consistently ranks among the best restaurants in Thunder Bay is the variety it offers under one roof.</p>

                        <div className="pillar-features-list">
                            <div className="pillar-feature-item">
                                <strong>Wings & Specials</strong>
                                <Link to="/menu/" className="pillar-link">View Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Burgers</strong>
                                <Link to="/menu/" className="pillar-link">View Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Nachos & Apps</strong>
                                <Link to="/menu/" className="pillar-link">View Menu</Link>
                            </div>
                            <div className="pillar-feature-item">
                                <strong>Late Night</strong>
                                <Link to="/menu/" className="pillar-link">View Menu</Link>
                            </div>
                        </div>

                        <ul className="pillar-list">
                            <li>Promotions & specials: <Link to="/promotions/" className="pillar-link">See Promotions</Link></li>
                            <li>Private events & group bookings: <Link to="/private-events/" className="pillar-link">Event Info</Link></li>
                            <li>Order online: <Link to="/order/" className="pillar-link">Start Order</Link></li>
                        </ul>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Planning a Group Night or Event?</h2>
                        <p>Many diners searching for Thunder Bay restaurants are planning something more than a casual meal. Monty’s Joint regularly hosts:</p>
                        <ul className="pillar-list">
                            <li>Birthday celebrations</li>
                            <li>Work gatherings</li>
                            <li>Private events and parties</li>
                        </ul>
                        <div className="pillar-cta-block">
                            <div className="pillar-cta-title">Hosting a Group?</div>
                            <p style={{ marginBottom: '1rem' }}>We make it easy to host events.</p>
                            <Link to="/private-events/" className="btn">Plan Your Event</Link>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="pillar-faq-grid">
                            <div className="pillar-faq-item">
                                <h3>What are the best restaurants in Thunder Bay for casual dining?</h3>
                                <p>Casual dining is one of the most popular restaurant styles in Thunder Bay. Restaurants like Monty’s Joint are well known for offering approachable food, a relaxed environment, and flexibility for both small groups and larger gatherings.</p>
                            </div>
                            <div className="pillar-faq-item">
                                <h3>Are there restaurants in Thunder Bay open late?</h3>
                                <p>Yes. While some restaurants close earlier, several local favourites offer late-night food and drinks. Monty’s Joint is a common choice for diners looking to eat later in the evening.</p>
                            </div>
                            <div className="pillar-faq-item">
                                <h3>Do Thunder Bay restaurants take reservations?</h3>
                                <p>Many do, especially for groups. Monty’s Joint accepts reservations and also welcomes walk-ins, making it easy to plan ahead or decide last minute.</p>
                            </div>
                            <div className="pillar-faq-item">
                                <h3>Is there parking near downtown Thunder Bay restaurants?</h3>
                                <p>Yes. Downtown Thunder Bay offers nearby parking options, making it accessible for dining, events, and evenings out.</p>
                            </div>
                        </div>
                    </MotionSection>

                    <MotionSection className="pillar-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h2>Still Deciding Where to Eat?</h2>
                        <p>If you’re looking for one of the best restaurants in Thunder Bay for casual dining, comfort food, and atmosphere, Monty’s Joint offers a reliable, local favourite.</p>
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

export default ThunderBayRestaurants;
