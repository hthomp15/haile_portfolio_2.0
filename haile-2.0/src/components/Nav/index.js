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
    const [currentCategory, setCurrentCategory] = useState(navBars[0]);


    return(
        <nav className="navigation">
            <h1>Hello I'm Haile Thompson</h1>
            <ul className="nav-bar">
                {navBars.map((navBar) => {
                    return(
                    <li className={`${currentCategory.name === navBar.name && !isOpen &&'nav-active'}`} key={navBar.name}> 
                        <a href={navBar.link} target={navBar.target} onClick={ ()=>{
                            setIsOpen(false);
                            setCurrentCategory(navBar);
                        }}>{navBar.name}</a>
                    </li>)
                })}           
            </ul>
        </nav> 
    )
}

export default Nav;
