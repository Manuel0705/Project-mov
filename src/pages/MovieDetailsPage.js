import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackToOverviewBtn from "../components/BackToOverviewBtn";
import WatchTrailerBtn from "../components/WatchTrailerBtn";
import "./MovieDetailsPage.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log("ID: ", id);
  // console.log("Details: ", movieDetails);
  // console.log("id", data[0]?.id);
  return (
    <article
      className="movie-details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.poster_path})`,
      }}>
      <Link to="/overview">
        <BackToOverviewBtn />
      </Link>

      <div className="details-div">
        <h2>{movieDetails?.title}</h2>
        <div className="details-data-wrapper">
          <div className="date-runtime">
            <p>
              {new Date(movieDetails?.release_date).toLocaleDateString(
                "us-EN",
                {
                  dateStyle: "medium",
                }
              )}
            </p>
            <p>
              <span>•</span>
              {`${(movieDetails?.runtime / 60).toFixed(0)}h ${
                movieDetails?.runtime % 60
              }m`}
            </p>
          </div>
          <p className="rating">⭐ {movieDetails?.vote_average.toFixed(1)}</p>
          <h3>Overview</h3>
          <p className="description">{movieDetails?.overview}</p>
          <div className="genres-div">
            <h4>Genres:</h4>
            {movieDetails?.genres?.map((elt, index) => {
              return <p key={index + elt}>{`${elt.name}  `}</p>;
            })}
          </div>
          <div className="languages-div">
            <h4>Languages:</h4>
            {movieDetails?.spoken_languages?.map((elt, index) => {
              return <p key={elt + index}>{`${elt.name}  `}</p>;
            })}
          </div>
        </div>
        <WatchTrailerBtn id={id} />
      </div>
      <NavBar />
    </article>
  );
};

export default MovieDetailsPage;
