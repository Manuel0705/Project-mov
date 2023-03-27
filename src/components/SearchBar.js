import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className="search-bar-container">
			<input type="text" placeholder="Search..."></input>
			<div className="search"></div>
		</div>
	);
};

export default SearchBar;
