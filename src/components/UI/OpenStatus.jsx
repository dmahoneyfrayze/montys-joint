import React, { useState, useEffect } from 'react';
import { getBusinessStatus } from '../../utils/businessHours';

const OpenStatus = ({ className = '' }) => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // Initial check
        setStatus(getBusinessStatus());

        // Check every minute
        const interval = setInterval(() => {
            setStatus(getBusinessStatus());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    if (!status) return null; // Avoid hydration mismatch or flash

    return (
        <div className={`open-status ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: status.isOpen ? '#22c55e' : '#ef4444',
                display: 'inline-block',
                boxShadow: status.isOpen ? '0 0 8px #22c55e' : 'none'
            }}></span>
            <span style={{ color: status.isOpen ? '#22c55e' : '#ef4444' }}>
                {status.text}
            </span>
        </div>
    );
};

export default OpenStatus;
