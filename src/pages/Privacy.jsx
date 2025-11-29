import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const Privacy = () => {
    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy | Monty’s Joint</title>
                <meta name="description" content="Read the Privacy Policy for Monty’s Joint. Learn how we collect, use, and protect your data." />
            </Helmet>
            <div className="container" style={{ padding: '100px 1rem 4rem', maxWidth: '800px' }}>
                <h1 style={{ color: 'var(--color-yellow)', marginBottom: '2rem' }}>Privacy Policy</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <p>Monty's Joint (“Company”, “we”, “us”, or “our”) is committed to protecting your privacy and maintaining transparency regarding how we collect, use, store, and safeguard your personal information.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h2>
                    <p>Monty's Joint does NOT share customer opt-in information—including phone numbers, messaging consent data, or SMS subscription details—with any third parties or affiliates for marketing, promotional, or unrelated purposes.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>1. Information We Collect</h2>
                    <h3>1.1 Personal Information Provided by You</h3>
                    <p>This may include: Full name, Email address, Phone number, Physical or mailing address, Payment information, Opt-in/consent records.</p>

                    <h3>1.2 Automatically Collected Information</h3>
                    <p>IP address, Browser and device details, Cookies and tracking technology, Website usage analytics.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>2. How We Use Your Information</h2>
                    <p>Monty's Joint uses your information to:</p>
                    <ul>
                        <li>Provide our products and services</li>
                        <li>Process transactions, bookings, and customer requests</li>
                        <li>Communicate with you about appointments, reminders, updates, and support</li>
                        <li>Send marketing campaigns (when consent is provided)</li>
                        <li>Improve website functionality and optimize user experience</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>3. SMS MESSAGING & COMPLIANCE</h2>
                    <h3>3.1 Opt-In & Consent</h3>
                    <p>By opting into our SMS services, you confirm consent to receive messages. We comply with TCPA, CTIA, CASL, and all applicable regulations.</p>

                    <h3>3.2 Opt-Out Instructions</h3>
                    <p>You may opt out at any time by replying “STOP”.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>10. Contact Us</h2>
                    <p>For questions or privacy requests, contact us at:</p>
                    <p>Monty's Joint<br />Phone: (807) 473-9294<br />Website: montysjoint.com</p>
                </section>
            </div>
        </Layout>
    );
};

export default Privacy;
