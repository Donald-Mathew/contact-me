import React, { useState } from 'react';
import assets from '../assets/assets';
import { ArrowRight, HamburgerIcon, Menu, MenuIcon, MenuSquareIcon, Moon, MoonIcon, SidebarCloseIcon, SquareMenu, SunIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from "motion/react";

const Navbar = ({theme, setTheme}) => {
     
    const [sideBarOpen, setSidebarOpen] = useState(false); 

    const handleClose = () => {
        setSidebarOpen(false);
    };

    const handleOpen = () => {
        setSidebarOpen(true);
    }

    const [rotated, setRotated] = useState(false);


  return (
    <motion.nav 
      initial={{opacity:0, y:-50}}
      animate= {{opacity:1, y: 0}}
      transition={{duration:1.2, ease:"easeOut" }}
      className='flex justify-between items-center px-4 sm:px-6 md:px-6 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

     {/* <img src= {theme === "dark" ? assets.internet : assets.codium } className={theme === "dark" ? "w-13" : "w-30"} alt=""  /> */}
     <a href="https://instagram.com/thedoughknotbaker/" target="_blank">

     <img src= {assets.bakery2} 
     onMouseEnter={() => setRotated(true)}
     onMouseLeave={() => setRotated(false)}
     className = {`w-70 max-md:w-30 transition-transform duration-1600 ease-out ${rotated ? "rotate-360" : ""}`} />
     </a>
     <div className={`text-gray-700 dark:text-white sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' :  'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:h-50 rounded-xl  max-sm:flex-col max-sm:bg-[#DE6980] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
      

        <XIcon className='absolute cursor-pointer w-14 right-4 top-4 sm:hidden' onClick={handleClose} />

      
         <a href="#" className="md:hover:text-[#DE6980]">Home</a> 
         <a href="#products" className="md:hover:text-[#DE6980]">Our Products</a> 
         {/* <a href="#my-work" className="md:hover:text-[#DE6980]">My Work</a> */}
         <a href="#contact-us" className="md:hover:text-[#DE6980]">Contact Us </a>
        
     </div>

     <div className='flex items-center gap-2 sm:gap-4'>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      

        
        {theme === "dark" ? <MenuIcon className={'sm:hidden bg-[#DE6980] rounded-[5px] size-7 cursor-pointer'} onClick={handleOpen} /> : <Menu onClick={handleOpen}  className='w-8 sm:hidden'/> }

         <a href="#contact-us" className="text-sm max-sm:hidden max-md:w-30 bg-[#DE6980] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"> Connect
         </a> 
        
       

     </div>
      

    </motion.nav>
  )
}

export default Navbar;