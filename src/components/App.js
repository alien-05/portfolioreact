import React, { useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Skills from './Skills';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';
// import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
        <>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
