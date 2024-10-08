import "./ProjectCardStyles.css"
import ProjectCard from "./ProjectCard"
import ProjectCardData from "./PortfolioCardData"

import React from 'react'
const Portfolio = () => {
  return (
    <div className="portfolio-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val,ind)=>{
                return(
                    <ProjectCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Portfolio