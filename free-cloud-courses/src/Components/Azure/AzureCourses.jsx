import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseFilterSidebar from './AzureSidebar';
import { div } from 'framer-motion/client';
import NavbarAzu from '../Nav/NavbarAzu';
import Footer from '../Nav/Footer';
 
const courseData = [
  {
    id: 1,
    title: 'Microsoft Azure Fundamentals: Describe cloud concepts',
    product: 'Azure',
    role: 'Administrator, Developer, DevOps Engineer, Solution Architect',
    level: 'Beginner',
    type: 'Learning Path',
    description: 'Learn the foundational concepts of cloud computing and Azure services.',
    url: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
  },
  {
    id: 2,
    title: 'Get started building with Power BI',
    product: 'Data Analyst',
    role: 'Power BI, Business Analyst, Data Analyst',
    level: 'Beginner',
    type: 'Modules',
    description: 'Explore data insights with Power BI to drive better decisions.',
    url: 'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/',
  },
  {
    id: 3,
    title: 'Introduction to generative AI',
    product: 'AI',
    role: 'Azure, AI Engineer, Beginner',
    level: 'Beginner',
    type: 'Modules',
    description: 'Explore how generative AI creates content based on natural language.',
    url: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
  },
  {
    id: 4,
    title: 'Explore the possibilities with Microsoft 365 Copilot',
    product: 'Copilot',
    role: 'Beginner, Microsoft 365, Office 365, Microsoft Copilot',
    level: 'Beginner',
    type: 'Modules',
    description: 'Discover how AI tools can simplify daily tasks with Microsoft 365 Copilot.',
    url: 'https://learn.microsoft.com/en-us/training/modules/explore-possibilities-microsoft-365-copilot/',
  },
  {
    id: 5,
    title: 'Describe the business value of the Microsoft Power Platform',
    product: 'Microsoft Power Platform',
    role: 'Business Analyst, Business User, AI Builder, Microsoft Power Platform, Power Apps',
    level: 'Beginner',
    type: 'Module',
    description: 'Learn about the components of Microsoft Power Platform, the business value for customers, and how the technology works with other Microsoft products.',
    url: 'https://learn.microsoft.com/en-us/training/modules/introduction-power-platform/',
  },
  {
    id: 6,
    title: 'Microsoft Azure Fundamentals: Describe Azure management and governance',
    product: 'Azure',
    role: 'Administrator, Developer, DevOps Engineer, Solution Architect',
    level: 'Intermediate',
    type: 'Learning Path',
    description: 'Learn how to manage and govern Azure resources effectively.',
    url: 'https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/',
  },
  {
    id: 7,
    title: 'Microsoft Azure Fundamentals',
    product: 'Administrator',
    role: 'Administrator',
    level: 'Beginner',
    type: 'Learning Path',
    description: 'Understand the basics of Microsoft Azure platform and services.',
    url: 'https://learn.microsoft.com/en-us/training/courses/az-900t00',
  },
  {
    id: 8,
    title: 'Introduction to Microsoft Defender for Endpoint',
    product: 'Security Engineer',
    role: 'Security Operations Analyst, Administrator, Security Engineer',
    level: 'Advanced',
    type: 'Module',
    description: 'Learn about Microsoft Defender for Endpoint and its key capabilities, such as threat and vulnerability management, attack surface reduction, automated investigation and remediation, endpoint detection and response, and more.',
    url: 'https://learn.microsoft.com/en-us/training/modules/m365-introduction-defender-endpoint/',
  },
];
 
const tagIcons = {
  "Azure": "https://learn.microsoft.com/en-us/training/achievements/microsoft-azure-fundamentals-describe-cloud-concepts.svg",
  "Administrator": "https://learn.microsoft.com/en-us/training/achievements/describe-core-architectural-components-of-azure.svg",
  "AI": "https://learn.microsoft.com/en-us/training/achievements/fundamentals-generative-ai.svg",
  "Data Analyst": "https://learn.microsoft.com/en-us/training/achievements/data-analytics-and-microsoft.svg",
  "Copilot": "https://learn.microsoft.com/en-us/training/achievements/design-dream-destination-ai.svg",
  "Power BI": "https://learn.microsoft.com/en-us/training/achievements/get-started-power-bi.svg",
  "Microsoft Power Platform":"https://learn.microsoft.com/en-us/training/achievements/introduction-power-platform.svg",
  "Security Engineer":"https://learn.microsoft.com/en-us/training/achievements/m365-defender-endpoint-introduction.svg",
};
 
const Card = ({ course }) => {
  const [flipped, setFlipped] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const tagIcon = tagIcons[course.product];  
 
  const renderRoleTags = () => {
    const roles = course.role.split(',').map(role => role.trim());
    return roles.join(' ✦ ');
  };
 
  return (
    <motion.div
      className="relative w-full h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <AnimatePresence initial={false} mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full backface-hidden bg-white border border-gray-200 shadow-md rounded-2xl p-5 flex justify-between items-start"
          >
            {/* Left side: Text */}
            <div className="flex-1 pr-4 text-left">
              <p className="text-xs text-gray-500 font-semibold uppercase">{course.type}</p>
              <h2
                className="text-blue-700 text-base font-semibold mt-2 mb-1 cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(course.url, '_blank');
                }}
              >
                {course.title}
              </h2>
              <div className="mt-2 mb-4">
                <p className="text-xs text-blue-800 mb-1">{course.product}</p>
                <p className="text-xs text-gray-600">{renderRoleTags()}</p>
              </div>
 
              <button
                className="text-sm text-blue-600 font-medium hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(true);
                }}
              >
                Read More →
              </button>
            </div>
 
            {/* Right side: Icon */}
            {tagIcon && (
              <div className="w-16 h-16 flex-shrink-0">
                <img src={tagIcon} alt="icon" className="w-full h-full object-contain" />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 360 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full backface-hidden bg-blue-50 border border-blue-200 shadow-md rounded-2xl p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-sm font-bold text-blue-800 mb-2">{course.title}</h2>
              <p className="text-gray-700 text-xs">{course.description}</p>
            </div>
            <button
              className="mt-4 text-xs text-blue-700 font-medium hover:underline self-end"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              ← Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
 
const AzureCourses = () => {
  const [filters, setFilters] = useState({
    Products: [],
    Roles: [],
    Level: '',
    Types: [],
  });
 
  const [searchTerm, setSearchTerm] = useState('');
 
  const filterCourses = () => {
    return courseData.filter(course => {
      const matchProduct = filters.Products.length === 0 || filters.Products.includes(course.product);
      const matchRole = filters.Roles.length === 0 || filters.Roles.some(role => course.role.includes(role));
      const matchLevel = !filters.Level || course.level === filters.Level;
      const matchType = filters.Types.length === 0 || filters.Types.includes(course.type);
      const matchSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
 
      return matchProduct && matchRole && matchLevel && matchType && matchSearchTerm;
    });
  };
 
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
 
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        <NavbarAzu />
      <h1 className="text-4xl font-bold text-center mt-8 mb-7 text-[#001e3b] tracking-tight">
        Browse All Courses
      </h1>
      <hr className="border-gray-300" />
     
      {/* Search Bar */}
      <div className="flex justify-end">
        <div className="flex items-center mt-5 w-full sm:w-1/3 bg-white border border-blue-500 rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-5 py-2 text-sm font-medium  hover:bg-blue-800 transition-all duration-300">
            Search
          </button>
        </div>
      </div>
 
     
      <div className="flex">
        <CourseFilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="p-6 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 relative">
            {filterCourses().map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
 
export default AzureCourses;