import React from "react";

function Footer() {
    return (
        <footer>
            <div class="contact-svgs">
                <ul class="top-imgs">
                    <li><a href="tel:5186377689"><img alt="Mobile Phone" src={require("../../assets/images/svg-icons/icons8-phone.svg")}/></a></li>
                    <li><a href="mailto:hailethomp@gmail.com"><img alt="Email" src={require("../../assets/images/svg-icons/icons8-gmail.svg")}/></a></li>
                    <li><a href="https://github.com/hthomp15" target="_blank" rel="noopener noreferrer"><img alt="Github" src={require("../../assets/images/svg-icons/icons8-github.svg")}/></a></li>    
                </ul>
            </div>
            <div class="contact-svgs">
                <ul class="bottom-imgs">
                    <li><a href="https://www.linkedin.com/in/haile-thompson-b9a21013a/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={require("../../assets/images/svg-icons/icons8-linkedin.svg")}/></a></li>
                    <li><a href="https://twitter.com/software_simba1" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={require("../../assets/images/svg-icons/icons8-twitter.svg")}/></a></li>    
                </ul>
            </div> 
            <h2> Made with <span role="img" aria-label="Heart">❤️</span> by Haile Thompson, May 2022</h2>
        </footer>
    );
}

export default Footer;