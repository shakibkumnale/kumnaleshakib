import { useEffect, useState } from 'react'

import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom";

import { HiMiniBars3BottomRight,HiOutlineXMark } from "react-icons/hi2";
import { PiGithubLogo,PiYoutubeLogo, PiInstagramLogo, PiChat, PiMessengerLogo} from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import Project from './project';
import Slider from './Youtubeslide';
import VideoSlider from './Skillslider';
import Contact from './Contact';
import ChatBot from './ChatBot';
import { TbMessageChatbot } from 'react-icons/tb';

function Home() {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState(false);

const toggleChat = () => {
  setChat((prevChat) => !prevChat); // Toggle chat state
};

  useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 640) {  // sm breakpoint
            setOpen(false);  // Close the menu on wider screens
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
                window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
          <>
        <div className='bg-[#ffde08]  ' id='home'>
        {chat && <div className='fixed top-0 max-sm:p-0 z-[10003] h-full bg-[#09090044]  py-3 w-full flex justify-end px-24'><div className=' w-[45%] shadow-2xl tot-0 h-full right- max-sm:w-full'>  <ChatBot closeChat={toggleChat} /></div></div>}
         
   

    <div className='w-full font-g relative flex flex-col   bg-[#f2eee7]'>
    <nav className='w-full  py-2 flex justify-between items-center px-10'>
      <div className=' flex flex-col justify-center items-center'>
        <img src="/images/s.png"  className=' max-sm:w-14 py-1' width={52} alt="stk" />
        <span className='text-xl '>shakib kumnale</span>
      </div>
      <div className=' text-2xl max-sm:hidden font-t flex justify-between uppercase w-2/5 list-none'>
        
        <a href="#home" className="relative  text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Home
</a> 
        <a href="#project" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Project
</a>
        <a href="#video" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Videos
</a>
        <a href="#contact" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        Contact
</a>
 
      </div>
      
      {open && ( 
  <div className='sm:hidden z-[1005] absolute top-0 left-0 w-full h-full flex justify-center bg-[#ffffff53]'>
    <div className={`top-32 w-[80%] py-8 rounded-2xl fixed pt-14 shadow-2xl bg-[#ffde08] text-2xl sm:hidden flex flex-col justify-center items-center gap-7 list-none`}>
      <button onClick={() => setOpen(false)} className='sm:hidden z-50 top-3 right-5 absolute'>
        <HiOutlineXMark size={40}/>
      </button>
      <a href="#home" className="relative text-3xl w-fit block after:block border-b- after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Home
      </a>
      <a href="#project" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Project
      </a>
      <Link to="#video" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Videos
      </Link>
      <a href="#contact" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Contact
      </a>
      <Link to="/resume"  className='bg-[#000] px-10 pt-4 pb-2 text-xl text-[#fff] rounded-xl sm:pt-4 sm:px-14 sm:text-2xl text-center items-center py-2 w-200'>Resume</Link>
    </div>
  </div>
)}


      
      <div>
        <Link to="/resume" className='border-2 max-sm:hidden bg-[#000] px-10 pt-4 pb-2 text-xl text-[#fff] rounded-xl sm:pt-4 sm:px-14 sm:text-2xl text-center items-center py-2 w-200'>resume</Link>
     <button onClick={()=>setOpen(!open)} className='sm:hidden z-50' ><HiMiniBars3BottomRight  size={40} /> </button>
        
      </div>
    </nav>
    
    <div  className='  flex max-sm:flex-col-reverse   w-full h-full'>
      <div className=' w-full  flex flex-col pt-20 max-sm:pt-7 pb-10  '>
        <div className=' text-4xl font-t mx-32 max-sm:ml-8 max-sm:text-3xl '> Hey'</div>
       
        <div className=' text-7xl font-t ml-32 max-sm:ml-8 max-sm:text-5xl min-h-60  '>I AM SHAKIB A <p>
        <ReactTyped className='  text-[#ffde08] uppercase'
                            strings={[

                              "BSc IT Graduate",
                              "REACT-Native developer",
                                "MERN Stack developer",
                                "FULL STACK DEVELOPER"
                            
                            ]}
                            typeSpeed={40}
                            backSpeed={20}
                            loop
                        /></p>  </div>
        <div className='ml-32 max-sm:ml-8  '>
          <p className='font-pop  pr-11'>Hi, I'm Shakib Kumnale, a passionate IT professional with a strong background in web development, especially in the MERN stack. I'm always eager to learn, tackle challenging projects, and create user-friendly, impactful applications. I thrive on solving problems and love contributing innovative solutions to the tech space!</p>
        <button onClick={toggleChat} className='border  mt-5 bg-[#ffde08]  p-2  text-xl text-[#fff] rounded-2xl   sm:text-2xl text-center items-center '><p className="border border-[#000] bg-[#ffde08] px-4 py-1 vtext-xl text-[#000] font-pop rounded-xl sm:p-  sm:text-2xl text-center items-center  " >MY assistant</p></button>

        </div>
      </div>
      <div className=' w-full h-full  flex justify-center items-center'>
        <div className='fixed z-30 top-[35%] right-2 flex flex-col gap-3 rounded-xl py-5 px-2 bg-[#000000]'>
      <Link to='https://github.com/shakibkumnale' className="relative text-3xl w-fit block after:block after:content-['github'] after:rounded-s-xl after:border-2 after:border-black after:border-r-0 after:bg-[#ffde08] after:text-[#000] after:absolute after:py-1 after:text-center after:font-pop after:px-5  after:scale-x-0 after:hover:scale-x-100 after:-top-1 after:-left-[126PX] after:text-2xl  after:transition after:duration-300 after:origin-right "> <PiGithubLogo className='p-1 border-2 border-[#ffde08] rounded-xl' color={'ffde08'} size={35} /></Link>
       <Link to='https://www.linkedin.com/in/shakibkumnale' className="relative text-3xl w-fit block after:block after:content-['Linkedin'] after:rounded-s-xl after:border-2 after:border-black after:border-r-0 after:bg-[#ffde08] after:text-[#000] after:absolute after:py-1 after:text-center after:font-pop after:px-5  after:scale-x-0 after:hover:scale-x-100 after:-top-1 after:-left-36 after:text-2xl  after:transition after:duration-300 after:origin-right "><RiLinkedinLine className='p-1 border-2 border-[#ffde08] rounded-xl' color={'ffde08'} size={35} /></Link>
       <Link to='https://youtu.be/uFCLfxnTsNU?si=2Iv4ROudPypTo2br' className="relative text-3xl w-fit block after:block after:content-['YouTube'] after:rounded-s-xl after:border-2 after:border-black after:border-r-0 after:bg-[#ffde08] after:text-[#000] after:absolute after:py-1 after:text-center after:font-pop after:px-4  after:scale-x-0 after:hover:scale-x-100 after:-top-1 after:-left-36 after:text-2xl  after:transition after:duration-300 after:origin-right "><PiYoutubeLogo className='p-1 border-2 border-[#ffde08] rounded-xl' color={'ffde08'} size={35} /></Link>
       <Link to='https://www.instagram.com/_stk_02_/' className="relative text-3xl w-fit block after:block after:content-['Instagram'] after:rounded-s-xl after:border-2 after:border-black after:border-r-0 after:bg-[#ffde08] after:text-[#000] after:absolute after:py-1 after:text-center after:font-pop after:px-5  after:scale-x-0 after:hover:scale-x-100 after:-top-1 after:-left-[172px] after:text-2xl  after:transition after:duration-300 after:origin-right "><PiInstagramLogo className='p-1 border-2 border-[#ffde08] rounded-xl' color={'ffde08'} size={35} /></Link>
       <button onClick={toggleChat} className="relative text-3xl w-fit block after:block after:content-['Chatbot'] after:rounded-s-xl after:border-2 after:border-black after:border-r-0 after:bg-[#ffde08] after:text-[#000] after:absolute after:py-1 after:text-center after:font-pop after:px-5  after:scale-x-0 after:hover:scale-x-100 after:-top-1 after:-left-[146px] after:text-2xl  after:transition after:duration-300 after:origin-right "><TbMessageChatbot className='p-1 border-2 border-[#ffde08] rounded-xl' color={'ffde08'} size={35} /></button>
     

 
 
        </div>
        <div className='h-full flex justify-center '>
        <img src="/images/myimage.png"  className='z-30 right-40  max-sm:right-40 absolte  max-sm:w-60 w-[300px] '  alt="" />
         <svg
  className="w-[500px] h-[500px ] max-sm:w-[400px] absolute py-20" /* Ensures the SVG fills the container */
  viewBox="38  70 126 112" /* Adjust this to fit your content exactly */
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet" /* Scales content to fill space without cutting off */
>

  <path
    fill="#FFDE08"
    d="M46,-26.1C58.1,-21.6,65.2,-2.5,63.4,18.2C61.6,38.9,51,61.4,32.2,72.7C13.4,84,-13.6,84.1,-33.4,73.1C-53.2,62.2,-65.8,40,-60.4,24.9C-55,9.8,-31.6,1.6,-18.5,-3.1C-5.4,-7.8,-2.7,-9.1,7.1,-14.8C17,-20.5,34,-30.6,46,-26.1Z"
    transform="translate(100 100)"
  />
  
</svg>


</div>
      </div>
    </div>
    </div>
    <div id="project"></div>
<Project />
<div className=' flex justify-center  bg-[#0c0f0a]' id='skill'>  <h2
      className="text-3xl sm:text-[40px] bg-[#ffde08] mb-8  z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#000] sm:border-b-2 border-[#ffde08]"
    >
      Skills
    </h2></div>
<div className='w-full pb-10 px-20 max-sm:px-10 bg-[#0c0f0a] '>
   <Slider/></div>
<div id="video" className='w-full flex justify-center my-2 bg-[#0c0f0a]'>  <h2
      className="text-3xl sm:text-[40px] bg-[#ffde08] z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#000] sm:border-b-2 border-[#ffde08]"
    >
   Videos
    </h2></div>
<div className='w-full py-10 px-20 max-sm:px-10 bg-[#0c0f0a] '>

   <VideoSlider/></div>
   <div id="contact">
    <Contact/>
   </div>
    </div>
    </>
  ) 
}

export default Home
