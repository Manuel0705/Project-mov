// import { useNavigate } from "react-router-dom";
import "./SearchBar2.css";
// import NavBar from "./NavBar";

const SearchBar2 = (props) => {
	const input = document.getElementById("search-input");
	const searchBtn = document.getElementById("search-btn");
	// const navigate = useNavigate();
	let arrUpdated = [];

	console.log("props.data:", props.data);
	// console.log("props.data2:", props.data2);
	console.log("props.onUpdate2:", props.onUpdate2);

	const expand = () => {
		searchBtn.classList.toggle("close");
		input.classList.toggle("square");
		updateData(arrUpdated);
		input.focus()
	};

	function suchAnfrage(event) {
		event.preventDefault();
		const userInput = document.getElementById("search-input");
		props.data.map((elt) => {
			if (
				userInput.value.toLowerCase() === elt.title.toLowerCase() ||
				elt.title.toLowerCase().includes(userInput.value.toLowerCase())
			) {
				arrUpdated.push(elt);
				updateData(arrUpdated);
				// return console.log("suchAnfrage:", elt);
			}
		});
	}

	const updateData = (updatedData) => {
		// if (props.data2.length === 0) {
		props.onUpdate2(updatedData);
		// }
	};

	// updateData(arrUpdated);

	// function suchAnfrage(event) {
	// 	event.preventDefault();
	// 	const userInput = document.getElementById("search-input");
	// 	props.data.map((elt) => {
	// 		if (
	// 			userInput.value.toLowerCase() === elt.title.toLowerCase() ||
	// 			elt.title.toLowerCase().includes(userInput.value.toLowerCase())
	// 		) {
	// 			navigate(`/details/${elt.id}`);

	// return console.log("suchAnfrage:", elt);
	// 		}
	// 	});
	// }

	return (
		<section className="serach-bar-container">
			<form onSubmit={suchAnfrage} id="content">
				<input
					type="text"
					name="input"
					className="input"
					id="search-input"
				/>

				<button
					type="reset"
					className="search"
					id="search-btn"
					onClick={expand}
				></button>
			</form>
		</section>
	);
};
export default SearchBar2;
