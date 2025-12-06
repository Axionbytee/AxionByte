import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(168, 85, 247, 0.15) 0%, transparent 60%)' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)', fontWeight: 600, marginBottom: '1rem' }}
        >
          Welcome to AxionByte!
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 500, marginBottom: '2rem' }}
        >
          Your gateway to innovate solutions.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground"
          style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', maxWidth: '42rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}
        >
          To empower brands through modern web solutions. What began as a small project among passionate developers has evolved into a growing digital studio focused on quality, innovation, and trust.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Get Started</a>
          <a href="#about" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>Learn More</a>
        </motion.div>
      </div>
      
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '8rem', background: 'linear-gradient(to top, var(--background), transparent)' }} />
    </section>
  );
}
