import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="expereince" style={{ padding: "5px" }}>
			<h5>The Skills I Have</h5>
			<h2>My Expereince</h2>
			<div className="container expereince__container">
				<div className="expereince__frontend">
					<h3>FrontEnd Development</h3>
					<div className="expereince__content">
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>Web Development</h4>
								<small className="text-light">Experience</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>Material UI </h4>
								<small className="text-light">Expereinced</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Expereinced</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>BootStrap</h4>
								<small className="text-light">Expereinced</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>React JS </h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
				{/*END OF FRONTEND */}
				<div className="expereince__backend">
					<h3>BackEnd Development</h3>
					<div className="expereince__content">
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>Node-JS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>AWS</h4>
								<small className="text-light">Begineer</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>Express-JS</h4>
								<small className="text-light">Expereinced</small>
							</div>
						</article>
						<article className="expereince__details">
							<BsFillPatchCheckFill className="expereince__details-icon" />
							<div>
								<h4>Database </h4>
								<small className="text-light">
									(MySQL, Postgres,PhpMyadmin)
								</small>
								<br></br>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
