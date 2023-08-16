import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../imgs/Thumbnail (1).png';
import image2 from '../imgs/thumbnail 2.jpeg';
import image3 from '../imgs/thumbnail 3.jpeg';
import image4 from '../imgs/HiDev.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Projects() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const section = useRef();
    const pic = useRef();
    const title = useRef();
    const desc = useRef();

    window.addEventListener('scroll', () => {
        const targetSection = section.current;
        const rect = targetSection.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            pic.current.classList.add('show')
            title.current.classList.add('show', 'fs-2')
            desc.current.classList.add('show')
        }
    })

    return (
        <>
            <div ref={section} className="projects pb-3 mt-4 text-center mb-5">
                <h4 ref={title} className="title text-capitalize fw-bold">my projects</h4>
                <span ref={desc} className='desc fs-3 mt-0'>
                    Management is, above all, a practice where art, science, and craft meet.
                </span>
                <div className="box mt-5 mb-5 position-relative">
                    <Swiper ref={pic} slidesPerView={4} spaceBetween={25} centeredSlides={false} className="mySwiper position-absolute">
                        <SwiperSlide className='ms-5 card pt-1' style={{ width: '23rem' }} >
                            <img src={image1} className="card-img-top ps-1 pe-1 pt-0" alt='luxury' />
                            <div class="card-body">
                                <h4 className="card-title mb-4">
                                    Homey Luxury furniture application
                                </h4>
                                <Link onClick={() => setOpen(!open)} to="#" className="btn  w-100 d-flex justify-content-center align-items-center">
                                    View Project {open ? <FontAwesomeIcon icon={faEye} className='ms-2' /> : <FontAwesomeIcon icon={faEyeSlash} className='ms-2' />}
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='ms-5 card pt-1' style={{ width: '23rem' }} >
                            <img src={image2} className="card-img-top ps-1 pe-1 pt-0" alt='luxury' />
                            <div class="card-body">
                                <h4 className="card-title mb-4">
                                    LOZAN ecommerce website for abaya
                                </h4>
                                <Link onClick={() => setOpen1(!open1)} to="#" className="btn  w-100 d-flex justify-content-center align-items-center">
                                    View Project {open1 ? <FontAwesomeIcon icon={faEye} className='ms-2' /> : <FontAwesomeIcon icon={faEyeSlash} className='ms-2' />}
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='ms-5 card pt-1' style={{ width: '23rem' }} >
                            <img src={image3} className="card-img-top ps-1 pe-1 pt-0" alt='luxury' />
                            <div class="card-body">
                                <h4 className="card-title mb-4">
                                    TravelGO Booking  agency website
                                </h4>
                                <Link onClick={() => setOpen2(!open2)} to="#" className="btn  w-100 d-flex justify-content-center align-items-center">
                                    View Project {open2 ? <FontAwesomeIcon icon={faEye} className='ms-2' /> : <FontAwesomeIcon icon={faEyeSlash} className='ms-2' />}
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='ms-5 card pt-1' style={{ width: '23rem' }} >
                            <img src={image4} className="card-img-top ps-1 pe-1 pt-0" alt='luxury' />
                            <div class="card-body">
                                <h4 className="card-title mb-4">
                                    H.I web developer portfolio website                                </h4>
                                <Link onClick={() => setOpen3(!open3)} to="#" className="btn  w-100 d-flex justify-content-center align-items-center">
                                    View Project {open3 ? <FontAwesomeIcon icon={faEye} className='ms-2' /> : <FontAwesomeIcon icon={faEyeSlash} className='ms-2' />}
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div >
        </>
    )
}

export default Projects
