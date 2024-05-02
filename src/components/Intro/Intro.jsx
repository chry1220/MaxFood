// Player
// import ReactPlayer from "react-player";

// Images
import ActionBackgroundPatternPng from "../../images/bg.png";
import ActionPng from "../../images/intro.jpg";

// CSS
import "./Intro.scss";

const actionStyle = {
	backgroundImage: `url(${ActionBackgroundPatternPng}),linear-gradient(to bottom right, #555555, #333333)`,
};

const Intro = (props) => {
	return (
		<section id="intro" style={actionStyle}>
			<div className="container">
				<div className="wrapper">
					<div className="content" data-aos="zoom-in" data-aos-delay="200">
						<h3>Welcome to MaxFood</h3>
						<p>
						Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        				morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        				tellus
						</p>
					</div>
					<div className="image" data-aos="zoom-in" data-aos-delay="200">
						<img src={ActionPng} alt="philosophy" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
