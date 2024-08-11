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
    <div>
    <div className='hero-content'>


        <div className="hero-img">
            
       <img src='./src/assets/images/logo5.jpg' alt="" className="hero-logo" width="425px" height="425px" />
       </div>
       <div className="txt-section">
       <h1 className='hero-txt'>Hi, I am <strong className='hero-name'>Charles Dave Reyes</strong></h1>
       <h1 className='txt'>I am a <span className="roles" ref={el}></span></h1>
       <h3 className='desc'>
      I am a versatile professional based in the Philippines with extensive experience in software engineering and beyond. From designing to solving complex problems, I am adept at delivering impactful solutions within the industry.
       </h3>
     
         
       <a href="./src/assets/images/Reyes_Resume.pdf" download="Reyes_Resume" className='resume'>  <FaDownload /> &nbsp; Download CV</a>
      
       <div className="bento-container">
  <div className="bento-box dark-black">
    <div className="stat-number">1</div>
    <div className="stat-description">Years of Experience</div>
  </div>
  <div className="bento-box medium-black">
    <div className="stat-number">10+</div>
    <div className="stat-description">Projects Completed</div>
  </div>
  <div className="bento-box light-black">
    <div className="stat-number">100+</div>
    <div className="stat-description">Seminars Attended</div>
  </div>
  
</div>

    


       </div>

       
       </div>
    </div>
    )};
  



export default hero
