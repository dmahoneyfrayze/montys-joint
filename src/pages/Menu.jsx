import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Utensils, Beer, Pizza, Sandwich, Salad, Drumstick, Star } from 'lucide-react';

const menuData = [
    {
        category: "Small Plates",
        icon: <Utensils size={32} color="var(--color-yellow)" />,
        items: [
            { name: "Bruschetta", price: "$11.25", description: "Toasted bread with tomatoes, garlic, onions, feta cheese, balsamic and fresh basil" },
            { name: "Pub Pickles", price: "$13.50", description: "Smoked gouda, feta, pickles in an egg roll wrap" },
            { name: "Mac n Cheese Bites", price: "$14.25", description: "Bite size Mac n Cheese balls with marinara for dipping" },
            { name: "Mozza Sticks", price: "$14.50", description: "Fresh made in-house mozzarella sticks with marinara" },
            { name: "Buffalo Chicken Dip", price: "$14.75", description: "Roasted chicken strips mixed with our house-made buffalo sauce, cheddar and cream cheese, served with nacho chips" },
            { name: "Monty's Cigars", price: "$15.00", description: "A mixture of chicken, sun-dried tomatoes, jalapeños, cheddar in an egg roll wrap" },
            { name: "Jerk Shrimp", price: "$16.50", description: "Succulent shrimp, red peppers, onions, celery sautéed in jerk sauce with toasted garlic bread" },
            { name: "Shrimp Fritto", price: "$16.50", description: "Prepared like classic calamari, shrimp and seasonal vegetables lightly coated and fried, comes with pepperoncini aioli for dipping" },
            { name: "Buttermilk Fried Chicken", price: "$16.50", description: "Buttermilk marinated chicken breaded, all made in-house with garlic aioli and hot honey. Great appetizer for sharing!" },
            { name: "Mac n Cheese", price: "$16.95", description: "Smoked gouda Mac n Cheese, topped with toasted panko and cheddar with toasted garlic bread" }
        ]
    },
    {
        category: "Favourites",
        icon: <Star size={32} color="var(--color-yellow)" />,
        items: [
            { name: "Fries", price: "$7.00", description: "B&B Farms potatoes, golden fried. Add gravy $2.00" },
            { name: "Garlic Parm Fries", price: "$9.75", description: "Our golden fried fries with our in-house made garlic and Parmesan coating" },
            { name: "Poutine", price: "$11.25", description: "Classic poutine with our golden fried fries, gravy, curds and mozzarella" },
            { name: "Cheese Nacho's", price: "$17.95", description: "Nacho chips, cheese, salsa & sour cream on the side" },
            { name: "Monty's Nacho's", price: "$21.50", description: "Nacho chips, cheese, peppers, red onions, black olives, jalapeño's, diced tomato's. Add-ons: bacon, chicken, beef, extra cheese - $5.00 each. Add buffalo chicken $7.00" },
            { name: "Wings", price: "1lb: $17.50 | 2lb: $29.50 | 3lb: $47.50", description: "Our chicken wings finished with dry rub or sauce, come with celery, carrot & your choice of blue cheese or ranch for dipping. Dry Rub: Salt n' pepper, Cajun, roasted red pepper & garlic, lemon pepper, Jerk. Sauce: Whiskey BBQ, jerk, buffalo sauce (mild-medium-hot). Add extra celery & carrots $3.00. Add extra blue cheese or ranch $1.50" }
        ]
    },
    {
        category: "Handhelds",
        icon: <Sandwich size={32} color="var(--color-yellow)" />,
        note: "Our all beef patties are made in-house! A mixture of ground chuck, brisket and a little Kosher salt to enhance the flavour.",
        items: [
            { name: "Cheese Quesadilla", price: "$12.50", description: "Side salsa & sour cream. Add chicken or beef $2.50 each" },
            { name: "Classic Burger", price: "$12.50", description: "Our house-made burger patty, ketchup, mustard and pickles. Add-ons ($3.00 ea): cheddar cheese, provolone, smoked gouda, mozzarella. Add-ons ($.50 ea): lettuce, tomato, onions, jalapeños, peanut butter. Add-ons ($2.50 ea): caramelized onions, strawberry Sriracha jam, chorizo jam, montys burger sauce" },
            { name: "Crispy Chicken Wrap", price: "$13.25", description: "Buttermilk fried chicken, lettuce, cheddar with choice of buffalo sauce (mild-medium-hot), whiskey BBQ, Cajun, jerk with blue cheese or ranch" },
            { name: "PB & Jam Time Burger", price: "$16.50", description: "Our house-made burger patty on a toasted kaiser bun, peanut butter, Sriracha strawberry jam, pickles, jalapeños, surprisingly delicious" },
            { name: "The United Burger", price: "$16.75", description: "Our house-made burger patty on a toasted kaiser bun, Caribbean spices, grilled red onion, provolone, Monty's burger sauce, lettuce, tomato" },
            { name: "Mac Daddy", price: "$16.95", description: "Our house-made burger patty topped with our smoky Mac n' Cheese and chorizo jam" },
            { name: "Buttermilk Chicken Sandwich", price: "$17.25", description: "Buttermilk marinated fried chicken breast, garlic aioli, lettuce, tomato and pickles" },
            { name: "Mac Mommy", price: "$17.75", description: "Our in-house buttermilk chicken breast topped with smoky Mac n' Cheese and chorizo onion jam" },
            { name: "Shrimp Lettuce Wrap", price: "$18.50", description: "Sautéed teriyaki shrimp, pickled radish & carrots, cucumber in a romaine lettuce wrap" }
        ],
        footer: "MAKE IT A MEAL, ADD A SIDE: fries $2.00 | garlic parm fries $4.25 | garden salad $4.75 | soup $4.75 | poutine $5.00 | caesar salad $7.00"
    },
    {
        category: "Salads",
        icon: <Salad size={32} color="var(--color-yellow)" />,
        items: [
            { name: "Garden Salad", price: "$13.50", description: "" },
            { name: "Caesar Salad", price: "Half $9.00 | Full $14.00", description: "Add grilled, Cajun, or blackened chicken $4.25" }
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
