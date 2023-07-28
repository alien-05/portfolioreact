import React from 'react';
import Line from './Line';
import { FaCode, FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
// import Main from './Main';


function Skills(props) {
    window.onscroll = function () {
        const section = document.querySelector('.skills');
        const head = document.querySelector('.head');
        if (window.scrollY >= section.offsetTop - 550) {
            head.classList.add('add')
        }
    }

    return (
        <div className='skills mt-5 pt-5 pt-lg-3 pt-md-0' >
            <div className='container'>
                <h2 className='mt-0 mt-md-5 mb-0 mb-lg-0 text-center head mb-2 fs-1 fw-bold  text-light'>My Skills</h2>
                <Line />
                {/* <h6 className="mini text-white-50 text-capitalize text-center mb-5 mb-lg-4">My Technical level</h6> */}
                <div className='row pt-0 mt-4  m-auto d-flex justify-content-center align-items-center'>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-4'>
                        <div className='box'>
                            <span className='icon figma position-absolute' ><FaFigma /></span>
                            <span className='effect position-absolute'></span>
                            {/* <span className='head'>x</span> */}
                            <h1 className='title mt-5'>WEB DESIGNER</h1>
                            <p className='desc fs-6 fw-bold ms-md-2 me-md-2 text-black-50 text-center pb-2 text-capitalize '>
                                As a web designer, Figma has become my go-to tool for turning ideas into stunning visual realities.
                                I can effortlessly create and collaborate on designs from anywhere.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-4'>
                        <div className='box'>
                            <span className='effect position-absolute'></span>
                            <div className='icon  position-absolute'>
                                <span className='html me-1'><FaHtml5 /></span>
                                <span className='css me-1'><FaCss3 /></span>
                                <span className='react'><FaReact /></span>
                            </div>
                            <h1 className='title mt-5'>WEB DEVELOPER</h1>
                            <p className='desc fs-6 fw-bold ms-md-2 me-md-2   text-black-50 text-center pb-2 text-capitalize'>
                                As a front-end developer, I have the exciting role of bringing the visual and interactive elements
                                of a website to life. I continuously stay updated on the latest web development trends.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row  m-auto d-flex justify-content-center align-items-center'>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-4'>
                        <div className='box'>
                            <span className='icon code position-absolute' ><FaCode /></span>
                            <span className='effect position-absolute'></span>
                            <h1 className='title mt-5'>PROBLEM SOLVING</h1>
                            <p className='desc fs-6 fw-bold ms-md-2 me-md-2 text-black-50 text-center pb-2 text-capitalize'>
                                As a problem solver developer, I thrive on challenges and possess a unique set of skills that enable
                                me to overcome complex issues and roadblocks in the world of software development.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-4 '>
                        <div className='box'>
                            <span className='effect position-absolute'></span>
                            <div className='icon position-absolute text-muted fs-5' >
                                <span className='me-1 text-primary'>En,</span>
                                <span className='me-1 text-primary'>Fr,</span>
                                <span className='me-1 text-primary'>Ar</span>
                            </div>
                            <h1 className='title mt-5'>COMUNICATION</h1>
                            <p className='desc fs-6 fw-bold ms-md-2 me-md-2  text-black-50 text-center pb-2 text-capitalize '>
                                Communication plays a critical role in issue resolution as well. When challenges arise, open
                                dialogue encourages brainstorming and problem-solving among team members. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
