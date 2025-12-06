import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const developers = [
  { name: 'Noel M. Saranza Jr.', role: 'Lead Developer', github: 'https://github.com/hesnoteyar' },
  { name: 'Alexander Joseph Fajartin', role: 'Frontend Developer', github: 'https://github.com/alekzzz01' },
  { name: 'Vincent Bernabe Romeo', role: 'Backend Developer', github: 'https://github.com/DaisuKiee' },
  { name: 'Charles Giann Marcelo', role: 'Backend Developer', github: 'https://github.com/CharlesNaig' },
  { name: 'Rebienald Khei Carpio', role: 'Backend Developer', github: 'https://github.com/Rebienald' },
];

const logoUrl = 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div ref={ref} style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 600, marginBottom: '1.5rem' }}>Our Portfolio</h2>
            <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.7 }}>
              Meet the talented developers behind our innovative solutions.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {developers.map((dev, index) => (
              <motion.a
                key={dev.name}
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ background: 'rgba(23, 23, 23, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s', textDecoration: 'none' }}
              >
                <div style={{ height: '12rem', overflow: 'hidden', background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))' }}>
                  <img src={logoUrl} alt={dev.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {dev.name}
                    <ExternalLink size={14} style={{ opacity: 0.5 }} />
                  </h3>
                  <span className="text-primary" style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>{dev.role}</span>
                  <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>DEVELOPER OF AXIONBYTE</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
