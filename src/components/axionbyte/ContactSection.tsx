
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const contactCards = [
  {
    icon: Phone,
    title: 'Call us!',
    subtitle: 'We are available 24/7 to assist you',
    action: '+639123456789',
    isButton: false,
  },
  {
    icon: MessageCircle,
    title: 'Chat with us!',
    subtitle: 'Get instant support from our team',
    action: 'Chat Now',
    isButton: true,
  },
  {
    icon: Mail,
    title: 'Inquire us!',
    subtitle: 'Send us your questions anytime',
    action: 'Get Started',
    isButton: true,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Here&apos;s how you can connect with us!
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                We are happy to help you with your inquiries!
              </p>
            </motion.div>

            {/* Right Content - Card with Character and Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Purple Card */}
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
                {/* 3D Character Illustration */}
                <div className="relative w-full max-w-xs mx-auto mb-6 sm:mb-8">
                  <div className="relative h-48 sm:h-64">
                    <Image
                      src="https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692bf277&is=692aa0f7&hm=b67df0516874bebf24817ce4dbae7f93111e78e41d6be704ef26415ca4106af8&=&format=webp&quality=lossless&width=625&height=625"
                      alt="Customer Support Representative"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {contactCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-5 text-center text-white border border-purple-500/30 hover:bg-purple-700/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <card.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-sm font-semibold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-purple-200 mb-3 min-h-[32px]">
                        {card.subtitle}
                      </p>
                      {card.isButton ? (
                        <Button
                          size="sm"
                          className="text-xs px-4 py-2 h-auto bg-white text-purple-700 hover:bg-purple-50 rounded-full font-semibold w-full"
                        >
                          {card.action}
                        </Button>
                      ) : (
                        <p className="text-sm font-bold border-b-2 border-white pb-1 inline-block">
                          {card.action}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
