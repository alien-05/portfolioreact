import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/Group 78.png';
// import { HiMenu, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { BiMailSend } from 'react-icons/bi';

// function Navbar(props) {
//     const about = document.querySelector('.about');
//     const skills = document.querySelector('.skills');
//     const testimo = document.querySelector('.testimonials');

//     //toggle class menu
//     const [active, setActive] = useState(false);
//     const handle = () => { setActive(!active) };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg ">
//                 <div className="container">
//                     <button onClick={handle} className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         {active ? <HiOutlineMenuAlt1 /> : <HiMenu />}
//                     </button>
//                     <NavLink className="navbar-brand font-monospace" to="#">H.I</NavLink>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav d-flex align-items-start align-items-lg-center ms-auto me-auto mb-2 mb-lg-0">
//                             <li className="nav-item me-4">
//                                 <NavLink className="nav-link  fs-5 fs-lg-4" to="/"><span>H</span>ome</NavLink>
//                             </li>
//                             <li className="nav-item me-4">
//                                 <NavLink onClick={() => about && about.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/about"><span>A</span>bout</NavLink>
//                             </li>
//                             <li className="nav-item me-4">
//                                 <NavLink onClick={() => skills && skills.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/skills"><span>S</span>kills</NavLink>
//                             </li>
//                             <li className="nav-item me-4">
//                                 <NavLink onClick={() => testimo && testimo.scrollIntoView({ behavior: 'smooth' })} className="nav-link fs-5 fs-lg-4" to="/testimonials"><span>T</span>estimonials</NavLink>
//                             </li>
//                         </ul>
//                         <form className="d-flex contact">
//                             <NavLink className="btn text-align" to={'https://www.facebook.com/profile.php?id=100092187097027&mibextid=ZbWKwL'} target='_blank'>Contact</NavLink>
//                         </form>
//                     </div>
//                 </div>
//                 {/* <Routes>
//                     <Route path='/' element={<Main />}></Route>
//                     <Route path='/about' element={<About />}></Route>
//                     <Route path='/skills' element={<Skills />}></Route>
//                     <Route path='/testimonials' element={<Testimonials />}></Route>
//                 </Routes> */}
//             </nav>
//         </>
//     )
// };



function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg pb- pt-">
                <div className="container">
                    <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* //{active ? <HiOutlineMenuAlt1 /> : <HiMenu />} */}
                    </button>
                    <NavLink className="navbar-brand font-monospace mb-md-2" to="#">
                        <div className="image">
                        <img className='img-fluid' src={logo} alt="logo" />
                        </div>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  d-flex align-items-start align-items-lg-center ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-capitalize fs-5 fs-lg-4" href='#'>home</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-capitalize fs-5 fs-lg-4" href='#'>about</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-capitalize fs-5 fs-lg-4" href='#'>skills</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link text-capitalize fs-5 fs-lg-4" href='#'>projects</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <span className="hire btn fs-6 text-capitalize fw-bold pt-1 pb-1 ps-3 pe-3 d-flex align-items-center" to="#">
                                    <BiMailSend className='me-2 fs-5 fw-bold'/>
                                    Hire me
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
