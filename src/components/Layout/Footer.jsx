import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { trackCallClick, trackNewsletterSignup } from '../../utils/tracking';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <Link to="/">
                        <img src="/assets/logo-white-official.webp" alt="Monty's Joint" width="180" height="62" style={{ maxWidth: '180px', height: 'auto', marginBottom: '1rem' }} />
                    </Link>
                    <p className="footer-tagline">Big Flavour, Bigger Impact.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/montysjoint/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit our Facebook page"><Facebook /></a>
                        <a href="https://www.instagram.com/montysjoint" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit our Instagram page"><Instagram /></a>
                        <a href="https://maps.app.goo.gl/HZXoUYCxSpnzfn5L8" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Find us on Google Maps"><MapPin /></a>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Subscribe for specials & updates:</p>
                        <form onSubmit={(e) => { e.preventDefault(); trackNewsletterSignup(); }} style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #333',
                                    background: '#1a1a1a',
                                    color: '#fff',
                                    width: '100%'
                                }}
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe to newsletter"
                                style={{
                                    background: 'var(--color-yellow)',
                                    color: '#000',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                <section className="footer-section">
                    <h2 className="footer-title">Contact</h2>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="icon" />
                            <a href="https://maps.app.goo.gl/HZXoUYCxSpnzfn5L8" target="_blank" rel="noopener noreferrer" className="footer-link-text">513 Victoria Ave E, Thunder Bay, ON P7C 1A8</a>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <a href="tel:18073430001" className="footer-link-text" onClick={() => trackCallClick('footer')}>1 (807) 343-0001</a>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <a href="mailto:montysjoint@icloud.com" className="footer-link-text">montysjoint@icloud.com</a>
                        </li>
                    </ul>
                </section>

                <section className="footer-section">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul className="footer-links">
                        <li><Link to="/menu/">Menu</Link></li>
                        <li><Link to="/menu/#catering">Catering Menu</Link></li>
                        <li><Link to="/lunch-menu/">Lunch Menu</Link></li>
                        <li><Link to="/promotions/">Specials</Link></li>
                        <li><Link to="/blog/" className="footer-link">Blog</Link></li>
                        <li><Link to="/birthday-club/" className="footer-link">Birthday Club</Link></li>
                        <li><Link to="/faq/" className="footer-link">FAQ</Link></li>
                        <li><Link to="/careers/" className="footer-link">Careers</Link></li>
                        <li><Link to="/contact/" className="footer-link">Contact Us</Link></li>
                        <li><Link to="/order/" className="footer-link">Order Online</Link></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <h2 className="footer-title">Hours</h2>
                    <ul className="footer-hours">
                        <li>
                            <span className="day">Mon:</span>
                            <span className="time">5:00 PM - 10:00 PM</span>
                        </li>
                        <li>
                            <span className="day">Tue - Fri:</span>
                            <span className="time">11:30 AM - 10:00 PM</span>
                        </li>
                        <li>
                            <span className="day">Sat:</span>
                            <span className="time">12:00 PM - 10:00 PM</span>
                        </li>
                        <li>
                            <span className="day">Sun:</span>
                            <span className="time">Closed</span>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Monty's Joint. All rights reserved.</p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    <Link to="/privacy-policy/" style={{ color: '#999', marginRight: '1rem' }}>Privacy Policy</Link>
                    <Link to="/terms-of-service/" style={{ color: '#999', marginRight: '1rem' }}>Terms of Service</Link>
                    <Link to="/sitemap/" style={{ color: '#999' }}>Sitemap</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
