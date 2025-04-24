import coursesData from '../data/courses.json'; // Make sure this path is correct

const Courses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Our Courses</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coursesData.map((course) => (
          <li
            key={course.id}
            className="border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-700 p-2">{course.title}</h3>
            <img src={course.image} alt='course image' className='h-30 w-30 rounded-sm p-2'/>
            <p className="text-gray-600 mb-2 p-2">{course.description}</p>
            <p className="text-sm text-gray-700 p-2"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-sm text-gray-700 p-2"><strong>Level:</strong> {course.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
