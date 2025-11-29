import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Promotions from './pages/Promotions';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Blog from './pages/Blog';
import BirthdayClub from './pages/BirthdayClub';
import Careers from './pages/Careers';
import NotFound from './pages/NotFoundPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/birthday-club" element={<BirthdayClub />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
