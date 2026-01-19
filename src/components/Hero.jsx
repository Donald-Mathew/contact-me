import React from 'react'
import assets from '../assets/assets';
import { motion } from "motion/react";
import { Helmet } from 'react-helmet-async';
import ThemeToggle from './ThemeToggle';

const Hero = ({ theme}) => {

console.log("Current theme in Hero:", theme); 

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Home | Donald Mathew Web Development & UI Design</title>

        <meta
          name="description"
          content="Turning imagination into interactive digital experiences. Web development, UI/UX design, and creative solutions tailored to your business."
        />

      </Helmet>

      <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        {/* <motion.div
         initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:1, delay:0.7}}
         viewport={{once:true}}
        className= "flex items-center gap-2 border border-gray-300 p-1.5 pr-5 rounded-full">
            <img src= {assets.pexel1} alt="" className = {"w-15 rounded-[50px]"}  />
            <p className='text-xs font-medium'>Trusted by 10k people</p>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}

          className={`text-white/65 rounded-[14px] flex flex-col items-center gap-4 p-8 border-0 bg-linear-to-r from-white/10 via-[#df8597] to-white dark:bg-black dark:from-black dark:via-black dark:to-black dark:text-white`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-22.5 max-w-5xl' > Where Simple Ingredients Become  <span className='bg-linear-to-r from-[#e66881] to-[#DE6980] bg-clip-text text-transparent'> Sweet Creations </span> </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className='text-sm sm:text-lg font-medium  dark:text-white max-w-4/5 sm:max-w-lg pb-3'> Baking fresh breads and confections that turn everyday moments into something special </motion.p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
          className='relative -mt-6'>
          <img src={theme === "dark" ? assets.cakethree : assets.cakesix} alt="" className={theme === "dark" ? "w-full max-w-6xl rounded-[14px]" :` w-full max-w-6xl rounded-[14px]`} />
        </motion.div>


      </div>
    </>
  )
}

export default Hero;