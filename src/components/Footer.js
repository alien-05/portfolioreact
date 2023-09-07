import React from "react";
import { Link } from "react-router-dom";
import logo from '../imgs/Group 78.png';
import { AiOutlineInstagram, AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = (props) => {


    return (
        <div className="mt-5 footer p-4" id="footer">
            <div className="div">
                {/* <h1 className="title text-center">
                    <img src="" alt="" />
                </h1> */}
                <div className="image m-auto mb-3">
                    <img className='img-fluid' src={logo} alt="logo" />
                </div>
                <p className="desc col-12 col-md-10 col-lg-9 desc text-center fs-6 fw-bold m-auto">
                    Designed and built by <span className="one">HiDev</span>  with <span className="two">Love</span> & <span className="th">Coffee</span>
                </p>
                <div className="links d-flex mt-4 mb-2 justify-content-center">
                    <Link className="me-3 fs-3 instagram" to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                    <Link className="me-3 fs-3 facebook" to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank"><FaFacebook /></Link>
                    <Link className="me-3 fs-3 github" to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
                    <Link className="fs-3 gmail"><BiLogoGmail /></Link>
                </div>
            </div>
        </div>
    )
};

export default Footer;
