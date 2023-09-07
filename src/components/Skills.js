import React from 'react';
// import Line from './Line';
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { SiVite, SiRedux } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FcLinux } from 'react-icons/fc';
function Skills(props) {



    return (
        <div className='skills mt-5 mb-5 pt-5 me-0 me-sm-5' >
            <div className="box float-end me">
                <h1 className='title fs-3 text-capitalize'>my skills</h1>
                <h2 className='sub fs-5 mb-3'>Technologies I’ve been working with recently</h2>
                <div className='mb-4'>
                    <span className="html me-5  fs-1 ps-2 pe-2 pb-2"><AiFillHtml5 /></span>
                    <span className="css me-5  fs-1 ps-2 pe-2 pb-2"><DiCss3 /></span>
                    <span className="js me-5 fs-1 ps-2 pe-2 pb-2"><DiJavascript1 /></span>
                    <span className="react me-5 fs-1 ps-2 pe-2 pb-2"><FaReact /></span>
                    <span className="bp me-xl-5 fs-1 ps-2 pe-2 pb-2"><FaBootstrap /></span>
                </div>
                <div>
                    <span className="sass me-5 ms-0 fs-1  ps-2 pe-2 pb-2"><DiSass /></span>
                    <span className="vite me-5 fs-1 ps-2 pe-2 pb-2"><SiVite /></span>
                    <span className="redux me-5 fs-1 ps- pe-2 pb-2"> <SiRedux /></span>
                    <span className="vscode me-5 fs-1 ps-2 pe-2 pb-2"><TbBrandVscode /></span>
                    <span className="vscode fs-1 ps-2 pe-2 pb-2"><FcLinux /></span>
                </div>
            </div>
        </div>
    )
};

export default Skills;
