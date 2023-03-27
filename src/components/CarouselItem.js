import { Link } from "react-router-dom";
import "./CarouselItem.css";

const CarouselItem = (props) => {
	console.log("carouselItemProps.index: ", props.index);
	return (
		<>
			<div className="carousel-item">
				<Link to={`/details/${props.id}`}>
					<img
						src={`https://image.tmdb.org/t/p/original${props?.poster_path}`}
						alt={props.name}
					/>
				</Link>
			</div>
			<input
				className="carousel-open"
				type="radio"
				id={`carousel-${props.index + 1}`}
				name="carousel"
				aria-hidden="true"
				hidden
			/>
			{/* <input
        className="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden
      /> */}
		</>
	);
};

export default CarouselItem;
