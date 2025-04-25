import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
 
const tagIcons = {
  "Azure": "https://learn.microsoft.com/en-us/training/achievements/microsoft-azure-fundamentals-describe-cloud-concepts.svg",
  "Administrator": "https://learn.microsoft.com/en-us/training/achievements/describe-core-architectural-components-of-azure.svg",
  "AI": "https://learn.microsoft.com/en-us/training/achievements/fundamentals-generative-ai.svg",
  "Data Analyst":"https://learn.microsoft.com/en-us/training/achievements/data-analytics-and-microsoft.svg",
  "Copilot": "https://learn.microsoft.com/en-us/training/achievements/design-dream-destination-ai.svg",
  "Power BI": "https://learn.microsoft.com/en-us/training/achievements/get-started-power-bi.svg",
};
 
// Sample data
const learningCards = [
  {
    type: "LEARNING PATH",
    title: "Microsoft Azure Fundamentals: Describe cloud concepts",
    duration: "52 min",
    tags: ["Azure", "Administrator", "Beginner"],
    description: "Learn the foundational concepts of cloud computing and Azure services.",
    url: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
  },
  {
    type: "MODULE",
    title: "Discover data analysis",
    duration: "36 min",
    tags: ["Power BI", "Data Analyst", "Intermediate"],
    description: "Explore data insights with Power BI to drive better decisions.",
    url: 'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/',
  },
  {
    type: "MODULE",
    title: "Describe the core architectural components of Azure",
    duration: "48 min",
    tags: ["Administrator", "Architecture", "Beginner"],
    description: "This module explains the basic infrastructure components of Microsoft Azure. You'll learn about the physical infrastructure, how resources are managed, and have a chance to create an Azure resource.",
    url: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
  },
  {
    type: "MODULE",
    title: "Introduction to generative AI",
    duration: "59 min",
    tags: ["AI","Azure", "Beginner"],
    description: "In this module, you explore the way in which language models enable AI applications and services to generate original content based on natural language input.",
    url: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
  },
  {
    type: "LEARNING PATH",
    title: "Get started with Microsoft data analytics",
    duration: "1 hr 23 min",
    tags: ["Data Analyst", "Intermediate","Microsoft Power Platform"],
    description: "Businesses need data analysis more than ever. In this learning path, you will learn about the life and journey of a data analyst, the skills, tasks, and processes they go through in order to tell a story with data so trusted business decisions can be made. You will learn how the suite of Power BI tools and services are used by a data analyst ",
    url: 'https://learn.microsoft.com/en-us/training/courses/az-900t00',
  },
  {
    type: "MODULE",
    title: "Use AI for everyday tasks",
    duration: "43 min",
    tags: [ "Copilot","AI", "Beginner"],
    description: "Dive into the world of generative AI and discover how it can simplify your daily tasks. Whether you're looking to simplify routine tasks or explore new ways to innovate, AI can help you achieve more.",
    url: 'https://learn.microsoft.com/en-us/training/courses/az-900t00',
  }
];
 
const Card = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const tagIcon = tagIcons[card.tags[0]];
 
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
              <p className="text-xs text-gray-500 font-semibold uppercase">{card.type}</p>
              <h2
                  className="text-blue-700 text-sm mt-2 font-semibold mb-1 cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(card.url, '_blank');
                  }}
                >
                  {card.title}
              </h2>
 
              <p className="text-sm text-gray-600 mt-2 mb-2">⏱ {card.duration}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {card.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-800 mt-2 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
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
              <div className="w-24 h-24 flex-shrink-0">
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
              <h2 className="text-xl font-bold text-blue-800 mb-2">{card.title}</h2>
              <p className="text-gray-700 text-sm">{card.description}</p>
            </div>
            <button
              className="mt-4 text-sm text-blue-700 font-medium hover:underline self-end"
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
 
export default function AzureCards() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-7 text-[#001e3b] tracking-tight">
        Popular learning paths and modules
      </h1>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative">
        {learningCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
 
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link
          to='/azurecourses'
          className="inline-block bg-blue-700 text-white text-lg font-semibold px-10 py-4 mb-4 rounded-md shadow-lg transition transform hover:scale-105 hover:bg-blue-800 duration-300 ease-in-out"
        >
          Explore all courses ➜
        </Link>
      </motion.div>
 
 
    </div>
  );
}