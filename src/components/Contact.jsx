import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q21psw3', 'template_i2h4z5l', form.current, 'k1kmpn6t3BIVaoy8h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <>
            <div className="Contact pt-5 pb-4 mt-5 mb-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-lg-6 ">
                            <h1 className='head mb-5 d-flex justify-content-center d-lg-block  mb-lg-5 fs-2 fw-bold mt-0 mt-lg-2'>
                                Let’s discuss <br /> on something <b className='me-3 me-lg-0'>cool</b> together
                            </h1>
                            <p className='subtitle mb-4  pt-lg-5 fs-5 ms-md-5 ms-lg-0 ps-md-3 ps-lg-0'>I`m interested in ...</p>
                            <div className="services ms-md-5 ms-lg-0 ps-md-3 ps-lg-0">
                                <div className="mb-4 d-flex">
                                    <NavLink className='service  pt-1 pb-1 ps-2 pe-2 me-4 d-flex align-items-center fw-bold' to='/Eco'>Ecommerce Website</NavLink>
                                    <NavLink className='service pt-1 pb-1 ps-2 pe-2  d-flex align-items-center fw-bold' to='/Saas'>Saas Website</NavLink>
                                </div>
                                <div className="d-flex mb-5">
                                    <NavLink className='service pt-1 pb-1 ps-2 pe-2 me-4 d-flex align-items-center fw-bold' to='/landing'>Landing page</NavLink>
                                    <NavLink className='service pt-1 pb-1 ps-2 pe-2 me-4 d-flex align-items-center fw-bold' to='/portfolio'>Portfolio</NavLink>
                                    <NavLink className='service pt-1 pb-1 ps-2 pe-2  d-flex align-items-center fw-bold' to='/Blog'>Blog Website</NavLink>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-10 m-md-auto col-lg-6">
                            <div className="form d-flex flex-column">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input className='w-100 mb-3 pt-2  pb-2 ps-3' type="text" name="user_name" id="user" placeholder='Your name' />
                                    <input className='w-100 mb-3 pt-2  pb-2 ps-3' type="email" name="from_email" id="mail" placeholder='Your email' />
                                    <textarea className='w-100 mb-3 ps-3 pt-3' name="message" id="message" cols="30" rows="8" placeholder='Your message'> </textarea>
                                    <button className="btn w-100 mb-4 pt-2 pb-2 d-flex align-items-center justify-content-center" type="submit" value="Send">
                                        <FaPaperPlane className='me-3 ' />
                                        Submit
                                    </button>
                                </form>
                                <div className="icons mb-1 d-flex w-100 justify-content-center align-items-center">
                                    <Link className='icon me-3 fs-5 d-flex align-items-center justify-content-center' to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target="_blank">
                                        <FaFacebookF />
                                    </Link>
                                    <Link className='icon me-3 fs-5 d-flex align-items-center justify-content-center' to={'https://instagram.com/hi__webdesign?igshid=ZDc4ODBmNjlmNQ=='} target="_blank">
                                        <FaInstagram />
                                    </Link>
                                    <Link className='icon fs-5 d-flex align-items-center justify-content-center'>
                                        <FaTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
