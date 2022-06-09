import React from "react";

function Footer() {
    return (
        <footer>
            <div className="contact-svgs" id="contact">
                
                <ul className="contact-list">
                    <li><a href="https://www.linkedin.com/in/haile-thompson-b9a21013a/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={require("../../assets/images/svg-icons/icons8-linkedin.svg")}/></a></li>
                    <li><a href="https://twitter.com/software_simba1" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={require("../../assets/images/svg-icons/icons8-twitter.svg")}/></a></li>    
                    <li><a href="https://github.com/hthomp15" target="_blank" rel="noopener noreferrer"><img alt="Github" src={require("../../assets/images/svg-icons/icons8-github.svg")}/></a></li>    
                </ul>
            </div>
            <h4> Made with <span role="img" aria-label="Heart">❤️</span> by Haile Thompson, May 2022</h4>
        </footer>
    );
}

export default Footer;