import React from 'react';
import assets from "../assets/assets";
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react";
import { Helmet } from 'react-helmet-async';

const Services = () => {

    const servicesData = [
        {
            title: "Fresh Bakes", 
            description:"We bake fresh breads, pastries, and cakes daily using quality ingredients", 
            icon:assets.bakeicon6
        },
        {
            title: "Custom Cakes", 
            description:"We create custom cakes and sweet treats for celebrations",  
            icon: assets.bakeicon5
        }, 
        //   {
        //     title: "Content Writing", 
        //     description:"We Help You Create a Marketing Strategy That Drives Results",
        //     icon: assets.contentful 
        // }, 
        // {
        //     title: "Content Writing", 
        //     description:"We Help You Create a Marketing Strategy That Drives Results", 
        //     icon: assets.contentful
        // } 
       
    ];
  return (
    <>
     <Helmet>
     <title>Services | Donald Mathew Web Development & UI Design</title>
      <meta 
        name="description" 
        content="Discover my web development, UI/UX design, and full-stack services tailored to grow your business." 
      />
     </Helmet>
    <motion.div
    initial = "hidden"
    whileInView= "visible"
    viewport= {{once:true}}
    transition = {{staggerChildren: 0.2}}
    id="products" className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        {/* <img src={assets.pexel1} alt="" className = {"absolute -top-110 -left-70 -z-1 dark:hidden"} /> */}

       <Title title = 'Freshly Baked Just for You' desc='From fresh Ingredients To the final bake, we create breads and sweets made to delight every bite' /> 

       <div className='flex flex-col md:grid grid-cols-2'>
          {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index}  />
          ))}
       </div>

    </motion.div>
    </>
  )
}

export default Services;