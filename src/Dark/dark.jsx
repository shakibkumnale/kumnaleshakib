import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactTyped } from "react-typed"
import { HiMiniBars3BottomRight,HiOutlineXMark } from "react-icons/hi2";
function App() {
  const [open, setOpen] = useState(false)
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
        <div className='bg-black'>
    <div className='w-full font-g relative flex flex-col   bg-[#161616]'>
    <nav className='w-full  py-2 flex justify-between items-center px-10'>
      <div className=' flex flex-col justify-center items-center'>
        <img src="stklogo.png"  className=' max-sm:w-14 ' width={65} alt="stk" />
        <span className='text-xl text-white '>shakib kumnale</span>
      </div>
      <div className=' text-2xl max-sm:hidden text-white flex justify-between w-2/5 list-none'>
        
        <a href="#" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Home
</a>
        <a href="#" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Project
</a>
        <a href="#" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
Videos
</a>
        <a href="#" className="relative text-2=3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        Contact
</a>
 
      </div>
      {open && ( 
  <div className='sm:hidden absolute top-0 left-0 w-full h-full flex justify-center bg-[#00000053]'>
    <div className={`top-32 w-[80%] py-8 rounded-2xl fixed pt-14 shadow-2xl bg-[#ffde08] text-2xl sm:hidden flex flex-col justify-center items-center gap-7 list-none`}>
      <button onClick={() => setOpen(false)} className='sm:hidden z-50 top-3 right-5 absolute'>
        <HiOutlineXMark size={40}/>
      </button>
      <a href="#" className="relative text-3xl w-fit block after:block border-b- after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Home
      </a>
      <a href="#" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Project
      </a>
      <a href="#" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Videos
      </a>
      <a href="#" className="relative text-3xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ffde08] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        Contact
      </a>
      <button className='bg-[#000] px-10 pt-4 pb-2 text-xl text-[#fff] rounded-xl sm:pt-4 sm:px-14 sm:text-2xl text-center items-center py-2 w-200'>Resume</button>
    </div>
  </div>
)}


      
      <div>
        <button className='border-2 border-[#ffde08] max-sm:hidden  px-10 pt-4 pb-2 text-xl text-[#ffde08] rounded-xl sm:pt-4 sm:px-14 sm:text-2xl text-center items-center py-2 w-200'>resume</button>
     <button onClick={()=>setOpen(!open)} className='sm:hidden z-50' ><HiMiniBars3BottomRight  size={40} /> </button>
        
      </div>
    </nav>
    
    <div className='border-4 border-[#d84242] flex max-sm:flex-col   w-full h-full'>
      <div className='border-2 w-full  flex flex-col pt-20 max-sm:pt-7 pb-10  border-[#000]'>
        <div className=' text-4xl font-t mx-32 max-sm:ml-8 max-sm:text-3xl text-[#ffffff] '> Hey'</div>
       
        <div className=' text-7xl font-t ml-32 max-sm:ml-8 max-sm:text-5xl min-h-60  text-[#da08ff]  '>I AM SHAKIB A <p>
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
          <p className='font-pop text-[#fff]  pr-11'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, voluptatem incidunt nesciunt nam rerum voluptas aliquid cupiditate ipsam corrupti modi nemo. Adipisci porro dolor magni harum soluta explicabo excepturi aspernatur qui saepe?</p>
        <button className=' mt-5 bg-[#ffde08]  p-2  text-xl text-[#fff] rounded-2xl   sm:text-2xl text-center items-center '><p className="border border-[#000] bg-[#ffde08] px-4 py-1 vtext-xl text-[#000] font-pop rounded-xl sm:p-  sm:text-2xl text-center items-center  " >MY assistant</p></button>

        </div>
      </div>
      <div className='border-2 w-full h-full border-[#000] flex justify-center items-center'>
        <div className='h-full'> <svg
  className="w-[500px] h-[500px ] py-20 " /* Ensures the SVG fills the container */
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

    </div>
    </>
  )
}

export default App
