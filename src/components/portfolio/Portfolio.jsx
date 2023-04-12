import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/potf1.JPG'
import IMG2 from '../../assets/potf2.JPG'
import IMG3 from '../../assets/portf3.JPG'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2> Portfolio </h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>

          <div className="portfolio__item-image">
           <img src={IMG1} alt=""/> 
          </div>
           
          <h3>Admission Inquiry System</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href='https://nimit0703.github.io/Admission-system/' className='btn btn-primary' target={'_blank'} rel="noreferrer" >Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">
           <img src={IMG2} alt=""/>
          </div>
           
          <h3>Online BookStore Application</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/SatyamKandoi/BookStore' className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href='https://github.com/SatyamKandoi/BookStore' className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">
           <img src={IMG3} alt=""/>
          </div>
           
          <h3> Medical Consulting System</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/SatyamKandoi/' className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href='https://github.com/SatyamKandoi/' className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio