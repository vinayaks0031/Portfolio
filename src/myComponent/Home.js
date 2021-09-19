import React from 'react';
import '../css/Home.css';
import profile from "../img/Profile.jpg";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import twitter from "../img/twitter.png";
import insta from "../img/instagram.png";
import download from "../img/download.png";
import { Link } from 'react-router-dom';
import CV from '../img/Resume(Vinayak-Sharma).pdf';

export default function Home() {
    return (
        <>
            <div className="container-fluid home-body">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="my-info ">
                            <img src={profile} alt="" />
                            <h1>Vinayak <br /> Sharma</h1>
                            <hr className="hr" />
                            <p>SOFTWARE DEVELOPER</p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/vinayak-sharma-b94161190" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                                <a href="https://github.com/vinayaks0031" target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
                                <a href="https://twitter.com/_Vinayak_sharma?s=08" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                                <a href="https://instagram.com/vinayak.sharma_?utm_medium=copy_link" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="info">
                            <p className="first-line">Hello</p>
                            <p className="second-line">Here's who I am & what I do</p>
                            <div className="btn-div">
                                <Link to="/Skills" className="btn btn-white">SKILLS</Link>
                                <Link to="/Project" className="btn btn-blue">PROJECTS</Link>
                                <a href={CV} download className="btn btn-white"><img src={download} alt="" /> RESUME</a>
                            </div>
                            <p className="last-para">I'm a 20 year old software developer and a competitive programmer staying in Indore Madhya Pradesh ,India. I am pursuing integrated MCA and  currently in 4th year of this five year degree. </p>
                            <p className="last-para">My interests include solving some real life problem via web & mobile apps and solving programming problems.
                                Connect with me on <a href="https://www.linkedin.com/in/vinayak-sharma-b94161190" target="_blank" rel="noreferrer">LinkedIn</a> and have a look on my <a href="https://github.com/vinayaks0031" target="_blank" rel="noreferrer">Github</a> profile .<br /><br />
                                I am always open and excited to learn and work with like minded people and want to be a successful developer.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
