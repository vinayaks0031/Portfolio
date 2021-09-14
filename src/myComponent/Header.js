import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="navBar">
                <span />
                <p> <span>Vinayak Sharma</span>  / software developer</p>
                <div className="options">
                    <Link to="/">ABOUT ME </Link>
                    <Link to="/Skills">SKILLS </Link>
                    <Link to="/Project">PROJECTS </Link>
                    <Link to="/Contact">CONTACT </Link>
                </div>
            </div>
        </>
    )
}


