import React, { useState } from 'react'
import { IEEELogo, Logo } from '../../assets/assets'
import '../SocietyNav/SocietyNav.css'
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {

    const [activeMenu, setActiveMenu] = useState(false);

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

  return (
    <div class="flex-col">

    <header class=" bg-[#3baaf5] body-font">
    <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-lg:flex-row max-lg:justify-between max-sm:flex-row  max-sm:justify-between max-sm:items-center ">
    
  

    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 max-sm:mb-0 max-lg:mb-0">
      <div className="bg-[#0570c4] w-10 h-10 text-white rounded-full">
                <img src={IEEELogo} alt="Esyventra Logo" className="soc-logo w-full h-full" />
        </div>
      <span class="text-white ml-3 text-xl font-bold">Society Logo</span>
    </a>

    <div class="max-lg:hidden md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <span class="box-border  text-white font-semibold text-2xl transition-all duration-50 hover:text-[#05599f] hover:scale-105 cursor-pointer" >Society Dashboard</span>
    </div>
        
    <button class="inline-flex items-center bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 max-sm:mt-0 max-lg:mt-0 text-white font-semibold">Sign out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    
  </div>
</header>
    </div>
  )
}

export default Navbar