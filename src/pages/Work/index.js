import React from "react";
// import photo from "../../assets/images/work/cream-logo.png"

function Work() {
    // const projects = [
    //     {
    //         name: "C.R.E.A.M",
    //         code: "Javascript - API Fetch Requests",
    //         description: "Stock and Crypto Tracker",
    //         link: "https://genehackerman.github.io/MillionDollarDream/",
    //         photo: "../../assets/images/work/cream-logo.png",

    //     },
    //     {
    //         name: "Dinnection",
    //         code: "Node.js - MVC Framework",
    //         description: "Digital Art Social Media - MVC Frampwork",
    //         link: "https://nameless-harbor-84311.herokuapp.com/",
    //         photo: "../../assets/images/work/dinnection_home.png"
    //     },
    //     {
    //         name: "Inventory Tracker",
    //         code: "Node/SQL/Express - CRUD Operations",
    //         description: "A back end e-commerce tracker",
    //         link: "https://github.com/hthomp15/inventory-tracker",
    //         photo: "../../assets/images/work/istockphoto-led.jpeg"
    //     },
    //     {
    //         name: "Weather Dashboard",
    //         description: "Search the forcast in any city",
    //         code: "Javascript - API Fetch Requests",
    //         link: "https://hthomp15.github.io/weather-request",
    //         photo: "../../assets/images/work/Screen-shot-weather.png"
    //     },
    //     {
    //         name: "Run Buddy",
    //         description: "Front end site for running",
    //         code: "HTMl/CSS",
    //         link: "https://hthomp15.github.io/run-buddy",
    //         photo: "../../assets/images/work/Screen Shot 2021-12-30 at 8.00.16 PM.png"
    //     },
    //     {
    //         name: "TBD",
    //         description: "TBD",
    //         code: "TBD",
    //         link: "",
    //         photo: "../../assets/images/work/IMG_2906.jpg"
    //     },

    // ];

    return (
        <section className='projects-container' id='work'>
            <h2 className="projects-header">Projects</h2>
            <article className="project">
                <a href="https://genehackerman.github.io/MillionDollarDream/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/work/cream-logo.png")} alt="C.R.E.A.M" />
                    <div className="project-info">
                        <h3 >C.R.E.A.M</h3>
                        <span>Third Party API's - Javascript</span>
                        <p>I used fetch requests to gather data and manipulate the DOM with Javascript. You can search all major stocks and crypto on the same site.</p>
                    </div>
                </a>
            </article>
            <article className="project">
                <a href="https://nameless-harbor-84311.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/work/dinnection_home.png")} alt="Dinnection" />
                    <div className="project-info">
                        <h3>Dinnection</h3>
                        <span>Node.js/AWS - MVC Framework</span>
                        <p>Platform for digital art. Users can upload different types of files which are stored on the AWS S3 cloud. Must be logged in to access the site.</p>
                    </div>
                </a>
            </article>
            <article className="project">
                <a href="https://github.com/hthomp15/inventory-tracker" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/work/istockphoto-led.jpeg")} alt="Inventory Tracker" />
                    <div className="project-info">
                        <h3>Inventory Tracker</h3>
                        <span>Node/SQL/Express - CRUD Operations</span>
                        <p>A back end e-commerce tracker. Find, update, add, and delete inventory all from the command line and Insomnia</p>
                    </div>
                </a>
            </article>
            <article className="project">
                <a href="https://hthomp15.github.io/weather-request" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/work/Screen-shot-weather.png")} alt="Weather Dashboard" />
                    <div className="project-info">
                        <h3>Weather Dashboard</h3>
                        <span>Javascript - API Fetch Requests</span>
                        <p>Users can search the weather in any city and get an extended 5 day forcast.</p>
                    </div>
                </a>
            </article>
        
            {/* Projects map operation, not mapping image. Everything else maps correctly.
            project.photo error says module not found. However, hardcoding the same link works  */}
            {/* {projects.map((project) => {
                    return(
                        <article className="project" key={project.name}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"> 
                                <img src={require(project.photo)} alt={project.name}/>
                                <div className="project-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        </article>
                    )
                })} */}
        </section>
    );
}

export default Work;