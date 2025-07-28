import React, { useEffect, useState } from "react";
import ProjectCard from './ProjectCard';
import OptimizedImage from './OptimizedImage';

const Project = () => {
  const [currentImage, setCurrentImage] = useState('/images/shaka1.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === '/images/shaka1.png' ? '/images/shaka2.png' : '/images/shaka1.png'
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: 'AVAZ',
      subtitle: '(AI Voice Assistant for gen-Z)',
      description: 'AVAZ is an AI-powered voice assistant designed for Gen-Z, offering real-time chat, image generation, audio creation, and voice interaction capabilities. It also enables users to ask questions about uploaded videos and receive instant responses.',
      technologies: ['React.js', 'express.js', 'node.js', 'Gemini AI', 'javascript', 'mongoDB Atlas', 'mongoose', 'Tailwindcss', 'POSTMAN', 'JWT token', 'Nodemailer (send OTP)', 'Huggingface'],
      imageUrl: '/images/avaz.png',
      projectUrl: 'https://github.com/shakibkumnale/AVAZ',
      color: '#fff',
      icon: 'github'
    },
    {
      title: 'Soul Distribution',
      subtitle: '(my small business )',
      description:"Soul Distribution was born from this realization—not just as a service, but as a platform where artists can focus purely on their music, while we handle everything else. We're artists serving artists.",
      technologies: ['Next.Js,React.js', 'Spotify API', 'javascript', 'Vercel', 'mongoose', 'Tailwindcss', 'POSTMAN'],
      imageUrl: '/images/soul1.png',
      projectUrl: '#home',
      color: '#FF13F0',
      icon: 'web'
    },
 
    {
      title: 'Shakib Kumnale',
      subtitle: '(my portfolio website)',
      description: 'My portfolio website features an AI chatbot for career-related queries and showcases my projects, skills, videos, and contact information. It\'s designed to provide insights into my work and expertise.',
      technologies: ['React.js', 'express.js', 'node.js', 'Gemini AI', 'javascript', 'Vercel', 'mongoose', 'Tailwindcss', 'POSTMAN'],
      imageUrl: '/images/portfolio.png',
      projectUrl: '#home',
      color: '#ffde08',
      icon: 'web'
    },   {
      title: 'Quizy',
      subtitle: '(Assignment by Network Change)',
      description: 'Quizy is a quiz website created for Change Network, allowing users to take tests on topics like MERN, React Native, Java, Python, and more. It offers both single-topic and multi-topic modes for a customizable testing experience.',
      technologies: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'tailwindcss', 'javascript', 'Vercel'],
      imageUrl: '/images/quiz1.png',
      projectUrl: 'https://quizmaster-seven.vercel.app/',
      color: '#00F5FF',
      icon: 'web'
    },
   
    {
      title: 'Label padega India',
      subtitle: '(LPi is mobile app help user)',
      description: '"L Pi" is an app designed to improve awareness of food ingredients and nutritional information, empowering users to make informed choices. The project focuses on promoting transparency in food labeling under the hashtag #labelpadegaindia.',
      technologies: ['React-Native', 'expo', 'express.js', 'node.js', 'Gemini AI', 'javascript', 'mongoDB Atlas', 'mongoose', 'Tailwindcss', 'POSTMAN'],
      imageUrl: '/images/LPi.png',
      projectUrl: 'https://github.com/shakibkumnale/LPi',
      color: '#fff',
      icon: 'github'
    },
    {
      title: 'Vaibhav Dhanwade',
      subtitle: '(politician\'s website)',
      description: 'I created a website for Vaibhav Dhanawade, a politician who is a very social person and actively participates in religious and cultural events. The website highlights his political journey and key contributions throughout his career.',
      technologies: ['WordPress', 'Hostinger'],
      imageUrl: '/images/vaibhav.png',
      projectUrl: 'https://www.vaibhavdhanawade.ipolitycal.com/',
      color: '#FF5C00',
      icon: 'web'
    } ,{
      title: 'SHAKA-bank',
      subtitle: '(Bank system clone)',
      description: 'Shaka Bank is a demo online banking system that allows users to transfer money using phone numbers, Gmail, usernames, or UPI IDs. It features a detailed transaction history where users can view their previous transactions, providing a seamless and user-friendly banking experience.',
      technologies: ['React.js', 'express.js', 'node.js', 'javascript', 'mongoDB Atlas', 'mongoose', 'Tailwindcss', 'POSTMAN', 'JWT token'],
      imageUrl: currentImage,
      projectUrl: 'https://github.com/shakibkumnale/SHAKA-bank',
      color: '#00F5FF',
      icon: 'github',
      isAnimated: true,
      animatedImage: currentImage
    }
 
  ];

  return (
    <section className="max-w-full px-6 sm:px-14 mx-auto bg-[#0c0f0a] relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-[#ffde08] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#000] sm:border-b-2 border-[#ffde08]">
        Latest Works
      </h2>
      
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          order={index % 2 === 1}
        />
      ))}

      <div className="w-[2px] hidden sm:block bg-[#ffde08] absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Project;