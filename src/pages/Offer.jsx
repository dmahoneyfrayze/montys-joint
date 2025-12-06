import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const Offer = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        birthday: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: INTEGRATE GHL WEBHOOK OR FORM SUBMISSION HERE
        // For now, simulate a delay and redirect
        console.log('Form submitted:', formData);

        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/offer/claimed');
        }, 1000);
    };

    return (
        <Layout>
            <Helmet>
                <title>Get $10 OFF Your First Visit | Monty’s Joint</title>
                <meta name="description" content="Claim your $10 off voucher for your first visit to Monty's Joint. Experience the best gastropub in Thunder Bay." />
            </Helmet>

            <div style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(/assets/montys-interior-live-music.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '4rem 1rem'
            }}>
                <MotionSection>
                    <div style={{
                        maxWidth: '500px',
                        margin: '0 auto',
                        background: 'rgba(20, 20, 20, 0.95)',
                        padding: '3rem 2rem',
                        borderRadius: '16px',
                        border: '1px solid var(--color-yellow)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            color: 'var(--color-yellow)',
                            marginBottom: '1rem',
                            lineHeight: 1.2
                        }}>
                            Get $10 OFF<br />
                            <span style={{ color: '#fff', fontSize: '1.5rem' }}>Your First Visit</span>
                        </h1>

                        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
                            Join us for great food, cold drinks, and live jazz. Enter your details below to claim your voucher instantly.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid #333',
                                    background: '#222',
                                    color: '#fff',
                                    fontSize: '1rem'
                                }}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid #333',
                                    background: '#222',
                                    color: '#fff',
                                    fontSize: '1rem'
                                }}
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid #333',
                                    background: '#222',
                                    color: '#fff',
                                    fontSize: '1rem'
                                }}
                            />

                            <div style={{ textAlign: 'left' }}>
                                <label style={{ color: '#888', fontSize: '0.8rem', marginLeft: '0.5rem', marginBottom: '0.25rem', display: 'block' }}>Birthday (Optional - for free dessert!)</label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid #333',
                                        background: '#222',
                                        color: '#fff',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    background: 'var(--color-yellow)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    cursor: isSubmitting ? 'wait' : 'pointer',
                                    transition: 'transform 0.2s',
                                    opacity: isSubmitting ? 0.7 : 1
                                }}
                            >
                                {isSubmitting ? 'Claiming...' : 'CLAIM MY $10 OFF'}
                            </button>

                            <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '1rem' }}>
                                By clicking above, you agree to receive marketing updates from Monty's Joint. You can unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default Offer;
