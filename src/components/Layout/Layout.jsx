import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SchemaMarkup from '../SEO/SchemaMarkup';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <SchemaMarkup />
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
