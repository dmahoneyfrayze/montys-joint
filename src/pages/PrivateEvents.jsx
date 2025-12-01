import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import { Check } from 'lucide-react';

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
            title: 'The Social Mixer',
            price: '$25 - $35',
            perPerson: true,
            features: [
                'Appetizer Platter Selection',
                'Dedicated Server',
                'Reserved Section (3 Hours)',
                'Background Music Control'
            ]
        },
        {
            title: 'The Dinner Party',
            price: '$45 - $60',
            perPerson: true,
            features: [
                '3-Course Plated Dinner',
                'Welcome Drink Ticket',
                'Dedicated Server & Bartender',
                'Reserved Section (4 Hours)',
                'A/V Equipment Use'
            ]
        },
        {
            title: 'The Full Buyout',
            price: 'Contact Us',
            perPerson: false,
            features: [
                'Exclusive Use of Entire Venue',
                'Custom Buffet or Plated Menu',
                'Full Bar Service',
                'Live Music Setup Ready',
                'Flexible Duration'
            ]
        }
    ];

    const galleryImages = [
        '/assets/private-events-hero.webp',
        '/assets/gallery-5.webp',
        '/assets/gallery-4.webp',
        '/assets/gallery-1.webp',
        '/assets/gallery-2.webp',
        '/assets/gallery-6.webp'
    ];

    return (
        <Layout>
            <Helmet>
                <title>Private Events, Christmas Parties & Corporate Functions | Monty’s Joint</title>
                <meta name="description" content="Host your Christmas party, corporate event, or birthday bash at Monty’s Joint. Full venue buyouts available for private functions in Thunder Bay." />
                <link rel="canonical" href="https://montysjoint.com/private-events" />
                <meta property="og:title" content="Private Events, Christmas Parties & Corporate Functions | Monty’s Joint" />
                <meta property="og:description" content="Host your Christmas party, corporate event, or birthday bash at Monty’s Joint. Full venue buyouts available." />
                <meta property="og:image" content="https://montysjoint.com/assets/private-events-hero.webp" />
                <meta property="og:url" content="https://montysjoint.com/private-events" />
                <meta property="og:type" content="website" />
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
                            "image": "https://montysjoint.com/assets/private-events-hero.webp",
                            "description": "The perfect venue for Christmas parties, corporate events, and birthday celebrations in Thunder Bay."
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/private-events-hero.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 2rem 100px',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem' }}>Host Your Next Event</h1>
                <p style={{ fontSize: '1.5rem', color: '#ccc', maxWidth: '800px', margin: '0 auto' }}>
                    The ideal spot for Christmas parties, corporate gatherings, and birthday celebrations.
                </p>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Room Details */}
                <MotionSection>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-yellow)', marginBottom: '1.5rem' }}>The Perfect Venue</h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Monty's Joint offers a unique atmosphere for any occasion. From intimate <strong>birthday dinners</strong> to large <strong>corporate Christmas parties</strong>, our venue can be tailored to your needs. We offer full venue buyouts for complete privacy and customization.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#fff' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>Best For:</span> Christmas Parties, Staff Events, Birthdays
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>Capacity:</span> Inquire for details
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>Space:</span> Full Restaurant & Bar
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>A/V:</span> 75" TV, HDMI Input, Independent Sound System
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src="/assets/interior-dining-01.jpg" alt="Monty's Joint Interior" style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
                        </div>
                    </div>
                </MotionSection>

                {/* Packages */}
                <MotionSection delay={0.2}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>Event Packages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        {packages.map((pkg, index) => (
                            <div key={index} style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                                    {pkg.price} <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#888' }}>{pkg.perPerson ? '/ person' : ''}</span>
                                </div>
                                <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />
                                <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#ccc' }}>
                                            <Check size={18} color="var(--color-yellow)" style={{ marginTop: '4px' }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#inquiry-form" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', textAlign: 'center', padding: '1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginTop: '2rem' }}>
                                    Select Package
                                </a>
                            </div>
                        ))}
                    </div>
                </MotionSection>

                {/* Gallery */}
                <MotionSection delay={0.3}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '3rem' }}>Event Gallery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '6rem' }}>
                        {galleryImages.map((img, index) => (
                            <img key={index} src={img} alt={`Event Gallery ${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                        ))}
                    </div>
                </MotionSection>

                {/* Inquiry Form */}
                <div id="inquiry-form">
                    <MotionSection delay={0.4}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px' }}>
                            <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '2rem' }}>Inquire Now</h2>
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

            </div>
        </Layout>
    );
};

export default PrivateEvents;
