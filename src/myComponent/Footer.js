import React from 'react';
import '../css/Footer.css';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import insta from '../img/instagram.png';

export default function Footer() {
    const style = {

        firstCol: {
            margin: "3% 0 1% 3%"

        },
        restCol: {
            textAlign: "center",
            margin: "3% 0 1% 0"
        },
        upperLine: {
            fontWeight: "bold",
            marginBottom: "4px"
        },
        links: {
            textDecoration: "none",
            color: "black"
        },
        socialLinks: {
            marginRight: "15px",
            height: "20px"
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-xl-2 col-md-4 col-sm-6 col-4 small-device" style={style.restCol}>
                        <p style={style.upperLine}>Call</p>
                        <a style={style.links} href="tel:+91 8827999007">8827999007</a>
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 col-4 small-device" style={style.restCol}>
                        <p style={style.upperLine}>Write</p>
                        <a style={style.links} href="mailto:vinayaks0031@gmail.com">vinayaks0031@gmail.com</a>
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 col-6 small-device" style={style.restCol}>
                        <p style={style.upperLine}>Follow</p>
                        <div >
                            <a href="https://www.linkedin.com/in/vinayak-sharma-b94161190" target="_blank" rel="noreferrer"><img style={style.socialLinks} src={linkedin} alt="" /></a>
                            <a href="https://github.com/vinayaks0031" target="_blank" rel="noreferrer"><img style={style.socialLinks} src={github} alt="" /></a>
                            <a href="https://twitter.com/_Vinayak_sharma?s=08" target="_blank" rel="noreferrer"><img style={style.socialLinks} src={twitter} alt="" /></a>
                            <a href="https://instagram.com/vinayak.sharma_?utm_medium=copy_link" target="_blank" rel="noreferrer"><img style={style.socialLinks} src={insta} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-11 col-sm-5 col-11 order-xl-first small-device-space" style={style.firstCol}>
                        <div >
                            <p style={style.upperLine}>No © copyright issues.</p>
                            <p>Feel free to copy. If you need any help, ping me!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
