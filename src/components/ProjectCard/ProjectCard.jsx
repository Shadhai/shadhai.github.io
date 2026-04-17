import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <Link to={`/project/${project.id}`} className="card-image-link">
                <div className="card-image-container">
                    <img src={project.image.startsWith('http') ? project.image : import.meta.env.BASE_URL + project.image} alt={project.title} className="card-image" />
                    <div className="card-overlay">
                        <span>View Details</span>
                    </div>
                </div>
            </Link>
            <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
                <div className="tech-tags">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="card-links">
                    <Link to={`/project/${project.id}`} className="details-link">Details</Link>
                    <div className="external-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                        <a href="#" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
