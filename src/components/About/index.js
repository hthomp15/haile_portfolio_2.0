import React from 'react';
import photo from '../../assets/images/about-me/img-1.jpeg';

function About() {
    return (
            <section className='about-me' id='about'>
                
                <div className = 'about-me-container'>
                <h2>About Me</h2>
                    <div className = 'about-me-photo'>
                        <img src={photo} alt='portrait of Haile'/>
                    </div>
                    <div className = 'about-me-text'>
                        <p>
                            I am a self taught developer out of Brooklyn, New York. I am Jamaican-American and grew up in Lake Placid, New York. I have a BS in Environmental Geoscience from SUNY New Paltz. After college I moved to the city and began working as an environmental consultant. To further develop my skills I enrolled in the Javascript Full Stack Web Development program at Columbia University.
                        </p>
                        <p>
                            Like many people I always assumed that coding was too complex to pick up and that I clearly didn't fit the bill. Since I started I have been engrossed in the world and it has quickly become an important part of my life. I enjoy the challenges it brings and the opportunity to learn something new every day. 
                        </p>
                        <p>
                            Please feel free to contact me if you have any questions or would like to work together. Thanks for taking the time to check out my page!
                        </p>
                    </div>
                </div>
            </section>
    );
}

export default About;
