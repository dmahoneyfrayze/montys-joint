import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img
                            src="/assets/logo-white-official.webp"
                            alt="Monty's Joint"
                            style={{ maxHeight: '60px' }}
                        />
                    </Link>
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

                    <Link to="/menu" className="nav-link">Menu</Link>
                    <Link to="/promotions" className="nav-link">Specials</Link>
                    <Link to="/private-events" className="nav-link">Private Events</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>

                    {/* Mobile Only Call Button */}
                    <a href="tel:8073430001" className="nav-link mobile-call-link" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={18} /> Call Us
                    </a>
                </div>
                <div className="navbar-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link to="/reservations" className="nav-btn btn" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none' }}>
                        Book Table
                    </Link>
                    <Link to="/order" className="nav-btn btn" style={{ background: 'transparent', border: '1px solid var(--color-yellow)', color: 'var(--color-yellow)' }}>
                        Order Online
                    </Link>
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} color="var(--color-yellow)" /> : <Menu size={28} color="var(--color-yellow)" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
