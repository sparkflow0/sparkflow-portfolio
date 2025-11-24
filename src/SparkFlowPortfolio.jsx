import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  ScanFace, 
  Activity, 
  Zap, 
  Code, 
  Server, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail,
  ArrowRight,
  Wifi,
  Sun,
  ShieldCheck,
  Bot,
  Gamepad2,
  Globe
} from 'lucide-react';

const SparkFlowPortfolio = () => {
  const [filter, setFilter] = useState('All');

  const colors = {
    brandBlue: '#4DA9E2',
    brandOrange: '#E58E45',
    darkBg: '#111827',
    cardBg: '#1F2937',
    textLight: '#F3F4F6',
    textGray: '#9CA3AF'
  };

  const IMG_1 = "https://storage.googleapis.com/collaborative-app-v1.appspot.com/uploads/unnamed.jpg-090bd988-2a0b-414d-a52f-d83eddbfd9ea";
  const IMG_2 = "https://storage.googleapis.com/collaborative-app-v1.appspot.com/uploads/Gemini_Generated_Image_rppgkrppgkrppgkr.jpg-f844b1b5-6fdd-4d07-96f9-c52d436d6dca";
  const IMG_3 = "https://storage.googleapis.com/collaborative-app-v1.appspot.com/uploads/Gemini_Generated_Image_wqpvekwqpvekwqpv.jpg-45c936e4-67b1-4919-894d-fe0ccc9d5af8";

  // Categories for filtering
  const categories = ['All', 'AI & CV', 'IoT & Automation', 'Robotics', 'Web & Apps'];

  const projects = [
    // --- FROM IMAGE 3 (Workshops & Environment) ---
    {
      title: 'Smart Watering System',
      category: 'IoT & Automation',
      description: 'Automated irrigation system using soil moisture sensors and Arduino to optimize water usage for agriculture.',
      img: "https://storage.googleapis.com/collaborative-app-v1.appspot.com/uploads/Screenshot 2025-11-25 at 12.17.40 AM.jpg-09013ad4-652a-421d-bfe5-73eb34ce3dcb",
      tags: ['Arduino', 'IoT', 'Sensors']
    },
    {
      title: 'Street Traffic Automation',
      category: 'IoT & Automation',
      description: 'Intelligent traffic light control system that adapts signal timing based on real-time vehicle density.',
      img: IMG_3, size: '300% 200%', pos: '0% 100%',
      tags: ['Automation', 'Traffic Control']
    },
    {
      title: 'IoT Pipe Inspection Car',
      category: 'Robotics',
      description: 'Remote-controlled rover equipped with cameras and sensors for inspecting oil pipes and hazardous tunnels.',
      img: IMG_3, size: '300% 200%', pos: '50% 100%',
      tags: ['RC', 'Inspection', 'IoT']
    },
    {
      title: 'Smart Solar Umbrella',
      category: 'IoT & Automation',
      description: 'A solar-powered umbrella offering mobile charging ports and automated opening/closing based on sunlight.',
      img: IMG_3, size: '300% 200%', pos: '100% 100%',
      tags: ['Solar', 'Green Tech', 'Arduino']
    },

    // --- FROM IMAGE 1 (Security & AI) ---
    {
      title: 'Sanitation Gate (AI Mask)',
      category: 'AI & CV',
      description: 'Automatic sanitation gate with computer vision to enforce mask-wearing before granting entry.',
      img: IMG_1, size: '300% 200%', pos: '0% 50%',
      tags: ['Computer Vision', 'Safety', 'Raspberry Pi']
    },
    {
      title: 'Facial Recognition Door',
      category: 'AI & CV',
      description: 'Secure access control system using facial biometrics to unlock sliding doors for authorized personnel.',
      img: IMG_1, size: '300% 200%', pos: '42% 0%',
      tags: ['FaceID', 'Security', 'RFID']
    },
    {
      title: 'Autonomous Bot (PixyCam)',
      category: 'Robotics',
      description: 'Self-driving robot utilizing PixyCam for color-coded object tracking and obstacle avoidance.',
      img: IMG_1, size: '300% 200%', pos: '100% 0%',
      tags: ['PixyCam', 'Autonomous', 'Robotics']
    },
    {
      title: 'Voice-Activated Robotic Head',
      category: 'Robotics',
      description: 'Animatronic human head capable of voice interaction and facial expressions driven by servos.',
      img: IMG_1, size: '300% 200%', pos: '40% 100%',
      tags: ['Voice Rec', 'Animatronics', 'AI']
    },
    {
      title: '3D Scanning Bust',
      category: 'AI & CV',
      description: 'High-precision 3D scanning setup for digitizing physical busts into CAD-ready models.',
      img: IMG_1, size: '300% 200%', pos: '100% 100%',
      tags: ['3D Scanning', 'Modeling']
    },

    // --- FROM IMAGE 2 (The Big Grid) ---
    {
      title: 'Solar Panel Cleaning Bot',
      category: 'Robotics',
      description: 'Autonomous robot designed to travel along solar arrays, cleaning dust to maintain peak efficiency.',
      img: IMG_2, size: '500% 400%', pos: '0% 0%',
      tags: ['Solar', 'Robotics', 'Automation']
    },
    {
      title: 'Laser Cutting Machine',
      category: 'IoT & Automation',
      description: 'Custom-built CNC laser cutter for precise acrylic and wood fabrication prototyping.',
      img: IMG_2, size: '500% 400%', pos: '25% 0%',
      tags: ['CNC', 'Laser', 'Fabrication']
    },
    {
      title: 'Smart Buoy (LoRa)',
      category: 'IoT & Automation',
      description: 'Marine monitoring buoy transmitting water quality data over long distances using LoRaWAN.',
      img: IMG_2, size: '500% 400%', pos: '75% 0%',
      tags: ['LoRa', 'Marine', 'IoT']
    },
    {
      title: 'Maze Solving Robot',
      category: 'Robotics',
      description: 'Micro-mouse robot implementing flood-fill algorithms to solve physical mazes autonomously.',
      img: IMG_2, size: '500% 400%', pos: '100% 0%',
      tags: ['Algorithms', 'Robotics', 'Arduino']
    },
    {
      title: 'Horse Riding Helmet GPS',
      category: 'IoT & Automation',
      description: 'Safety helmet with integrated GPS and fall detection to alert emergency contacts during accidents.',
      img: IMG_2, size: '500% 400%', pos: '25% 33.3%',
      tags: ['GPS', 'Safety', 'Wearable']
    },
    {
      title: 'Automatic Control System',
      category: 'IoT & Automation',
      description: 'Centralized rack-mounted control units for large-scale facility automation (e.g., Mosque Amplifiers).',
      img: IMG_2, size: '500% 400%', pos: '50% 33.3%',
      tags: ['Industrial', 'Automation', 'Control']
    },
    {
      title: 'IoT Weather Station',
      category: 'IoT & Automation',
      description: 'Self-sustaining station monitoring wind, temp, and humidity, pushing data to the cloud.',
      img: IMG_2, size: '500% 400%', pos: '75% 33.3%',
      tags: ['Weather', 'IoT', 'Cloud']
    },
    {
      title: 'Vaccination Verification',
      category: 'Web & Apps',
      description: 'Digital kiosk for verifying vaccination status via QR codes for secure venue entry.',
      img: IMG_2, size: '500% 400%', pos: '100% 33.3%',
      tags: ['QR', 'HealthTech', 'Kiosk']
    },
    {
      title: 'Blind Navigation Wristband',
      category: 'IoT & Automation',
      description: 'Haptic feedback wristband using ultrasonic sensors to guide visually impaired users.',
      img: IMG_2, size: '500% 400%', pos: '0% 66.6%',
      tags: ['Accessibility', 'Ultrasonic', 'Wearable']
    },
    {
      title: 'Coin Operated Printer',
      category: 'IoT & Automation',
      description: 'Self-service printing station activated by coin insertion, integrated with printer APIs.',
      img: IMG_2, size: '500% 400%', pos: '100% 66.6%',
      tags: ['Automation', 'Payment', 'Hardware']
    },
    {
      title: 'Long Range RF Control',
      category: 'Robotics',
      description: 'High-power RF remote control system designed for long-distance drone or rover operation.',
      img: IMG_2, size: '500% 400%', pos: '0% 100%',
      tags: ['RF', 'Communication', 'Hardware']
    },
    {
      title: 'Web Home Automation',
      category: 'Web & Apps',
      description: 'Comprehensive web dashboard for controlling home appliances, lights, and locks remotely.',
      img: IMG_2, size: '500% 400%', pos: '25% 100%',
      tags: ['Web', 'IoT', 'Smart Home']
    },
    {
      title: 'Color Mixer Machine',
      category: 'IoT & Automation',
      description: 'Automated liquid dispensing system that mixes primary colors to create precise custom shades.',
      img: IMG_2, size: '500% 400%', pos: '50% 100%',
      tags: ['Fluidics', 'Automation', 'Arduino']
    },
    {
      title: 'Robotic Arm (4 DOF)',
      category: 'Robotics',
      description: '4-Degree-of-Freedom robotic arm programmable for pick-and-place industrial tasks.',
      img: IMG_2, size: '500% 400%', pos: '75% 100%',
      tags: ['Robotics', 'Servo', 'Kinematics']
    },
    {
      title: 'NFC Door Control',
      category: 'IoT & Automation',
      description: 'Contactless entry system using NFC tags and electromagnetic locks for secure access.',
      img: IMG_2, size: '500% 400%', pos: '100% 100%',
      tags: ['NFC', 'Security', 'Access Control']
    },
    
    // --- NEW WEB & APPS (Using Branded Placeholders) ---
    {
      title: 'MindArena',
      category: 'Web & Apps',
      description: 'Interactive cognitive training web application designed to improve memory and focus through gamified challenges.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=MindArena+Preview',
      link: 'https://mindarena.onrender.com/',
      tags: ['React', 'Brain Training', 'Web App']
    },
    {
      title: 'SpareEye',
      category: 'Web & Apps',
      description: 'Accessibility-focused web platform assisting visually impaired users via AI-powered descriptive tools.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=SpareEye+App',
      link: 'https://spareeye.onrender.com/',
      tags: ['Accessibility', 'AI', 'Web App']
    },
    {
      title: 'Volunteers Hub',
      category: 'Web & Apps',
      description: 'Community platform connecting volunteers with local organizations for event management and coordination.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Volunteers+Hub',
      link: 'https://volunteers-hub.onrender.com/',
      tags: ['Social Impact', 'Community', 'Web Platform']
    },
    {
      title: 'Connect-4',
      category: 'Web & Apps',
      description: 'Classic strategy board game implemented as a browser-based application with responsive logic.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Connect+4+Game',
      link: 'https://mjassim2030.github.io/Connect-4/',
      tags: ['Game Dev', 'JavaScript', 'Logic']
    },
    {
      title: 'Tic-Tac-Toe Lab',
      category: 'Web & Apps',
      description: 'Clean, modern implementation of the Tic-Tac-Toe game featuring minimax algorithm for AI opponents.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Tic+Tac+Toe',
      link: 'https://mjassim2030.github.io/javascript-browser-game-tic-tac-toe-lab/',
      tags: ['Game Dev', 'Algorithms', 'Web']
    },
    {
      title: 'Arduino Platform',
      category: 'Web & Apps',
      description: 'Web-based interface for visualizing data streams and controlling connected Arduino modules.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Arduino+Platform',
      link: 'arduino-platform.vercel.app',
      tags: ['IoT Dashboard', 'Arduino', 'Vercel']
    },
    {
      title: 'PS5 Controller Config',
      category: 'Web & Apps',
      description: 'Utility web tool for mapping buttons and testing input response for DualSense controllers.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=PS5+Controller+Tool',
      link: 'https://sparkflow0.github.io/ps5-controller/',
      tags: ['Hardware Interface', 'Gamepad API', 'Tool']
    },
    {
      title: 'LPG Leak Detection',
      category: 'Web & Apps',
      description: 'Real-time safety dashboard monitoring gas sensor levels and triggering alerts for detected leaks.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=LPG+Leak+Dashboard',
      link: 'https://lpg-leak-detection.firebaseapp.com/',
      tags: ['Safety', 'IoT', 'Firebase']
    },
    {
      title: 'Waste Management System',
      category: 'Web & Apps',
      description: 'Smart city dashboard tracking waste bin fill-levels to optimize collection routes.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Waste+Mgmt+System',
      link: 'https://waste-management-system-c9715.firebaseapp.com/',
      tags: ['Smart City', 'Analytics', 'Firebase']
    },
    {
      title: 'Solar Tracker',
      category: 'Web & Apps',
      description: 'Monitoring interface for solar panel efficiency, tracking voltage outputs and sunlight exposure.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Solar+Tracker+App',
      link: 'https://solar-tracker-2f8a7.firebaseapp.com/',
      tags: ['Green Energy', 'Data Viz', 'IoT']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || p.category === filter);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      {/* Navigation */}
      <nav className="border-b border-gray-800 backdrop-blur-md fixed w-full z-50 bg-opacity-90" style={{ backgroundColor: colors.darkBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                Spark<span style={{ color: colors.brandBlue }}>Flow</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#stats" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Impact</a>
                <a href="#projects" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                <a href="#contact" className="bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium transition-all" style={{ backgroundColor: colors.brandOrange, color: colors.textLight }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandBlue }}></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandOrange }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Igniting Intelligence in</span>
                <span className="block mt-2" style={{ color: colors.brandBlue }}>Embedded Systems</span>
              </h1>
              <p className="mt-4 max-w-md mx-auto text-lg sm:text-xl lg:mx-0" style={{ color: colors.textGray }}>
                Spark Flow specializes in bridging the gap between advanced AI algorithms and rugged hardware. From Raspberry Pi computer vision to Arduino automation.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a href="#projects" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transition-transform hover:scale-105" style={{ backgroundColor: colors.brandBlue }}>
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Hero Visual */}
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center relative">
               <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute inset-0 border-2 rounded-full opacity-20 animate-pulse" style={{ borderColor: colors.brandBlue }}></div>
                  <div className="absolute inset-8 border-2 rounded-full opacity-20" style={{ borderColor: colors.brandOrange }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 z-20">
                    <Cpu className="w-16 h-16" style={{ color: colors.brandBlue }} />
                  </div>
                  <div className="absolute top-20 right-20 bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-700 z-10 animate-bounce">
                    <Eye className="w-8 h-8" style={{ color: colors.brandOrange }} />
                  </div>
                  <div className="absolute bottom-20 left-20 bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-700 z-10 animate-bounce">
                    <Activity className="w-8 h-8" style={{ color: colors.brandOrange }} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 relative bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>Impact by the Numbers</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Cpu className="w-8 h-8 text-blue-400" />
                <h3 className="text-4xl font-bold text-white">45+</h3>
              </div>
              <p className="text-gray-400 font-medium">AI Models Deployed</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Server className="w-8 h-8 text-orange-400" />
                <h3 className="text-4xl font-bold text-white">120+</h3>
              </div>
              <p className="text-gray-400 font-medium">Hardware Integrations</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <ScanFace className="w-8 h-8 text-blue-400" />
                <h3 className="text-4xl font-bold text-white">99.8%</h3>
              </div>
              <p className="text-gray-400 font-medium">Recognition Accuracy</p>
            </div>
             <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Activity className="w-8 h-8 text-orange-400" />
                <h3 className="text-4xl font-bold text-white">5+</h3>
              </div>
              <p className="text-gray-400 font-medium">Years of R&D</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>
              Our Extensive Portfolio
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Innovation in Action
            </p>
            
            {/* Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex flex-col h-full hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-2xl">
                
                {/* Image Area */}
                <div className="h-48 w-full relative overflow-hidden bg-gray-900 border-b border-gray-700">
                  {project.size ? (
                    // Sprite Sheet Logic for Hardware Projects
                    <div 
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: project.size,
                        backgroundPosition: project.pos,
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  ) : project.img ? (
                    // Direct Image Logic for Web Apps
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    // Fallback Icon
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <Code className="w-12 h-12 text-gray-600" />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    <div className="bg-gray-900 p-1.5 rounded-lg border border-gray-700">
                       <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.brandBlue }}>
                    {project.category}
                  </p>
                  
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: colors.textGray }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded text-[10px] font-semibold tracking-wide bg-gray-700 text-gray-300 border border-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-t border-b border-gray-800 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest mb-8" style={{ color: colors.textGray }}>Tech Stack</p>
          <div className="flex justify-center items-center flex-wrap gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold text-white flex items-center gap-2"><Cpu size={20}/> Raspberry Pi</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20}/> Arduino</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Eye size={20}/> OpenCV</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Bot size={20}/> TensorFlow</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Code size={20}/> Python</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Wifi size={20}/> IoT</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold tracking-tight">
                Spark<span style={{ color: colors.brandBlue }}>Flow</span>
            </span>
            <p className="text-sm mt-2" style={{ color: colors.textGray }}>© 2025 Spark Flow. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkFlowPortfolio;
