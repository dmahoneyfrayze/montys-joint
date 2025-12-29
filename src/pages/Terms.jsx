import React from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';

const Terms = () => {
    return (
        <Layout>
            <SEO
                title="Terms of Service"
                description="Read the Terms of Service for Monty’s Joint website and services."
                url="https://montysjoint.com/terms-of-service/"
                image="https://montysjoint.com/assets/logo-main.png"
            />
            <div className="container" style={{ padding: '100px 1rem 4rem', maxWidth: '800px' }}>
                <h1 style={{ color: 'var(--color-yellow)', marginBottom: '2rem' }}>Terms of Service</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>I. SMS Messaging Terms & Compliance</h2>
                    <h3>1. Program Description</h3>
                    <p>Our SMS messaging program provides appointment confirmations, reminders, service notifications, customer support, and other service-related updates. Messages are only sent when you have explicitly opted in through our website, booking forms, checkout pages, or customer intake systems.</p>

                    <h3>2. Cancellation Instructions</h3>
                    <p>You may cancel at any time by replying “STOP” to any message. We will then send a confirmation message and cease communication unless you choose to opt in again.</p>

                    <h3>3. Support Information</h3>
                    <p>For help, reply “HELP” or contact us at (807) 473-9294.</p>

                    <h3>4. Carrier Liability</h3>
                    <p>Wireless carriers are not responsible for delayed or undelivered messages.</p>

                    <h3>5. Message & Data Rates</h3>
                    <p>Message/data rates may apply depending on your mobile plan. Message frequency varies based on your interactions.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>II. General Terms of Service</h2>
                    <p>This website (the “Site”) is owned and operated by Monty's Joint. By accessing or using the Site, you agree to follow these Terms of Service, our Privacy Policy, and any additional policies referenced on the Site.</p>

                    <h3>1. Use of the Site & Services</h3>
                    <p>By using our Site, you agree NOT to:</p>
                    <ul>
                        <li>Engage in unlawful or harmful activities</li>
                        <li>Interfere with website functionality or security</li>
                        <li>Attempt to access restricted or unauthorized areas</li>
                        <li>Upload malware, spam, or harmful content</li>
                        <li>Misrepresent your identity</li>
                        <li>Abuse our messaging, booking, or automation systems</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>2. Intellectual Property</h2>
                    <h3>2.1 Our Limited License to You</h3>
                    <p>All content on the Site—including text, branding, images, videos, and digital materials—is owned by Monty's Joint or licensed to us. It is protected under copyright and intellectual property laws.</p>
                    <p>You may view the Site and download/print one copy for personal use. You may NOT modify, reproduce, distribute, sell, publish, resell, or create derivative works unless you receive written permission.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>3. Online Purchases & Transactions</h2>
                    <p>If products or services are purchased through the Site, you must provide accurate contact and payment information. You authorize us or our payment processors to charge your method of payment. We are not responsible for errors caused by external payment processors.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2>13. Contact Information</h2>
                    <p>For questions regarding these Terms of Service:</p>
                    <p>Monty's Joint<br />Phone: (807) 473-9294<br />Website: montysjoint.com</p>
                </section>
            </div>
        </Layout>
    );
};

export default Terms;
