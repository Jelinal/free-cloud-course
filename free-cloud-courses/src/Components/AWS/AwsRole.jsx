import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "./AwsData";
import { FaSearch, FaEraser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";
import NavbarAWS from "../Nav/NavbarAWS";
import Footer from "../Nav/Footer";
 
const AwsRole = () => {
  const { role } = useParams();
  const [skillLevel, setSkillLevel] = useState("");
  const [domain, setDomain] = useState("");
  const [language, setLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
 
  const skillLevels = ["Fundamental", "Intermediate", "Advanced"];
  const domains = [
    "Alexa", "Application Integration", "Architecting", "AWS Cost Management", "Business Applications",
    "Cloud Essentials", "Compute", "Contact Center", "Containers", "Customer Engagement", "Data Analytics (Big Data)",
    "Database", "Dedicated Cloud", "Desktop and App Streaming", "DevOps", "Developer Tools", "End User Computing",
    "Game Tech", "IoT", "Machine Learning", "Front-End Web & Mobile", "Management & Governance", "Media Services",
    "Migration and Transfer", "Mobile Services", "Network & Content Delivery", "Partner Enablement", "SaaS",
    "Security, Identity & Compliance", "Serverless", "Storage", "Quantum Technologies", "SysOps", "Tactical Edge Computing"
  ];
  const languages = [
    "Arabic", "Bulgarian", "Dutch", "English", "Finnish", "French", "German", "Greek", "Hebrew", "Indonesian",
    "Italian", "Japanese", "Korean", "Polish", "Portuguese", "Russian", "Simplified Chinese", "Spanish", "Swedish",
    "Thai", "Traditional Chinese", "Turkish", "Ukrainian", "Vietnamese"
  ];
 
  useEffect(() => {
    const courses = coursesData[role] || [];
    const filtered = courses.filter((course) => {
      const matchLevel = !skillLevel || course.level === skillLevel;
      const matchDomain = !domain || course.domain === domain;
      const matchLanguage = !language || course.languages.includes(language);
      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Object.values(course.description).some((desc) =>
          desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchLevel && matchDomain && matchLanguage && matchSearch;
    });
    setFilteredCourses(filtered);
  }, [role, skillLevel, domain, language, searchQuery]);
 
  const clearFilters = () => {
    setSkillLevel("");
    setDomain("");
    setLanguage("");
    setSearchQuery("");
  };
 
  return(
    <>
    <NavbarAWS />
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="relative h-[16rem] w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full"
        >
          {[
            "https://media.istockphoto.com/id/1387666645/vector/abstract-soft-varicoloured-background-vector-illustration-for-different-screen-designs.jpg?s=612x612&w=0&k=20&c=11RLWjE6VK-pFsOeJNWN2wB_5lX8XxgykqsChyb6vDY=",
            "https://img.freepik.com/premium-vector/pastel-abstract-gradient-backgrounds-soft-tender-pink-blue-purple-orange-gradients_258787-308.jpg?semt=ais_hybrid",
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img src={img} alt={`AWS Carousel ${index}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r  flex flex-col items-center justify-center text-white px-4">
                  <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md">Courses for {role}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
 
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-10 py-3 border-2 border-[#FF9900] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
 
        <div className="grid md:grid-cols-3 gap-8">
          {/* Skill Level Filter */}
          <div>
            <h3 className="text-xl font-semibold text-[#FF9900]">🎯 Skill Level</h3>
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300"
            >
              <option value="">Select Skill Level</option>
              {skillLevels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </div>
 
          {/* Domain Filter */}
          <div>
            <h3 className="text-xl font-semibold text-[#FF9900]">📚 Domain</h3>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300"
            >
              <option value="">Select Domain</option>
              {domains.map((dom, index) => (
                <option key={index} value={dom}>{dom}</option>
              ))}
            </select>
          </div>
 
          {/* Language Filter */}
          <div>
            <h3 className="text-xl font-semibold text-[#FF9900]">🌍 Language</h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300"
            >
              <option value="">Select Language</option>
              {languages.map((lang, index) => (
                <option key={index} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>
 
        {/* Clear Filters */}
        <div className="mt-6 text-center">
          <button
            onClick={clearFilters}
            className="py-3 px-6 flex items-center justify-center gap-2 bg-[#FF9900] text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            <FaEraser /> Clear All Filters
          </button>
        </div>
 
        {/* Courses Display */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
            Available Courses for {role}
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Filter courses based on your preferences and get started with the best content available.
          </p>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-2 border-orange-300 rounded-xl p-6 bg-white shadow hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-[#333]">{course.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {course.level} • {course.domain} • {course.languages.join(", ")} • {course.duration || "N/A"}
                  </p>
                  <p className="mt-4 text-gray-700">
                    {course.description[language] || course.description["English"]}
                  </p>
                  <div className="text-right mt-4">
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF9900] font-semibold hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No courses available for the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};
 
export default AwsRole;