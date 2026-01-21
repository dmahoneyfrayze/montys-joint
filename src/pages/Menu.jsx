import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { Utensils, Star, Sandwich, Salad, Drumstick, Pizza } from 'lucide-react';
import MotionSection from '../components/UI/MotionSection';
import Layout from '../components/Layout/Layout';
import { trackMenuView, trackTakeoutClick, trackCallClick } from '../utils/tracking';
import { getOptimizedImage } from '../utils/rss';
import './Menu.css';

const DietaryBadge = ({ type }) => {
    const colors = {
        GF: '#eab308', // Yellow
        V: '#22c55e',  // Green
        VE: '#16a34a'  // Dark Green
    };
    return (
        <span style={{
            display: 'inline-block',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            backgroundColor: colors[type] || '#666',
            color: '#000',
            marginLeft: '8px',
            verticalAlign: 'middle'
        }}>
            {type}
        </span>
    );
};

const Menu = () => {
    const menuCategories = [
        {
            id: 'specials',
            title: "Chef's Specials",
            icon: <Star size={24} className="text-yellow" />,
            description: 'Limited time creations from our kitchen.',
            items: [
                {
                    name: 'Gnocchi Al Sugo De Peperoni',
                    price: '$17.00',
                    description: 'Gnocchi with rose red pepper sauce. Red peppers and Italian sausage. With some cayenne and parmesan.',
                    availableUntil: '2025-12-31',
                    dietary: [],
                    allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false }
                },
                {
                    name: 'Broilers',
                    price: '$15.00',
                    description: 'Sausage meatballs stuffed with spinach and goat cheese. Wrapped in bacon and broiled. Served over marinara and bread for dipping.',
                    availableUntil: '2025-12-31',
                    dietary: [],
                    allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false }
                },
                {
                    name: 'Butternut Squash Ravioli',
                    price: '$18.00',
                    description: 'Squash and ricotta filled Ravioli. On a bed of sweet potato puree. Drizzled with maple brown butter sauce topped with crispy sage and gremalata.',
                    availableUntil: '2025-12-31',
                    dietary: ['V'],
                    allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false }
                }
            ]
        },
        {
            id: 'small-plates',
            title: 'Small Plates',
            icon: <Utensils size={24} className="text-yellow" />,
            description: 'Perfect for starting your meal or sharing with friends.',
            items: [
                { name: 'Bruschetta', price: '$11.25', description: 'Toasted bread with tomatoes, garlic, onions, feta cheese, balsamic and fresh basil.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Pub Pickles', price: '$13.50', description: 'Smoked gouda, feta, pickles in an egg roll wrap.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Mac N Cheese Bites', price: '$14.25', description: 'Bite size Mac n Cheese balls with marinara for dipping.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Mozza Sticks', price: '$14.50', description: 'Fresh made in-house mozzarella sticks with marinara.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Buffalo Chicken Dip', price: '$14.75', description: 'Roasted chicken strips mixed with our house-made buffalo sauce, cheddar and cream cheese, served with nacho chips.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: "Monty's Cigars", price: '$15.00', description: 'A mixture of chicken, sun-dried tomatoes, jalapeños, cheddar in an egg roll wrap.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Jerk Shrimp', price: '$16.50', description: 'Succulent shrimp, red peppers, onions, celery sautéed in jerk sauce with toasted garlic bread.', dietary: [], allergens: { containsNuts: false, containsDairy: false, containsGluten: true, containsShellfish: true } },
                { name: 'Shrimp Fritto', price: '$16.50', description: 'Prepared like classic calamari, shrimp and seasonal vegetables lightly coated and fried, comes with pepperoncini aioli for dipping.', dietary: [], allergens: { containsNuts: false, containsDairy: false, containsGluten: true, containsShellfish: true } },
                { name: 'Buttermilk Fried Chicken', price: '$16.50', description: 'Buttermilk marinated chicken breaded, all made in-house with garlic aioli and hot honey. Great appetizer for sharing!', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Mac N Cheese', price: '$16.95', description: 'Smoked gouda Mac n Cheese, topped with toasted panko and cheddar with toasted garlic bread.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } }
            ]
        },
        {
            id: 'favourites',
            title: 'Favourites',
            icon: <Star size={24} className="text-yellow" />,
            description: 'Classic pub favourites done right.',
            items: [
                { name: 'Fries', price: '$7.00', description: 'B&B Farms potatoes, golden fried. Add gravy $2.00.', dietary: ['V', 'VE', 'GF'], allergens: { containsNuts: false, containsDairy: false, containsGluten: false, containsShellfish: false } },
                { name: 'Garlic Parm Fries', price: '$9.75', description: 'Our golden fried fries with our in-house made garlic and Parmesan coating.', dietary: ['V', 'GF'], allergens: { containsNuts: false, containsDairy: true, containsGluten: false, containsShellfish: false } },
                { name: 'Poutine', price: '$11.25', description: 'Classic poutine with our golden fried fries, gravy, curds and mozzarella.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: "Cheese Nacho's", price: '$17.95', description: 'Nacho chips, cheese, salsa & sour cream on the side.', dietary: ['V', 'GF'], allergens: { containsNuts: false, containsDairy: true, containsGluten: false, containsShellfish: false } },
                { name: "Monty's Nacho's", price: '$21.50', description: "Nacho chips, cheese, peppers, red onions, black olives, jalapeño's, diced tomato's. Add-ons: bacon, chicken, beef, extra cheese - $5.00 each. Add buffalo chicken $7.00.", dietary: ['GF'], allergens: { containsNuts: false, containsDairy: true, containsGluten: false, containsShellfish: false } },
                { name: 'Wings', price: '1lb: $17.50 | 2lb: $29.50 | 3lb: $47.50', description: "Our chicken wings finished with dry rub or sauce, come with celery, carrot & your choice of blue cheese or ranch. Dry Rub: Salt n' pepper, Cajun, roasted red pepper & garlic, lemon pepper, Jerk. Sauce: Whiskey BBQ, jerk, buffalo sauce (mild-medium-hot).", dietary: ['GF'], allergens: { containsNuts: false, containsDairy: true, containsGluten: false, containsShellfish: false } }
            ]
        },
        {
            id: 'handhelds',
            title: 'Handhelds',
            icon: <Sandwich size={24} className="text-yellow" />,
            description: 'All beef patties made in-house! Served with choice of side.',
            items: [
                { name: 'Cheese Quesadilla', price: '$12.50', description: 'Side salsa & sour cream. Add chicken or beef $2.50 each.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Classic Burger', price: '$12.50', description: 'Our house-made burger patty, ketchup, mustard and pickles. Add-ons available.', dietary: [], allergens: { containsNuts: false, containsDairy: false, containsGluten: true, containsShellfish: false } },
                { name: 'Crispy Chicken Wrap', price: '$13.25', description: 'Buttermilk fried chicken, lettuce, cheddar with choice of buffalo sauce, whiskey BBQ, Cajun, jerk with blue cheese or ranch.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'PB & Jam Time Burger', price: '$16.50', description: 'House-made patty, toasted kaiser bun, peanut butter, Sriracha strawberry jam, pickles, jalapeños.', dietary: [], allergens: { containsNuts: true, containsDairy: false, containsGluten: true, containsShellfish: false } },
                { name: 'The United Burger', price: '$16.75', description: "House-made patty, toasted kaiser bun, Caribbean spices, grilled red onion, provolone, Monty's burger sauce, lettuce, tomato.", dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Mac Daddy', price: '$16.95', description: "House-made patty topped with our smoky Mac n' Cheese and chorizo jam.", dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Buttermilk Chicken Sandwich', price: '$17.25', description: 'Buttermilk marinated fried chicken breast, garlic aioli, lettuce, tomato and pickles.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Mac Mommy', price: '$17.75', description: "In-house buttermilk chicken breast topped with smoky Mac n' Cheese and chorizo onion jam.", dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Shrimp Lettuce Wrap', price: '$18.50', description: 'Sautéed teriyaki shrimp, pickled radish & carrots, cucumber in a romaine lettuce wrap.', dietary: ['GF'], allergens: { containsNuts: false, containsDairy: false, containsGluten: false, containsShellfish: true } }
            ]
        },
        {
            id: 'salads',
            title: 'Salads',
            icon: <Salad size={24} className="text-yellow" />,
            description: 'Fresh greens and house-made dressings.',
            items: [
                { name: 'Garden Salad', price: '$13.50', description: 'Fresh garden greens and vegetables.', dietary: ['V', 'VE', 'GF'], allergens: { containsNuts: false, containsDairy: false, containsGluten: false, containsShellfish: false } },
                { name: 'Caesar Salad', price: 'Half $9.00 | Full $14.00', description: 'Classic caesar with croutons and parmesan. Add grilled, Cajun, or blackened chicken $4.25.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } }
            ]
        },
        {
            id: 'flatbreads',
            title: 'Flatbreads',
            icon: <Pizza size={24} className="text-yellow" />,
            description: 'Crispy flatbreads with premium toppings.',
            items: [
                { name: 'Da Greek', price: '$17.50', description: 'Mozzarella, roasted red pepper, tomato, red onion, black olives.', dietary: ['V'], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Hot Peppe', price: '$18.50', description: 'Pepperoni, mozzarella, Parmesan, hot honey.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Balboa', price: '$19.50', description: 'Genoa salami, mortadella, hot eggplant, mozzarella, provolone.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } },
                { name: 'Big Bold', price: '$20.50', description: 'Italian sausage, mozzarella, blue cheese, pickled onions, creamy garlic sauce, balsamic glaze.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } }
            ]
        },
        {
            id: 'kids',
            title: 'Kids Meals',
            icon: <Star size={24} className="text-yellow" />,
            description: 'Includes fries and a pop or juice.',
            items: [
                { name: 'Kids Meal', price: '$12.25', description: 'Choice of Burger, Cheese Burger or Chicken Tenders.', dietary: [], allergens: { containsNuts: false, containsDairy: true, containsGluten: true, containsShellfish: false } }
            ]
        },
        {
            id: 'catering',
            title: 'Catering / Takeout / Events',
            icon: <Utensils size={24} className="text-yellow" />,
            description: 'Preordered takeout packages for parties and gatherings. Prepared fresh to order.',
            isComingSoon: true,
            items: [
                {
                    name: 'The Artisan Mediterranean Dip Package',
                    price: 'Coming Soon',
                    image: '/assets/mediterranean-dip-package.webp',
                    description: 'A sophisticated 1-Litre tasting experience (Serves 6-8). Featuring four signature house-made dips in 250ml portions. Perfect for hosts who want something elevated but approachable.',
                    longDescription: 'This artisan box is built for sharing and grazing, making it perfect for early arrivals or mixed crowds. Expect a curated selection of house-made dips paired with fresh bread and crackers—balanced, bold, and made fresh to order.'
                },
                {
                    name: 'The Mega Fryer Platter',
                    price: 'Coming Soon',
                    image: '/assets/mega-fryer-platter.webp',
                    description: 'The ultimate hot-and-crispy shareable (Serves 6-8). A mountain of golden favorites served with a trio of dipping sauces.',
                    longDescription: 'The Mega Fryer Platter is designed for big moments—game-winning plays, loud rooms, and guests who hover near the food table. It’s built to feed a group efficiently while keeping quality front and center.'
                },
                {
                    name: 'The Double Joint Combo',
                    price: 'Coming Soon',
                    image: '/assets/double-joint-combo.webp',
                    description: 'The best of both worlds. Includes one Artisan Mediterranean Box and one Mega Fryer Platter (Serves 12-15).',
                    longDescription: 'Perfect for mixed age groups, longer events, or hosts who want “something for everyone” without overthinking it. A balanced pairing of fresh artisan flavors and hot savory snacks.'
                }
            ]
        }
    ];



    const [searchQuery, setSearchQuery] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('');

    React.useEffect(() => {
        trackMenuView();
    }, []);

    // Filter Logic
    const filteredCategories = menuCategories.map(cat => {
        // If the category itself matches (e.g. "Burgers"), show all items.
        // Otherwise, filter items individually.
        const catMatches = cat.title.toLowerCase().includes(searchQuery.toLowerCase());
        const filteredItems = cat.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return {
            ...cat,
            items: catMatches ? cat.items : filteredItems
        };
    }).filter(cat => cat.items.length > 0);

    const scrollToCategory = (id) => {
        const el = document.getElementById(id);
        if (el) {
            // Offset for sticky header
            const y = el.getBoundingClientRect().top + window.scrollY - 180;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveCategory(id);
        }
    };

    // Scroll spy effect to set active category
    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200;
            for (const cat of menuCategories) {
                const el = document.getElementById(cat.id);
                if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
                    setActiveCategory(cat.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            <SEO
                title="Our Menu"
                description="Explore our menu featuring locally sourced burgers, shareable appetizers, fresh salads, and more. Gluten-free and vegetarian options available."
                url="https://montysjoint.com/menu/"
                image="https://montysjoint.com/assets/montys-interior-food-3.webp"
            />
            <div className="page-container menu-page" style={{ paddingBottom: '80px' }}> {/* Add padding for sticky footer */}
                <div className="container section-padding">
                    <MotionSection className="menu-header">
                        <h1 className="page-title">OUR <span className="text-yellow">MENU</span></h1>
                        <p className="page-subtitle">Big flavours, locally sourced ingredients, and something for everyone.</p>
                    </MotionSection>

                    {/* Sticky Controls Container */}
                    <div className="menu-controls-sticky">
                        {/* Search Bar */}
                        <div className="menu-search-container">
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="menu-search-input"
                            />
                        </div>

                        {/* Category Navigation */}
                        <div className="category-nav-scroll">
                            {menuCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollToCategory(cat.id)}
                                    className={`category-nav-pill ${activeCategory === cat.id ? 'active' : ''}`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>



                    <div className="menu-grid">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, index) => (
                                <MotionSection key={category.id} delay={index * 0.1} className="menu-category" id={category.id}>
                                    <div className="category-header">
                                        {category.icon}
                                        <div>
                                            <h2>{category.title}</h2>
                                            <p>{category.description}</p>
                                        </div>
                                        {category.isComingSoon && (
                                            <span className="coming-soon-badge">COMING SOON</span>
                                        )}
                                    </div>
                                    <div className="menu-items-grid">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="menu-item-card">
                                                {item.image && (
                                                    <img src={getOptimizedImage(item.image, 600)} alt={item.name} loading="lazy" className="menu-item-image" width="600" height="400" />
                                                )}
                                                <div className="menu-item-content">
                                                    <div className="menu-item-header">
                                                        <h3 className="menu-item-title">
                                                            {item.name}
                                                            {item.dietary && item.dietary.map(d => <DietaryBadge key={d} type={d} />)}
                                                        </h3>
                                                        <span className="menu-item-price">{item.price}</span>
                                                    </div>
                                                    <p className="menu-item-desc">{item.description}</p>
                                                    {item.longDescription && <p className="menu-item-long-desc">{item.longDescription}</p>}

                                                    {item.name.includes('Mediterranean') && (
                                                        <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                                                            Curious about our full range? <Link to="/menu/" style={{ color: 'var(--color-yellow)' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Browse the current Menu.</Link>
                                                        </p>
                                                    )}
                                                    {item.name.includes('Mega Fryer') && (
                                                        <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                                                            For smaller gatherings, check out our <a href="https://www.skipthedishes.com/montys-joint-513" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-yellow)' }}>Online Ordering</a> options.
                                                        </p>
                                                    )}
                                                    {item.name.includes('Double Joint') && (
                                                        <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                                                            Organizing a birthday? <Link to="/birthday-club/" style={{ color: 'var(--color-yellow)' }}>Join the Birthday Club</Link> for exclusive perks.
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </MotionSection>
                            ))
                        ) : (
                            <div style={{ textAlign: 'center', padding: '4rem', color: '#ccc' }}>
                                <h3>No items found matching "{searchQuery}"</h3>
                            </div>
                        )}
                    </div>

                    {/* Quick Navigation Links */}
                    <MotionSection delay={0.3} className="menu-quick-links">
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid #333', paddingTop: '2rem', marginTop: '4rem' }}>
                            <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
                            <Link to="/promotions/" style={{ color: '#888', textDecoration: 'none' }}>Promotions</Link>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', font: 'inherit' }}>Back to Top</button>
                        </div>
                    </MotionSection>

                    <MotionSection delay={0.4} className="dietary-section">
                        <Utensils size={48} className="text-yellow mx-auto mb-4" />
                        <h3>DIETARY RESTRICTIONS?</h3>
                        <p>We offer gluten-free buns and vegetarian options. Just ask your server!</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <DietaryBadge type="GF" /> Gluten-Free
                            <DietaryBadge type="V" /> Vegetarian
                            <DietaryBadge type="VE" /> Vegan
                        </div>
                        <Link to="/contact/" className="btn-outline" style={{ marginTop: '2rem', display: 'inline-block' }}>Contact Us</Link>
                    </MotionSection>
                </div>

                {/* Sticky Bottom CTA */}
                <div className="sticky-menu-cta">
                    <a href="https://www.skipthedishes.com/montys-joint-513" target="_blank" rel="noopener noreferrer" className="cta-btn order-btn" onClick={() => trackTakeoutClick('skipthedishes', 'delivery', 'menu_sticky_cta', 'https://www.skipthedishes.com/montys-joint-513')}>
                        Order Online
                    </a>
                    <a href="tel:+18073430001" className="cta-btn call-btn" onClick={() => trackCallClick('menu_sticky_cta')}>
                        Call Now
                    </a>
                </div>
            </div>

            {/* Add spacing to prevent sticky CTA from overlapping footer */}
            <div style={{ height: '100px' }}></div>
        </Layout>
    );
};

export default Menu;
