import React from 'react';
import '../css/Footer.css';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import insta from '../img/instagram.png';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="copyright">
                    <p className="bt-space">No © copyright issues. </p>
                    <p> Feel free to copy. If you need any help, ping me!</p>
                </div>
                <div className="inside-footer">
                    <p className="bt-space">Call</p>
                    <a href="tel:+91 8827999007">8827999007</a>
                </div>
                <div className="inside-footer">
                    <p className="bt-space">Write</p>
                    <a href="mailto:vinayaks0031@gmail.com">vinayaks0031@gmail.com</a>
                </div>
                <div className="inside-footer">
                    <p className="bt-space">Follow</p>
                    <div className="social-handles">
                        <a href="https://www.linkedin.com/in/vinayak-sharma-b94161190" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                        <a href="https://github.com/vinayaks0031" target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
                        <a href="https://twitter.com/_Vinayak_sharma?s=08" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                        <a href="https://instagram.com/vinayak.sharma_?utm_medium=copy_link" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
