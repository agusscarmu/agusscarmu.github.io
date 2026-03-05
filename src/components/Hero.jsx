import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaStethoscope, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/db';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '0.5rem 1.5rem',
              background: 'rgba(0, 242, 234, 0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(0, 242, 234, 0.3)',
              color: 'var(--primary)'
            }}
          >
            <FaStethoscope /> <span>{personalInfo.titles[0]}</span>
            <span style={{ width: '1px', height: '15px', background: 'currentColor', opacity: 0.5 }}></span>
            <FaCode /> <span>{personalInfo.titles[1]}</span>
          </motion.div>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Agustin <span style={{ color: 'var(--primary)' }}>Carmusciano</span>
          </h1>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 300 }}>
            {personalInfo.tagline}
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.6' }}>
            {personalInfo.bio}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {personalInfo.social.map((social, idx) => (
                <SocialLink key={idx} href={social.url} icon={<social.icon />} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        opacity: 0.1,
        filter: 'blur(50px)',
        zIndex: -1
      }} />
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid var(--glass-border)',
      color: '#fff',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'var(--primary)';
      e.currentTarget.style.color = '#000';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {icon}
  </a>
);

export default Hero;
