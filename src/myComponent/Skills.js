import React from 'react';
import '../css/Skills.css';
import CV from '../img/Resume(Vinayak-Sharma).pdf';
import Algo from '../img/Algo-Toolbox.png';
import NPTEL from '../img/NPTEL.jpg';
import JAVA from '../img/JAVA.png';

export default function Resume() {

    // const SKILLS = [
    //     {
    //         "type": "C++",
    //         "level": 70
    //     },
    //     {
    //         "type": "React",
    //         "level": 65
    //     },
    //     {
    //         "type": "Javascript",
    //         "level": 70
    //     },
    //     {
    //         "type": "Java",
    //         "level": 55
    //     },
    //     {
    //         "type": "HTML",
    //         "level": 80
    //     },
    //     {
    //         "type": "CSS",
    //         "level": 70
    //     },
    // ]
    // const colors = {
    //     "bar": "#1e63fc",
    //     "title": {
    //         "text": "#fff",
    //         "background": "#0d1daa"
    //     }
    // }
    const style = {
        img: {
            height: "100%",
            width: "80%",
            padding: "1%",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        },
        skillSection: {
            padding: "3%",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"

        },
        bar: {
            textAlign: "left",
            marginBottom: "8%"
        }
    }
    return (
        <>
            <div className="component-body">
                <div className="component-details">
                    <h1><span className="blue-line" />Skills</h1>
                    <div className="row justify-content-center my-5"  >
                        <div className="col-xl-5 col-md-7 col-11" style={style.skillSection}>
                            <div style={style.bar}>
                                <div className="bar learning" data-skill="C++"><span> 70%</span></div>
                                <div className="bar basic" data-skill="React"><span> 65%</span></div>
                                <div className="bar learning" data-skill="JavaScript"><span> 70%</span></div>
                                <div className="bar intermediate" data-skill="Java"><span> 55%</span></div>
                                <div className="bar advanced" data-skill="HTML"><span> 80%</span></div>
                                <div className="bar learning" data-skill="CSS"><span> 70%</span></div>
                            </div>
                            <a href={CV} download><button className="btn btn-blue">Download Resume</button></a>
                        </div>
                    </div >
                    <h1><span className="blue-line" />Certificates</h1>
                    <div className="row jsutify-content-center"  >
                        <div className="col-xl-4 col-md-6 mt-5" >
                            <img style={style.img} src={Algo} alt="" />
                        </div>
                        <div className="col-xl-4 col-md-6 mt-5">
                            <img style={style.img} src={JAVA} alt="" />
                        </div>
                        <div className="col-xl-4 col-md-6 mt-5">
                            <img style={style.img} src={NPTEL} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
