import React from "react";
import Line from "./Line";
import { Link } from 'react-router-dom';
import logo from '../../src/imgs/13.jpg';


const About = (props) => {
    return (
        <div className="about pb-0 pb-md-5 text-light mt-5 pt-md-4 mt-lg-0 mb-5 mb-md-5  d-flex justify-content-center align-items-center" id="/about" >
            <div className="container">
                {/* <Line /> */}
                <h2 className="title text-capitalize fw-bold fs-1 text-center mb-2 text-white">about me</h2>
                <Line />
                {/* <h6 className="mini  text-capitalize text-center mb-4 text-white-50">my introduction</h6> */}
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-6 position-relative ms-5 ms-lg-0 mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
                        <div className="back w-50"><img className="avatar  img-fluid" src={logo} alt="avatar" style={{ clipPath: "inset(0 0 0 12%)" }} /></div>
                        <div className="image w-50 "><img className="avatar  img-fluid" src={logo} alt="avatar" style={{ clipPath: "inset(0 0 0 12%)" }} /></div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="description mt-5">
                            <p className="text-justify lh-base ms-0 ms-lg-0 mt-3 mt-lg-1 mt-xl-0 mt-xxl-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                                doloribus et cumque voluptatum delectus esse praesentium
                                blanditiis mollitia quibusdam.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                                doloribus et cumque voluptatum delectus esse praesentium
                                blanditiis mollitia quibusdam.
                            </p>
                            <div className="nums text-start ms-0 ms-lg-0 d-flex justify-content-center justify-content-lg-start  mt-lg-2 mt-xl-4 w-100">
                                <div className="one text-center  d-flex flex-column me-4">
                                    <span className="num fw-bold fs-3" data-goal="8">03</span>
                                    <span> Years experience</span>
                                </div>
                                <div className="two text-center  d-flex flex-column me-4">
                                    <span className="num fw-bold fs-3" data-goal="20">20</span>
                                    <span>completed projects</span>
                                </div>
                                <div className="three text-center  d-flex flex-column">
                                    <span className="num fw-bold fs-3" data-goal="5">02</span>
                                    <span>Companies Work</span>
                                </div>
                            </div>
                            <div className="download ms-0 ms-lg-0 mt-4 mt-lg-5 mt-xl-4 mt-xxl-5 d-flex justify-content-center justify-content-lg-start">
                                <Link href="#" download="CV" className="main-btn btn fw-bold ps-5 pe-5 ps-md-3 pe-md-3">Download CV</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
