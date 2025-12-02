import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout/Layout';
import { ShoppingBag, Truck } from 'lucide-react';

const Order = () => {
    return (
        <Layout>
            <Helmet>
                <title>Order Online | Monty’s Joint Thunder Bay</title>
                <meta name="description" content="Order takeout or delivery from Monty’s Joint. Available on SkipTheDishes and Uber Eats." />
                <link rel="canonical" href="https://montysjoint.com/order" />
                <meta property="og:title" content="Order Online | Monty’s Joint Thunder Bay" />
                <meta property="og:description" content="Order takeout or delivery from Monty’s Joint. Available on SkipTheDishes and Uber Eats." />
                <meta property="og:image" content="https://montysjoint.com/assets/montys-interior-food-1.webp" />
                <meta property="og:url" content="https://montysjoint.com/order" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div style={{ paddingTop: '120px', paddingBottom: '6rem' }} className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-yellow)' }}>Order Online</h1>
                <p style={{ textAlign: 'center', color: '#ccc', fontSize: '1.2rem', marginBottom: '4rem' }}>
                    Enjoy Monty's Joint from the comfort of your home. Choose your preferred service below.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Pickup Section */}
                    <div style={{ background: '#1a1a1a', padding: '3rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #333' }}>
                        <ShoppingBag size={64} color="var(--color-yellow)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Order for Pickup</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="https://www.skipthedishes.com/montys-joint-513?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#fff', color: '#000', border: 'none', fontWeight: 'bold' }}
                            >
                                Order on SkipTheDishes
                            </a>
                            <a
                                href="https://www.ubereats.com/ca/store/montys-joint-513-victoria-e/w2fMzhYDW7qzrF_d4y3GSw?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#06C167', color: '#fff', border: 'none', fontWeight: 'bold' }}
                            >
                                Order on Uber Eats
                            </a>
                        </div>
                    </div>

                    {/* Delivery Section */}
                    <div style={{ background: '#1a1a1a', padding: '3rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #333' }}>
                        <Truck size={64} color="var(--color-yellow)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Order for Delivery</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="https://www.skipthedishes.com/montys-joint-513?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#fff', color: '#000', border: 'none', fontWeight: 'bold' }}
                            >
                                Order on SkipTheDishes
                            </a>
                            <a
                                href="https://www.ubereats.com/ca/store/montys-joint-513-victoria-e/w2fMzhYDW7qzrF_d4y3GSw?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#06C167', color: '#fff', border: 'none', fontWeight: 'bold' }}
                            >
                                Order on Uber Eats
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Order;
