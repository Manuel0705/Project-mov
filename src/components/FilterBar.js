import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterResultPage from "../pages/FilterResultPage";
import "./FilterBar.css";

const FilterBar = () => {
	const [isActive, setActive] = useState(false);
	const toggle = () => {
		setActive(!isActive);
	};
	let arrSortedByGenre = [];
	const [loading, setLoading] = useState(true);
	const [genres, setGenres] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [genreArray, setGenreArray] = useState([]);
	// const [btnGenre, setBtnGenre] = useState(buttonGenre);
	// const [navbarOpen, setNavbarOpen] = useState(false);

	// console.log(btnValue);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/week?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
		)
			.then((res) => res.json())
			.then((data) => setTrendingMovies(data.results));
	}, []);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				setGenres(data.genres);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	const genreSearch = (e) => {
		// const hideOverview = document.querySelector(".overview-items");
		console.log("buttonValue: ", e.target.value);
		trendingMovies.map((elt) => {
			if (elt.genre_ids.includes(Number(e.target.value))) {
				// hideOverview.classList.add("hiddden");
				arrSortedByGenre.push(elt);
				setGenreArray(arrSortedByGenre);
			}
			return console.log("genreArr", arrSortedByGenre);
		});

		// setBtnValue(e.target.value);
		// buttonGenre = e.target.value;
		// console.log(btnValue.value);
	};

	console.log("movieGenres: ", genres);
	console.log("trendingMovies: ", trendingMovies);
	console.log("arrSortByGenres:", arrSortedByGenre);

	return (
		<section className="filter-bar-wrapper">
			<div
				id="burger-container"
				className={isActive ? "open" : null}
				onClick={toggle}
			>
				<div id="burger">
					<span> &nbsp;</span>
					<span> &nbsp;</span>
					<span> &nbsp;</span>
					<span> &nbsp;</span>
				</div>
				{/* <div className={isActive ? "show" : "hide"} onClick={toggle}> */}
				<div
					className={`genres-grid-container-${
						isActive ? "showMenu" : "hideMenu"
					}`}
				>
					{genres?.map((genre, index) => {
						return (
							<div key={index} className="genere-container">
								{/* <Link to="filtered"> */}
								<button
									onClick={genreSearch}
									className={`buttons ${genre.name.replace(
										" ",
										""
									)}`}
									value={genre.id}
								>
									{genre.name}
								</button>
								{/* </Link> */}
							</div>
						);
					})}
				</div>
			</div>
			<FilterResultPage
				filteredgenres={genreArray}
				movieList={[...trendingMovies]}
			/>
		</section>
	);
};

export default FilterBar;
