import React from "react";
// import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={`slider bg-[#0c0f0a] max-sm:after:hidden max-sm:before:hidden max-sm:w-full max-sm:px-1`}>
      <style jsx>{`
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 16));
    }
  }
  
  .slider {
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    
    overflow: hidden;
    position: relative;

  }
  
  .slider::before,
  .slider::after {
   

    background: linear-gradient(to right, #0c0f0a 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  
  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  
  .slider::before {
    left: 0;
    top: 0;
  }
  
  .slideTrack {
    display: flex;
    width: calc(250px * 16);
    animation: scroll 40s linear infinite;
  }
  
  .slide {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 250px;
    overflow: hidden;

  }`
  }

      </style>
      <div className='slideTrack'>
        <div className='slide'>
          <img
            src="./images/mern1.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
            <div className='slide'>
          <img
            src="./images/next.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
      
            src="./images/reactnative.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/gemini.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
         
            className="max-w-full max-h-full object-contain" src="./images/tailwindcss.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/Typescript.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
             className="max-w-full max-h-full object-contain"  src="./images/python.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/chatgpt.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        {/* Repeat slides */}
        <div className='slide'>
          <img
            src="./images/mern1.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
            <div className='slide'>
          <img
            src="./images/next.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/reactnative.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/gemini.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            className="max-w-full max-h-full object-contain" src="./images/tailwindcss.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/Typescript.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
             className="max-w-full max-h-full object-contain"  src="./images/python.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
        <div className='slide'>
          <img
            src="./images/chatgpt.png"
            height="100"
            width="230"
            alt=""
          />
        </div>
    
      </div>
    </div>
  );
};

export default Slider;
