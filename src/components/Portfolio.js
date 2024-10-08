import "./ProjectCardStyles.css"

import React from 'react'
import pro1 from "../assets/logo.png"
import { NavLink } from "react-router-dom"
const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="project-image" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio