import React, { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import { fetchBlogPosts, getOptimizedImage } from '../utils/rss';
import { Check, Star, Users, Music, Wine, Mic, MapPin, Award, ChevronDown, ChevronUp } from 'lucide-react';

const DietaryBadge = ({ type }) => {
    const colors = {
        GF: '#eab308', // Yellow
        V: '#22c55e',  // Green
        VE: '#16a34a', // Dark Green
        DF: '#3b82f6'  // Blue
    };
    return (
        <span style={{
            background: colors[type] || '#666',
            color: '#000',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            marginLeft: '4px'
        }}>
            {type}
        </span>
    );
};

const PrivateEvents = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://go.montysjoint.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const packages = [
        {
            title: 'Christmas Party Packages',
            price: 'From $35/pp',
            perPerson: true,
            popular: true,
            idealFor: 'Holiday Celebrations',
            features: [
                'Festive Menus',
                'Drink Packages',
                'Private & Semi-Private Options',
                'Full Venue Buyouts Available'
            ],
            link: '/christmas-party',
            ctaText: 'View Packages'
        },
        {
            title: 'Private Dinner / Corporate',
            price: 'Custom Quote',
            perPerson: false,
            popular: true,
            idealFor: '20-80 guests',
            features: [
                'Custom Plated or Buffet Menu',
                'Reserved Section or Full Buyout',
                'Dedicated Service Staff',
                'Perfect for Staff Parties & Meetings'
            ]
        },
        {
            title: 'Kids Birthday Bash',
            price: 'Inquire for Details',
            perPerson: false,
            idealFor: 'Kids & Families',
            features: [
                'Kid-Friendly Dinner at Monty’s',
                'Access to Armani’s After Dinner',
                'Bouncy Castles & Live DJ',
                'Hassle-Free Party Planning'
            ]
        },
        {
            title: 'The Full Night Out',
            price: 'Inquire for Details',
            perPerson: false,
            idealFor: 'Celebrations',
            features: [
                'Dinner & Drinks at Monty’s',
                'Transition to Armani’s Nightclub',
                'VIP Entry & Dance Floor Access',
                'The Ultimate Celebration Package'
            ]
        }
    ];

    const testimonials = [
        {
            quote: "We hosted our staff Christmas party here and it was flawless. The food was hot, the drinks were cold, and the transition to the nightclub was a huge hit!",
            author: "Sarah J., Corporate Event"
        },
        {
            quote: "Best kids birthday ever. The bouncy castles at Armani's kept them entertained for hours while the adults enjoyed dinner.",
            author: "Mike T., Parent"
        },
        {
            quote: "Monty's made planning our team lunch so easy. Great service and a really cool vibe.",
            author: "Jessica L., Team Lead"
        }
    ];

    const faqs = [
        {
            question: "Can you accommodate dietary restrictions?",
            answer: "Absolutely. Our kitchen is experienced in handling gluten-free, vegetarian, vegan, and allergy-specific requests. Just let us know in advance."
        },
        {
            question: "Can we bring our own cake?",
            answer: "Yes! You are welcome to bring a cake for your celebration. We can store it for you until it's time to serve."
        },
        {
            question: "Is there a minimum spend?",
            answer: "Minimum spends vary based on the date, time, and group size. Please fill out the inquiry form for a specific quote."
        },
        {
            question: "Is A/V equipment included?",
            answer: "Yes, we have a large HD TV with HDMI input and an independent sound system available for your use at no extra charge."
        }
    ];



    return (
        <Layout>
            <SEO
                title="Private Events, Christmas Parties & Corporate Functions"
                description="Host your Christmas party, corporate event, or birthday bash at Monty’s Joint. Full venue buyouts available in Thunder Bay."
                url="https://montysjoint.com/private-events/"
                image="https://montysjoint.com/assets/montys-interior-live-music.webp"
            >
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "EventVenue",
                            "name": "Monty's Joint Events",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "513 Victoria Ave E",
                                "addressLocality": "Thunder Bay",
                                "addressRegion": "ON",
                                "postalCode": "P7C 1A8",
                                "addressCountry": "CA"
                            },
                            "telephone": "+18073430001",
                            "image": "https://montysjoint.com/assets/montys-interior-live-music.webp",
                            "description": "The perfect venue for Christmas parties, corporate events, and birthday celebrations in Thunder Bay."
                        }
                    `}
                </script>
            </SEO>

            {/* Hero Section */}
            <div style={{
                background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${getOptimizedImage('/assets/montys-interior-live-music.webp', 1920)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 2rem 100px',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem' }}>Host Effortless Private Events at Monty’s Joint</h1>
                <p style={{ fontSize: '1.5rem', color: '#ccc', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                    From corporate Christmas parties to kids’ birthdays, we handle food, venue, and entertainment so you can actually enjoy the night.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <a href="#inquiry-form" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none' }}>
                        Check Availability
                    </a>
                    <a href="#packages" className="btn-outline" style={{ border: '2px solid #fff', color: '#fff', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none' }}>
                        View Event Packages
                    </a>
                </div>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', color: '#aaa', fontSize: '0.9rem', borderTop: '1px solid #444', paddingTop: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star size={16} color="var(--color-yellow)" /> Perfect for: Corporate Parties</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Award size={16} color="var(--color-yellow)" /> Birthdays</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={16} color="var(--color-yellow)" /> Team Events</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Wine size={16} color="var(--color-yellow)" /> Holiday Parties</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Up to 378 Guests</span>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Intro & Features */}
                <MotionSection>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-yellow)', marginBottom: '1.5rem' }}>Why Choose Monty's?</h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1rem', lineHeight: '1.6' }}>
                                Located in the heart of downtown Thunder Bay, Monty's Joint offers a versatile venue for any occasion. Whether you're planning a corporate event, a staff Christmas party, or a milestone birthday, we provide the perfect backdrop.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Our venues can accommodate groups of all sizes: <strong>Monty's (up to 120)</strong> and <strong>Armani's (up to 378)</strong>. We offer flexible layouts, full A/V capabilities, and a dedicated team to ensure everything runs smoothly.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '50%' }}><Wine size={20} color="var(--color-yellow)" /></div>
                                    <span>Multiple Bars & Fully Licensed</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '50%' }}><Music size={20} color="var(--color-yellow)" /></div>
                                    <span>2 Distinct Vibes (Monty's & Armani's)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '50%' }}><Mic size={20} color="var(--color-yellow)" /></div>
                                    <span>Stage for Presentations & Live Music</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '50%' }}><MapPin size={20} color="var(--color-yellow)" /></div>
                                    <span>Downtown Thunder Bay Location</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={getOptimizedImage("/assets/montys-interior-venue-2.webp", 800)} alt="Monty's Joint Interior" style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} width="800" height="600" loading="lazy" />
                        </div>
                    </div>
                </MotionSection>

                {/* Packages */}
                <div id="packages">
                    <MotionSection delay={0.2}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>Event Packages</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                            {packages.map((pkg, index) => (
                                <div key={index} style={{
                                    background: '#1a1a1a',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    border: pkg.popular ? '2px solid var(--color-yellow)' : '1px solid #333',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}>
                                    {pkg.popular && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'var(--color-yellow)',
                                            color: '#000',
                                            padding: '0.25rem 1rem',
                                            borderRadius: '20px',
                                            fontWeight: 'bold',
                                            fontSize: '0.9rem'
                                        }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
                                    <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>Ideal for: {pkg.idealFor}</p>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>
                                        {pkg.price}
                                    </div>
                                    <hr style={{ borderColor: '#333', margin: '0 0 1.5rem 0' }} />
                                    <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>Includes:</p>
                                    <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#ccc' }}>
                                                <Check size={18} color="var(--color-yellow)" style={{ marginTop: '4px', minWidth: '18px' }} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {
                                        pkg.link ? (
                                            <a href={pkg.link} className="btn" style={{ background: 'var(--color-yellow)', color: '#000', textAlign: 'center', padding: '1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginTop: '2rem' }}>
                                                {pkg.ctaText || 'View Details'}
                                            </a>
                                        ) : (
                                            <a href="tel:18073430001" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', textAlign: 'center', padding: '1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginTop: '2rem' }}>
                                                Call to Book
                                            </a>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </MotionSection>
                </div>

                {/* Social Proof - Testimonials */}
                <MotionSection delay={0.3}>
                    <div style={{ marginBottom: '6rem' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>What Our Guests Say</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {testimonials.map((t, i) => (
                                <div key={i} style={{ background: '#222', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                        {[...Array(5)].map((_, starIndex) => (
                                            <Star key={starIndex} size={16} fill="var(--color-yellow)" color="var(--color-yellow)" />
                                        ))}
                                    </div>
                                    <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{t.quote}"</p>
                                    <p style={{ color: '#fff', fontWeight: 'bold' }}>- {t.author}</p>
                                </div>
                            ))}
                        </div>
                        {/* Badges */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '4rem', borderTop: '1px solid #333', paddingTop: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ccc' }}>
                                <MapPin size={20} color="var(--color-yellow)" /> Locally Owned
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ccc' }}>
                                <Award size={20} color="var(--color-yellow)" /> Downtown Thunder Bay
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ccc' }}>
                                <Mic size={20} color="var(--color-yellow)" /> Full A/V Included
                            </div>
                        </div>
                    </div>
                </MotionSection>

                {/* Gallery */}
                <MotionSection delay={0.4}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>Event Gallery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '6rem' }}>
                        <img src={getOptimizedImage("/assets/montys-interior-live-music.webp", 600)} alt="Live Music Atmosphere" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                        <img src={getOptimizedImage("/assets/montys-interior-venue-2.webp", 600)} alt="Venue Interior" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                        <img src={getOptimizedImage("/assets/montys-interior-live-sports.webp", 600)} alt="Live Sports" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                        <img src={getOptimizedImage("/assets/montys-interior-gallery-6.webp", 600)} alt="Dining Atmosphere" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                        <img src={getOptimizedImage("/assets/venue-private.webp", 600)} alt="Private Event Setup" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                        <img src={getOptimizedImage("/assets/montys-interior-story.webp", 600)} alt="Venue Details" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} width="600" height="200" loading="lazy" />
                    </div>
                </MotionSection>

                {/* FAQ Section */}
                <MotionSection delay={0.5}>
                    <div style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                    <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionSection>

                {/* Inquiry Form */}
                <div id="inquiry-form">
                    <MotionSection delay={0.6}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px' }}>
                            <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '0.5rem' }}>Start Planning Your Event</h2>
                            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>Takes less than 60 seconds. Our team will respond within 24 hours.</p>
                            <iframe
                                src="https://go.montysjoint.com/widget/form/EEy6e5HE9WudRN8PzSJC"
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                                scrolling="no"
                                id="EEy6e5HE9WudRN8PzSJC_1764388439947"
                                title="Private Event Inquiry"
                            ></iframe>
                        </div>
                    </MotionSection>
                </div>

            </div >
        </Layout >
    );
};

export default PrivateEvents;
