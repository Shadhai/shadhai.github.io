import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './About.css';

const About = () => {
    const { language } = useTheme();
    const t = translations[language].about;

    return (
        <section id="about" className="about-section">
            <div className="container about-content-wrapper">
                <div className="about-text">
                    <h2 className="section-title">{t.title}</h2>
                    <p>{t.p1}</p>
                    <p>{t.p2}</p>

                    <div style={{ marginTop: '1.5rem' }}>
                        <Link to="/resume" className="cta-btn solid-yellow" style={{ display: 'inline-block', fontSize: '0.9rem' }}>
                            {t.cta}
                        </Link>
                    </div>
                </div>
                <div className="about-image">
                    <img src={import.meta.env.BASE_URL + "newer.png"} alt="Developer" />
                </div>
            </div>
        </section>
    );
};

export default About;
