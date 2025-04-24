import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full fixed bottom-0 left-0 z-50'>
      <div className='max-w-[1200px] mx-auto flex flex-col items-center justify-center py-6 space-y-4'>
        <div className='flex space-x-6'>
          <a href="https://github.com/HarithaKadali9" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/haritha.kadali" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} className="hover:text-pink-400 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089723662522" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} className="hover:text-blue-400 transition duration-300" />
          </a>
        </div>
        <p className='text-sm'>&copy; {currentYear} All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
