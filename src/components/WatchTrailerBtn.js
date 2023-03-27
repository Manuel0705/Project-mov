import { Link } from "react-router-dom";
import "./WatchTrailerBtn.css";

const WatchTrailerBtn = (props) => {
	return (
		<Link to={`/trailer/${props.id}`}>
			<div className="trailer-button">
				<button> ▶ Watch Trailer </button>
			</div>
		</Link>
	);
};

export default WatchTrailerBtn;
