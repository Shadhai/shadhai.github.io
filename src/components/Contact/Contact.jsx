import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../data/translations';
import './Contact.css';

const Contact = () => {
    const { language } = useTheme();
    const t = translations[language].contact;
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('idle'); // 'idle', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('idle');

        // Note: These env variables will be loaded from your .env file
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setIsSending(false);
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.error(error.text);
                setStatus('error');
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title" style={{ fontFamily: 'var(--font-about-heading)' }}>{t.title}</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope className="icon" />
                            <p>2300032260cse@gmail.com</p>
                        </div>
                        <p className="contact-desc" style={{ fontFamily: 'var(--font-inter)' }}>
                            {t.desc}
                        </p>
                    </div>

                    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="from_name" placeholder={t.form.name} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="reply_to" placeholder={t.form.email} required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder={t.form.message} rows="5" required></textarea>
                        </div>

                        <div className="form-submit-group">
                            <button 
                                type="submit" 
                                className={`submit-btn ${isSending ? 'loading' : ''} ${status}`}
                                disabled={isSending}
                            >
                                {isSending ? '...' : status === 'success' ? <FaCheckCircle /> : <><FaPaperPlane /> {t.form.send}</>}
                            </button>
                            
                            {status === 'success' && (
                                <p className="status-msg success">
                                    <FaCheckCircle /> Sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="status-msg error">
                                    <FaExclamationCircle /> Failed to send. Please check .env keys.
                                </p>
                            )}
                            
                            <p className="privacy-statement">{t.privacy}</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
