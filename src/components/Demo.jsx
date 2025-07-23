import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState('/images/shaka1.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === '/images/shaka1.png' ? '/images/shaka2.png' : '/images/shaka1.png'
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentImage}
      className="image-container"
      initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <img
        className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_#ffffff27]"
        src={currentImage}
        alt="Shaka Bank"
      />
    </motion.div>
  );
};
export default ImageSwitcher;