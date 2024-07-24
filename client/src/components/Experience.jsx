import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">My <span className='text-gray-200'>Experience</span></h2>

        <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg py-6 px-8 mb-8">
          <h3 className="text-xl text-cyan-700 font-semibold">Future Finders</h3>
          <p className="text-gray-500">Full Stack Training from Future Finders (MERN STACK)</p>
          <p className="text-gray-500">Duration: 6 months</p>
        </div>

        <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg py-6 px-8 mb-8">
          <h3 className="text-xl text-cyan-700 font-semibold">Academor</h3>
          <p className="text-gray-500">Outstanding Performance Certificate in Web Development Course</p>
          <p className="text-gray-500">Internship Completion Certificate from Web Development Course</p>
          <p className="text-gray-500">Duration: 6 months</p>  
        </div>

        <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg py-6 px-8 mb-8">
        <h3 className="text-xl text-cyan-700 font-semibold">Portfolio</h3>
          <p className="text-gray-500">Developed personal portfolio in React and TailwindCSS</p> 
        </div>
      </div>
    </section>
    
  );
}

export default Experience;
