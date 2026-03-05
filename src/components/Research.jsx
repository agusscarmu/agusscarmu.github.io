import { motion } from 'framer-motion';
import { FaUniversity, FaMicroscope, FaCalendarAlt } from 'react-icons/fa';
import { research } from '../data/db';

const Research = () => {
    return (
        <section className="section" id="research">
            <div className="container">
                <h2 className="section-title">Research & Academia</h2>

                {/* Academic Interests Spotlight */}
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(0, 242, 234, 0.05))',
                        borderColor: 'var(--primary)',
                        marginBottom: '4rem'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                        <FaUniversity size={30} />
                        <h3 style={{ margin: 0 }}>Academic Interests</h3>
                    </div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        {research.futureResearch.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '800px' }}>
                        {research.futureResearch.description}
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {research.futureResearch.tags.map((tag, i) => (
                            <span key={i} style={{ color: 'var(--secondary)', background: 'rgba(112, 0, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Collaborations Section (Render only if present) */}
                {research.collaborations && research.collaborations.length > 0 && (
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Research Collaborations</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {research.collaborations.map((collab, idx) => (
                                <motion.div
                                    onClick={() => window.open(collab.link, '_blank')}
                                    key={idx}
                                    style={{ cursor: 'pointer' }}
                                    className="glass-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{collab.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{collab.authors}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                        <span style={{ color: 'var(--primary)' }}>Role: {collab.role}</span>
                                        <span style={{ color: 'var(--text-muted)' }}>{collab.journal} ({collab.year})</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Congresses Grid */}
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Conferences & Congresses</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {research.congresses.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <FaCalendarAlt style={{ color: 'var(--text-muted)' }} />
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>{item.date}</span>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.role} • {item.location}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Research;
