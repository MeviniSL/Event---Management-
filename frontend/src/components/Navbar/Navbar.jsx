import React, { useState, useEffect } from 'react'
import { Logo } from '../../assets/assets'
import './Navbar.css'
import { useNavigate } from 'react-router';
import { MdOutlineMenu } from "react-icons/md";
import UserService from '../../services/UserService';


function Navbar() {

    const [activeMenu, setActiveMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

        // Check authentication status on component mount
    useEffect(() => {
        setIsLoggedIn(UserService.isAuthenticated());
    }, []);

    const handleClick = () => {
        if(activeMenu){
            const menu = document.querySelector('.toggle-menu-hide');
            menu.style.display='none';
            setActiveMenu(false);
        }else{
            const menu = document.querySelector('.toggle-menu-hide');
            menu.style.display='flex';
            setActiveMenu(true);
        }
    }
    const navigate = useNavigate();

    const handleSignin = ()=>{
        navigate('/login');

    }
    const handleLogout = () => {
        UserService.Logout();
        setIsLoggedIn(false);
        navigate('/');
    }

  return (
    <div class="flex-col ">

    <header class=" bg-[#3baaf5] body-font">
    <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-lg:flex-row max-lg:justify-between max-sm:flex-row  max-sm:justify-between max-sm:items-center ">
    
    <div class="tog-menu-container max-lg:block lg:hidden">
        <div class="menu-icon" onClick={handleClick}>

        <MdOutlineMenu  class="text-[#0570c4] hover:text-[#05599f] h-8 w-8 cursor-pointer max-lg:block lg:hidden" />


    </div>
    
    </div>

    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 max-sm:mb-0 max-lg:mb-0">
      <div className="bg-[#0570c4] w-10 h-10 text-white p-1 rounded-full">
                <img src={Logo} alt="Esyventra Logo" className="w-full h-full" />
        </div>
      <span class="text-white ml-3 text-xl font-bold">Esyventra</span>
    </a>
    <nav class="max-lg:hidden md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class={`box-border mr-20 ${activeNav === '#home' ? 'text-[#05599f]' : 'text-white'} font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer`} href='#home' onClick={() => setActiveNav('#home')}>Home</a>
      <a class={`box-border mr-20 ${activeNav === '#event' ? 'text-[#05599f]' : 'text-white'} font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer`} href='#event' onClick={() => setActiveNav('#event')}>Event</a>
      <a class={`box-border mr-20 ${activeNav === '#society' ? 'text-[#05599f]' : 'text-white'} font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer`} href='#society' onClick={() => setActiveNav('#society')}>Society</a>
      <a class={`box-border mr-20 ${activeNav === '#about' ? 'text-[#05599f]' : 'text-white'} font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer`} href='#about' onClick={() => setActiveNav('#about')}>About</a>
      <a class={`box-border mr-20 ${activeNav === '#contact' ? 'text-[#05599f]' : 'text-white'} font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer`} href='#contact' onClick={() => setActiveNav('#contact')}>Contact</a>
    </nav>
    {/* Conditional rendering: Sign in or Logout */}
    {isLoggedIn ? (
      <button 
        className="inline-flex items-center bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 max-sm:mt-0 max-lg:mt-0 text-white font-semibold" 
        onClick={handleLogout}
      >
        Logout
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
      </button>
    ) : (
      <button 
        className="inline-flex items-center bg-[#0570c4] border-0 py-2 px-4 focus:outline-none hover:bg-[#05599f] rounded text-base mt-4 md:mt-0 max-sm:mt-0 max-lg:mt-0 text-white font-semibold" 
        onClick={handleSignin}
      >
        Sign in
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    )}
  </div>
</header>


<div class="tog-menu-container  bg-gray-100 max-lg:block lg:hidden text-center justify-center items-center">
 <nav class="toggle-menu-hide lg:hidden  text-center flex-col items-center">
      <a class="box-border mb-3 w-full text-[#0570c4] font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer" >Home</a>
      <a class="box-border mb-3 w-full text-[#0570c4] font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer">Event</a>
      <a class="box-border mb-3 w-full text-[#0570c4] font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer">Society</a>
      <a class="box-border mb-3 w-full text-[#0570c4] font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer">About</a>
      <a class="box-border mb-3 w-full text-[#0570c4] font-semibold transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer">Contact</a>
    </nav>
</div>
    </div>
  )
}

export default Navbar