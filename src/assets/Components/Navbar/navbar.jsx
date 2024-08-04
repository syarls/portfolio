import React from 'react'
import './navbar.css'
import notif from 'sweetalert2';
import logo from '../../images/logo3.png';
import '../../../App.css'


const navbar = () => {

    const showAlert = () => {
        notif.fire({
            title: 'You found a secret feature!',
            text: 'Charles loves to play badminton!',
            imageUrl: logo, 
            confirmButtonText: 'Cool'
        });
    };

  return (
 <div className="nav-wrapper">
    <div className="content">
        <div className='nav-left'>
        <img src='./src/assets/images/logo3.png' alt="" className="logo" height="65px" width="65px" onClick={showAlert} />
        <h1 class="logo-txt">Charles</h1>

        </div>
        <ul>
            <li>
                <a className='menu-item' accessKey='1'>Home</a>
            </li>
            <li>
                <a className='menu-item' accessKey='2'>Education</a>
            </li>
            <li>
                <a className='menu-item' accessKey='3'>Projects</a>
            </li>
            <li>
                
                <a className='menu-item' accessKey='4'>Experience</a>
            </li>
            <li>
                <a className='menu-item' accessKey='5'>Skills</a>
            </li>
            
            <li>
              <a className='btn' accessKey='6'>Chat</a>
            </li>
        </ul>

        <button className="menu-btn" onClick={()=>{}}>
            <span 
            style={{fontSize: "1.8rem"}}
            >
           ☰
            </span>
        </button>
    </div>
 </div>
   
  )
}

export default navbar
