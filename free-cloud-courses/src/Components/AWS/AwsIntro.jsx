import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import aws from "../../assets/Aws-Header.png";
import { FaCloud, FaUsers, FaCode, FaServer, FaShieldAlt, FaBriefcase } from 'react-icons/fa';
 
const roles = [
  { name: 'Architect', icon: <FaCloud className="h-8 w-8 text-white" />, description: 'Design the architecture and infrastructure for cloud solutions.' },
  { name: 'Business', icon: <FaUsers className="h-8 w-8 text-white" />, description: 'Bridge the gap between business needs and technical solutions.' },
  { name: 'Cloud Practitioner', icon: <FaCloud className="h-8 w-8 text-white" />, description: 'Gain foundational knowledge of cloud computing and AWS.' },
  { name: 'Data Engineer', icon: <FaServer className="h-8 w-8 text-white" />, description: 'Design and implement data pipelines and infrastructure.' },
  { name: 'Data Scientist', icon: <FaCode className="h-8 w-8 text-white" />, description: 'Analyze and interpret complex data to make informed decisions.' },
  { name: 'Developer', icon: <FaCode className="h-8 w-8 text-white" />, description: 'Create, test, and deploy cloud-based applications and services.' },
  { name: 'Operations', icon: <FaServer className="h-8 w-8 text-white" />, description: 'Oversee the operations of cloud environments and systems.' },
  { name: 'DevOps Engineer', icon: <FaShieldAlt className="h-8 w-8 text-white" />, description: 'Automate and manage software development and IT operations.' },
  { name: 'Decision Maker', icon: <FaBriefcase className="h-8 w-8 text-white" />, description: 'Make strategic decisions based on cloud technologies.' },
  { name: 'Infrastructure Engineer', icon: <FaServer className="h-8 w-8 text-white" />, description: 'Build and maintain the cloud infrastructure for scalability.' },
  { name: 'Security Engineer', icon: <FaShieldAlt className="h-8 w-8 text-white" />, description: 'Implement security protocols to protect cloud environments.' },
  { name: 'Alliance Lead', icon: <FaUsers className="h-8 w-8 text-white" />, description: 'Manage partnerships and relationships with stakeholders.' },
  { name: 'Accounts/Sales Manager', icon: <FaBriefcase className="h-8 w-8 text-white" />, description: 'Handle sales processes and client accounts for cloud solutions.' },
  { name: 'Business Analyst', icon: <FaUsers className="h-8 w-8 text-white" />, description: 'Analyze business needs and translate them into technical requirements.' },
  { name: 'Pre-Sales Consultant', icon: <FaBriefcase className="h-8 w-8 text-white" />, description: 'Provide consulting before sales to ensure customer success.' },
  { name: 'Project/Delivery Manager', icon: <FaBriefcase className="h-8 w-8 text-white" />, description: 'Manage cloud projects from inception to delivery.' },
];
 
const certifications = [
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png", pageUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/certification/badges/AWS-Certified-AI-Practitioner_badge_300x300.85cea45137696692de99a72934f6ddb81f82fc12.png", pageUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.png", pageUrl: "https://aws.amazon.com/certification/certified-solutions-architect-professional/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.7492bf660b5351e51f3f8015e4818924294a7e8c.png", pageUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png", pageUrl: "https://aws.amazon.com/certification/certified-sysops-admin-associate/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png", pageUrl: "https://aws.amazon.com/certification/certified-developer-associate/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png", pageUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/certification/badges/AWS-Certified-Data-Engineer-Associate_badge_300x300.a231ff0ff32a28adf061d3f7fa36564964b4a4b5.png", pageUrl: "https://aws.amazon.com/certification/certified-data-engineer-associate/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/certification/badges/AWS-Certified-Machine-Learning-Engineer-Associate_badge_300x300.765d89ecbf75f371b057aefba731fb5e724cd092.png", pageUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Advanced-Networking-Specialty_badge.e09a4e04210dd4dd57ace21344af66986d4b4dc7.png", pageUrl: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/?ch=sec&sec=rmg&d=1" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Machine-Learning-Specialty_badge.e5d66b56552bbf046f905bacaecef6dad0ae7180.png", pageUrl: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" },
  { imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Security-Specialty_badge.75ad1e505c0241bdb321f4c4d9abc51c0109c54f.png", pageUrl: "https://aws.amazon.com/certification/certified-security-specialty/" },
];
 
 
export default function AwsIntro() {
  const [showSwiper, setShowSwiper] = useState(false);
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
 
    // Delay the swiper initialization until after the animation finishes
    setTimeout(() => {
      setShowSwiper(true);
    }, 1000); // Adjust the timeout to match the length of your animation
  }, []);
 
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header Section with Swiper */}
      <header
        className="bg-cover bg-center py-32"
        style={{ backgroundImage: `url(${aws})` }}
      >
        {/* Initial content with AOS animation */}
        {!showSwiper && (
          <div
            className="text-left text-white px-6 md:px-12 max-w-6xl"
            data-aos="fade-right" // Apply fade-right animation from left
          >
            <h1 className="text-6xl font-bold leading-tight text-white">
              Build your future in the AWS Cloud
            </h1>
            <p className="mt-4 text-2xl text-gray-100 max-w-2xl">
              Explore foundational learning paths with expert-led courses
            </p>
            <a href='https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com/login?client_id=6877ph5ofmlnpo8tetot0bguut&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F'
              className="mt-8 inline-block bg-[#FF9900] text-white py-3 px-8 rounded-3xl text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-md border border-white/30"
            >
              Create Account
            </a>
          </div>
        )}
 
        {/* Swiper starts after animation */}
        {showSwiper && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}  // Add space between the slides
            slidesPerView={1} // Show 1 slide at a time
            style={{
              display: "flex",
              justifyContent: "flex-start", // Ensure swiper starts from the left
              width: "100%", // Make sure swiper spans the full width
              marginLeft: "50px",  // Add margin from the left for smoother look
            }}
          >
            <SwiperSlide>
              <div className="text-left text-white">
                <h1 className="text-6xl font-bold leading-tight text-white">
                  Build your future in the AWS Cloud
                </h1>
                <p className="mt-4 text-2xl text-gray-100 max-w-2xl">
                  Explore foundational learning paths with expert-led courses
                </p>
                <a href='https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com/login?client_id=6877ph5ofmlnpo8tetot0bguut&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F'
                  className="mt-8 inline-block bg-[#FF9900] text-white py-3 px-8 rounded-3xl text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-bounce backdrop-blur-md border border-white/30"
                >
                  Create Account
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left text-white">
                <h1 className="text-6xl font-bold leading-tight text-white">
                  Courses Curated by AWS Experts
                </h1>
                <p className="mt-4 text-2xl text-gray-100 max-w-2xl">
                  Learn from the architects behind AWS Cloud.
                </p>
                <a href='https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com/login?client_id=6877ph5ofmlnpo8tetot0bguut&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F'
                  className="mt-8 inline-block bg-[#FF9900] text-white py-3 px-8 rounded-3xl text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-bounce backdrop-blur-md border border-white/30"
                >
                  Create Account
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </header>
 
      {/* Role Selection Section */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
          Cloud Career Path
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Select a role that best fits your career aspirations and start your AWS learning journey today.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {roles.map((role) => (
            <RoleCard key={role.name} role={role} />
          ))}
        </div>
      </div>
      {/* AWS Certification Badges Section */}
<div className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
    AWS Certifications
  </h2>
  <p className="text-lg text-gray-700 mb-12">
    Select a certification badge below to learn more.
  </p>
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={20}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 6 }
    }}
  >
    {certifications.map((cert, index) => (
  <SwiperSlide key={index}>
    <a
      href={cert.pageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 border-[#FF9900] rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 bg-white p-4"
    >
      <img
        src={cert.imageUrl}
        alt={`AWS Certification ${index + 1}`}
        className="w-full h-auto object-contain"
      />
    </a>
  </SwiperSlide>
))}
 
  </Swiper>
</div>
 
    </div>
  );
}
 
// Role Card Component with Icon
function RoleCard({ role }) {
  return (
    <Link
      to={`/courses/${role.name}`}
      className="border-2 border-[#FF9900] rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-[#FFEDD5] p-6 cursor-pointer"
    >
      <div className="flex items-center justify-center space-x-4">
        <div className="p-3 bg-[#FF9900] rounded-full">{role.icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800">{role.name}</h3>
          <p className="text-sm text-gray-500 mt-2">{role.description}</p>
        </div>
      </div>
    </Link>
   
  );
}