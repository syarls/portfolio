import React, {useState, useEffect} from 'react'
import './mobilenav.css';

const mobilenav = ({isOpen, toggleMenu}) => {
    const [touchStartX, setTouchStartX] = useState(0);

    // Handle the touch start
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };
  
    // Handle the touch end and detect swipe
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      
      // Check if the swipe was significant (left swipe)
      if (touchStartX - touchEndX > 50) {
        if (isOpen) {
          toggleMenu(); // Close the menu
        }
      }
    };
  
    useEffect(() => {
      const menuElement = document.querySelector('.mobile-menu');
      if (menuElement) {
        menuElement.addEventListener('touchstart', handleTouchStart);
        menuElement.addEventListener('touchend', handleTouchEnd);
      }
  
      // Cleanup event listeners on component unmount
      return () => {
        if (menuElement) {
          menuElement.removeEventListener('touchstart', handleTouchStart);
          menuElement.removeEventListener('touchend', handleTouchEnd);
        }
      };
    }, [isOpen]);
  

    return (
      <>
        <div
          className={`mobile-menu ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
    <div className="mobile-menu-container">
        <div className = "flex flex-row">
        <img src="./src/assets/images/logo3.png" alt="" className="logo xs:h-[50px] xs:w-[50px] h-[65px] w-[65px]"/>
        <h1 className="my-8 mx-5 text-[26px] xs:text-[22px] xs:my-6 xs:mx-4 xs:tracking-[2.5px] md:text-[26px] md:my-6 md:mx-5 md:tracking-[2.5px] logo-txt">Charles</h1>
        </div>
        <ul>

        <div className='pl-[2.5rem]'>
        <button className="btn" onClick={() => {}}>
                Play
            </button>
            <li>
                <a className='menu-item flex pt-[2.5rem] text-[16px]' accessKey='1'>About</a>
            </li>
            <li>
                <a className='menu-item flex pt-[2.5rem] text-[16px]' accessKey='2'>Works</a>
            </li>
            <li>
                <a className='menu-item flex pt-[2.5rem] text-[16px]' accessKey='3'>Experience</a>
            </li>
            <li>
                <a className='menu-item flex pt-[2.5rem] text-[16px]' accessKey='4'>Contacts</a>
            </li>
            
            
         
            </div>
        </ul>
        
    </div>
    
 </div>
 </>
  )
}

export default mobilenav
