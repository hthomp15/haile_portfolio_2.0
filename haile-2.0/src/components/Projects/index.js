import React from "react";
import photo from "../../assets/images/work/cream-logo.png"

function Projects() {
    // const projects = [
    //     {
    //         name: "C.R.E.A.M", 
    //         code: "Javascript - API Fetch Requests",
    //         description: "Stock and Crypto Tracker",
    //         link: "https://genehackerman.github.io/MillionDollarDream/",
    //         preview: "../../assets/images/projects/cream-logo.png"
            
    //     },
    //     {
    //         name: "Dinnection",
    //         code: "Node.js - MVC Framework",
    //         description: "Digital Art Social Media - MVC Frampwork",
    //         link: "https://nameless-harbor-84311.herokuapp.com/",
    //         preview: "../../assets/images/projects/dinnection_home."
    //     },
    //     {
    //         name: "Inventory Tracker",
    //         code: "Node/SQL/Express - CRUD Operations",
    //         description: "A back end e-commerce tracker",
    //         link: "https://github.com/hthomp15/inventory-tracker",
    //         preview: "../../assets/images/projects/istockphoto-led.jpeg"
    //     },
    //     {
    //         name: "Weather Dashboard",
    //         description: "Search forcast in any city",
    //         code: "Javascript - API Fetch Requests", 
    //         link: "https://hthomp15.github.io/weather-request",
    //         preview: "../../assets/images/projects/Screen-shot-weather.png"
    //     },
    //     {
    //         name: "Run Buddy",
    //         description: "Front end site for running",
    //         code: "HTMl/CSS",
    //         link: "https://hthomp15.github.io/run-buddy",
    //         preview: "../../assets/images/projects/Screen Shot 2021-12-30 at 8.00.16 PM.png"
    //     },
    //     {
    //         name: "TBD",
    //         description: "TBD",
    //         link: "",
    //         preview: "../../assets/images/projects/IMG_2906.jpg"
    //     },

    // ]
    return (
        <div className='projects-container' id='work'>
            <h2>Projects</h2>
            <section className="projects">
                <img src={photo}/>
                {/* <div>
                    {projects.map((project) => (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={require(`${project.preview}`)} alt=""/>
                                <div className="caption">
                                    <h3>{project.name}</h3>
                                    <span>{project.code}</span>
                                    <span>{project.description}</span>
                                </div>
                            </a>
                        ))
                    }
                </div> */}
            </section>

        </div>
    );
}

export default Projects;