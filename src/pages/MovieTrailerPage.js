import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackToOverviewBtn from "../components/BackToOverviewBtn";
import NavBar from "../components/NavBar";
import "./MovieTrailerPage.css";

const MovieTrailerPage = () => {
	const [movieTrailer, setMovieTrailer] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	let { id } = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovieTrailer(data.results);
				setIsLoading(false);
			});
	}, [id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="movie-trailer__page">
			<Link to="/overview">
				<BackToOverviewBtn />
			</Link>
			{movieTrailer.map((elt, index) => {
				if (elt?.type === "Trailer") {
					return (
						<iframe
							key={index + index + elt}
							width="550"
							height="325"
							src={`https://www.youtube.com/embed/${elt?.key}`}
							title="Official Trailer"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					);
				}
			})}
			<NavBar />
		</div>
	);
};

export default MovieTrailerPage;
