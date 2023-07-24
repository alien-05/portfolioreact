// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <NavLink className="navbar-brand font-monospace" to="#">HI</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fs-5 fs-lg-4" aria-current="page" to="/"><span>H</span>ome</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Work"><span>W</span>ork</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Experience"><span>E</span>xperience</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link fs-5 fs-lg-4" to="/Testimonials"><span>T</span>estimonials</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex contact">
                            <NavLink className="btn  " to="/Contact">Contact</NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
