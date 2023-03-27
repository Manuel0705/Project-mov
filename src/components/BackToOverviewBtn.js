import "./BackToOverviewBtn.css";
// import { Link } from "react-router-dom";
const BackToOverviewBtn = () => {
	return (
		// <Link to="/overview">
		<button type="button" class="go-back-button">
			<span class="go-back-button-icon">
				<i class="fa fa-long-arrow-left"></i>
			</span>
			<span class="go-back-button-text">
				<span></span>
			</span>
		</button>
		// </Link>
	);
};

export default BackToOverviewBtn;
