import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Scissors, 
  Clapperboard, 
  ShoppingBag, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Smartphone
} from 'lucide-react';
import './index.css';
// rebuild trigger

// Custom components
const Nav = () => (
  <nav className="container" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <div style={{ width: '40px', height: '40px', background: 'var(--primary-gradient)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Zap size={24} color="#000" />
      </div>
      <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
        Coupon<span className="gradient-text">Code</span>
      </span>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card" 
      style={{ padding: '8px 24px', display: 'flex', gap: '24px', borderRadius: '100px' }}
    >
      <a href="#how" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>How it Works</a>
      <a href="#cities" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Cities</a>
      <a href="#partner" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Partner</a>
    </motion.div>

    <motion.button 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="btn-primary" 
      style={{ padding: '10px 20px' }}
    >
      Get Access
    </motion.button>
  </nav>
);

const CategoryCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card" 
    style={{ padding: '32px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}
  >
    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 215, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
      {Icon && <Icon size={24} />}
    </div>
    <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{description}</p>
  </motion.div>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Glows */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(0, 198, 255, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>

      <Nav />

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '100px', color: 'var(--accent-color)', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
              <MapPin size={16} /> Launching soon in Surat, India
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
              Unlock the City with <br />
              <span className="gradient-text">One Exclusive App</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
              Pay just <span style={{ color: '#fff', fontWeight: 600 }}>₹1000</span> for the app access valid for <span style={{ color: '#fff', fontWeight: 600 }}>50 days</span>. Access deals at Surat's finest restaurants, salons, and theaters.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', background: 'var(--glass-bg)', padding: '8px', borderRadius: '16px', border: '1px solid var(--glass-border)', maxWidth: '500px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', padding: '12px 16px', outline: 'none', fontSize: '16px' }}
                required
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Waitlist
              </button>
            </form>
            
            <AnimatePresence>
              {submitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ color: '#00FF88', marginTop: '16px', fontSize: '14px', fontWeight: 500 }}
                >
                  ✓ You're on the list!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', width: '100%', aspectRatio: '4/5', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
               <img src="/coupon_app_mockup.png" alt="Premium Coupon App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Spend Less, <span className="gradient-text">Live More</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <CategoryCard icon={Utensils} title="Dining" description="Up to 50% off at top cafes." />
            <CategoryCard icon={Scissors} title="Salons" description="Luxury spas at affordable prices." />
            <CategoryCard icon={Clapperboard} title="Movies" description="Cinema deals for the fans." />
            <CategoryCard icon={ShoppingBag} title="Retail" description="Boutique discounts city-wide." />
          </div>
        </div>
      </section>

      {/* Math Section */}
      <section>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Transparent <br /><span className="gradient-text">Savings.</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ color: 'var(--text-secondary)' }}>1. Buy for ₹1000</p>
              <p style={{ color: 'var(--text-secondary)' }}>2. Use any coupon</p>
              <p style={{ color: 'var(--text-secondary)' }}>3. Pay seller directly (minus discount)</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Example Savings</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span>Dinner Check</span>
              <span>₹2,500</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-color)', fontWeight: 700 }}>
              <span>You Save</span>
              <span>- ₹750</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
            <Instagram size={24} />
            <Twitter size={24} />
            <Mail size={24} />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Powered by CouponCode</p>
        </div>
      </footer>
    </div>
  );
}
