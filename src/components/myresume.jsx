import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Myresume = () => {
  const resumeUrl = '/shakibkumnale.pdf'; // Path to your PDF

  return (
    <div className='w-full h-screen '> 
    <div className='flex justify-between items-center px-5'><h2 className="text-xl flex justify-center items-center text-center font-bold py-5">My Resume</h2> <Link to='/' className='flex gap-4'>home <FaHome size={24}/></Link></div>
    <iframe
      src={resumeUrl}
      title="Resume Preview"
      width="100%"
     
      className="border h-[calc(100%-4.3rem)] border-gray-300"
    /></div>
  )
}

export default Myresume