import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Stay Connected</h2>
        <div className="flex justify-center gap-6 mb-6 text-white">
          <a href="https://www.linkedin.com/in/hemant-kumar-20147b24b/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://github.com/Hemant787675" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
            <AiFillGithub size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
            <AiFillInstagram size={30} />
          </a>
        </div>
        <div className="text-gray-300 mb-4">
          <p>&copy; Hemant. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
