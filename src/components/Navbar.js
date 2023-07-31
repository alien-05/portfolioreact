import React, { useState } from 'react';
// import Main from './Main';
// import Skills from './Skills';
// import About from './About';
// import Testimonials from './Testimonials';
// import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineMenuAlt1 } from 'react-icons/hi';

function Navbar(props) {
    const about = document.querySelector('.about');
    const skills = document.querySelector('.skills');
    const testimo = document.querySelector('.testimonials');

    //toggle class menu
    const [active, setActive] = useState(false);
    const handle = () => { setActive(!active) };

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <button onClick={handle} className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {active ? <HiOutlineMenuAlt1 /> : <HiMenu />}
                    </button>
                    <NavLink className="navbar-brand font-monospace" to="#">H.I</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-start align-items-lg-center ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fs-5 fs-lg-4" to="/"><span>H</span>ome</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink onClick={() => about && about.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/about"><span>A</span>bout</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink onClick={() => skills && skills.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/skills"><span>S</span>kills</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink onClick={() => testimo && testimo.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/testimonials"><span>T</span>estimonials</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex contact">
                            <NavLink className="btn text-align" to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target='_blank'>Contact</NavLink>
                        </form>
                    </div>
                </div>
                {/* <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/skills' element={<Skills />}></Route>
                    <Route path='/testimonials' element={<Testimonials />}></Route>
                </Routes> */}
            </nav>
        </>
    )
};

export default Navbar;
