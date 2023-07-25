import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <NavLink className="navbar-brand font-monospace" to="#">HI</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineMenu />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-start align-items-lg-center ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fs-5 fs-lg-4" aria-current="page" to="/"><span>H</span>ome</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Work"><span>A</span>bout</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Experience"><span>S</span>kills</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Testimonials"><span>T</span>estimonials</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex contact">
                            <NavLink className="btn text-align " to="/Contact">Contact</NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
