import React from 'react'
import assets from '../assets/assets';
import { motion } from "motion/react";

const Footer = ({theme}) => {
  return (
    <motion.div
    
       initial = {{opacity:0, y:50}}
       whileInView={{opacity: 1, y:0}}
       transition = {{duration: 0.8}}
       viewport = {{once:true}}

    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
       {/* footer top */}
       <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
          
          <motion.div
          
       initial = {{opacity:0, x:-30}}
       whileInView={{opacity: 1, x:0}}
       transition = {{duration: 0.6, delay:0.2}}
       viewport = {{once:true}}
          
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
              <img src={assets.bakery2} className='w-70 max-md:w-30' />
              </motion.div>

               <motion.div
                  initial = {{opacity:0, x:-30}}
       whileInView={{opacity: 1, x:0}}
       transition = {{duration: 0.4, delay:0.1}}
       viewport = {{once:true}}

               className='flex flex-col gap-4 items-center'>
              <p className='max-w-md mx-auto text-center hover:text-[#DE6980] dark:text-white'>Where Simple Ingredients Become Sweet Creations</p>

              <ul className='flex gap-8 mx-auto dark:text-white'>
                <li> <a className='hover:text-[#DE6980]' href="#hero">Home</a> </li>
                <li> <a className='hover:text-[#DE6980]' href="#products">Our Products</a> </li>
                {/* <li> <a className='hover:text-[#DE6980]' href="#my-work">My Work</a> </li> */}
                <li> <a className='hover:text-[#DE6980]' href="#contact-us">Contact Us</a></li>
              </ul>
              </motion.div>
      

          {/* <motion.div
          
        initial = {{opacity:0, x:30}}
        whileInView={{opacity: 1, x:0}}
       transition = {{duration: 0.6, delay: 0.3}}
       viewport = {{once:true}}
          
          className='text-gray-600 dark:text-gray-400'>
              <h3 className='font-semibold'> Get Notifications On Every Project </h3>
              <p className='text-sm mt-2 mb-6'>News About My Latest Project Gets Sent to Your Inbox</p>
              <div className='flex gap-2 text-sm'>
                 <input type="email" name="" id="" placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500 rounded' />
                 <button className='bg-primary text-white rounded px-6'> Get Informed </button>
              </div>
          </motion.div> */}
       </div>

       <hr className='border-gray-300 dark:border-gray-600 my-6 h-0.75 bg-gray-400' />

       {/* footer bottom */}
        
      <motion.div
      
        initial = {{opacity:0}}
       whileInView={{opacity: 1}}
       transition = {{duration: 0.5, delay:0.2 }}
       viewport = {{once:true}}
      
      className='flex items-center max-sm:gap-4 md:gap-8 lg:gap-12'>
        <p className=' max-sm:text-[12px] md:text-sm dark:text-white'>Copyright 2025 &copy; DoughKnot - All Rights Reserved. </p>

        <motion.div 
         initial = {{opacity:0}}
       whileInView={{opacity: 1}}
       transition = {{duration: 0.3, delay:0.1 }}
       viewport = {{once:true}}
        
        className='flex items-center gap-2 lg:gap-8 max-sm:gap-5'>
             {/* <img src= {assets.tiktok} alt="" className='w-14 cursor-pointer rounded-[20px] h-14' /> */}
         
             <a href="tel:+254713612240">
               <img src= {assets.call} alt="Call Us" className = "w-18 h-14  cursor-pointer rounded-[15px] mb-3 max-md:h-12 max-md:w-18 max-sm:w-37 max-sm:h-10" />
             </a>

             <a href="http://wa.me/254713612240" target='_blank' rel='noopener noreferrer'>
                <img src= {assets.whatsapptwo} alt="Whatsapp" className='w-18 h-14 cursor-pointer rounded-[20px] mb-3 max-md:h-12 max-md:w-18 max-sm:w-37 max-sm:h-10' />
             </a>

             <a href="https://www.instagram.com/thedoughknotbaker/" target='_blank' rel='noopener noreferrer'> 
               <img src= {
                  assets.instaone
               } alt="" className='w-18 h-14  cursor-pointer rounded-[15px] mb-3 max-md:h-12  max-md:w-18 max-sm:w-37 max-sm:h-9' />
             </a>
      
        </motion.div>

          <p className='max-sm:text-[12px] md:text-sm dark:text-white'>Ruhan Plaza, Shop no. 3, Kahawa Sukari, Kiambu 00200</p>
      </motion.div>

    </motion.div>
  )
}

export default Footer;