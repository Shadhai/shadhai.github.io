import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) return <div className="container" style={{ paddingTop: '100px' }}>Project not found.</div>;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="project-details">
            <div className="container">
                <Link to="/" className="back-btn">
                    <FaArrowLeft className="arrow-icon" /> Back to Projects
                </Link>

                <div className="details-split-layout">
                    {/* LEFT PANEL: TEXT CONTENT */}
                    <motion.div 
                        className="details-text-panel"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1 className="project-title" variants={itemVariants}>
                            {project.title}
                        </motion.h1>

                        <motion.div className="case-study-section" variants={itemVariants}>
                            <h2 className="section-label">Case Study Overview</h2>
                            <div className="card-context">{project.context}</div>
                        </motion.div>
                        
                        <motion.div className="narrative-section" variants={itemVariants}>
                            <div className="card-narrative">
                                <p><strong>The Pitch</strong> {project.pitch}</p>
                                <p><strong>Problem Solving</strong> {project.problemSolving}</p>
                                <p><strong>Presentation</strong> {project.presentation}</p>
                                <p><strong>Polish & Optimization</strong> {project.polish}</p>
                            </div>
                        </motion.div>
                        
                        <motion.div className="tech-stack-section" variants={itemVariants}>
                            <h3>Engineered With</h3>
                            <div className="tags">
                                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>
                            
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-detail-btn">
                                <FaGithub /> VIEW REPOSITORY
                            </a>
                        </motion.div>

                        <motion.div className="arch-logic-section" variants={itemVariants}>
                            <h3>Technical Logic</h3>
                            <div className="schema-placeholder">
                                <code>
                                    
                                    // System Schema Preview<br/>
                                    const {project.title.replace(/\s/g, '')}Config = &#123;<br />
                                    &nbsp;&nbsp;id: "{project.id}",<br />
                                    &nbsp;&nbsp;architecture: "Decoupled Layers",<br />
                                    &nbsp;&nbsp;primary_stack: [{project.tech.slice(0, 3).join(', ')}]<br />
                                    &#125;
                                </code>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT PANEL: STICKY ARCHITECTURE IMAGE */}
                    <div className="details-visual-panel">
                        <div className="sticky-visual-container">
                            <h2 className="visual-title">Architectural Blueprint</h2>
                            <div className="arch-image-wrapper">
                                {project.archImage ? (
                                    <img 
                                        src={project.archImage} 
                                        alt={`${project.title} Architecture`} 
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="image-empty-state" style={{ display: project.archImage ? 'none' : 'flex' }}>
                                    <div className="empty-icon">[ ]</div>
                                    <span>Architecture Diagram</span>
                                    <p>The system blueprint for this project will appear here.</p>
                                </div>
                            </div>
                            <p className="visual-caption">Detailed system interaction flow and data layer boundaries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
