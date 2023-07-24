import React from 'react';
import Line from './Line';
import logo from '../../src/imgs/12.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='testimo ms-0 me-0 mt-5 position-relative vh-100'>
            <div className='container'>
                <h1 className='head text-center text-light mb-0 mt-0'>Testimonials</h1>
                <Line />
                <p className='col-11 col-lg-7 text-white-50 m-auto text-center mt-4 mb-2 mb-lg-3 '>
                    Some quick example text to build on the card title and make up the bulk of the card's content
                    Some quick example text to build on the card title and make up the bulk of the card's
                </p>
                <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-md-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 d-none d-md-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-md-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 d-none d-md-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-md-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 d-none d-md-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-md-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 d-none d-md-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className=' mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini fs-5 mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}






