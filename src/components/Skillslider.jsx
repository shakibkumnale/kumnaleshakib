import React from "react";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoSrc, title, description, index }) => {
  return (
    <div className="group z-0 relative min-w-80 w-80 h-96 bg-gradient-to-br from-[#ffde08] to-[#f5d000] rounded-2xl overflow-hidden shadow-2xl  transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex-shrink-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-20 h-20 bg-black rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full"></div>
      </div>
      
      {/* Video Container */}
      <div className="relative p-4 pb-2">
        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl bg-black">
          <iframe
            width="100%"
            height="180"
            src={videoSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-45"
          ></iframe>
          
          {/* Play Button Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 text-black ml-1" />
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Content */}
      <div className="px-4 z-50 pb-4 pt-2 flex flex-col justify-between h-44">
        <div>
         <Link src={videoSrc}>  <div className="flex z-200 cursor-pointer items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-black truncate">{title}</h3>
           <ExternalLink className="w-4 h-4 text-black opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div></Link>
          <p className="text-sm text-black text-opacity-80 leading-relaxed" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {description}
          </p>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs text-black opacity-60">Project #{index + 1}</span>
          </div>
          <div className="bg-black bg-opacity-10 px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-black">Demo</span>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-black group-hover:border-opacity-20 rounded-2xl transition-all duration-300"></div>
    </div>
  );
};

const VideoSlider = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/uFCLfxnTsNU?si=_zpXkny72ttdPYaJ",
      title: "Avaz",
      description: "Offering real-time chat, image generation, audio creation, and voice interaction capabilities with advanced AI features.",
    },
    {
      src: "https://www.youtube.com/embed/tlRTOXAMWT8?si=21-TtT0QigzUMWNf",
      title: "Quizy",
      description: "Interactive testing platform allowing users to take comprehensive tests on topics like MERN, React Native, Java, Python, and more.",
    },
    {
      src: "https://www.youtube.com/embed/E5llV9aSsVM?si=600Z8qHj4vdlhOk8",
      title: "Portfolio",
      description: "My personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    },
    {
      src: "https://www.youtube.com/embed/tlRTOXAMWT8?si=21-TtT0QigzUMWNf",
      title: "Quizy",
      description: "Interactive testing platform allowing users to take comprehensive tests on topics like MERN, React Native, Java, Python, and more.",
    },
    {
      src: "https://www.youtube.com/embed/uFCLfxnTsNU?si=_zpXkny72ttdPYaJ",
      title: "Avaz",
      description: "Offering real-time chat, image generation, audio creation, and voice interaction capabilities with advanced AI features.",
    },
    {
      src: "https://www.youtube.com/embed/E5llV9aSsVM?si=600Z8qHj4vdlhOk8",
      title: "Portfolio",
      description: "My personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    },
  ];

  // Double the videos array for seamless infinite scroll
  const infiniteVideos = [...videos, ...videos];

  const scrollAnimation = {
    animation: 'scroll 30s linear infinite'
  };

  return (
    <div className="bg-[#0c0f0a] py-16 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-344px * 6));
          }
        }
        
        .scroll-container {
          animation: scroll 30s linear infinite;
        }
        
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-[#ffde08] mb-4">Project Videos</h2>
        <p className="text-white text-opacity-70">Showcasing my latest work and projects</p>
      </div>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0c0f0a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0c0f0a] to-transparent z-10"></div>
        
        {/* Infinite Slider */}
        <div className="flex gap-6 w-max scroll-container">
          {infiniteVideos.map((video, index) => (
            <VideoCard
              key={index}
              videoSrc={video.src}
              title={video.title}
              description={video.description}
              index={index % videos.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;