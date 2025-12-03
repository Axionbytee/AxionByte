
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const developers = [
  {
    name: 'Noel M. Saranza Jr.',
    role: 'Lead Developer',
    description: 'DEVELOPER OF AXIONBYTE',
    image: 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625',
    github: 'https://github.com/hesnoteyar',
  },
  {
    name: 'Alexander Joseph Fajartin',
    role: 'Frontend Developer',
    description: 'DEVELOPER OF AXIONBYTE',
    image: 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625',
    github: 'https://github.com/alekzzz01',
  },
  {
    name: 'Vincent Bernabe Romeo',
    role: 'Backend Developer',
    description: 'DEVELOPER OF AXIONBYTE',
    image: 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625',
    github: 'https://github.com/DaisuKiee',
  },
  {
    name: 'Charles Giann Marcelo',
    role: 'Backend Developer',
    description: 'DEVELOPER OF AXIONBYTE',
    image: 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625',
    github: 'hhttps://github.com/CharlesNaig',
  },
  {
    name: 'Rebienald Khei Carpio',
    role: 'Backend Developer',
    description: 'DEVELOPER OF AXIONBYTE',
    image: 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625',
    github: 'https://github.com/Rebienald',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Meet the talented developers behind our innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {developers.map((dev, index) => (
              <motion.a
                key={dev.name}
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {dev.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-primary text-sm font-medium block mb-2">
                    {dev.role}
                  </span>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {dev.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
