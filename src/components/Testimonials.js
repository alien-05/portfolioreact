import React from 'react';
import Line from './Line';
import Card from './Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


export default function App() {
    return (
        <div className='testimonials ms-0 me-0 mt-5 position-relative'>
            <div className='container'>
                <h1 className='head text-center text-light mb-0 mt-0'>Testimonials</h1>
                <Line />
                <p className='col-11 col-lg-8 desc text-white-50 m-auto text-center mt-4 mb-2 mb-lg-3 '>
                    From the initial brainstorming sessions to the final implementation, I strive to ensure
                    my clients visions come to life. Guided by a user-centric approach, I craft seamless
                    and responsive websites that leave a lasting impact on their target audience.
                </p>
                <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 '>
                            <Card title='H.Ismail' fct='Geust'
                                desc="I needed a fresh and engaging content strategy for my social media platforms, and HI Developer
                                    delivered beyond my expectations! Their creative ideas have significantly
                                    increased my brand's online presence and engagement."
                            />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <Card title='Amine K.' fct='Geust'
                                desc=' Working with HI Developer has been an absolute game-changer for our business.From the very beginning,
                                    they took the time to understand our brand and objectives, translating them into a stunning and highly functional website.'
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 '>
                            <Card title='Achraf H.' fct='Geust'
                                desc=" if you're looking for a skilled and dedicated web developer, HI Web Design is the one to trust.
                                    Their professionalism, technical prowess, and creative flair are unmatched."
                            />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <Card title='Sara L.' fct='Geust'
                                desc="I can't believe how much easier You made my life! Their organizational skills and attention
                                    to detail transformed my cluttered space into an oasis of order and harmony."
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='row d-flex justify-content-center align-items-center '>
                        <div className='col-12 col-lg-6 mt-2'>
                            <Card title='Mark J.' fct='Geust'
                                desc=" As a small business owner, I was struggling to create a strong online presence. That's when
                                    I found HI Web Developer, and I'm so grateful I did! Their web design expertise and SEO strategies
                                    have boosted my website's traffic."
                            />
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                            <Card title='James A.' fct='Geust'
                                desc="I can't say enough about [Your Name]'s expertise as a web developer. They took our outdated and
                                    clunky website and turned it into a sleek, modern, and user-friendly platform. The transformation
                                    was truly remarkable. Highly recommended!"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}






