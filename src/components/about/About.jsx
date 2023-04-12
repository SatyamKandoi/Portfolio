import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {MdRuleFolder} from 'react-icons/md'
import ME from '../../assets/about.jpeg'
const about = () => {
  return (
		<section id="about">
			<h5> Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt=""></img>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon"></FaAward>
							<h5>Experience</h5>
							<small>Fresher</small>
						</article>

						<article className="about__card">
							<BsLinkedin className="about__icon"></BsLinkedin>
							<h5>Profile</h5>

							<a
								href="https://www.linkedin.com/in/satyam-kandoi"
								target="_blank" rel="noreferrer">
								<small>Linkedin</small>{" "}
							</a>
						</article>

						<article className="about__card">
							<MdRuleFolder className="about__icon"></MdRuleFolder>
							<h5>Projects</h5>
              <a href="https://github.com/SatyamKandoi" target="_blank" rel='noreferrer'><small>Github</small></a>
							
						</article>
					</div>

					<p>
						I am a Final Year College Student at SVIT, Vasad who wants to become
						proficient in Web development and all the technologies associated
						with it. I have a highly Enthusiastic and Problem Solving Mindset
						and Love to troubleshoot various situations which arise during every
						Stage of Development.I am effectively self-manage, as well as
						collaborative in a team setting.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default about