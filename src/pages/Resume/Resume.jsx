import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="container">
                <header className="resume-header">
                    <h1>My Resume</h1>
                    <p>Professional Experience & Skills</p>
                    <a href="/software-2300032260-P SHADHAI JOSEPH.pdf" download="software-2300032260-P SHADHAI JOSEPH.pdf" className="download-btn-top">
                        <FaDownload /> Download PDF
                    </a>
                </header>

                <div className="resume-preview">
                    <iframe
                        src="/software-2300032260-P SHADHAI JOSEPH.pdf"
                        title="Resume Preview"
                        className="resume-iframe"
                    />
                </div>

                <div className="hire-me-section">
                    <h2>Interested in working together?</h2>
                    <p>I'm available for freelance projects and full-time roles.</p>
                    <a href="mailto:2300032260cse@mail.com" className="hire-btn">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
