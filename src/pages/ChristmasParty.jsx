import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';
import { Check, Star, Wine, Music, Calendar } from 'lucide-react';

const ChristmasParty = () => {
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

    const mistletoeItems = [
        {
            title: "Miniature Beef Wellingtons",
            desc: "Flaky puff pastry-wrapped tenderloin with a mushroom duxelles. Served with a dollop of horseradish crème fraîche."
        },
        {
            title: "Thai Chicken Skewers",
            desc: "Bite-sized, grilled chicken thigh marinated in a savory thai curry glaze, sprinkled with toasted cashews."
        },
        {
            title: "Smoked Salmon & Dill Crostini",
            desc: "Toasted baguette slice topped with whipped cream cheese, quality smoked salmon, fresh dill, and capers."
        },
        {
            title: "Caprese Skewers with Balsamic Glaze",
            desc: "Cherry tomato, fresh mozzarella ball, and basil leaf, drizzled with a thick, aged balsamic reduction."
        },
        {
            title: "Mini Salted Caramel Brownie Bites",
            desc: "Rich, fudgy brownie cut into squares, finished with a touch of sea salt and a swirl of house-made caramel."
        }
    ];

    const executiveMenu = [
        {
            title: "Artisan Greens Salad",
            desc: "Mixed greens, dried cranberries, toasted pecans, crumbled goat cheese, and a light balsamic vinaigrette. Easy, colourful, and festive."
        },
        {
            title: "Herb-Crusted Pork Loin or Pan-Seared Chicken Breast",
            desc: "Served with a light pan jus or creamy mushroom sauce."
        },
        {
            title: "Roasted Garlic Mashed Potatoes or Wild Rice Pilaf",
            desc: ""
        },
        {
            title: "Seasonal Roasted Root Vegetables",
            desc: "(Carrots, Parsnips, Brussels Sprouts) with rosemary and thyme."
        },
        {
            title: "Bread",
            desc: "Artisan rolls with butter."
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Christmas Party Packages | Monty’s Joint Thunder Bay</title>
                <meta name="description" content="Host your Christmas party at Monty's Joint. Featuring festive food packages from $35/pp, drink tiers, and full venue buyout options in Thunder Bay." />
                <link rel="canonical" href="https://montysjoint.com/christmas-party" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://montysjoint.com/christmas-party" />
                <meta property="og:title" content="Christmas Party Packages | Monty’s Joint" />
                <meta property="og:description" content="Host your Christmas party at Monty's Joint. Festive food packages, drink tiers, and full venue options available." />
                <meta property="og:image" content="https://montysjoint.com/assets/Monty's Christmas background.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://montysjoint.com/christmas-party" />
                <meta property="twitter:title" content="Christmas Party Packages | Monty’s Joint" />
                <meta property="twitter:description" content="Host your Christmas party at Monty's Joint. Festive food packages, drink tiers, and full venue options available." />
                <meta property="twitter:image" content="https://montysjoint.com/assets/Monty's Christmas background.png" />
            </Helmet>

            {/* Hero Section */}
            <div style={{
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(\"/assets/Monty's Christmas background.png\")",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 2rem 100px',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem' }}>Christmas Party Packages</h1>
                <p style={{ fontSize: '1.5rem', color: '#ccc', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                    Simple scheduling. Effortless planning. Unforgettable holiday memories.
                </p>
                <a href="#inquiry-form" className="btn" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none' }}>
                    Check Availability
                </a>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Mistletoe Package */}
                <MotionSection>
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>The Mistletoe Package</h2>
                            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Food-Only • $35 per person</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {mistletoeItems.map((item, index) => (
                                <div key={index} style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{index + 1}. {item.title}</h3>
                                    <p style={{ color: '#aaa', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionSection>

                {/* Package Tiers */}
                <MotionSection delay={0.2}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {/* Holly Package */}
                        <div style={{ background: '#222', padding: '2rem', borderRadius: '8px', border: '1px solid #444', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--color-yellow)', fontSize: '2rem', marginBottom: '1rem' }}>The Holly Package</h3>
                            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>$55 per person</p>
                            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Food + Tier 1 Drinks</p>
                            <hr style={{ borderColor: '#444', margin: '1.5rem 0' }} />
                            <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', textAlign: 'left' }}>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><Check size={16} color="var(--color-yellow)" /> Everything in Mistletoe Package</li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><Check size={16} color="var(--color-yellow)" /> Tier 1 Beverage Package (2 Hours)</li>
                            </ul>
                        </div>

                        {/* Tinsel Package */}
                        <div style={{ background: '#222', padding: '2rem', borderRadius: '8px', border: '2px solid var(--color-yellow)', textAlign: 'center', position: 'relative' }}>
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
                                Best Value
                            </div>
                            <h3 style={{ color: 'var(--color-yellow)', fontSize: '2rem', marginBottom: '1rem' }}>The Tinsel Package</h3>
                            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>$65 per person</p>
                            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Food + Tier 2 Drinks + Dessert Station</p>
                            <hr style={{ borderColor: '#444', margin: '1.5rem 0' }} />
                            <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', textAlign: 'left' }}>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><Check size={16} color="var(--color-yellow)" /> Everything in Mistletoe Package</li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><Check size={16} color="var(--color-yellow)" /> Tier 2 Beverage Package (2 Hours)</li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><Check size={16} color="var(--color-yellow)" /> Dessert Station</li>
                            </ul>
                        </div>
                    </div>
                </MotionSection>

                {/* Important Note */}
                <MotionSection delay={0.3}>
                    <div style={{ background: '#331111', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ff4444', textAlign: 'center', marginBottom: '6rem' }}>
                        <p style={{ color: '#ffcccc', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            PLEASE NOTE: FOR FRIDAY’S OR SATURDAYS IN DECEMBER THERE IS A $3000 MINIMUM SPEND COMMITMENT IF REQUIRING USE OF THE FULL VENUE
                        </p>
                    </div>
                </MotionSection>

                {/* Beverage Packages */}
                <MotionSection delay={0.4}>
                    <div style={{ marginBottom: '6rem' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '2rem' }}>Beverage Packages</h2>
                        <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '3rem' }}>Available to add to The Mistletoe Package. Packages are per person for 2 hours.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.5rem', marginBottom: '1rem' }}>Tier 1: Festive Drink Package</h3>
                                <p style={{ color: '#ccc' }}>Includes house wine (red/white), craft beer, soft drinks, holiday punch.</p>
                            </div>
                            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                                <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.5rem', marginBottom: '1rem' }}>Tier 2: Premium Spirits</h3>
                                <p style={{ color: '#ccc' }}>Includes everything in Tier 1, premium spirits and signature holiday cocktail.</p>
                            </div>
                        </div>
                    </div>
                </MotionSection>

                {/* Executive Dinner Station */}
                <MotionSection delay={0.5}>
                    <div style={{ marginBottom: '6rem', background: '#1a1a1a', padding: '3rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>The Executive Dinner Station</h2>
                            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>$55 per person</p>
                            <p style={{ color: '#aaa', maxWidth: '700px', margin: '1rem auto' }}>
                                For events requiring a more substantial meal, upgrade to our Executive Dinner Station. This premium option features an elegant, chef-attended buffet with an elevated menu. Perfect for holiday parties or longer corporate functions.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {executiveMenu.map((item, index) => (
                                <div key={index} style={{ borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                    {item.desc && <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.desc}</p>}
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem', textAlign: 'center', background: '#222', padding: '1.5rem', borderRadius: '8px' }}>
                            <p style={{ color: 'var(--color-yellow)', fontWeight: 'bold', marginBottom: '0.5rem' }}>A PRIME RIB UPGRADE IS AVAILABLE</p>
                            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>(Tier 1-$20pp or Tier 2-$30pp Beverage Packages may be added)</p>
                        </div>
                    </div>
                </MotionSection>

                {/* Armani's Extension */}
                <MotionSection delay={0.6}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Don’t Want To Go Home Just Yet?</h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                You can extend your event by adding an evening of dancing and socializing.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Your event can seamlessly move back and forth from Monty’s Joint into Armani’s.
                            </p>
                            <a href="#inquiry-form" className="btn-outline" style={{ border: '2px solid #fff', color: '#fff', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none' }}>
                                Inquire for Details
                            </a>
                        </div>
                        <div>
                            <img src="/assets/montys-interior-venue-2.webp" alt="Armani's Nightclub" style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
                        </div>
                    </div>
                </MotionSection>

                {/* Inquiry Form */}
                <div id="inquiry-form">
                    <MotionSection delay={0.7}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px' }}>
                            <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '0.5rem' }}>Book Your Christmas Party</h2>
                            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>Fill out the form below to check availability and get a quote.</p>
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

export default ChristmasParty;
