import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/satyam-kandoi" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/SatyamKandoi" target="_blank">
        <GrGithub/>
        </a>
       
    </div>
  )
}

export default HeaderSocials