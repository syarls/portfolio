import React, { useRef, useEffect } from 'react';
import './hero.css'
import Typed from 'typed.js';
import '../../../App.css'
import { FaDownload, FaQuestion, FaQuestionCircle } from 'react-icons/fa'; 
import { FaClipboardQuestion } from 'react-icons/fa6';




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
    <div className='xs:flex xs:flex-col md:flex md:flex-col md:flex md:flex-col hero-content'>


        <div className="hero-img">
            
       <img src='./src/assets/images/logo5.jpg' alt="" className="hero-logo xs:w-[250px] xs:-h[250px] xs:flex xs:flex-col" width="425px" height="425px" />
       </div>
       <div className="txt-section">
       <h1 className="xs:text-[24px] xs:pt-[0px] xs:text-center hero-txt">
    <span className="xs:hidden hero-txt">Hi, I am </span>
    <strong className="xs:text-[26px] hero-name">Charles Dave Reyes</strong>
  </h1>
       <h1 className='txt xs:text-center'><span className='txt xs:hidden'>I am a </span><span className="roles xs:text-[22px]" ref={el}></span></h1>
       <h3 className='desc xs:pl-[15px] xs:pr-[15px] xs:text-[18px]'>
      I am a versatile professional based in the Philippines with extensive experience in software engineering and beyond. From designing to solving complex problems, I am adept at delivering impactful solutions within the industry.
       </h3>
     
        {/* <div className='flex flex-row gap-[0.6rem] mt-[30px]'> */}
       <a href="./src/assets/images/Reyes_Resume.pdf" download="Reyes_Resume" className='xs:mx-auto w-50% mt-[30px] resume'>  <FaDownload /> &nbsp; Download CV</a>
       {/* <a href="./src/assets/images/Reyes_Resume.pdf" download="Reyes_Resume" className='xs:mx-auto w-50% learn'>  <FaQuestionCircle /> &nbsp; Learn More</a>
       </div> */}
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
