import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Website Development', href: '#services' },
    { name: 'E-Commerce Solutions', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Web Systems & Dashboards', href: '#services' },
    { name: 'Hosting & Maintenance', href: '#services' },
    { name: 'Bot Development', href: '#services' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(23, 23, 23, 0.3)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--primary-foreground)', fontWeight: 700, fontSize: '1.125rem' }}>A</span>
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>axionbyte</span>
              </a>
              <p className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Your gateway to innovative technology solutions. We help businesses thrive in the digital age.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" aria-label="Instagram" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', transition: 'all 0.3s' }}>
                  <Instagram size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground" style={{ fontSize: '0.875rem', transition: 'color 0.3s' }}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Services</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground" style={{ fontSize: '0.875rem', transition: 'color 0.3s' }}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Contact Us</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Mail size={16} color="var(--primary)" style={{ marginTop: '0.125rem' }} />
                  <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>hello@axionbyte.com</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Phone size={16} color="var(--primary)" style={{ marginTop: '0.125rem' }} />
                  <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>+639616480020</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={16} color="var(--primary)" style={{ marginTop: '0.125rem' }} />
                  <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Manila, Philippines</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ borderTop: '1px solid var(--border)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center' }}
          >
            <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} AxionByte. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
