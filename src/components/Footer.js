import React from "react";
import { NavLink } from 'react-router-dom';
import { AiOutlineInstagram, AiFillGithub,AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook} from "react-icons/fa";
import { BiLogoGmail} from "react-icons/bi";

const Footer = (props) => {
    const copyright = new Date().getFullYear();
    return (
        <div className="mt-5 footer  p-3">
            <div className="div">
                <h1 className="title text-center">HI DEVELOPPEMENT</h1>
                <p className="text-center text-black-50 fs-6 fw-bold m-auto w-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit At asperiores
                    inventore vero tempora dolore ipsa cupiditate hic temporibus dolorem
                    sit delectus assumenda, architecto eveniet omnis deserunt culpa expedita
                    reprehenderit debitis!
                </p>
                <div className="d-flex justify-content-center">
                    <span className="me-3 fs-4 instagram"><AiOutlineInstagram /></span>
                    <span className="me-3 fs-4 facebook"><FaFacebook /></span>
                    <span className="me-3 fs-4 github"><AiFillGithub /></span>
                    <span className="fs-4 gmail"><BiLogoGmail /></span>
                </div>
                <div className="row mt-1 d-flex flex-column flex-md-row align-items-center">
                    <div className="col-6">
                        <div className="copyright float-left ms-2 fw-bold">
                            {copyright}<AiOutlineCopyrightCircle  />- All rights reserved
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className="links list-unstyled mt-0 mb-0 d-flex justify-content-end me-2">
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold text-black" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold text-black" to="/Work">Work</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold text-black" to="/Experience">Experience</NavLink>
                            </li>
                            <li className="item me-2">
                                <NavLink className="text-decoration-none fw-bold text-black" to="/Testimonials">Testimonials</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Footer;
