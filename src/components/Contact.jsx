import React from 'react';

const Contact = () => {
  return (
    <div className='relative max-w-[1200px] mx-auto sm:py-20 py-10 px-5 z-0' id='contact'>
      <div className='relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-xl shadow-xl p-6'>
        <div className='bg-white bg-opacity-90 p-10 rounded-lg max-w-[800px] w-full text-center border border-gray-200'>
          <h2 className='text-4xl font-extrabold text-blue-700 mb-4 tracking-wide'>Contact Me</h2>
          <p className='text-gray-600 mb-8'>I'd love to hear from you. Fill out the form and I’ll get back to you soon.</p>
          <form action="https://getform.io/f/byvplyla" method="POST">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6'>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition placeholder-gray-400 focus:border-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition placeholder-gray-400 focus:border-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="sm:col-span-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition placeholder-gray-400 focus:border-none"
              />
              <button
                type="submit"
                className="sm:col-span-2 w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-md hover:bg-blue-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
