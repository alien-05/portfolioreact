import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Skills from './Skills';
import Line from './Line';
// import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
        <>
            <Navbar />
            <Main />
<Line />
            <Skills />
        </>
    );
}

export default App;
