import { Link } from "react-router-dom";
import "./GetStartedBtn.css";

const GetStartedBtn = () => {
	return (
		<Link to="/home">
			<div className="get-started-btn">
				<button>
					<span>Get Started</span>
				</button>
			</div>
		</Link>
	);
};

export default GetStartedBtn;
