import React from "react";
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { AiOutlineInstagram, AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaFacebook, FaReact, FaBootstrap } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { SiVite, SiRedux } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

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
                            <h1 className='title fs-1 text-center text-lg-start fw-bold  mb-0'>H.I WEB DEVELOPER </h1>
                            <span className="fonction fw-bold d-flex justify-content-center justify-content-lg-start fs-3 mt-0 mb-1">
                                <span className="me-2">I'm a</span><Typed
                                    strings={["Web Designer", "Web Developer", "WordPress Developer"]}
                                    typeSpeed={30}
                                    backSpeed={46}
                                    loop
                                />
                            </span>
                            <p className="description text-light lh-base font-monospace pt-2 pb-0  text-white-50 text-capitalize">
                                As A Web Developer, I Am Responsible For Designing And Developing Web Pages.                             </p>
                            <div className="col-12 icons-social">
                                <Link className="instagram fs-3 me-3 " to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank"><AiOutlineInstagram /></Link>
                                <Link className="github fs-3 me-3 " to={'https://github.com/alien-05'} target="_blank"><AiFillGithub /></Link>
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
                    <div className="footer  d-flex align-items-center justify-content-center  w-100 position-absolute">
                        <div className="row">

                            <div className="col-6 col-lg-auto">
                                <div className="exp d-flex justify-content-center justify-content-lg-start align-items-center me-5 ">
                                    <span className="num text-light  fw-bold me-2 mb-1">3</span>
                                    <span className="txt text-uppercase">years of <br /> experience</span>
                                </div>
                            </div>
                            <div className="col-6 col-lg-auto">
                                <div className="prjt d-flex justify-content-center justify-content-lg-start align-items-center me-5">
                                    <span className="num text-light mb-1 fw-bold me-2">12</span>
                                    <span className="txt text-uppercase">Projects Completed <br /> around the world</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-auto">
                                <div className="tools d-flex justify-content-center flex-column flex-xl-row align-items-center mt-1" >
                                    <div className="div">
                                        <span className="html me-5  fs-1"><AiFillHtml5 /></span>
                                        <span className="css me-5  fs-1"><DiCss3 /></span>
                                        <span className="js me-5 fs-1"><DiJavascript1 /></span>
                                        <span className="react me-5 fs-1"><FaReact /></span>
                                        <span className="bp me-xl-5 fs-1"><FaBootstrap /></span>
                                    </div>

                                    <div className="div">
                                        <span className="sass me-5 ms-0 fs-1"><DiSass /></span>
                                        <span className="vite me-5 fs-1"><SiVite /></span>
                                        <span className="redux me-5 fs-1"> <SiRedux /></span>
                                        <span className="vscode fs-1"><TbBrandVscode /></span>
                                    </div>
                                </div>
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
