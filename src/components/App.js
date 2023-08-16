import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Skills from './Skills';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';
// import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
        <>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
