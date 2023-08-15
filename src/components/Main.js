import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import logo from '../../src/imgs/12.jpg';

function Main(props) {

    const title = useRef(null);
    const image = useRef(null);
    const subTitle = useRef(null);
    const descTitle = useRef(null);
    const oIcon = useRef(null);
    const tIcon = useRef(null);
    const fIcon = useRef(null);

    window.addEventListener('load', () => {
        title.current.classList.add("show", "fs-1");
        image.current.classList.add('show');
        subTitle.current.classList.add("show", "fw-bold");
        descTitle.current.classList.add('show');
        oIcon.current.classList.add('show', 'me-4');
        tIcon.current.classList.add('show', 'me-4');
        fIcon.current.classList.add('show', 'me-4');
    })

    return (
        <>
            <div className="main container mb-5 mb-lg-0 mt-0 mt-lg-3 hero d-flex flex-wrap align-items-center" >
                <div className="row mt-0 mt-lg-5">
                    <div className="col-12 col-lg-6">
                        <h1 ref={title} className='title fs-1 text-center text-lg-start fw-bold pt-3 mb-0'>H.I WEB DEVELOPER </h1>
                        <span ref={subTitle} className="fonction d-flex justify-content-center justify-content-lg-start fs-3 mt-0 mb-1">
                            <span className="me-2">I'm a</span><Typed
                                strings={["Web Designer", "Web Developer", "WordPress Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </span>
                        <p ref={descTitle} className="description  lh-base font-monospace pt-3 pb-0 pb-lg-1 text-white-50 text-capitalize">
                            As a web developer, I am responsible for designing and developing web pages. My primary focus is to create responsive, user-friendly experiences that meet the needs of a diverse online audience.
                        </p>
                        {/* <div className="btn main-btn ">Contact Me</div> */}
                    </div>
                    <div className="col-12 col-lg-6 order-first order-lg-last mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
                        <div ref={image} className="image "><img className="avatar w-100" src={logo} alt="avatar" style={{ clipPath: "polygon(30% 0%, 79% 6%, 100% 33%, 100% 70%, 100% 100%, 34% 100%, 0% 70%, 0% 30%)" }} /></div>
                    </div>
                </div>
                <div className="row mt-0 mt-lg-3 ms-auto me-auto">
                    <div className="col-12 icons-social">
                        <Link ref={oIcon} className="instagram fs-3 " to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                        <Link ref={tIcon} className="github fs-3 " to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
                        {/* <Link className="gmail fs-3 me-4" to='hi.webdesigncompany@gmail.com'><BiLogoGmail /></Link> */}
                        <Link ref={fIcon} className="facebook fs-4 " to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank"><FaFacebook /></Link>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Main;
