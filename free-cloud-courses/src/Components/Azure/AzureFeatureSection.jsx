import React from 'react';
import FSimg1 from '../Azure/assets/FS_img1.png';
import FSimg2 from '../Azure/assets/FS_img2.png';
import FSimg3 from '../Azure/assets/FS_img3.jpg';
import { Link } from 'react-router-dom';
 
const features = [
  {
    title: 'Looking for specific training content?',
    description:
      'Learn new skills and discover the power of Microsoft products with step-by-step guidance. Start your journey today by exploring our learning paths, modules, and courses.',
    image: FSimg1,
  },
  {
    title: 'Working towards a career goal?',
    description:
      'There are over 700K job listings seeking candidates with Microsoft technical skills. Explore training and credentials aligned with your career goals.',
    image: FSimg2,
  },
  {
    title: 'Student resources',
    description:
      'The home for students to explore how to jumpstart a career in technology and stay connected with the Microsoft student developer community.',
    image: FSimg3,
  },
];
 
 
const AzureFeatureSection = () => {
  return (
    <section className="px-9 py-12 text-white bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group perspective">
              <div className="relative h-86 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
               
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white text-black shadow-xl backface-hidden overflow-hidden flex flex-col justify-between">
                <div className="w-full h-50 flex items-center justify-center bg-white rounded-b-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                  <div className="p-4 bg-[#89c4ff]">
                  <h2 className="text-lg h-8 font-bold text-[#004589] text-center">{feature.title}</h2>
                  </div>
                </div>
 
                {/* Back Side */}
                <div className="absolute w-full h-full bg-[#89c4ff] text-white shadow-xl transform rotate-y-180 backface-hidden p-6 flex flex-col justify-center items-center text-center">
                  <p className="text-lg font-bold-2 mb-6 text-[#004589]">{feature.description}</p>
                  <Link
                    to='/azurecourses'
                    className="inline-block px-4 py-2 text-sm font-semibold text-[#004589] border text-[#004589] rounded hover:bg-white hover:text-[#004589] transition"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Custom styles */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}
      </style>
    </section>
  );
};
 
 
export default AzureFeatureSection;