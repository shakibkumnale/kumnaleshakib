import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { FaGoogle, FaMapMarkerAlt } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5";
import  { FiMail } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

 function Contact() {
    const [alerts,setAlerts]= useState("")

const handleForm = async(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
    const name = formData.get('name');
    const cemail = formData.get('cemail');
    const message = formData.get('message');
     console.log(cemail,name,message);
     const con="shakibkumnali@gamil.com"
     const feedback=`${name} my feedback about your website`
     let a = window.open(`https://mail.google.com/mail/u/0/?to=${con}&su=${feedback}&body=${message}by ${cemail}&tf=cm`);
    // try {
    //   const response = await axios.post('http://localhost:3001/feedback', {
    //     name,
    //     cemail,
    //     message
    //   });
    //   console.log(response.data);
    //   if(response.data){
    //     setAlerts(" your requist successfully submited")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 5000);


    //   }else if(!response.data){
    //     setAlerts(" email not valid enter valid email")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 6000);

    //   }else
    //   {
    //     setAlerts("Sorry please try again later")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 5000);
    //   }
    // } catch (error) {
    //     setAlerts("Sorry please try again later")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 6000);
    //   console.error('Error submitting feedback:', error);
    // }
// }
}
  return (
    <div className='bg-[#0c0f0a]'><section className="min-h-screen bg-[#0c0f0a] dark:bg-[#ffffff06] overflow-hidden">
    <div className="container bg-[#0c0f0a] px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                <p className="mt-4 text-white dark:text-[#ffde08]">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form className="mt-12" onSubmit={handleForm}>
                <div className='flex justify-center items-center w-full mb-3  mt-0 '><span className='text-[#1f1f1f] text-xl'>{alerts}</span></div>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Full Name</label>
                            <input name='name' required type="text" placeholder="Full Name" className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#ffffff06] dark:text-gray-300 dark:border-gray-700 focus:border-[#ffde08] dark:focus:border-[#ffde08] focus:ring-[#ffde08] focus:outline-none focus:ring" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Email address</label>
                            <input name='cemail' required type="email" placeholder="xyz@example.com" className="block w-full px-5 py-3 mt-2 text-black placeholder-[#0c0f0a05] bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#ffffff06] dark:text-gray-300 dark:border-gray-700 focus:border-[#ffde08] dark:focus:border-[#ffde08] focus:ring-[#ffde08] focus:outline-none focus:ring " />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-white dark:text-gray-200">Message</label>
                        <textarea name='message' required className="block w-full h-32 px-5 py-3 mt-2 text-black resize-none placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-[#ffffff06] dark:text-gray-300 dark:border-gray-700 focus:border-[#ffde08] dark:focus:border-[#ffde08] focus:ring-[#ffde08] focus:outline-none focus:ring " placeholder="Message"></textarea>
                    </div>

                    <input type='submit' value="get in touch" className="w-full bg-[#ffde08]  rounded-md px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform  hover:bg-[#0c0f0a] border-2  hover:text-[#ffde08] border-black  hover:border-[#ffde08]  cursor-pointer focus:outline-none focus:ring focus:ring-[#ffde08] focus:ring-opacity-50">
                        
                    </input>
                  
                </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                {/* <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="/Avaz-logo2.png" alt=""/> */}

                <div className="mt-6 space-y-8 md:mt-8">
                    <Link to="https://maps.app.goo.gl/bxvoAv93ErS5x5R98">
                    <p className="flex items-start -mx-2">
                        <FaMapMarkerAlt className="w-6 h-6 mx-2 text-[#ffde08] dark:text-[#ffde08]"  />
                            

                        <span className="mx-2 text-white truncate w-72 dark:text-[#ffde08]">
                            Rabodi Thane West
                        </span>
                    </p>
                    </Link>


                    <p className="flex items-start -mx-2">
                        <IoCallOutline className="w-6 h-6 mx-2 text-[#ffde08] dark:text-[#ffde08]" />
                           

                        <span className="mx-2 text-white truncate w-72 dark:text-gray-400">+91 8291121080</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <FiMail  className="w-6 h-6 mx-2 text-[#ffde08] dark:text-[#ffde08]"  s />
                           

                        <span className="mx-2 text-white truncate w-72 dark:text-gray-400">shakibkumnali@gmail.com</span>
                    </p>
                </div>

                <div className="mt-6 w-80 md:mt-8">
                    <h3 className="text-white dark:text-gray-300 ">Follow us</h3>

                    <div className="flex mt-4 -mx-1.5 ">
                        <Link className="mx-1.5 dark:hover:text-[#ffde08] text-[#ffde08] transition-colors duration-300 transform hover:text-[#ffde08]" to="https://twitter.com/">
                        <FaSquareXTwitter className="w-6 h-6 fill-current"/>
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-[#ffde08] text-[#ffde08] transition-colors duration-300 transform hover:text-[#ffde08]" to="https://www.linkedin.com/in/shakibkumnale/">
                            <FaLinkedinIn className="w-6 h-6"/> 
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-[#ffde08] text-[#ffde08] transition-colors duration-300 transform hover:text-[#ffde08]" to="https://g.co/kgs/J8vfKWD">
                        <FaGoogle className="w-6 h-6"/> 
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-[#ffde08] text-[#ffde08] transition-colors duration-300 transform hover:text-[#ffde08]" to="https://www.instagram.com/_stk_02_/">
                        <FaInstagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>)}
export default Contact;