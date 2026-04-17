import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './Experience.css';

const Experience = () => {
    const { language } = useTheme();
    const t = translations[language].experience;

    const experienceData = [
    {
        role: "AI Engineer – Amazon ML Challenge 2025",
        company: "Amazon ML Challenge",
        period: "2025",
        description: "Built machine learning solutions focused on large-scale prediction tasks under real-world constraints. Worked on model optimization, feature engineering, and performance tuning for competitive evaluation."
    },
    {
        role: "Generative AI Developer – Adobe India Hackathon",
        company: "Adobe India Hackathon",
        period: "2025",
        description: "Developed AI-powered creative workflows using generative models. Focused on building intelligent content generation pipelines and improving UX through AI-driven automation."
    },
    {
        role: "AI Systems Engineer – Meta PyTorch Hackathon",
        company: "Meta (PyTorch Hackathon)",
        period: "2025",
        description: "Built EXAI ICU system using deep learning and reinforcement learning concepts. Designed explainable AI decision-making pipelines with real-time inference and structured medical reasoning."
    },
    {
        role: "GenAI Developer – ET GenAI Hackathon",
        company: "The Economic Times",
        period: "2025",
        description: "Created retrieval-augmented generation (RAG) based applications for domain-specific question answering using LLMs, vector databases, and document ingestion pipelines."
    }
];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">{t.title}</h2>
                </motion.div>

                <motion.div 
                    className="timeline"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {experienceData.map((exp, index) => (
                        <motion.div key={index} className="timeline-item" variants={item}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <span className="period">{exp.period}</span>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
