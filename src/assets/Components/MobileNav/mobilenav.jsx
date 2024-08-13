import React from 'react'
import './mobilenav.css';

const mobilenav = ({isOpen, toggleMenu}) => {
 
    return (
 <>
 <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}>
    <div className="mobile-menu-container">
        <img src="./src/assets/images/logo3.png" alt="" className="logo" height="65px" width="65px" />
        <ul>
        <li>
                <a className='menu-item' accessKey='1'>About</a>
            </li>
            <li>
                <a className='menu-item' accessKey='2'>Works</a>
            </li>
            <li>
                <a className='menu-item' accessKey='3'>Experience</a>
            </li>
            <li>
                <a className='menu-item' accessKey='4'>Contacts</a>
            </li>
            
            <button className="btn" onClick={() => {}}>
                Style
            </button>
        </ul>
    </div>
 </div>
 </>
  )
}

export default mobilenav
