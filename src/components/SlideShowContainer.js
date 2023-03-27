import "./SlideShowContainer.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SlideShowContainer = (props) => {
  const [movieItemData, setMovieItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${props.id}?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMovieItemData(data));
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
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
          {/* <div className="carousel-item">
            <Link to={`/details/${props.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${props?.poster_path}`}
                alt={props.name}
              />
            </Link>
          </div> */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            />
          </div>
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item">
            <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
          </div>
          <label
            htmlFor="carousel-3"
            className="carousel-control prev control-1">
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="carousel-control next control-1">
            ›
          </label>
          <label
            htmlFor="carousel-1"
            className="carousel-control prev control-2">
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="carousel-control next control-2">
            ›
          </label>
          <label
            htmlFor="carousel-2"
            className="carousel-control prev control-3">
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="carousel-control next control-3">
            ›
          </label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default SlideShowContainer;
