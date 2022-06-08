import React from "react";
// import photo from "../../assets/images/work/cream-logo.png"

function Work() {
    const projects = [
        {
            name: "C.R.E.A.M", 
            code: "Javascript - API Fetch Requests",
            description: "Stock and Crypto Tracker",
            link: "https://genehackerman.github.io/MillionDollarDream/",
            photo: "../../assets/images/work/cream-logo.png",
            
        },
        {
            name: "Dinnection",
            code: "Node.js - MVC Framework",
            description: "Digital Art Social Media - MVC Frampwork",
            link: "https://nameless-harbor-84311.herokuapp.com/",
            photo: "../../assets/images/work/dinnection_home.png"
        },
        {
            name: "Inventory Tracker",
            code: "Node/SQL/Express - CRUD Operations",
            description: "A back end e-commerce tracker",
            link: "https://github.com/hthomp15/inventory-tracker",
            photo: "../../assets/images/work/istockphoto-led.jpeg"
        },
        {
            name: "Weather Dashboard",
            description: "Search the forcast in any city",
            code: "Javascript - API Fetch Requests", 
            link: "https://hthomp15.github.io/weather-request",
            photo: "../../assets/images/work/Screen-shot-weather.png"
        },
        {
            name: "Run Buddy",
            description: "Front end site for running",
            code: "HTMl/CSS",
            link: "https://hthomp15.github.io/run-buddy",
            photo: "../../assets/images/work/Screen Shot 2021-12-30 at 8.00.16 PM.png"
        },
        {
            name: "TBD",
            description: "TBD",
            code: "TBD",
            link: "",
            photo: "../../assets/images/work/IMG_2906.jpg"
        },

    ];

    return (
        <section className='projects-container' id='work'>
            <h2 className="projects-header">Projects</h2>
                {projects.map((project) => {
                    return(
                        <article className="project" key={project.name}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"> 
                                <img src="" alt={project.name}/>
                                <div className="project-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        </article>
                    )
                })}
        </section>
    );
}

export default Work;