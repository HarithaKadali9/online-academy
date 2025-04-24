import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='min-h-screen py-10'>
      <div className='max-w-7xl mx-auto px-6'>
        <p className='text-lg text-center text-gray-700 mb-12'>
          We offer a variety of courses designed to help you grow your skills in
          Java, Python, MERN Stack (MongoDB, React.js, Node.js, Express.js), Full Stack Development with Python, and more.
          Our courses are carefully crafted to give you practical knowledge and real-world experience.
          <br />
          In addition to the courses, we provide personalized one-on-one mentoring to guide you through your learning journey and help you achieve your goals.
        </p>
        
        <div className='flex justify-center mb-12'>
          <img 
            src='https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg' 
            alt='Online Courses'
            className='max-w-full rounded-lg shadow-lg'
          />
        </div>
        
        <div className='text-center'>
          <p className='text-lg text-gray-700 mb-6'>
            Ready to advance your career? Choose a course and get started today!
          </p>
          <button className='bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-800'>
            Browse Courses
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
