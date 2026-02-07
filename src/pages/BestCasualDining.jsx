import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const BestCasualDining = () => {
    return (
        <Layout>
            <SEO
                title="Best Casual Dining in Thunder Bay | Monty’s Joint"
                description="Monty’s Joint is one of the best casual dining restaurants in Thunder Bay — known for wings, burgers, late nights, and a relaxed atmosphere. View the menu or reserve a table."
                url="https://montysjoint.com/best-casual-dining-thunder-bay/"
            />
            <div className="container" style={{ padding: '6rem 1rem 4rem', maxWidth: '800px' }}>
                <MotionSection>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-yellow)' }}>Best Casual Dining in Thunder Bay</h1>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                        Casual dining is one of the most popular ways to eat in Thunder Bay. It’s about enjoying good food in a relaxed environment — without the formality of fine dining or the rush of fast food.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                        For locals and visitors alike, Monty’s Joint has become a trusted option for casual dining thanks to its comfort-focused menu, welcoming atmosphere, and flexible seating.
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Why Monty’s Joint Is Known for Casual Dining</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Monty’s Joint offers a casual dining experience that works for a wide range of occasions:
                    </p>
                    <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Wings, burgers, nachos, and poutine</li>
                        <li style={{ marginBottom: '0.5rem' }}>Relaxed, social atmosphere</li>
                        <li style={{ marginBottom: '0.5rem' }}>Late-night food options</li>
                        <li style={{ marginBottom: '0.5rem' }}>Group-friendly seating and events</li>
                        <li style={{ marginBottom: '0.5rem' }}>Downtown Thunder Bay location</li>
                    </ul>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                        It’s a restaurant where you can come as you are — whether you’re grabbing dinner, meeting friends, or staying late.
                    </p>
                    <Link to="/menu/" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', border: 'none', padding: '0.8rem 1.5rem', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px', marginBottom: '3rem', display: 'inline-block' }}>View the menu</Link>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Trusted by Locals in Thunder Bay</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Monty’s Joint is a familiar name among Thunder Bay restaurants, especially for casual dining and social nights out.
                    </p>
                    <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Highly rated on Google</li>
                        <li style={{ marginBottom: '0.5rem' }}>Popular with regulars and returning guests</li>
                        <li style={{ marginBottom: '0.5rem' }}>Known for consistency and atmosphere</li>
                    </ul>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                        That combination is why many diners consider it one of the best casual dining restaurants in Thunder Bay.
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Quick Visit Information</h2>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Status:</strong> Open now (based on today’s hours)</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Location:</strong> Downtown Thunder Bay</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Parking:</strong> Nearby parking available</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Reservations:</strong> Accepted</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Walk-ins:</strong> Welcome</li>
                    </ul>
                    <p style={{ marginBottom: '3rem' }}>
                        📍 <Link to="/contact/" style={{ color: 'var(--color-yellow)' }}>Directions & contact</Link>
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Menu Highlights</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Casual dining at Monty’s Joint means food that’s easy to enjoy and made to share.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Explore:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Wings & specials: <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>https://montysjoint.com/menu/</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}>Burgers & comfort food: <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>https://montysjoint.com/menu/</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}>Nachos & appetizers: <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>https://montysjoint.com/menu/</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}>Late-night favourites: <Link to="/menu/" style={{ color: 'var(--color-yellow)' }}>https://montysjoint.com/menu/</Link></li>
                    </ul>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Group Dining & Casual Events</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Looking for a casual place to host a group night, birthday, or gathering?
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Monty’s Joint regularly hosts group dining and private events in a relaxed setting.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                        👉 <Link to="/private-events/" style={{ color: 'var(--color-yellow)' }}>Learn more about private events</Link>
                    </p>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Casual Dining FAQ</h2>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>What is casual dining?</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ccc' }}>
                            Casual dining refers to restaurants that offer quality food in a relaxed, informal atmosphere without strict dress codes or fine-dining formality.
                        </p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>Is Monty’s Joint good for groups?</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ccc' }}>
                            Yes. Monty’s Joint is a popular choice for group dining, celebrations, and casual events in Thunder Bay.
                        </p>
                    </div>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>Do I need a reservation?</h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ccc' }}>
                            Reservations are recommended for groups, but walk-ins are always welcome.
                        </p>
                    </div>

                    <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '3rem', marginBottom: '1.5rem' }}>Looking for Casual Dining in Thunder Bay Tonight?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
                        If you want a comfortable place to eat, drink, and spend time with friends, Monty’s Joint offers one of the best casual dining experiences in Thunder Bay.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link to="/menu/" style={{ color: 'var(--color-yellow)', fontSize: '1.1rem', textDecoration: 'none' }}>👉 View the menu</Link>
                        <Link to="/reservations/" style={{ color: 'var(--color-yellow)', fontSize: '1.1rem', textDecoration: 'none' }}>👉 Reserve a table</Link>
                        <Link to="/contact/" style={{ color: 'var(--color-yellow)', fontSize: '1.1rem', textDecoration: 'none' }}>👉 Get directions</Link>
                    </div>
                </MotionSection>
            </div>
        </Layout>
    );
};

export default BestCasualDining;
