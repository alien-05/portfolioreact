import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { AiOutlineInstagram, AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = (props) => {
    const copyright = new Date().getFullYear();
    return (
        <div className="mt-5 footer p-3" id="footer">
            <div className="div">
                <h1 className="title text-center">HI DEVELOPEMENT</h1>
                <p className="col-12 col-md-9 col-lg-7 desc text-center text-black-50 fs-6 fw-bold m-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit At asperiores
                    inventore vero tempora dolore ipsa cupiditate hic temporibus dolorem
                    sit delectus assumenda architecto eveniet omnis deserunt culpa expedita
                    reprehenderit debitis!
                </p>
                <div className="d-flex mt-2 mb-2 justify-content-center">
                    <Link className="me-3 fs-4 instagram" to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                    <Link className="me-3 fs-4 facebook" to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank"><FaFacebook /></Link>
                    <Link className="me-3 fs-4 github" to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
                    <Link className="fs-4 gmail"><BiLogoGmail /></Link>
                </div>
                <div className="row mt-3 mt-lg-1 d-flex flex-column flex-md-row align-items-center">
                    <div className="col-6 d-flex justify-content-center">
                        <div className="copyright  ms-2 fw-bold">
                            {copyright}<AiOutlineCopyrightCircle />- All rights reserved
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <ul className="links list-unstyled mt-0 mb-0 d-flex justify-content-end me-2">
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold " to="/Work">Work</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold " to="/Experience">Experience</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold " to="/Testimonials">Testimonials</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Footer;
