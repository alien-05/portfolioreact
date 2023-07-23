import React from 'react';
import { FaCode, FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
// import Main from './Main';


function Skills(props) {
    window.onscroll = function () {
        const section = document.querySelector('.skills');
        const head = document.querySelector('.head')
        if (window.scrollY >= section.offsetTop - 550) {
            head.classList.add('add');
        }
    }

    return (
        <div className='skills mt-5 mb-5 vh-100'>
            <div className='container'>
                <h2 className='text-center head mb-2 fs-1 fw-bold'>My Skills</h2>
                <h6 className="mini text-capitalize text-center mb-4">My Technical level</h6>
                <div className='row pt-0  m-auto d-flex justify-content-center align-items-center'>
                    <div className='col-12 col-lg-6 mb-5'>
                        <div className='box'>
                            <span className='icon figma position-absolute' ><FaFigma /></span>
                            <span className='effect position-absolute'></span>
                            {/* <span className='head'>x</span> */}
                            <h1 className='title mt-5'>WEB DESIGNER</h1>
                            <p className='m-auto text-black-50 text-center pb-2 text-capitalize fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                Fuga quod pariatur quis amet vel verout delectus minus
                                harum ad ipsum perspiciatis explicabo consequatur
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-5'>
                        <div className='box'>
                            <span className='effect position-absolute'></span>
                            <div className='icon  position-absolute'>
                                <span className='html me-1'><FaHtml5 /></span>
                                <span className='css me-1'><FaCss3 /></span>
                                <span className='react'><FaReact /></span>
                            </div>
                            <h1 className='mt-5'>WEB DEVELOPER</h1>
                            <p className='m-auto  text-black-50 text-center pb-2 text-capitalize fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                Fuga quod pariatur quis amet vel verout delectus minus
                                harum ad ipsum perspiciatis explicabo consequatur
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row  m-auto d-flex justify-content-center align-items-center'>
                    <div className='col-12 col-lg-6 mb-5'>
                        <div className='box'>
                            <span className='icon code position-absolute' ><FaCode /></span>
                            <span className='effect position-absolute'></span>
                            <h1 className='mt-5'>PROBLEM SOLVING</h1>
                            <p className='m-auto text-black-50 text-center pb-2 text-capitalize fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                Fuga quod pariatur quis amet vel verout delectus minus
                                harum ad ipsum perspiciatis explicabo consequatur
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-5 '>
                        <div className='box'>
                            <span className='effect position-absolute'></span>
                            <div className='icon position-absolute text-muted fs-5' >
                                <span className='me-1 text-primary'>En,</span>
                                <span className='me-1 text-primary'>Fr,</span>
                                <span className='me-1 text-primary'>Ar</span>
                            </div>
                            <h1 className='mt-5'>COMUNICATION</h1>
                            <p className='m-auto text-black-50 text-center pb-2 text-capitalize fs-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                Fuga quod pariatur quis amet vel verout delectus minus
                                harum ad ipsum perspiciatis explicabo consequatur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
