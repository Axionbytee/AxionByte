import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const features = [
  { icon: Target, title: 'Our Mission', description: 'To empower businesses with innovative technology solutions that drive growth and success.' },
  { icon: Users, title: 'Expert Team', description: 'Our team of skilled professionals brings years of experience in software development and IT consulting.' },
  { icon: Lightbulb, title: 'Innovation First', description: 'We stay ahead of the curve, implementing the latest technologies to give you a competitive edge.' },
  { icon: Award, title: 'Quality Assured', description: 'Every project we deliver meets the highest standards of quality and reliability.' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div ref={ref} style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 600, marginBottom: '1.5rem' }}>About AxionByte</h2>
            <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.7 }}>
              We are a technology agency based in the Philippines dedicated to helping businesses transform and thrive in the digital age.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ background: 'rgba(23, 23, 23, 0.5)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.5rem', transition: 'border-color 0.3s' }}
              >
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <feature.icon size={24} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{feature.title}</h3>
                <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
