import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Star, Sandwich, Salad, Drumstick, Pizza } from 'lucide-react';
import MotionSection from '../components/UI/MotionSection';
import './Menu.css';

const Menu = () => {
    const menuCategories = [
        {
            id: 'burgers',
            title: 'Signature Burgers',
            icon: <Sandwich size={24} className="text-yellow" />,
            description: 'Hand-pressed, locally sourced beef patties served on a brioche bun.',
            items: [
                {
                    name: 'The Monty',
                    price: '$18',
                    description: 'Double patty, cheddar, bacon, caramelized onions, house sauce.',
                    image: '/assets/menu-burger.png'
                },
                {
                    name: 'Classic Smash',
                    price: '$16',
                    description: 'Single patty, american cheese, pickles, mustard, ketchup.'
                },
                {
                    name: 'Mushroom Swiss',
                    price: '$17',
                    description: 'Sautéed mushrooms, swiss cheese, garlic aioli.'
                },
                {
                    name: 'Spicy Inferno',
                    price: '$18',
                    description: 'Jalapeños, pepper jack, spicy mayo, hot sauce.'
                }
            ]
        },
        {
            id: 'bowls',
            title: 'Power Bowls',
            icon: <Salad size={24} className="text-yellow" />,
            description: 'Fresh, healthy, and packed with flavour.',
            items: [
                {
                    name: 'Southwest Chicken',
                    price: '$19',
                    description: 'Grilled chicken, corn, black beans, avocado, chipotle dressing.'
                },
                {
                    name: 'Quinoa Veggie',
                    price: '$17',
                    description: 'Quinoa, roasted veggies, feta, lemon vinaigrette.'
                },
                {
                    name: 'Asian Fusion',
                    price: '$19',
                    description: 'Teriyaki chicken, edamame, slaw, sesame seeds.'
                }
            ]
        },
        {
            id: 'apps',
            title: 'Shareables',
            icon: <Drumstick size={24} className="text-yellow" />,
            description: 'Perfect for starting your meal or sharing with friends.',
            items: [
                {
                    name: 'Loaded Fries',
                    price: '$12',
                    description: 'Cheese sauce, bacon bits, green onions.'
                },
                {
                    name: 'Wings (1lb)',
                    price: '$16',
                    description: 'Choice of: BBQ, Buffalo, Honey Garlic, Salt & Pepper.'
                },
                {
                    name: 'Nachos Supreme',
                    price: '$20',
                    description: 'Loaded with cheese, jalapeños, olives, salsa, sour cream.'
                }
            ]
        },
        {
            id: 'pizzas',
            title: 'Stone-Baked Pizzas',
            icon: <Pizza size={24} className="text-yellow" />,
            description: 'Crispy thin crust with premium toppings.',
            items: [
                {
                    name: 'Margherita',
                    price: '$16',
                    description: 'Tomato sauce, fresh mozzarella, basil.'
                },
                {
                    name: 'Pepperoni',
                    price: '$17',
                    description: 'Tomato sauce, mozzarella, double pepperoni.'
                },
                {
                    name: 'BBQ Chicken',
                    price: '$19',
                    description: 'BBQ sauce, chicken, red onion, cilantro.'
                }
            ]
        }
    ];

    return (
        <div className="page-container menu-page">
            <div className="container section-padding">
                <MotionSection className="menu-header">
                    <h1 className="page-title">OUR <span className="text-yellow">MENU</span></h1>
                    <p className="page-subtitle">Big flavours, locally sourced ingredients, and something for everyone.</p>
                </MotionSection>

                {/* Novemburger Promo Banner */}
                <MotionSection delay={0.1}>
                    <Link to="/promotions" className="promo-banner">
                        <div className="promo-overlay">
                            <div className="promo-content">
                                <h3>TRY THE JAM SESSION</h3>
                                <p>NOVEMBURGER EXCLUSIVE</p>
                                <span className="promo-btn">View Details</span>
                            </div>
                        </div>
                        <img src="/assets/novemburger.jpg" alt="Novemburger" />
                    </Link>
                </MotionSection>

                <div className="menu-grid">
                    {menuCategories.map((category, index) => (
                        <MotionSection key={category.id} delay={index * 0.1} className="menu-category">
                            <div className="category-header">
                                {category.icon}
                                <div>
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                            <div className="menu-items-grid">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="menu-item-card">
                                        {item.image && (
                                            <img src={item.image} alt={item.name} className="menu-item-image" />
                                        )}
                                        <div className="menu-item-content">
                                            <div className="menu-item-header">
                                                <h3 className="menu-item-title">{item.name}</h3>
                                                <span className="menu-item-price">{item.price}</span>
                                            </div>
                                            <p className="menu-item-desc">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MotionSection>
                    ))}
                </div>

                <MotionSection delay={0.4} className="dietary-section">
                    <Utensils size={48} className="text-yellow mx-auto mb-4" />
                    <h3>DIETARY RESTRICTIONS?</h3>
                    <p>We offer gluten-free buns and vegetarian options. Just ask your server!</p>
                    <Link to="/contact" className="btn-outline">Contact Us</Link>
                </MotionSection>
            </div>
        </div>
    );
};

export default Menu;
