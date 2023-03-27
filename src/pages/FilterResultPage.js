// import SearchBar2 from "../components/SearchBar2";
import MovieItem from "../components/MovieItem";

import "./FilterResultPage.css";
const FilterResultPage = (props) => {
	console.log("propsResultPage: ", props);
	// console.log("propsMovies: ", props.movieList);
	return (
		<>
			{/* <SearchBar2 /> */}
			<div>
				{props.filteredgenres.map((ele, index) => {
					return <MovieItem key={index} id={ele.id} />;
				})}
			</div>
		</>
	);
};

export default FilterResultPage;
