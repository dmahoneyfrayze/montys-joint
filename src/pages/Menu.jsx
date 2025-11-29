import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Star, Sandwich, Salad, Drumstick, Pizza } from 'lucide-react';
import MotionSection from '../components/UI/MotionSection';

const Menu = () => {
    const menuCategories = [
        {
            id: 'burgers',
            title: 'Signature Burgers',
            icon: <Sandwich size={24} className="text-yellow" />,
            description: 'Hand-pressed, locally sourced beef patties served on a brioche bun.',
            items: [
                { name: 'The Monty', price: '$18', description: 'Double patty, cheddar, bacon, caramelized onions, house sauce.' },
                { name: 'Classic Smash', price: '$16', description: 'Single patty, american cheese, pickles, mustard, ketchup.' },
                { name: 'Mushroom Swiss', price: '$17', description: 'Sautéed mushrooms, swiss cheese, garlic aioli.' },
                { name: 'Spicy Inferno', price: '$18', description: 'Jalapeños, pepper jack, spicy mayo, hot sauce.' }
            ]
        },
        {
            id: 'bowls',
            title: 'Power Bowls',
            icon: <Salad size={24} className="text-yellow" />,
            description: 'Fresh, healthy, and packed with flavour.',
            items: [
                { name: 'Southwest Chicken', price: '$19', description: 'Grilled chicken, corn, black beans, avocado, chipotle dressing.' },
                { name: 'Quinoa Veggie', price: '$17', description: 'Quinoa, roasted veggies, feta, lemon vinaigrette.' },
                { name: 'Asian Fusion', price: '$19', description: 'Teriyaki chicken, edamame, slaw, sesame seeds.' }
            ]
        },
        {
            id: 'apps',
            title: 'Shareables',
            icon: <Drumstick size={24} className="text-yellow" />,
            description: 'Perfect for starting your meal or sharing with friends.',
            items: [
                { name: 'Loaded Fries', price: '$12', description: 'Cheese sauce, bacon bits, green onions.' },
                { name: 'Wings (1lb)', price: '$16', description: 'Choice of: BBQ, Buffalo, Honey Garlic, Salt & Pepper.' },
                { name: 'Nachos Supreme', price: '$20', description: 'Loaded with cheese, jalapeños, olives, salsa, sour cream.' }
            ]
        },
        {
            id: 'pizzas',
            title: 'Stone-Baked Pizzas',
            icon: <Pizza size={24} className="text-yellow" />,
            description: 'Crispy thin crust with premium toppings.',
            items: [
                { name: 'Margherita', price: '$16', description: 'Tomato sauce, fresh mozzarella, basil.' },
                { name: 'Pepperoni', price: '$17', description: 'Tomato sauce, mozzarella, double pepperoni.' },
                { name: 'BBQ Chicken', price: '$19', description: 'BBQ sauce, chicken, red onion, cilantro.' }
            ]
        }
    ];

    return (
        <div className="page-container">
            <div className="container section-padding">
                <MotionSection className="text-center mb-12">
                    <h1 className="page-title">OUR <span className="text-yellow">MENU</span></h1>
                    <p className="page-subtitle">Big flavours, locally sourced ingredients, and something for everyone.</p>
                </MotionSection>

                {/* Novemburger Promo Banner */}
                <MotionSection delay={0.1} className="mb-12">
                    <Link to="/promotions" className="block relative rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors z-10"></div>
                        <img src="/assets/novemburger.jpg" alt="Novemburger" className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                            <h3 className="text-2xl font-bold text-white mb-2">TRY THE JAM SESSION</h3>
                            <p className="text-yellow font-bold">NOVEMBURGER EXCLUSIVE</p>
                            <span className="mt-4 inline-block bg-yellow text-black px-4 py-2 rounded font-bold text-sm uppercase tracking-wider">View Details</span>
                        </div>
                    </Link>
                </MotionSection>

                <div className="menu-grid">
                    {menuCategories.map((category, index) => (
                        <MotionSection key={category.id} delay={index * 0.1} className="menu-category">
                            <div className="category-header flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
                                {category.icon}
                                <div>
                                    <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{category.title}</h2>
                                    <p className="text-gray-400 text-sm">{category.description}</p>
                                </div>
                            </div>
                            <div className="menu-items space-y-6">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="menu-item flex justify-between items-start group">
                                        <div className="flex-1 pr-4">
                                            <h3 className="text-lg font-bold text-white group-hover:text-yellow transition-colors">{item.name}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                                        </div>
                                        <span className="text-yellow font-bold text-lg">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </MotionSection>
                    ))}
                </div>

                <MotionSection delay={0.4} className="text-center mt-16 p-8 bg-darker rounded-xl border border-gray-800">
                    <Utensils size={48} className="text-yellow mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">DIETARY RESTRICTIONS?</h3>
                    <p className="text-gray-300 mb-6">We offer gluten-free buns and vegetarian options. Just ask your server!</p>
                    <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                </MotionSection>
            </div>
        </div>
    );
};

export default Menu;
