import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaDraftingCompass, FaPencilAlt, FaRegComments, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './Hero.css';
import NeuralNetwork from './NeuralNetwork';

const StatCounter = ({ value }) => {
    // ... [StatCounter logic handled in previous turn] ...
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const numericValue = parseInt(value, 10) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, numericValue, count]);

    useEffect(() => {
        return rounded.on("change", (latest) => setDisplay(latest));
    }, [rounded]);

    return <span ref={ref}>{display}{suffix}</span>;
};

const Hero = () => {
    const { language } = useTheme();
    const t = translations[language].hero;
    const icons = [FaDraftingCompass, FaPencilAlt, FaRegComments];

    return (
        <section id="hero" className="hero-section hero-neural-flow">
            <div className="hero-container container">
                
                {/* LEFT COLUMN: Visual */}
                <div className="hero-visual">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <NeuralNetwork />
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Content */}
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            {t.title1} <br />
                            <span className="highlight-text">{t.title2}</span>
                        </h1>
                        <p className="hero-subtitle">{t.subtitle}</p>

                        <div className="hero-actions">
                            <button className="cta-btn solid-yellow" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                {t.ctaPrimary}
                            </button>
                            <button className="cta-btn text-arrow" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                <span className="arrow">↗</span> {t.ctaSecondary}
                            </button>
                        </div>

                        <div className="hero-stats">
                            {t.stats.map((stat, i) => (
                                <div key={i} className="stat-item">
                                    <h2 className="highlight-text">
                                        <StatCounter value={stat.value} />
                                    </h2>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Integrated Services List */}
                        <div className="hero-services-grid">
                            {t.services.map((service, i) => {
                                const IconComponent = icons[i] || FaPencilAlt;
                                return (
                                    <div key={i} className="mini-service">
                                        <div className="mini-icon"><IconComponent /></div>
                                        <div className="mini-text">
                                            <h4>{service.title}</h4>
                                            <p>{service.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
