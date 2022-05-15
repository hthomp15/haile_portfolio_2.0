import React from "react";
import { useState } from "react";

function Nav() {
    const navBars = [
        {name: "About",link: "#about"},
        {name: "Contact", link: "#contact" },
        {name: "Work", link: "#work" }, 
        {name: "Resume", link: "#resume", target: "_blank" },
    ];

    const [isOpen, setIsOpen] = useState(false);



    return(
        <nav className="navigation">
            <h1>Hello I'm Haile Thompson</h1>
            <ul className="nav-bar">
                {navBars.map((navBar, index) => {
                    return(
                    <li className={isOpen ? "nav-closed" : "nav-active"} key={index}> 
                        <a href={navBar.link} target={navBar.target} onClick={ ()=>{
                            setIsOpen(!isOpen);
                        }}>{navBar.name}</a>
                    </li>)
                })}           
            </ul>
        </nav> 
    )
}

export default Nav;
