import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const contactCards = [
  { icon: Phone, title: 'Call us!', subtitle: 'We are available 24/7 to assist you', action: '+639123456789', isButton: false },
  { icon: MessageCircle, title: 'Chat with us!', subtitle: 'Get instant support from our team', action: 'Chat Now', isButton: true },
  { icon: Mail, title: 'Inquire us!', subtitle: 'Send us your questions anytime', action: 'Get Started', isButton: true },
];

const logoUrl = 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692bf277&is=692aa0f7&hm=b67df0516874bebf24817ce4dbae7f93111e78e41d6be704ef26415ca4106af8&=&format=webp&quality=lossless&width=625&height=625';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div ref={ref} style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center' }}
              className="contact-text"
            >
              <h2 style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                Here's how you can connect with us!
              </h2>
              <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                We are happy to help you with your inquiries!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ background: 'linear-gradient(to bottom right, #9333ea, #7c3aed, #581c87)', borderRadius: '1.5rem', padding: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <div style={{ maxWidth: '16rem', margin: '0 auto 1.5rem', height: '12rem' }}>
                  <img src={logoUrl} alt="Customer Support" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  {contactCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      style={{ background: 'rgba(107, 33, 168, 0.5)', backdropFilter: 'blur(8px)', borderRadius: '1rem', padding: '1.25rem', textAlign: 'center', color: 'white', border: '1px solid rgba(168, 85, 247, 0.3)' }}
                    >
                      <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                        <card.icon size={24} />
                      </div>
                      <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>{card.title}</h3>
                      <p style={{ fontSize: '0.75rem', color: '#e9d5ff', marginBottom: '0.75rem', minHeight: '2rem' }}>{card.subtitle}</p>
                      {card.isButton ? (
                        <button className="btn btn-white" style={{ width: '100%' }}>{card.action}</button>
                      ) : (
                        <p style={{ fontSize: '0.875rem', fontWeight: 700, borderBottom: '2px solid white', paddingBottom: '0.25rem', display: 'inline-block' }}>{card.action}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-text { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
