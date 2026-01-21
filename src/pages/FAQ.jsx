import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What are your hours?",
            answer: "We're open Monday-Thursday 11am-11pm, Friday-Saturday 11am-1am, and Sunday 11am-10pm. Kitchen closes 30 minutes before closing time."
        },
        {
            question: "Do you take reservations?",
            answer: "Yes! We highly recommend reservations, especially for weekends and large groups. You can book online at montysjoint.com/reservations or call us at (807) 343-0001."
        },
        {
            question: "Do you have gluten-free options?",
            answer: "Absolutely! We offer gluten-free buns for all our burgers and sandwiches. Many of our menu items can be modified to be gluten-free. Please inform your server of any dietary restrictions."
        },
        {
            question: "Is there parking available?",
            answer: "Yes, there's street parking available on Victoria Ave and nearby side streets. There are also several public parking lots within walking distance."
        },
        {
            question: "Do you host private events?",
            answer: "Yes! We have a dedicated private event space perfect for birthdays, corporate events, wedding rehearsals, and more. Visit our Private Events page or contact us for availability and pricing."
        },
        {
            question: "What's your cancellation policy?",
            answer: "For regular reservations, we ask for 24 hours notice for cancellations. For private events, please refer to your event contract or contact our events team."
        },
        {
            question: "Do you have a kids menu?",
            answer: "While we don't have a separate kids menu, we offer smaller portions of many items and our staff is happy to accommodate children's preferences."
        },
        {
            question: "Can I order takeout?",
            answer: "Yes! You can order takeout by calling (807) 343-0001 or through Uber Eats and SkipTheDishes. Visit our Order page for direct links."
        },
        {
            question: "Do you have vegetarian and vegan options?",
            answer: "Yes, we have several vegetarian options and can modify many dishes to be vegan. Look for the V (vegetarian) and VE (vegan) symbols on our menu."
        },
        {
            question: "What's your dress code?",
            answer: "We have a casual dress code. Come as you are! Whether you're watching the game or celebrating a special occasion, you'll feel comfortable."
        },
        {
            question: "Do you show sports games?",
            answer: "Absolutely! We have multiple large-screen TVs showing all major sports including NHL, NFL, NBA, MLB, and UFC events. Check our social media for upcoming game schedules."
        },
        {
            question: "Can I bring my own cake for a birthday?",
            answer: "Yes! We welcome birthday cakes. Just let us know when you make your reservation. Also, join our Birthday Club for a free dessert on your special day!"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Layout>
            <Helmet>
                <title>FAQ - Frequently Asked Questions | Monty's Joint</title>
                <meta name="description" content="Got questions? We've got answers! Find information about hours, reservations, menu options, parking, and more at Monty's Joint in Thunder Bay." />
                <link rel="canonical" href="https://montysjoint.com/faq/" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                padding: '150px 2rem 80px',
                textAlign: 'center',
                marginBottom: '4rem',
                borderBottom: '3px solid var(--color-yellow)'
            }}>
                <MotionSection>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                        color: '#fff', 
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        FREQUENTLY ASKED <span style={{ color: 'var(--color-yellow)' }}>QUESTIONS</span>
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                        color: '#ccc', 
                        maxWidth: '700px', 
                        margin: '0 auto' 
                    }}>
                        Got questions? We've got answers!
                    </p>
                </MotionSection>
            </div>

            <div className="container" style={{ paddingBottom: '4rem', maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <MotionSection 
                            key={index} 
                            delay={0.1 + (index * 0.05)}
                            style={{
                                background: '#1a1a1a',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? 
                                    <ChevronUp size={24} style={{ color: 'var(--color-yellow)', flexShrink: 0 }} /> : 
                                    <ChevronDown size={24} style={{ color: 'var(--color-yellow)', flexShrink: 0 }} />
                                }
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease'
                                }}
                            >
                                <div style={{
                                    padding: '0 1.5rem 1.5rem',
                                    color: '#ccc',
                                    lineHeight: '1.6',
                                    fontSize: '1rem'
                                }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </MotionSection>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <MotionSection delay={0.8} style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
                        padding: '3rem 2rem',
                        borderRadius: '12px',
                        border: '2px solid var(--color-yellow)'
                    }}>
                        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
                            Still Have Questions?
                        </h2>
                        <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            We're here to help! Give us a call or send us a message.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a 
                                href="tel:18073430001"
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
                                Call Us: (807) 343-0001
                            </a>
                            <a 
                                href="/contact"
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
                                Contact Us
                            </a>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default FAQ;
