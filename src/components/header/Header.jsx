import React from 'react'
import './header.css'
import ME from "../../assets/Satyam.jpg"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Satyam Kandoi</h1>
        <h5 className="text-light">Website Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">

        <img src={ME} alt=""/ >
      
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  
  )
}

export default Header