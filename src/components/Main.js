import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import logo from '../../src/imgs/12.jpg';

function Main(props) {
    return (
        <>
            <div className="container mb-5 mb-lg-0 mt-0 mt-lg-3 hero d-flex flex-wrap align-items-center" id="main">
                <div className="row mt-0 mt-lg-5">
                    <div className="col-12 col-lg-6">
                        <h1 className='title fs-1 text-center text-lg-start fw-bold pt-3 mb-0'>H-I WEB DEVELOPER </h1>
                        <span className="fonction d-flex justify-content-center justify-content-lg-start fs-3 mt-0 mb-1">I'm a web developer </span>
                        <p className="description  lh-base font-monospace pt-3 pb-0 pb-lg-1 text-white-50 text-capitalize">
                            As a web developer, I am responsible for designing and developing web pages. My primary focus is to create responsive, user-friendly experiences that meet the needs of a diverse online audience.
                        </p>
                        {/* <div className="btn main-btn ">Contact Me</div> */}
                    </div>
                    <div className="col-12 col-lg-6 order-first order-lg-last mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
                        <div className="image "><img className="avatar w-100" src={logo} alt="avatar" style={{ clipPath: "polygon(30% 0%, 79% 6%, 100% 33%, 100% 70%, 100% 100%, 34% 100%, 0% 70%, 0% 30%)" }} /></div>
                    </div>
                </div>
                <div className="row mt-0 mt-lg-3 ms-auto me-auto">
                    <div className="col-12 icons-social">
                        <Link className="instagram fs-3 me-4" to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                        <Link className="github fs-3 me-4" to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
                        {/* <Link className="gmail fs-3 me-4" to='hi.webdesigncompany@gmail.com'><BiLogoGmail /></Link> */}
                        <Link className="facebook fs-4 me-4" to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank"><FaFacebook /></Link>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Main;
