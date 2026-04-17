import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaBrain,
    FaServer
} from 'react-icons/fa';
import {
    SiTypescript,
    SiMongodb,
    SiTensorflow,
    SiPytorch,
    SiDocker,
    SiFastapi
} from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './Skills.css';

const skillsData = [
    // Frontend
    { name: 'React', icon: <FaReact />, level: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
    { name: 'FastAPI', icon: <SiFastapi />, level: 'Advanced' },
    { name: 'Python', icon: <FaPython />, level: 'Advanced' },
    { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' },
    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediate' },
    // AI / ML
    { name: 'Deep Learning', icon: <FaBrain />, level: 'Advanced' },
    { name: 'TensorFlow / Keras', icon: <SiTensorflow />, level: 'Advanced' },
    { name: 'PyTorch', icon: <SiPytorch />, level: 'Intermediate' },
    // Systems / DevOps
    { name: 'Docker', icon: <SiDocker />, level: 'Intermediate' },
    { name: 'System Design', icon: <FaServer />, level: 'Intermediate' },
];

const Skills = () => {
    const { language } = useTheme();
    const t = translations[language].skills;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">{t.title}</h2>
                    <p className="skills-subtitle">
                        Architecting scalable backends and intelligent agents with a focus on system integrity and performance.
                    </p>
                </motion.div>

                <motion.div 
                    className="skills-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div key={index} className="skill-card" variants={item}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.name}</h3>
                            <span className="skill-level">{skill.level}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;