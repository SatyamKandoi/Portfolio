import React from 'react'
import './nav.css'
import { useState } from 'react'
import {MdMessage} from 'react-icons/md'
import {AiOutlineHome, AiOutlineUser,AiOutlineProject} from 'react-icons/ai'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home"onClick={()=>setActiveNav("#")} className={activeNav ==='#' ? 'active':''}><AiOutlineHome/> </a>
      <a href="#about" onClick={ ()=> setActiveNav("#about")}className={activeNav==='#about' ? 'active':''}  ><AiOutlineUser/> </a>
      <a href="#expereince" onClick={()=>setActiveNav("#expereince")} className={activeNav==="#expereince" ? 'active' : "" }><AiOutlineProject/></a>
      <a href="#contact"onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact" ? 'active' : "" }><MdMessage/></a>
      
    </nav>
  )
}

export default Nav