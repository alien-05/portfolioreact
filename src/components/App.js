import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Skills from './Skills';
import Line from './Line';
import Footer from './Footer';
import About from './About';
import Testimonials from './Testimonials';
// import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
        <>
            <Navbar />
            <Main />
            <Line />
            <About />
            <Line />
            <Skills />
            <Line />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
