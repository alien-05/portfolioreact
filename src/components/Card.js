import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import logo from '../imgs/12.jpg'

function Card(props) {
    const { title, fct, desc } = props;
    return (
        <div className='card text-center position-relative'>
            <img className='img-fluid rounded-pill mb-' src={logo} alt='profile' />
            <div className='info mt-5'>
                <h4 className='title mt-2 mb-0 text-capitalize fw-bold'>{title}</h4>
                <span className='mini mt-0 text-capitalize text-black-50'>{fct}</span>
            </div>
            <span className='quote mt-4 mb-4 fs-6 text-light rounded-pill d-flex justify-content-center align-items-center m-auto'><FaQuoteLeft /></span>
            <p className='desc text-black-50 fw-bold pb-3 mt-0 ms-1 me-1 ms-lg-3 me-lg-3 ms-xl-4 me-xl-4'>
                {desc}
            </p>
        </div>
    )
};

export default Card;
