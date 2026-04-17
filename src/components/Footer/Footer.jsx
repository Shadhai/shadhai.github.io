import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="logo">GANS<span>.</span></h2>
                        <p className="footer-tagline">Architecting Intelligent Systems & Scalable Backends.</p>
                    </div>
                    
                    <div className="footer-links">
                        <div className="social-group">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                            <FaArrowUp />
                        </button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} GANS. All rights reserved.</p>
                    <div className="footer-legal">
                        <span>Built with React & Framer Motion</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
