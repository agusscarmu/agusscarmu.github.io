import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { courses } from '../data/db';

const Courses = () => {
    return (
        <section className="section" id="courses">
            <div className="container">
                <h2 className="section-title">Certifications & Courses</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{
                                    background: 'rgba(0, 242, 234, 0.1)',
                                    padding: '0.8rem',
                                    borderRadius: '50%',
                                    color: 'var(--primary)'
                                }}>
                                    <FaCertificate size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{course.name}</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}>{course.institution}</span>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                                {course.description}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', paddingTop: '0.8rem' }}>
                                <FaGraduationCap />
                                <span>Completed: {course.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
