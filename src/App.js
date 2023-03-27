import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
// import LandingPage from "./pages/LandingPage";
import FilterResultPage from "./pages/FilterResultPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieTrailerPage from "./pages/MovieTrailerPage";
import Overview from "./pages/Overview";

function App() {
	return (
		<div className="App">
			<div className="inner" id="bg">
				<div className="operator-name">Super(Code)</div>
				<div className="dynamic-island"></div>
				<div className="dynamic-island-camera"></div>
				<div className="operator-icons">
					<svg
						stroke="currentColor"
						fill="black"
						strokeWidth="0"
						viewBox="0 0 512 512"
						height="1em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M428.4 27.8v456.4h60.9V27.8h-60.9zM327 168.2v316h60.8v-316H327zM225.4 273.6v210.6h61V273.6h-61zM124 343.8v140.4h60.9V343.8H124zM22.67 394.9v89.3h60.84v-89.3H22.67z"></path>
					</svg>
					5G
					<div className="battery">90</div>
				</div>
				<i className="btn btn1"></i>
				<i className="btn btn2"></i>
				<i className="btn btn3"></i>
				<i className="rightButton"></i>

				<BrowserRouter>
					<Routes>
						<Route path="/" element={<IntroPage />} />
						<Route path="/home" element={<Home />} />
						<Route path="/overview" element={<Overview />} />
						<Route
							path="/details/:id"
							element={<MovieDetailsPage />}
						/>
						<Route
							path="/trailer/:id"
							element={<MovieTrailerPage />}
						/>
						<Route
							path="/filtered"
							element={<FilterResultPage />}
						></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
