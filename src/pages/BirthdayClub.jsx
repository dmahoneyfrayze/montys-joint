import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import { Gift } from 'lucide-react';

const BirthdayClub = () => {
    return (
        <Layout>
            <Helmet>
                <title>Birthday Club | Monty’s Joint</title>
                <meta name="description" content="Join the Monty’s Joint Birthday Club! Coming soon." />
            </Helmet>
            <div style={{ paddingTop: '150px', paddingBottom: '8rem', textAlign: 'center' }} className="container">
                <Gift size={64} color="var(--color-yellow)" style={{ marginBottom: '2rem' }} />
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-yellow)' }}>Birthday Club</h1>
                <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Coming Soon</h2>
                <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    We're cooking up something special for your special day. Check back soon to join the club and get exclusive birthday treats!
                </p>
            </div>
        </Layout>
    );
};

export default BirthdayClub;
