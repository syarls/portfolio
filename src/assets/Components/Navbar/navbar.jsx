import React, {useState} from 'react'
import './navbar.css'
import notif from 'sweetalert2';
import logo from '../../images/logo3.png';
import '../../../App.css'
import MobileNav from "../MobileNav/mobilenav"


const navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <div className="bg-black bg-opacity-10 py-2 sticky top-0 z-30 h-[100px] select-none backdrop-blur-[30px] animate-slideDown nav-wrapper">
          <div className="flex max-w-[1300px] items-center justify-between py-2 px-0 m-0 mx-auto content">
              <div className='mt-[-7.5px] flex tracking-[5px]'>
                  <img src='./src/assets/images/logo3.png' alt="" className="w-16 h-16 select-none cursor-pointer mt-2 logo xs:w-12 xs:h-12 xs:mt-[20px] md:w-14 md:h-14 md:mt-[18px]" />
                  <h1 className="my-8 mx-5 text-[26px] xs:text-[18px] xs:my-10 xs:mx-3 xs:tracking-[2.5px] md:text-[20px] md:my-10 md:mx-3 md:tracking-[2.5px] logo-txt">Charles</h1>

              </div>
              <ul className="flex items-center gap-[0.35rem] pl-[3rem] list-none">
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
                      <a className='flex items-center justify-center text-[#149BF3] bg-black outline outline-[1.5px] outline-[#149BF3] px-8 py-[0.6rem] rounded-[30px] cursor-pointer transition-all duration-300 ease-linear tracking-[2.5px] text-[14px] h-[40px] max-w-[120px] btn' accessKey='6'>Play</a>
                  </li>
              </ul>

              <button className="xs:mt-[-10px] xs:h-[2rem] xs:w-[2rem] md:mt-[-10px] md:h-[2.25rem] md:w-[2.25rem] menu-btn" onClick={toggleMenu}>
                  <span className='text-[2rem] xs:text-[1.3rem] md:text-[1.5rem]' 
                  >
                      ☰
                  </span>
              </button>
          </div>
      </div></>
   
  )
}

export default navbar
