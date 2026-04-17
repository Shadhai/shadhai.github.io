import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Default to English
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    // Theme state: 'default' (dark/blue) or 'sakura' (pink/japanese)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'default';
    });

    useEffect(() => {
        // Apply theme class and lang attribute
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.lang = language;

        // Persist
        localStorage.setItem('language', language);
        localStorage.setItem('theme', theme);
    }, [language, theme]);

    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('jp');
            setTheme('sakura'); // Auto-switch to Sakura theme for JP
        } else {
            setLanguage('en');
            setTheme('default'); // Default theme for EN
        }
    };

    return (
        <ThemeContext.Provider value={{ language, theme, toggleLanguage }}>
            {children}
        </ThemeContext.Provider>
    );
};
