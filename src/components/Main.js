import React from "react";
import logo from '../../src/imgs/12.jpg';

function Main(props) {
    return (
        <>
            <div className=" d-flex align-items-center hero container">
                <div className="row ">
                    <div className="col-6">
                        <h1 className='title fs-1 text-start fw-bold mb-0'>H-I WEB DEVELOPER </h1>
                        <span className="fonction text-muted  fs-3 mt-0 mb-1">I'm a web developer </span>
                        <p className="description  lh-base font-monospace pt-1 pb-1 text-capitalize">
                            As a web developer, I am responsible for designing and developing web pages. My primary focus is to create responsive, user-friendly experiences that meet the needs of a diverse online audience.i am proficient in programming languages such as HTML, CSS and JavaScript and their frameworks such as Bootstrap,React js.
                        </p>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="image "><img className="rounded-circle w-100" src={logo} alt="avatr" /></div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Main;
