import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import { projectsData } from '../../data/projects';
import './Projects.css';

const Projects = () => {
    const { language } = useTheme();
    const t = translations[language].projects;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">{t.title}</h2>
                </motion.div>

                <motion.div 
                    className="projects-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projectsData.map(project => (
                        <motion.div key={project.id} variants={item}>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
