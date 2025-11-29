import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        ]
    },
    {
        category: "Kids Meals!",
        icon: <Drumstick size={32} color="var(--color-yellow)" />,
        items: [
            { name: "Burger, Cheese Burger or Chicken Tenders", price: "$12.25", description: "Your choice of Burger, Cheese Burger or Chicken Tenders. Includes fries and a pop or juice" }
        ]
    },
    {
        category: "Flatbreads",
        icon: <Pizza size={32} color="var(--color-yellow)" />,
        items: [
            { name: "Da Greek", price: "$17.50", description: "Mozzarella, roasted red pepper, tomato, red onion, black olives" },
            { name: "Hot Peppe", price: "$18.50", description: "Pepperoni, mozzarella, Parmesan, hot honey" },
            { name: "Balboa", price: "$19.50", description: "Genoa salami, mortadella, hot eggplant, mozzarella, provolone" },
            { name: "Big Bold", price: "$20.50", description: "Italian sausage, mozzarella, blue cheese, pickled onions, creamy garlic sauce, balsamic glaze" }
        ]
    }
];

const Menu = () => {
    return (
        <Layout>
            <Helmet>
                <title>Monty’s Joint Menu | Gastropub Food, Pub Classics & Kids’ Meals</title>
                <meta name="description" content="Explore the Monty’s Joint menu — gastropub favourites, comfort food, handhelds, shareables, and kids’ meals. Served fresh in Thunder Bay." />
            </Helmet>
            <div style={{ paddingTop: '100px', paddingBottom: '4rem' }} className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <img src="/assets/burger-stamp.webp" alt="Monty's Joint Stamp" style={{ width: '100px', marginBottom: '1rem', opacity: '0.9' }} />
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-yellow)' }}>Our Menu</h1>
                </div>

                <div style={{ display: 'grid', gap: '4rem' }}>
                    {menuData.map((section) => (
                        <div key={section.category} className="menu-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                {section.icon}
                                <h2 style={{ borderBottom: '2px solid var(--color-yellow)', color: 'var(--color-white)', fontSize: '2rem', margin: 0 }}>
                                    {section.category.toUpperCase()}
                                </h2>
                            </div>
                            {section.note && (
                                <p style={{ color: '#ccc', marginBottom: '2rem', fontStyle: 'italic' }}>{section.note}</p>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                {section.items.map((item) => (
                                    <div key={item.name} style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <h3 style={{ color: 'var(--color-yellow)', margin: 0, fontSize: '1.2rem' }}>{item.name}</h3>
                                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{item.price}</span>
                                        </div>
                                        {item.description && (
                                            <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.4' }}>{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {section.footer && (
                                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#222', borderRadius: '4px', textAlign: 'center', color: 'var(--color-yellow)', fontWeight: 'bold' }}>
                                    {section.footer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ color: '#ccc' }}>
                        *Menu items and prices subject to change. Please visit us for the latest offerings.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Menu;
