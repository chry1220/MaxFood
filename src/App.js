import { useEffect } from "react";
import Aos from "aos";

// Components
import Scroll from "./components/Scroll/Scroll";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Philosophy from "./components/Philosophy/Philosophy";
import Testimonials from './components/Testimonials/Testimonials';
import Action from "./components/Action/Action";
import Portfolio from "./components/Portfolio/Portfolio";
import Tale from './components/Tale/Tale';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// CSS
import './aos.css';
import './App.scss';

const App = () => {
	useEffect(() => {
		Aos.init({ duration: 800, delay: 200 });
	}, []);

	return (
		<>
			<Scroll />
			<Header />
			<Intro />
			<Team />
			<Philosophy />
			<Testimonials />
			<Action />
			<Work />
			<Services />
			<Portfolio />
			<Tale />
			<Contact />
			<Footer />
		</>
	);
}

export default App;