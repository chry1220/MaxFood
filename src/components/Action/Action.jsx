// Player
// import ReactPlayer from "react-player";

// Components
import LinkButton from "../LinkButton/LinkButton";

// Images
import ActionBackgroundPatternPng from "../../images/action-background-pattern.png";
import ActionPng from "../../images/welcome.png";

// CSS
import "./Action.scss";

const actionStyle = {
	backgroundImage: `url(${ActionBackgroundPatternPng}),linear-gradient(to bottom right, #555555, #333333)`,
};

const Action = (props) => {
	return (
		<section id="action" style={actionStyle}>
			<div className="container">
				<div className="wrapper">
					<div className="image" data-aos="zoom-in" data-aos-delay="200">
						<img src={ActionPng} alt="philosophy" />
					</div>
					<div className="content" data-aos="zoom-in" data-aos-delay="200">
						<h3>In Action</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Justo eget magna fermentum iaculis eu.
						</p>
						<div className="learn">
							<LinkButton url="#team" outlined>
								Learn More
							</LinkButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Action;
