import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Monty's Joint</h3>
                    <p className="footer-tagline">Big Flavour, Bigger Impact.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/montysjoint/" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook /></a>
                        <a href="https://www.instagram.com/montysjoint" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram /></a>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Subscribe for specials & updates:</p>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem' }}>
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

                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>513 Victoria Ave E, Thunder Bay, ON P7C 1A8</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <span>1 (807) 343-0001</span>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <span>montysjoint@icloud.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/promotions">Specials</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                        <li><Link to="/birthday-club" className="footer-link">Birthday Club</Link></li>
                        <li><Link to="/careers" className="footer-link">Careers</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Hours</h3>
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
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Monty's Joint. All rights reserved.</p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    <a href="/privacy-policy" style={{ color: '#666', marginRight: '1rem' }}>Privacy Policy</a>
                    <a href="/terms-of-service" style={{ color: '#666' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
