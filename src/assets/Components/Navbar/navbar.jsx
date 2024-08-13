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
 <div className="bg-black bg-opacity-10 py-2 sticky top-0 z-30 h-[100px] select-none backdrop-blur-[50px] animate-slideDown nav-wrapper">
    <div className="flex max-w-[1300px] items-center justify-between py-2 px-0 m-0 mx-auto content">
        <div className='mt-[-7.5px] flex tracking-[5px]'>
        <img src='./src/assets/images/logo3.png' alt="" className="w-16 h-16 select-none cursor-pointer mt-2 logo xs:w-12 xs:h-12 xs:mt-[20px]" onClick={showAlert} />
        <h1 class="my-8 mx-5 text-[26px] xs:text-[18px] xs:my-10 xs:mx-3 xs:tracking-[2.5px] logo-txt">Charles</h1>

        </div>
        <ul className="flex items-center gap-[0.35rem] list-none">
            <li className='mx-[1.5rem]'>
                <a className='w-[50px] menu-item hover:text-[14px] hover:mt-[-5px]' accessKey='1'>About</a>
            </li>
            <li className='mx-[1.5rem]'>
                <a className='w-[60px] menu-item hover:text-[14px] hover:mt-[-5px]' accessKey='2'>Works</a>
            </li>
            <li className='mx-[1.5rem]'>
                <a className='w-[100px] menu-item hover:text-[14px] hover:mt-[-5px]' accessKey='3'>Experience</a>
            </li>
            <li className='mx-[1.5rem]'>
                <a className='w-[80px] menu-item hover:text-[14px] hover:mt-[-5px]' accessKey='4'>Contacts</a>
            </li>
            {/* <li>

                <a className='menu-item' accessKey='5'>Feedback</a>
            </li> */}
            <li className='mx-[1.5rem]'>
              <a className='flex items-center justify-center text-[#149BF3] bg-black outline outline-[1.5px] outline-[#149BF3] px-8 py-[0.6rem] rounded-[30px] cursor-pointer transition-all duration-300 ease-linear tracking-[2.5px] text-[14px] h-[40px] max-w-[120px] btn' accessKey='6'>Style</a>
            </li>
        </ul>

        <button className="xs:mt-[-10px] xs:h-[2rem] xs:w-[2rem] menu-btn" onClick={()=>{}}>
            <span className='text-[2rem] xs:text-[1.3rem]'
            >
           ☰
            </span>
        </button>
    </div>
 </div>
   
  )
}

export default navbar
