import React from 'react';
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
const Projects = () => {
  return (
    <div className='py-12 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='max-w-[1500px] mx-auto px-4 md:px-8'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl lg:text-4xl font-bold text-white'>
              My <span className='text-gray-200'>Projects</span>
            </h2>
            <p className='text-lg text-gray-100'>These are my latest projects.</p>
          </div>
        </div>
        <div id="projects" className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 xl:gap-10'>
          <a href='/' className='group h-56 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={P1} alt='Project 1' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105'/>
          </a>
          <a href='https://splendorous-granita-77499e.netlify.app' className='group h-56 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
            <img src={P2} className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105'/>
          </a>
          <a href='https://snazzy-daifuku-59f631.netlify.app' className='group h-56 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
            <img src={P3} alt='Project 3' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105'/>
          </a>
          <a href='https://frabjous-clafoutis-6b7ac6.netlify.app' className='group h-56 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={P4} alt='Project 4' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
