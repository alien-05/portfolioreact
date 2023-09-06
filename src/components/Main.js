import React from "react";
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import logo from '../../src/imgs/Background Image.png';

function Main(props) {

    // const title = useRef(null);
    // const image = useRef(null);
    // const subTitle = useRef(null);
    // const descTitle = useRef(null);
    // const oIcon = useRef(null);
    // const tIcon = useRef(null);
    // const fIcon = useRef(null);

    // window.addEventListener('load', () => {
    //     title.current.classList.add("show", "fs-1");
    //     image.current.classList.add('show');
    //     subTitle.current.classList.add("show", "fw-bold");
    //     descTitle.current.classList.add('show');
    //     oIcon.current.classList.add('show', 'me-4');
    //     tIcon.current.classList.add('show', 'me-4');
    //     fIcon.current.classList.add('show', 'me-4');
    // })

    return (
        <>
            <div className="main  mb-5 mb-lg-0 mt-0 mt-lg- hero d-flex flex-wrap align-items-center" >
                <div className="container">
                    <div className="row mt-0 ">
                        <div className="col-12 left col-lg-6">
                            <h1 className='title fs-1 text-center text-lg-start fw-bold pt-3 mb-0'>H.I WEB DEVELOPER </h1>
                            <span className="fonction fw-bold d-flex justify-content-center justify-content-lg-start fs-3 mt-0 mb-1">
                                <span className="me-2">I'm a</span><Typed
                                    strings={["Web Designer", "Web Developer", "WordPress Developer"]}
                                    typeSpeed={30}
                                    backSpeed={46}
                                    loop
                                />
                            </span>
                            <p className="description  lh-base font-monospace pt-3 pb-0 pb-lg-1 text-white-50 text-capitalize">
                                As a web developer, I am responsible for designing and developing web pages. My primary focus is to create responsive, user-friendly experiences that meet the needs of a diverse online audience.
                            </p>
                            <div className="col-12 icons-social">
                                <Link className="instagram fs-3 " to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                                <Link className="github fs-3 " to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
                                {/* <Link className="gmail fs-3 me-4" to='hi.webdesigncompany@gmail.com'><BiLogoGmail /></Link> */}
                                <Link className="facebook fs-4 " to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank"><FaFacebook /></Link>
                            </div>
                            {/* <div className="btn main-btn ">Contact Me</div> */}
                        </div>
                        <div className="col-12 col-lg-6 order-first order-lg-last mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
                            <div className="image ">
                                <img className="avatar img-fluid" src={logo} alt="avatar" />
                                <span className="aa"></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer ps-5 d-flex align-items-center row w-100 position-absolute">
                        <div className="col-auto">
                            <div className="exp d-flex align-items-center me-5 ">
                                <span className="num text-light  fw-bold me-2 mb-1">3</span>
                                <span className="txt text-uppercase">years of <br /> experience</span>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="prjt d-flex align-items-center me-5">
                                <span className="num text-light mb-1 fw-bold me-2">12</span>
                                <span className="txt text-uppercase">Projects Completed <br /> around the world</span>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="tools d-flex align-items-center mb-2" >
                                <span className="me-5 fs-1">x</span>
                                <span className="me-5  fs-1">x</span>
                                <span className="me-5 fs-1">x</span>
                                <span className="me-5 fs-1">x</span>
                                <span className="me-5 fs-1">x</span>
                                <span className="me-4 fs-1">x</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-0 "></div> */}
            </div>
        </>
    )
};

export default Main;
