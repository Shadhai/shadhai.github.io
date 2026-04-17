import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage } = useTheme();
    const t = translations[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: t.home, path: '/#hero' },
        { title: t.projects, path: '/#projects' },
        { title: t.about, path: '/#about' },
        { title: t.contact, path: '/#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    JOSEPH<span></span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <div className="hamburger"><span></span><span></span></div>}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="nav-item">
                            {location.pathname === '/' ? (
                                <a 
                                    href={link.path.includes('#') ? link.path.split('#')[1] === 'hero' ? '#hero' : `#${link.path.split('#')[1]}` : link.path} 
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ) : (
                                <Link to={link.path.startsWith('/#') ? '/' : link.path} onClick={() => setIsOpen(false)}>
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li className="nav-item">
                        <button className="lang-btn" onClick={toggleLanguage}>
                            {language === 'en' ? 'JP' : 'EN'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
