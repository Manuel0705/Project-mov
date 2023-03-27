import GetStartedBtn from "../components/GetStartedBtn";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<section className="top">
				<iframe className="front" title="iframe-1"></iframe>
				<iframe className="back" title="iframe-2"></iframe>
			</section>
			<section className="bottom">
				<h3>
					Enjoy Your Movie <br /> Watch Everywhere
				</h3>
				<p>
					Stream unlimited movies and TV shows <br />
					on your phone, tablet, laptop and TV.
				</p>
				<GetStartedBtn />
			</section>
		</div>
	);
};

export default LandingPage;
