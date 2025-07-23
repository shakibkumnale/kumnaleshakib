import React, { useRef, useState, useEffect } from 'react';
import { GrSend } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import CustomWaves from './Wave';
import axios from 'axios';
import Marked from 'marked-react';
import { FaSpinner } from 'react-icons/fa';
import { div } from 'framer-motion/client';

const ChatBot = ({ closeChat }) => {
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const Submit = async () => {
    try {
      if (input.trim() === "") return;

      const temp = input; // Store the input before clearing it
      setInput(''); // Clear the input field
      inputRef.current.focus(); // Set focus back to the input field
  
      // Append the user query to messages
      setMessages((prevMessages) => [
        ...prevMessages,
        <div className='py-3 px-6 flex justify-end items-center' key={`user-${prevMessages.length}`}>
          <div className='rounded-lg max-w-[80%] py-2 px-4 font-pop z-30 bg-[#ffd700] rounded-se-lg relative break-word after:block after:-z-10 after:w-4 after:h-4 after:bg-inherit after:absolute after:-right-3 after:-translate-x-1/2 after:rotate-45 after:top-1 text-left'>
            {temp}
          </div>
        </div>
      ]);
  
      setLoader(true);
      const res = await axios.post("https://shakibkumnale.vercel.app/askquery", { query: temp });
      
      console.log(res.data);
      console.log(res.status);
      
      
      if(res.status===200){ console.log("ok")
        setLoader(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          <div className='py-3 px-3 flex justify-start items-center' key={`bot-${prevMessages.length}`}>
            <div className='rounded-lg max-w-[80%] py-2 px-2 font-pop z-30 rounded-ss-lg relative break-word after:block after:-z-10 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1 after:-translate-x-1/2 after:rotate-45 after:top-1 text-left'>
              <div className="marked">
                <Marked>{res.data.response}</Marked>
              </div>
            </div>
          </div>
        ]);}
      
      
    } catch (error) {
      setLoader(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        <div className='py-3 px-3 flex justify-start items-center' key={`bot-${prevMessages.length}`}>
          <div className='rounded-lg max-w-[80%] py-2 px-2 font-pop z-30 rounded-ss-lg relative break-word after:block after:-z-10 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1 after:-translate-x-1/2 after:rotate-45 after:top-1 text-left'>
            <div className="marked text-[#f00]">
              <Marked>something went wrong try again later, server isue!</Marked>
            </div>
          </div>
        </div>]);
    }
   
  };

  return (
    <>
    
      <div className='bg-[#f2eee7] relative rounded-2xl border border-[#000] overflow-hidden h-full flex flex-col'>
            {loader && (
        <div className="w-full h-full z-[1000] rounded-2xl bg-[#ffffff69] flex justify-center items-center absolute ">
          <FaSpinner className="animate-spin h-8 w-8 text-[#000000]" />
        </div>
      )}
        {/* Navbar */}
        <div className='navbar w-full z-50'>
        
          <div className='w-full flex justify-between items-center px-5 py-2 bg-[#ffd700]'>
            <div className='flex justify-start items-center gap-2 z-10'>
              <img src="./images/j.png" alt="" width={50} />
              <span className='text-5xl font-t'>Shako</span>
            </div>
            <div className='z-[1005]'>
            <button onClick={closeChat}><IoClose size={40} /></button>
            </div>
          </div>
          <div className='w-full'>
            <CustomWaves />
          </div>
        </div>

        {/* Content Area */}
        <div className='flex-grow overflow-y-auto mt-2 pb-20'>
          {/* Chat messages */}
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))
          ) : (
           <div className='flex flex-col  justify-center items-center'>
            <img src="/images/chatbot.png" width={'70%'} className=' opacity-45' alt="" />
           <span className='text-2xl font-pop font-semibold opacity-45 '>Let's Talk</span> 
           </div>
             
          )}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Bar */}
        <div className='input-bar border-[#9ca3af] border-t-2 w-full z-50 bg-[#f2eee7]'>
          <div className='w-full px-3 py-4 flex justify-center items-center relative'>
            <input
              ref={inputRef}
              type="text"
              autoFocus
              placeholder='Who is Shakib Kumnale?'
              name="query"
              required
              onChange={(e) => setInput(e.target.value)}
              value={input}
               onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  Submit();
                }
              }}
              className='border-[1.5px] border-[#9ca3af] text-lg bg-transparent focus:ring-0 outline-none w-full rounded-full px-5 py-2 pr-28'
            />
            <button onClick={Submit} className='absolute right-10 flex justify-between gap-3 text-[#000]'>
              send<GrSend size={26} color='#000' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
