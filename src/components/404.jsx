import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[##ffffff] p-6 lg:p-12">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
        <img
          src="/images/404.png" // Update with the correct path
          alt="404 Error"
          className="w-3/4 h-auto"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#0c0f0a] mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-lg text-[#1b2e35] mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#1b2e35] text-[#ffde08] px-6 py-3 rounded-md font-medium hover:text-[#1b2e35] hover:bg-[#ffde08] transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
