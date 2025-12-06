import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Monitor, Globe, Database, Shield, Smartphone } from 'lucide-react';

const services = [
  { icon: Code, title: 'Website Development', description: 'Crafting fast, secure, and responsive websites tailored to your brand and business goals.' },
  { icon: Monitor, title: 'E-Commerce Solutions', description: 'Fully functional online stores built to convert visitors into loyal customers.' },
  { icon: Globe, title: 'UI/UX Design', description: 'Beautiful, Intuitive, and user-centered designs that bring your digital products and ideas to life.' },
  { icon: Database, title: 'Web Systems & Dashboards', description: 'Custom systems designed to streamline your operations and eliminate manual processes.' },
  { icon: Shield, title: 'Hosting & Maintenance', description: 'Reliable hosting and ongoing maintenance to ensure your website runs smoothly and securely.' },
  { icon: Smartphone, title: 'Bot Development', description: 'Automate tasks, boost engagement, and enhance user experiences with intelligent bots.' },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.05), transparent)' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div ref={ref} style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 600, marginBottom: '1.5rem' }}>Our Services</h2>
            <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.7 }}>
              We offer a comprehensive range of technology services to help your business succeed in the digital landscape.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ background: 'rgba(23, 23, 23, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s' }}
              >
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <service.icon size={28} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{service.title}</h3>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
