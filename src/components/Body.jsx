import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import interactiveDoubtClarifying from "../assets/interactiveDoubtClarifying.png";
import flexibleLearning from "../assets/flexibleLearning.jpeg";
import oneOnOneMonitering from "../assets/oneOnOneMonitering.jpg";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-blue-600 font-bold text-4xl mb-8 relative inline-block">
            What We Offer
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2"></span>
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We offer a variety of courses designed to help you grow your skills in
            <strong>Java, Python, MERN Stack (MongoDB, React.js, Node.js, Express.js), Full Stack Development with Python,</strong> and more.
            Our courses are carefully crafted to give you practical knowledge and real-world experience.
            <br className="hidden md:block" /><br className="hidden md:block" />
            In addition to the courses, we provide personalized one-on-one mentoring to guide you through your learning journey and help you achieve your goals.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-20">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <img 
              src='https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg' 
              alt='Online Courses'
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">Transform Your Career</h3>
                <p className="text-white/80">Learn in-demand tech skills from industry experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-blue-600 font-bold text-3xl text-center mb-12 relative inline-block">
            Perks of Choosing Our Courses
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2"></span>
          </h2>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={interactiveDoubtClarifying} 
                  alt='Doubt clarifying'
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-blue-500 font-semibold text-xl mb-3">Interactive Doubt Clarification</h3>
                <p className="text-gray-700">
                  We offer direct access to mentors for real-time, person-to-person doubt clearing. 
                  Whether you're stuck on a concept, facing coding challenges, or need guidance on a project, our mentors are just a message away,
                  ensuring you never feel lost.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={flexibleLearning} 
                  alt='Flexible Learning'
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-blue-500 font-semibold text-xl mb-3">Flexible Learning Plans</h3>
                <p className="text-gray-700">
                  We understand that everyone's schedule is different. That's why we offer flexible learning plans that allow you to learn at your own pace, 
                  at a time that works best for you.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={oneOnOneMonitering} 
                  alt='Monitoring'
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-blue-500 font-semibold text-xl mb-3">Personalized One-on-One Mentoring</h3>
                <p className="text-gray-700">
                  Benefit from individualized attention through one-on-one mentoring sessions. Our experienced mentors will work with you to ensure you grasp complex concepts,
                  provide career advice, and support you through your learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Ready to advance your career?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Choose a course and get started today! Join thousands of successful students who have transformed their careers with our expert-led courses.
          </p>
          <button 
            onClick={() => navigate("/courses")} 
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Browse Courses
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Body;