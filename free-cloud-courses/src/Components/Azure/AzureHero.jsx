import React from 'react';
import 'animate.css';
import heroBg from "../../assets/bg-Azu-home.jpg";
import { Link } from 'react-router-dom';
 
const AzureHero = () => {
  return (
    <section
      className="relative min-h-[600px] flex items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />
 
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex justify-start">
        <div className="w-full md:w-1/2 text-left animate__animated animate__fadeInLeft space-y-6">
          <h1
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#004589] via-[#bd39bc] to-[#6a329f] bg-clip-text text-transparent animate__animated animate__fadeInDown animate__delay-1s"
          >
           Welcome To
           CloudThat Courses
          </h1>
 
          <p
            className="text-lg  bg-gradient-to-r from-[#004589] via-[#bd39bc] to-[#571c75] bg-clip-text text-transparent animate__animated animate__fadeInUp animate__delay-2s"
          >
            Learn at your own pace with courses built for every skill level.Develop skills through interactive modules and paths or learn from an instructor.
          </p>
 
 
          {/* Search input + button */}
          <div className="flex flex-col sm:flex-row items-center justify-start animate__animated animate__fadeInUp animate__delay-2s">
          <input
            type="text"
            placeholder="Search your courses"
            className="px-4 py-3 w-full sm:w-64 border  border-blue-600 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3  hover:bg-blue-900 transition mt-2 sm:mt-0 ">
            Search now
          </button>
          </div>
 
          <Link
            to="/azurecourses"
            className="mt-4 px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition animate__animated animate__fadeInUp animate__delay-2s">
            View Courses
          </Link>
 
        </div>
      </div>
    </section>
  );
};
 
export default AzureHero;
 