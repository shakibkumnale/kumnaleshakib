import React from 'react';
import { Link } from 'react-router-dom';
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  imageUrl,
  projectUrl,
  order = false,
  color = '#fff',
  icon = 'github',
  isAnimated = false,
  animatedImage = null
}) => {
  const IconComponent = icon === 'github' ? FaGithubSquare : TbWorldWww;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
      {/* Text Section */}
      {order && (
        <div className="order-2 sm:order-1 w-full">
          <h3 className="flex gap-2 items-center font-bold text-2xl md:text-4xl" style={{ color }}>
            {title}<IconComponent size={24} color={color} />
          </h3>
          <span className="text-base md:text-lg" style={{ color }}>
            {subtitle}
          </span>
          <p className="text-justify text-sm md:text-base mt-2 text-[#fff]">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="rounded-[10px] border-2 px-[10px] py-[5px] text-sm md:text-base"
                style={{ color, borderColor: color }}
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Line and Circle Decorations */}
      <div
        className={`h-[1px] ${order ? 'left-1/2 right-1/4' : 'left-1/4 right-1/2'} absolute top-1/2 hidden sm:block`}
        style={{ background: color }}
      />
      <div
        className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        style={{ borderColor: color }}
      />

      {/* Image Section */}
      <Link
        to={projectUrl}
        className={`${order ? 'order-1 sm:order-2' : ''} flex w-full relative justify-center sm:justify-start`}
      >
        <div
          className={`flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 ${
            order ? 'sm:ml-auto' : 'sm:mr-auto'
          }`}
        >
          <img
            className={`max-w-[400px] w-full relative z-10 ${isAnimated ? 'animated-image' : ''}`}
            style={{ filter: `drop-shadow(0 0px 60px ${color})` }}
            src={isAnimated ? animatedImage || imageUrl : imageUrl}
            alt={title}
          />
          <span
            className="flex group-hover:-top-14 ease-jump duration-200 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
            style={{ background: color, color: color === '#fff' ? '#000' : 'inherit' }}
          >
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </div>
      </Link>

      {/* Text Section (non-reversed) */}
      {!order && (
        <div className="w-full">
          <h3 className="flex gap-2 items-center font-bold text-2xl md:text-4xl" style={{ color }}>
            {title}<IconComponent size={24} color={color} />
          </h3>
          <span className="text-base md:text-lg" style={{ color }}>
            {subtitle}
          </span>
          <p className="text-justify text-sm md:text-base mt-2 text-[#fff]">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="rounded-[10px] border-2 px-[10px] py-[5px] text-sm md:text-base"
                style={{ color, borderColor: color }}
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
