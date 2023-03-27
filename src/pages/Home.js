import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarouselItem from "../components/CarouselItem";
import FilterBar from "../components/FilterBar";
import NavBar from "../components/NavBar";
import SearchBar2 from "../components/SearchBar2";
import "./Home.css";

const Home = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/week?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923"
		)
			.then((res) => res.json())
			.then((response) => {
				setData((elt) => {
					return [...elt, ...response.results];
				});
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	// console.log("HOME-Movie-Week: ", data);

	return (
		<div className="home-page">
			<div>
				<>
					<h1 className="mov-title">.MOV</h1>
					<article className="trending-header">
						<h2>Trending Movies </h2>
						<Link to="/overview">
							<p>See all</p>
						</Link>
					</article>
					<div className="carousel">
						<div className="carousel-inner">
							<input
								className="carousel-open"
								type="radio"
								id="carousel-1"
								name="carousel"
								aria-hidden="true"
								hidden
								defaultChecked="checked"
							/>
							{/* {isLoading === false && renderCarrousell()} */}
							{data.map((elt, index) => {
								if (index <= 2)
									console.log("Mapping:", elt, index);
								return (
									<CarouselItem
										key={index + elt}
										id={elt.id}
										name={elt.title}
										poster_path={elt.poster_path}
										rate={elt.vote_average}
										index={index}
									/>
								);
							})}
							{/* <div className="carousel-item">
                <img
                  src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                />
              </div> */}
							<label
								htmlFor="carousel-3"
								className="carousel-control prev control-1"
							>
								‹
							</label>
							<label
								htmlFor="carousel-2"
								className="carousel-control next control-1"
							>
								›
							</label>
							<label
								htmlFor="carousel-1"
								className="carousel-control prev control-2"
							>
								‹
							</label>
							<label
								htmlFor="carousel-3"
								className="carousel-control next control-2"
							>
								›
							</label>
							<label
								htmlFor="carousel-2"
								className="carousel-control prev control-3"
							>
								‹
							</label>
							<label
								htmlFor="carousel-1"
								className="carousel-control next control-3"
							>
								›
							</label>
							<ol className="carousel-indicators">
								<li>
									<label
										htmlFor="carousel-1"
										className="carousel-bullet"
									>
										•
									</label>
								</li>
								<li>
									<label
										htmlFor="carousel-2"
										className="carousel-bullet"
									>
										•
									</label>
								</li>
								<li>
									<label
										htmlFor="carousel-3"
										className="carousel-bullet"
									>
										•
									</label>
								</li>
							</ol>
						</div>
					</div>
				</>
{/*<SearchBar2 />
				<FilterBar />*/}
				{/* {data?.map((elt, index) => {
          return (
            <SlideShowContainer
              key={index + elt}
              id={elt.id}
              name={elt.title}
              poster_path={elt.poster_path}
              rate={elt.vote_average}
            />
          );
        })} */}
			</div>
			<NavBar />
		</div>
	);
};

export default Home;
