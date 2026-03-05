import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/db';

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.8rem',
                                        borderRadius: '20px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.github} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    <FaGithub /> GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
