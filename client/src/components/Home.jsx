import React from 'react';
import my_photo from '../assets/my_photo.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import cv from '../assets/cv.pdf'
const Home = () => {
  return (
    <section className='bg-gradient-to-r from-cyan-500 to-blue-500 py-16 h-screen'>
      <div className='container mx-auto flex flex-col-reverse sm:flex-row justify-center items-center p-4 h-full'>
        
        <div className='text-center sm:text-left flex-1'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-white'>Hi, I am a</p>
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 text-cyan-200'>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className='flex justify-center sm:justify-start items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>with practical knowledge through projects.</p>
          </div>
          <div className='text-5xl flex justify-center sm:justify-start gap-8 my-7 text-white'>
            <a href="https://www.linkedin.com/in/hemant-kumar-20147b24b/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className='cursor-pointer hover:text-cyan-300'/>
            </a>
            <a href="https://github.com/Hemant787675" rel="noopener noreferrer">
              <AiFillGithub className='cursor-pointer hover:text-cyan-300'/>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className='cursor-pointer hover:text-cyan-300'/>
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <a href={cv} download className='border-2 border-cyan-200 font-medium py-2 px-4 rounded text-cyan-200 hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out'>
              Download CV
            </a>
          </div>
        </div>
        
        <div className='flex-1 flex justify-center items-center'>
          <img className='w-[200px] sm:w-[400px] md:w-[450px] mx-auto h-auto rounded hover:grayscale transition duration-500 brightness-90' src={my_photo} alt="profile image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
