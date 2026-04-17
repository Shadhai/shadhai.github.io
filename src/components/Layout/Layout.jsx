import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WaterBackground from '../Hero/WaterBackground';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <WaterBackground />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
