import React from 'react';
import aboutImg from '../assets/aboutImg.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-cyan-500 to-blue-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">About <span className='text-gray-200'>Me</span></h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src={aboutImg} 
              alt="About Me" 
              className="rounded-lg shadow-lg w-[600px] grayscale hover:grayscale-0 transition duration-500" 
            />
          </div>
          <div className="lg:w-1/2 lg:pl-2">
            <p className="text-xl text-gray-100 mb-4">
              Hello! I'm Hemant, a passionate developer with a love for creating innovative solutions. With a background in Full Stack Development, I have honed my skills in ReactJS, Tailwind CSS, and MongoDB.
            </p>
            <p className="text-xl text-gray-100 mb-4">
              I enjoy working on projects that challenge me and allow me to learn new technologies.
            </p>
            
            <p className="text-xl text-gray-100">
              Thank you for taking the time to learn more about me. I look forward to connecting with you!
            </p>
            <div className="relative inline-flex group my-3">
            <a href="/contact" className='border-2 border-cyan-200 font-medium py-2 px-4 rounded text-cyan-200 hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out'>
                Contact me
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
