import { useEffect, useState,React } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import Home from './components/Home'
import ImageSwitcher from './components/Demo'
import ChatBot from './components/ChatBot'
import Myresume from './components/myresume'
import NotFoundPage from './components/404'

function App() {
  return (
    <>
     <Router>
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat' element={<ChatBot/>}/>
          <Route path='/resume' element={<Myresume/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
          
          </Routes>
          </Router>

      {/* <BrowserRouter>
      {/* <Home/> */}
      {/* <ImageSwitcher/> */}
      
      {/* </BrowserRouter> */} 
    </>
  )
}

export default App
