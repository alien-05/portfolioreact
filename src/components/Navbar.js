import React from "react";
import { Outlet, Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed x-0 y-0 w-100"  >
            <div className="container">
                <Link className="navbar-brand" to="/">l'histidine</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Main">isoleucine</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skills">laleucine</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Testimonials">lalycine</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/Contact'>Methionine</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button classNameName="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Outlet />
        </nav>
    );
}


export default Navbar;
