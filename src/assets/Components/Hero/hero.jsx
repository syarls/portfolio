import React, { useRef, useEffect } from 'react';
import './hero.css'
import Typed from 'typed.js';
import ayano from '../../images/ayano.jpg'
import '../../../App.css'
import { FaDownload } from 'react-icons/fa'; 




const hero = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Software Engineer',
                'Full Stack Developer',
                'Quality Assurance',
                'AI/ML Specialist',
                'UI/UX Designer',
                'Photographer'
            ],
            typeSpeed: 50,
            backSpeed: 30, 
            backDelay: 1000, 
            startDelay: 500, 
            loop: true,

            cursorChar: '|', 
            preStringTyped: function (arrayPos, self) {
           
              document.querySelector('.typed-cursor').classList.add('typed-cursor');
            },
        });

        return () => {

            typed.destroy();
        };
    }, []);

  return (
    <div className='hero-content'>


        <div className="hero-img">
            
       <img src='./src/assets/images/logo5.jpg' alt="" className="logo" width="450px" height="450px" />
       </div>
       <div className="txt-section">
       <h1 className='hero-txt'>Hi, I am <strong>Charles Dave Reyes</strong></h1>
       <h1 className='txt'>I am a <span className="roles" ref={el}></span></h1>
       <h3 className='desc'>
       Highly motivated Software Engineer with experience
in building user-friendly and responsive web
applications using HTML, CSS, and JavaScript
frameworks like React. Eager to contribute to a
collaborative IT environment and gain experience
across the full development lifecycle.
       </h3>
       <a href="./src/assets/images/Reyes_Resume.pdf" download="Reyes_Resume" className='resume'>  <FaDownload /> &nbsp; Download CV</a>
       </div>

    </div>
    )};
  



export default hero
