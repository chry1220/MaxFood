import { useState } from "react";

// Images
import LogoPng from "../../images/logo-no-background.png";

// CSS
import "./Header.scss";

const Header = (props) => {
	const [sidebar, setSidebar] = useState(false);
	const handleSidebarToggle = () => setSidebar((s) => !s);

	return (
		<header>
			<div className="container">
				<div className="wrapper">
					<div className="logo">
						<a href="#">
							<img src={LogoPng} alt="enfold" />
						</a>
					</div>
					<div
						id="backdrop"
						className={`${sidebar ? "show" : ""}`}
						onClick={handleSidebarToggle}
					></div>
					<nav className={`${sidebar ? "open" : ""}`}>
						<ul>
							<li>
								<a href="#team">Foods</a>
							</li>
							<li>
								<a href="#philosophy">Philosophy</a>
							</li>
							<li>
								<a href="#portfolio">Special Events</a>
							</li>
							<li>
								<a href="#Work">Work</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</nav>
					<button
						id="sidebarOpen"
						className={`${sidebar ? "change" : ""}`}
						onClick={handleSidebarToggle}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
