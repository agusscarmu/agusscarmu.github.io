import { motion } from 'framer-motion';
import { skills } from '../data/db';

const TechStack = () => {
    return (
        <section className="section" id="tech-stack">
            <div className="container">
                <h2 className="section-title">Technologies</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                                {category.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.items.map((item, i) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ fontSize: '2.5rem', color: item.color, filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.1))' }}>
                                                <IconComponent />
                                            </div>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
