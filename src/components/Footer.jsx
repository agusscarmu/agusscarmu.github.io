import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            padding: '4rem 0',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Connect</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Open to collaborations on HealthTech projects, research opportunities, or just to chat about code and medicine.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <a href="https://github.com/AgustinCarmusciano" className="social-link" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/AgustinCarmusciano" className="social-link" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:contact@agustincarmusciano.com" className="social-link" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                        <FaEnvelope />
                    </a>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Dr. Agustin Carmusciano. All rights reserved.
                </p>
            </div>

            <style>{`
        .social-link:hover {
          color: var(--primary) !important;
          transform: translateY(-3px);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
