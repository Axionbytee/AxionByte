import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, User } from 'lucide-react';

const developers = [
  { 
    name: 'Noel M. Saranza Jr.', 
    role: 'Founder', 
    github: 'https://github.com/hesnoteyar',
    bio: 'Leads our development team with expertise in full-stack technologies',
    skills: ['React', 'Laravel', 'MySQL']
  },
  { 
    name: 'Alexander Joseph Fajartin', 
    role: 'Frontend Developer', 
    github: 'https://github.com/alekzzz01',
    bio: 'Creates stunning user interfaces and exceptional user experiences',
    skills: ['React', 'UI/UX Design', 'Tailwind CSS']
  },
  { 
    name: 'Vincent Bernabe Romeo', 
    role: 'Backend Developer', 
    github: 'https://github.com/DaisuKiee',
    bio: 'Builds robust server-side solutions and database architectures',
    skills: ['Node.js', 'Python', 'MongoDB']
  },
  { 
    name: 'Charles Giann Marcelo', 
    role: 'Frontend Developer', 
    github: 'https://github.com/CharlesNaig',
    bio: 'Specializes in API development and system integration',
    skills: ['Express.js', 'PostgreSQL', 'Docker']
  },
  { 
    name: 'Rebienald Khei Carpio', 
    role: 'Backend Developer', 
    github: 'https://github.com/Rebienald',
    bio: 'Focuses on scalable backend systems and cloud infrastructure',
    skills: ['AWS', 'Node.js', 'Redis']
  },
];

const logoUrl = 'https://media.discordapp.net/attachments/1415281187420770405/1417412186296287322/Axionbyte.png?ex=692d43f7&is=692bf277&hm=4dbe66b39565e0447efcf2881e77b01bdad8d900844d457d3d2695c9a17f3402&=&format=webp&quality=lossless&width=625&height=625';

const DeveloperCard = ({ dev, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ 
      duration: 0.7, 
      delay: index * 0.15,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    style={{ 
      background: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(10px)', 
      border: '1px solid rgba(255, 255, 255, 0.1)', 
      borderRadius: '1.5rem', 
      overflow: 'hidden', 
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      position: 'relative',
      height: '550px', // Fixed height for consistency
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
      e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    }}
  >
    {/* Enhanced Image Section */}
    <div style={{ 
      height: '200px', // Fixed height for images
      overflow: 'hidden', 
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.2))',
      position: 'relative',
      flexShrink: 0
    }}>
      <img 
        src={logoUrl} 
        alt={dev.name} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          transition: 'transform 0.5s ease, filter 0.3s ease',
          filter: 'brightness(0.9) contrast(1.1)'
        }} 
      />
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '50%',
        padding: '0.5rem',
        transition: 'transform 0.3s ease'
      }}>
        <User size={16} color="white" />
      </div>
    </div>

    {/* Enhanced Content Section */}
    <div style={{ 
      padding: '2rem 1.5rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          marginBottom: '0.5rem',
          color: 'white',
          lineHeight: 1.3,
          minHeight: '2.5rem' // Consistent title height
        }}>
          {dev.name}
        </h3>
        
        <span style={{ 
          fontSize: '1rem', 
          fontWeight: 500, 
          color: '#a855f7',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          {dev.role}
        </span>
        
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.5,
          marginBottom: '1.5rem',
          minHeight: '3rem' // Consistent bio height
        }}>
          {dev.bio}
        </p>

        {/* Skills Section */}
        <div style={{ 
          marginBottom: '2rem',
          minHeight: '3rem' // Consistent skills height
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem' 
          }}>
            {dev.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.8rem',
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#a855f7',
                  borderRadius: '1rem',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced GitHub Link */}
      <a
        href={dev.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.5rem',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          width: '100%',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)',
          marginTop: 'auto'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 20px rgba(168, 85, 247, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.3)';
        }}
      >
        <Github size={16} />
        View GitHub Profile
        <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="portfolio" style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.5), rgba(0, 0, 0, 0.8))' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div ref={ref}>
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '1rem' }}
            >
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#a855f7',
                marginBottom: '1.5rem'
              }}>
                Meet Our Team
              </span>
            </motion.div>
            
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: 700, 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2
            }}>
              Our Portfolio
            </h2>
            <p className="text-muted-foreground" style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', 
              maxWidth: '42rem', 
              margin: '0 auto', 
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              Meet the talented developers behind our innovative solutions and cutting-edge technology.
            </p>
          </motion.div>

          {/* Consistent Grid Layout - 3 on top, 2 centered below */}
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Top row - 3 cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {developers.slice(0, 3).map((dev, index) => (
                <DeveloperCard 
                  key={dev.name} 
                  dev={dev} 
                  index={index} 
                  isInView={isInView} 
                />
              ))}
            </div>

            {/* Bottom row - 2 cards centered */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '2rem',
              maxWidth: '740px', // Adjusted to match card width
              margin: '0 auto'
            }}>
              {developers.slice(3, 5).map((dev, index) => (
                <DeveloperCard 
                  key={dev.name} 
                  dev={dev} 
                  index={index + 3} 
                  isInView={isInView} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container > div > div:nth-child(2) > div:first-child,
          .container > div > div:nth-child(2) > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
