import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='z-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center mx-auto h-24 px-2 lg:px-10'>
      <h1 className='w-full text-3xl font-bold text-white ml-4'>Hemant</h1>
      <ul className='hidden md:flex text-lg font-medium text-white'>
        <li className='px-4 cursor-pointer hover:text-cyan-200 lg:px-5'>
          <Link to="/">Home</Link>
        </li>
        <li className='px-4 cursor-pointer hover:text-cyan-200 lg:px-5'>
          <Link to="/about">About</Link>
        </li>
        <li className='px-4 cursor-pointer hover:text-cyan-200 lg:px-5'>
          <Link to="/projects">Projects</Link>
        </li>
        <li className='px-4 cursor-pointer hover:text-cyan-200 lg:px-5'>
          <Link to="/experience">Experience</Link>
        </li>
        <li className='px-4 cursor-pointer hover:text-cyan-200 lg:px-5'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden text-white'>
        {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 border-r border-gray-200 ease-in-out duration-500 z-20' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='text-3xl font-bold text-white m-4 text-center'>Hemant</h1>
        <ul className='text-2xl text-white p-4 font-medium'>
          <li className='px-2 py-3 cursor-pointer hover:bg-cyan-400 hover:text-white w-full text-center rounded'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-2 py-3 cursor-pointer hover:bg-cyan-400 hover:text-white w-full text-center rounded'>
            <Link to="/about">About</Link>
          </li>
          <li className='px-2 py-3 cursor-pointer hover:bg-cyan-400 hover:text-white w-full text-center rounded'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='px-2 py-3 cursor-pointer hover:bg-cyan-400 hover:text-white w-full text-center rounded'>
            <Link to="/experience">Experience</Link>
          </li>
          <li className='px-2 py-3 cursor-pointer hover:bg-cyan-400 hover:text-white w-full text-center rounded'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;