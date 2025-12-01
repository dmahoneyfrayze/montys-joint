import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SchemaMarkup from '../SEO/SchemaMarkup';

import Breadcrumbs from '../UI/Breadcrumbs';
import BirthdayClubPopup from '../UI/BirthdayClubPopup';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <SchemaMarkup />
            <Navbar />
            <Breadcrumbs />
            <BirthdayClubPopup />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
