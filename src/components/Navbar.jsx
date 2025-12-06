import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692c9b37&is=692b49b7&hm=cbae0240c37cf35720410c2985674af4c683db2d1b70849aa7266b57a1fd038a&=&format=webp&quality=lossless&width=625&height=625" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>axionbyte</span>
        </a>

        <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-muted-foreground" style={{ fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s' }}>
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="nav-actions-desktop">
          <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer', padding: '0.5rem' }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn btn-outline">Connect</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
          <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer', padding: '0.5rem' }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', cursor: 'pointer' }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--border)', padding: '1rem' }}
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground" style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.875rem' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>Connect</a>
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-actions-desktop { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
