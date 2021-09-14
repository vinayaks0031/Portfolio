import React from 'react';
import SkillBar from 'react-skillbars';
import '../css/Skills.css';
import CV from '../img/Resume(Vinayak-Sharma).pdf';
import Algo from '../img/Algo-Toolbox.png';
import NPTEL from '../img/NPTEL.jpg';
import JAVA from '../img/JAVA.png';

export default function Resume() {

    const SKILLS = [
        {
            "type": "C++",
            "level": 70
        },
        {
            "type": "React",
            "level": 65
        },
        {
            "type": "Javascript",
            "level": 70
        },
        {
            "type": "Java",
            "level": 55
        },
        {
            "type": "HTML",
            "level": 80
        },
        {
            "type": "CSS",
            "level": 70
        },
    ]
    const colors = {
        "bar": "#1e63fc",
        "title": {
            "text": "#fff",
            "background": "#0d1daa"
        }
    }
    return (
        <>
            <div className="component-body">
                <div className="component-details">
                    <h1><span className="blue-line" />Skills</h1>
                    <div className="skills-bar">
                        <SkillBar skills={SKILLS} height={25} colors={colors} /><br /><br />
                        <a href={CV} download><button className="btn btn-blue">Download Resume</button></a>
                    </div >
                    <h1><span className="blue-line" />Certificates</h1>
                    <div className="certificate">
                        <div className="certi-card">
                            <img src={Algo} alt="" />
                        </div>
                        <div className="certi-card">
                            <img src={JAVA} alt="" />
                        </div>
                        <div className="certi-card">
                            <img src={NPTEL} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
