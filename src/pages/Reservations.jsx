import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';

const Reservations = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://go.montysjoint.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Book a Table | Monty’s Joint Thunder Bay</title>
                <meta name="description" content="Reserve your table at Monty’s Joint. For groups larger than 8, please call us directly." />
            </Helmet>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>Book a Table</h1>

                <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#fff3cd', color: '#856404', border: '1px solid #ffeeba', borderRadius: '4px', textAlign: 'center' }}>
                        <strong>Note:</strong> For groups larger than 8, please call us at <a href="tel:18073430001" style={{ color: '#856404', textDecoration: 'underline' }}>(807) 343-0001</a>.
                    </div>

                    <iframe
                        src="https://go.montysjoint.com/widget/booking/4LOyj98wpXJlUylxEsp3"
                        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                        scrolling="no"
                        id="4LOyj98wpXJlUylxEsp3_1764388439947"
                        title="Book a Table"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Reservations;
