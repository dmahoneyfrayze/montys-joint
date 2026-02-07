import React, { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import OpenStatus from '../components/UI/OpenStatus';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://go.montysjoint.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Layout>
            <SEO
                title="Contact Us"
                description="Get in touch with Monty's Joint. Find our location, hours, phone number, and email. We look forward to seeing you!"
                url="https://montysjoint.com/contact/"
                image="https://montysjoint.com/assets/montys-exterior.webp"
            />
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', color: 'var(--color-yellow)' }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin color="var(--color-yellow)" /> Location
                            </h2>
                            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
                                513 Victoria Ave E,<br />
                                Thunder Bay, ON P7C 1A8
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone color="var(--color-yellow)" /> Phone
                            </h2>
                            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
                                <a href="tel:18073430001" style={{ color: '#ccc', textDecoration: 'none' }}>1 (807) 343-0001</a>
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail color="var(--color-yellow)" /> Email
                            </h2>
                            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
                                <a href="mailto:montysjoint@icloud.com" style={{ color: '#ccc', textDecoration: 'none' }}>montysjoint@icloud.com</a>
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <h2 style={{ color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock color="var(--color-yellow)" /> Hours
                                </h2>
                                <OpenStatus />
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                <li><strong style={{ color: '#fff' }}>Monday:</strong> 5:00 PM - 10:00 PM</li>
                                <li><strong style={{ color: '#fff' }}>Tuesday - Friday:</strong> 11:30 AM - 10:00 PM</li>
                                <li><strong style={{ color: '#fff' }}>Saturday:</strong> 12:00 PM - 10:00 PM</li>
                                <li><strong style={{ color: '#fff' }}>Sunday:</strong> Closed</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
                        <iframe
                            src="https://go.montysjoint.com/widget/form/yAwbGwlXosuzlnZzDfpd"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px', minHeight: '674px' }}
                            id="inline-yAwbGwlXosuzlnZzDfpd"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Contact Us"
                            data-height="674"
                            data-layout-iframe-id="inline-yAwbGwlXosuzlnZzDfpd"
                            data-form-id="yAwbGwlXosuzlnZzDfpd"
                            title="Contact Us"
                        >
                        </iframe>
                    </div>
                </div>

                {/* Map */}
                <div style={{ marginTop: '4rem' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.056637847466!2d-89.24586692346384!3d48.38784497127181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d59217066060429%3A0x62410a010411830!2s513%20Victoria%20Ave%20E%2C%20Thunder%20Bay%2C%20ON%20P7C%201A8!5e0!3m2!1sen!2sca!4v1716940000000!5m2!1sen!2sca"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Monty's Joint Location"
                    ></iframe>
                </div>

                {/* Parking + Directions */}
                <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
                    <h3 style={{ color: 'var(--color-yellow)', fontSize: '2rem', marginBottom: '1rem' }}>How to Find Us</h3>
                    <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Monty's Joint is conveniently located at 513 Victoria Ave E, right in the heart of Thunder Bay. We offer ample parking for our guests. You can find street parking directly in front of the restaurant on Victoria Ave, or use the public parking lot located just around the corner on Archibald St. For those taking public transit, we are easily accessible via the 3M Memorial and 11 John bus routes, with stops just steps from our front door. Look for our sign and come on in for a great meal!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
