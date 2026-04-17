import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact/Contact';
import './Home.css';

const Section = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
    >
        {children}
    </motion.div>
);

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Section>
                <Projects />
            </Section>
            <Section>
                <About />
            </Section>
            <Section>
                <Skills />
            </Section>
            <Section>
                <Experience />
            </Section>
            <Section>
                <Contact />
            </Section>
        </div>
    );
};

export default Home;
