import React from 'react'

export default function ProjectCard({ pData }) {

    return (
        <>

            <div className="card-container">
                {
                    pData.map((element) => {
                        const { name, github, live, tech, image, discription } = element;
                        return (
                            <>
                                <div className="card">
                                    <div className="card-details">
                                        <h2><span />  {name}</h2>
                                        <p><i>(<b>Techology :</b>{tech})</i></p>
                                        <p className="card-discr">{discription}</p>
                                        <div className="project-links">
                                            <a href={github} className="btn btn-blue" target="_blank" rel="noopener noreferrer">Github</a>
                                            <a href={live} className="btn btn-white" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        </div>
                                    </div>
                                    <div className="card-image">
                                        <a href={live} target="_blank" rel="noopener noreferrer"><img src={image} alt="CLICK HERE" className="project-image" /></a>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }

            </div>
        </>
    )
}
