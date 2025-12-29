import React from 'react';
import SEO from '../components/SEO/SEO';
import { Mail, MapPin, ChefHat, Beer, Users } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const Careers = () => {
    const positions = [
        {
            title: "Line Cook",
            type: "Full-Time / Part-Time",
            icon: <ChefHat size={24} className="text-yellow" />,
            description: "We're looking for experienced cooks who can handle the heat. Must have a passion for food and working in a fast-paced environment.",
            link: "Apply Now"
        },
        {
            title: "Server / Bartender",
            type: "Part-Time",
            icon: <Beer size={24} className="text-yellow" />,
            description: "Do you love people and great drinks? Join our front-of-house team. Smart Serve required.",
            link: "Apply Now"
        },
        {
            title: "Dishwasher",
            type: "Part-Time",
            icon: <Users size={24} className="text-yellow" />,
            description: "The backbone of the kitchen. Great entry-level position with room for growth.",
            link: "Apply Now"
        }
    ];

    return (
        <Layout>
            <SEO
                title="Careers"
                description="Join the team at Monty's Joint! We're always looking for talented cooks, servers, and bartenders to join our Thunder Bay family."
                url="https://montysjoint.com/careers/"
                image="https://montysjoint.com/assets/montys-interior-gallery-6.webp"
            />

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
                        JOIN THE <span style={{ color: 'var(--color-yellow)' }}>TEAM</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        color: '#ccc',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Big flavour, bigger opportunities. Work with us.
                    </p>
                </MotionSection>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    {/* Left Column */}
                    <MotionSection delay={0.1} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>WHY WORK HERE?</h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#ccc' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                                    Competitive wages & tips
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#ccc' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                                    Fun, energetic atmosphere
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#ccc' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                                    Staff discounts on food
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#ccc' }}>
                                    <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                                    Opportunities for growth
                                </li>
                            </ul>
                        </div>

                        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>HOW TO APPLY</h2>
                            <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                We're always looking for great people. Send your resume and a brief introduction to us, or stop by in person during non-peak hours (2pm - 4pm).
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="mailto:montysjoint@icloud.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-yellow)'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                                    <Mail style={{ color: 'var(--color-yellow)' }} />
                                    montysjoint@icloud.com
                                </a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff' }}>
                                    <MapPin style={{ color: 'var(--color-yellow)' }} />
                                    513 Victoria Ave E, Thunder Bay
                                </div>
                            </div>
                        </div>
                    </MotionSection>

                    {/* Right Column - Job Listings */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <MotionSection delay={0.2}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>CURRENT OPENINGS</h2>
                        </MotionSection>

                        {positions.map((job, index) => (
                            <MotionSection
                                key={index}
                                delay={0.3 + (index * 0.1)}
                                style={{
                                    background: '#1a1a1a',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid #333',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-yellow)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {job.icon}
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fff' }}>{job.title}</h3>
                                    </div>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        background: 'rgba(255, 193, 7, 0.1)',
                                        color: 'var(--color-yellow)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '20px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {job.type}
                                    </span>
                                </div>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>{job.description}</p>
                                <a
                                    href="mailto:montysjoint@icloud.com"
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        textDecoration: 'underline',
                                        textDecorationColor: 'var(--color-yellow)',
                                        transition: 'color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--color-yellow)'}
                                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                                >
                                    {job.link} →
                                </a>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
