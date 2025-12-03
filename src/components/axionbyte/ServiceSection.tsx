
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Monitor, Globe, Database, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Crafting fast, secure, and responsive websites tailored to your brand and business goals.',
  },
  {
    icon: Monitor,
    title: 'E-Commerce Solutions',
    description: 'Fully functional online stores built to convert visitors into loyal customers.',
  },
  {
    icon: Globe,
    title: 'UI/UX Design',
    description: 'Beautiful, Intuitive, and user-centered designs that bring your digital products and ideas to life.',
  },
  {
    icon: Database,
    title: 'Web Systems & Dashboards',
    description: 'Custom systems designed to streamline your operations and eliminate manual processes.',
  },
  {
    icon: Shield,
    title: 'Hosting & Maintenance',
    description: 'Reliable hosting and ongoing maintenance to ensure your website runs smoothly and securely.',
  },
  {
    icon: Smartphone,
    title: 'Bot Development',
    description: 'Automate tasks, boost engagement, and enhance user experiences with intelligent bots.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of technology services to help your business succeed in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
