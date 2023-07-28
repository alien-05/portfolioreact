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
        <div className='testimonials ms-0 me-0 mt-5  position-relative vh-'>
            <div className='container'>
                <h1 className='head text-center text-light mb-0 mt-0'>Testimonials</h1>
                <Line />
                <p className='col-11 col-lg-8 desc text-white-50 m-auto text-center mt-4 mb-2 mb-lg-3 '>
                    From the initial brainstorming sessions to the final implementation, I strive to ensure
                    my clients visions come to life. Guided by a user-centric approach, I craft seamless
                    and responsive websites that leave a lasting impact on their target audience.
                </p>
                <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide className='row  d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>H. Ismail</h4>
                                    <span className='mini  mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    I needed a fresh and engaging content strategy for my social media platforms, and HI Developer
                                    delivered beyond my expectations! Their creative ideas have significantly
                                    increased my brand's online presence and engagement.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>Amine K.</h4>
                                    <span className='mini  mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Working with HI Developer has been an absolute game-changer for our business.From the very beginning,
                                    they took the time to understand our brand and objectives, translating them into a stunning and highly functional website.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>Achraf H.</h4>
                                    <span className='mini  mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    if you're looking for a skilled and dedicated web developer, HI Web Design is the one to trust.
                                    Their professionalism, technical prowess, and creative flair are unmatched.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>Sara L.</h4>
                                    <span className='mini  mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    I can't believe how much easier You made my life! Their organizational skills and attention
                                    to detail transformed my cluttered space into an oasis of order and harmony.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 mt-2'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>Mark J.</h4>
                                    <span className='mini mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    As a small business owner, I was struggling to create a strong online presence. That's when
                                    I found HI Web Developer, and I'm so grateful I did! Their web design expertise and SEO strategies
                                    have boosted my website's traffic.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>James A.</h4>
                                    <span className='mini  mt-0 text-capitalize text-black-50'>Geust</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    I can't say enough about [Your Name]'s expertise as a web developer. They took our outdated and
                                    clunky website and turned it into a sleek, modern, and user-friendly platform. The transformation
                                    was truly remarkable. Highly recommended!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-md-6 '>
                            <div className='card text-center position-relative'>
                                <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
                                <div className='info mt-5'>
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini mt-0 text-capitalize text-black-50'>frontend dev</span>
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
                                    <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>houssini ismail</h4>
                                    <span className='mini mt-0 text-capitalize text-black-50'>frontend dev</span>
                                </div>
                                <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
                                <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                </p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}






