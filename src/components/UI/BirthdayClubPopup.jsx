import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const BirthdayClubPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSeenPopup, setHasSeenPopup] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const seen = localStorage.getItem('montys_birthday_popup_seen');
        if (seen) setHasSeenPopup(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasSeenPopup) {
                setIsVisible(true);
                localStorage.setItem('montys_birthday_popup_seen', 'true');
                setHasSeenPopup(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasSeenPopup]);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '1rem'
        }}>
            <div style={{
                background: '#1a1a1a',
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '100%',
                position: 'relative',
                border: '1px solid var(--color-yellow)',
                textAlign: 'center'
            }}>
                <button
                    onClick={closePopup}
                    aria-label="Close popup"
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ color: 'var(--color-yellow)', fontSize: '2rem', marginBottom: '1rem' }}>Join the Birthday Club!</h2>
                <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Sign up for our Birthday Club and get exclusive treats on your special day! Plus, be the first to know about upcoming events and offers.
                </p>

                <a
                    href="https://go.montysjoint.com/widget/form/birthday-club-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                        background: 'var(--color-yellow)',
                        color: '#000',
                        padding: '1rem 2rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        display: 'inline-block'
                    }}
                >
                    Sign Up Now
                </a>
            </div>
        </div>
    );
};

export default BirthdayClubPopup;
