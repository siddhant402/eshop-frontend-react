import React from 'react';
import Navbar from "../../components/Navbar";
import About from "../../components/About"; // Import the About component

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <About /> {/* Render the About component */}
        </>
    );
};

export default AboutPage;