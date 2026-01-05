import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) {
        return null;
    }

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

    return (
        <nav aria-label="breadcrumb" style={{ padding: '1rem 0', background: '#111', borderBottom: '1px solid #222' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#888' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>
                    <Home size={16} />
                </Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}/`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <React.Fragment key={to}>
                            <ChevronRight size={14} style={{ margin: '0 0.5rem', color: '#444' }} />
                            {isLast ? (
                                <span style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>{capitalize(value)}</span>
                            ) : (
                                <Link to={to} style={{ color: '#ccc', textDecoration: 'none' }}>
                                    {capitalize(value)}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
