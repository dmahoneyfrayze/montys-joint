import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Star, Sandwich, Salad, Drumstick, Pizza } from 'lucide-react';
import MotionSection from '../components/UI/MotionSection';
import Layout from '../components/Layout/Layout';
import './Menu.css';

const Menu = () => {
    const menuCategories = [
        {
            id: 'small-plates',
            title: 'Small Plates',
            icon: <Utensils size={24} className="text-yellow" />,
            description: 'Perfect for starting your meal or sharing with friends.',
            items: [
                { name: 'Bruschetta', price: '$11.25', description: 'Toasted bread with tomatoes, garlic, onions, feta cheese, balsamic and fresh basil.' },
                { name: 'Pub Pickles', price: '$13.50', description: 'Smoked gouda, feta, pickles in an egg roll wrap.' },
                { name: 'Mac N Cheese Bites', price: '$14.25', description: 'Bite size Mac n Cheese balls with marinara for dipping.' },
                { name: 'Mozza Sticks', price: '$14.50', description: 'Fresh made in-house mozzarella sticks with marinara.' },
                { name: 'Buffalo Chicken Dip', price: '$14.75', description: 'Roasted chicken strips mixed with our house-made buffalo sauce, cheddar and cream cheese, served with nacho chips.' },
                { name: "Monty's Cigars", price: '$15.00', description: 'A mixture of chicken, sun-dried tomatoes, jalapeños, cheddar in an egg roll wrap.' },
                { name: 'Jerk Shrimp', price: '$16.50', description: 'Succulent shrimp, red peppers, onions, celery sautéed in jerk sauce with toasted garlic bread.' },
                { name: 'Shrimp Fritto', price: '$16.50', description: 'Prepared like classic calamari, shrimp and seasonal vegetables lightly coated and fried, comes with pepperoncini aioli for dipping.' },
                { name: 'Buttermilk Fried Chicken', price: '$16.50', description: 'Buttermilk marinated chicken breaded, all made in-house with garlic aioli and hot honey. Great appetizer for sharing!' },
                { name: 'Mac N Cheese', price: '$16.95', description: 'Smoked gouda Mac n Cheese, topped with toasted panko and cheddar with toasted garlic bread.' }
            ]
        },
        {
            id: 'favourites',
            title: 'Favourites',
            icon: <Star size={24} className="text-yellow" />,
            description: 'Classic pub favourites done right.',
            items: [
                { name: 'Fries', price: '$7.00', description: 'B&B Farms potatoes, golden fried. Add gravy $2.00.' },
                { name: 'Garlic Parm Fries', price: '$9.75', description: 'Our golden fried fries with our in-house made garlic and Parmesan coating.' },
                { name: 'Poutine', price: '$11.25', description: 'Classic poutine with our golden fried fries, gravy, curds and mozzarella.' },
                { name: "Cheese Nacho's", price: '$17.95', description: 'Nacho chips, cheese, salsa & sour cream on the side.' },
                { name: "Monty's Nacho's", price: '$21.50', description: "Nacho chips, cheese, peppers, red onions, black olives, jalapeño's, diced tomato's. Add-ons: bacon, chicken, beef, extra cheese - $5.00 each. Add buffalo chicken $7.00." },
                { name: 'Wings', price: '1lb: $17.50 | 2lb: $29.50 | 3lb: $47.50', description: "Our chicken wings finished with dry rub or sauce, come with celery, carrot & your choice of blue cheese or ranch. Dry Rub: Salt n' pepper, Cajun, roasted red pepper & garlic, lemon pepper, Jerk. Sauce: Whiskey BBQ, jerk, buffalo sauce (mild-medium-hot)." }
            ]
        },
        {
            id: 'handhelds',
            title: 'Handhelds',
            icon: <Sandwich size={24} className="text-yellow" />,
            description: 'All beef patties made in-house! Served with choice of side.',
            items: [
                { name: 'Cheese Quesadilla', price: '$12.50', description: 'Side salsa & sour cream. Add chicken or beef $2.50 each.' },
                { name: 'Classic Burger', price: '$12.50', description: 'Our house-made burger patty, ketchup, mustard and pickles. Add-ons available.' },
                { name: 'Crispy Chicken Wrap', price: '$13.25', description: 'Buttermilk fried chicken, lettuce, cheddar with choice of buffalo sauce, whiskey BBQ, Cajun, jerk with blue cheese or ranch.' },
                { name: 'PB & Jam Time Burger', price: '$16.50', description: 'House-made patty, toasted kaiser bun, peanut butter, Sriracha strawberry jam, pickles, jalapeños.' },
                { name: 'The United Burger', price: '$16.75', description: "House-made patty, toasted kaiser bun, Caribbean spices, grilled red onion, provolone, Monty's burger sauce, lettuce, tomato." },
                { name: 'Mac Daddy', price: '$16.95', description: "House-made patty topped with our smoky Mac n' Cheese and chorizo jam." },
                { name: 'Buttermilk Chicken Sandwich', price: '$17.25', description: 'Buttermilk marinated fried chicken breast, garlic aioli, lettuce, tomato and pickles.' },
                { name: 'Mac Mommy', price: '$17.75', description: "In-house buttermilk chicken breast topped with smoky Mac n' Cheese and chorizo onion jam." },
                { name: 'Shrimp Lettuce Wrap', price: '$18.50', description: 'Sautéed teriyaki shrimp, pickled radish & carrots, cucumber in a romaine lettuce wrap.' }
            ]
        },
        {
            id: 'salads',
            title: 'Salads',
            icon: <Salad size={24} className="text-yellow" />,
            description: 'Fresh greens and house-made dressings.',
            items: [
                { name: 'Garden Salad', price: '$13.50', description: 'Fresh garden greens and vegetables.' },
                { name: 'Caesar Salad', price: 'Half $9.00 | Full $14.00', description: 'Classic caesar with croutons and parmesan. Add grilled, Cajun, or blackened chicken $4.25.' }
            ]
        },
        {
            id: 'flatbreads',
            title: 'Flatbreads',
            icon: <Pizza size={24} className="text-yellow" />,
            description: 'Crispy flatbreads with premium toppings.',
            items: [
                { name: 'Da Greek', price: '$17.50', description: 'Mozzarella, roasted red pepper, tomato, red onion, black olives.' },
                { name: 'Hot Peppe', price: '$18.50', description: 'Pepperoni, mozzarella, Parmesan, hot honey.' },
                { name: 'Balboa', price: '$19.50', description: 'Genoa salami, mortadella, hot eggplant, mozzarella, provolone.' },
                { name: 'Big Bold', price: '$20.50', description: 'Italian sausage, mozzarella, blue cheese, pickled onions, creamy garlic sauce, balsamic glaze.' }
            ]
        },
        {
            id: 'kids',
            title: 'Kids Meals',
            icon: <Star size={24} className="text-yellow" />,
            description: 'Includes fries and a pop or juice.',
            items: [
                { name: 'Kids Meal', price: '$12.25', description: 'Choice of Burger, Cheese Burger or Chicken Tenders.' }
            ]
        }
    ];

    return (
        <Layout>
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
        </Layout>
    );
};

export default Menu;
