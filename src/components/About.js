import React, { useRef } from "react";
import Line from "./Line";
import { Link } from 'react-router-dom';
import logo from '../../src/imgs/13.jpg';


const About = (props) => {
    const section = useRef();
    const pic = useRef();
    const back = useRef();
    const title = useRef();
    const desc = useRef();
    const nums = useRef();
    const download = useRef();

    window.addEventListener('scroll', () => {
        const targetSection = section.current;
        const rect = targetSection.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight + 280) {
            pic.current.classList.add('show')
            back.current.classList.add('animate')
            title.current.classList.add('show')
            desc.current.classList.add('show')
            nums.current.classList.add('show')
            download.current.classList.add('show')
        }
    })


    return (
        <div ref={section} className="about pb-0 pb-md-5 text-light mt-5 pt-md-4 mt-lg-0 mb-5 mb-md-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <h2 ref={title} className="title text-capitalize fw-bold fs-1 text-center mb-2 text-white">about me</h2>
                <Line />
                {/* <h6 className="mini  text-capitalize text-center mb-4 text-white-50">my introduction</h6> */}
                <div className="row d-flex justify-content-center">
                    <div ref={pic} className="col-12 col-lg-6 pic position-relative ms-5 ms-lg-0 mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
                        <div ref={back} className="back w-50"><img className="avatar  img-fluid" src={logo} alt="avatar" style={{ clipPath: "inset(0 0 0 12%)" }} /></div>
                        <div className="image w-50 "><img className="avatar  img-fluid" src={logo} alt="avatar" style={{ clipPath: "inset(0 0 0 12%)" }} /></div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="description mt-5">
                            <p ref={desc} className="text-justify lh-base ms-0 ms-lg-0 mt-3 mt-lg-1 mt-xl-0 mt-xxl-4">
                                Hello there! I'm H.I Web Developer, a passionate web developer with a love for
                                crafting intuitive and dynamic digital experiences. With a keen eye for
                                design and a knack for coding, I bring ideas to life through clean and efficient code.
                            </p>
                            <div ref={nums} className="nums text-start ms-0 ms-lg-0 d-flex justify-content-center justify-content-lg-start  mt-lg-2 mt-xl-4 w-100">
                                <div className="one text-center  d-flex flex-column me-4">
                                    <span className="num fw-bold fs-3" data-goal="8">03</span>
                                    <span> Years experience</span>
                                </div>
                                <div className="two text-center  d-flex flex-column me-4">
                                    <span className="num fw-bold fs-3" data-goal="20">41</span>
                                    <span>completed projects</span>
                                </div>
                                <div className="three text-center  d-flex flex-column">
                                    <span className="num fw-bold fs-3" data-goal="5">02</span>
                                    <span>Companies Work</span>
                                </div>
                            </div>
                            <div ref={download} className="download ms-0 ms-lg-0 mt-4 mt-lg-5 mt-xl-4 mt-xxl-5 d-flex justify-content-center justify-content-lg-start">
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
