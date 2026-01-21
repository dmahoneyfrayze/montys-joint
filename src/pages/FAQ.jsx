import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import MotionSection from '../components/UI/MotionSection';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ_DATA = [
    {
        category: "General",
        questions: [
            {
                q: "What are your hours of operation?",
                a: "We are open Monday: 5:00 PM – 10:00 PM, Tuesday to Friday: 11:30 AM – 10:00 PM, and Saturday: 12:00 PM – 10:00 PM. We are closed on Sundays."
            },
            {
                q: "Where are you located?",
                a: "You can find us at 513 Victoria Ave E, Thunder Bay, ON P7C 1A8. We have free parking available for our guests."
            },
            {
                q: "Is Monty’s Joint family-friendly?",
                a: (
                    <>
                        Yes! We love hosting families and have a dedicated <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>kids menu</Link> with favorites like chicken fingers, burgers, and pasta.
                    </>
                )
            }
        ]
    },
    {
        category: "Reservations & Events",
        questions: [
            {
                q: "Do you take reservations?",
                a: (
                    <>
                        Absolutely! We recommend <Link to="/reservations/" style={{ color: 'var(--color-yellow)' }}>booking in advance</Link>, especially for Friday and Saturday nights. You can book directly through our website or call us at (807) 343-0001.
                    </>
                )
            },
            {
                q: "Can I host a private event at Monty’s?",
                a: (
                    <>
                        Yes! We host everything from birthday parties to corporate gatherings. Check our <Link to="/private-events/" style={{ color: 'var(--color-yellow)' }}>Private Events</Link> page or <Link to="/contact/" style={{ color: 'var(--color-yellow)' }}>contact us</Link> for custom menu options and venue availability.
                    </>
                )
            },
            {
                q: "Do you offer catering?",
                a: (
                    <>
                        We do! We have specialized party packages designed for external events. See the <Link to="/menu/#catering" style={{ color: 'var(--color-yellow)' }}>Catering section</Link> on our Menu page for details.
                    </>
                )
            }
        ]
    },
    {
        category: "Menu & Dietary",
        questions: [
            {
                q: "Do you have vegetarian or vegan options?",
                a: (
                    <>
                        Yes, we offer several vegetarian dishes and can often accommodate vegan requests. Our <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>menu</Link> clearly identifies these options.
                    </>
                )
            },
            {
                q: "Are there gluten-free choices available?",
                a: "Many of our items, including our burgers (with a bun swap) and several salads, can be prepared gluten-free. Please alert your server to any allergies."
            },
            {
                q: "What is your 'Coldest Draught' promise?",
                a: "We take our beer seriously. Our draught system is calibrated to serve every pint at the perfect, refreshing temperature—guaranteed to be the coldest in Thunder Bay."
            }
        ]
    }
];

const FAQ = () => {
    return (
        <Layout>
            <SEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about Monty's Joint, including hours, reservations, dietary options, and private events."
                url="https://montysjoint.com/faq/"
            />

            <div className="faq-page">
                <header className="faq-header">
                    <div className="container">
                        <MotionSection>
                            <HelpCircle size={48} color="var(--color-yellow)" className="faq-icon" />
                            <h1>Frequently Asked Questions</h1>
                            <p>Everything you need to know about your next visit to Monty's Joint.</p>
                        </MotionSection>
                    </div>
                </header>

                <section className="faq-content container">
                    {FAQ_DATA.map((section, idx) => (
                        <MotionSection key={idx} delay={idx * 0.1}>
                            <div className="faq-category">
                                <h2>{section.category}</h2>
                                <div className="faq-list">
                                    {section.questions.map((item, qIdx) => (
                                        <FAQItem key={qIdx} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </div>
                        </MotionSection>
                    ))}
                </section>

                <section className="faq-cta container">
                    <MotionSection delay={0.4}>
                        <div className="cta-box">
                            <h3>Still have questions?</h3>
                            <p>We're here to help! Feel free to reach out to us directly.</p>
                            <div className="cta-actions">
                                <a href="tel:18073430001" className="btn btn-primary">Call Us</a>
                                <a href="/contact/" className="btn btn-outline">Contact Us</a>
                            </div>
                        </div>
                    </MotionSection>
                </section>
            </div>
        </Layout>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <div style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1.1rem' }}>{answer}</div>
                </div>
            )}
        </div>
    );
};

export default FAQ;
