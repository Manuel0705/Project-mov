import { useState, useEffect, useContext } from "react";
import GameCard from "../components/GameCard";
import AppContext from "../components/AppContext";
import Header from "../components/Header";
import "./AllGames.css";
const AllGames = () => {
  const context = useContext(AppContext);
  const [platform, setPlatform] = useState("all");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("all");
  const [data, setData] = useState([]);
  let id;
  let result = [];
  let gameName = context.nameContext;
  let fetchUrl = `https://www.freetogame.com/api/games?&platform=${platform}${genre}&sort-by=${sort}`;
  if (gameName != "") {
    console.log(gameName);
    console.log(gameName != "");

    console.log(data);
    console.log(result);
    data.map((e) => {
      if (gameName == e.title) {
        console.log(e.id);
        id = e.id;
        fetchUrl = `https://www.freetogame.com/api/game?id=${id}`;
        result.push(data);
      }
    });
    context.setNameContext("");
  }
  const fetchData = () => {
    console.log(fetchUrl);
    fetch(`${fetchUrl}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(fetchData, [platform, sort, genre, gameName]);
  const readInputPlatform = (event) => {
    document.querySelector(".platform").textContent = event.target.id;
    setPlatform(event.target.id);
    fetchData();
  };
  const readInputSort = (event) => {
    document.querySelector(".sort").textContent = event.target.id;
    setSort(event.target.id);
    fetchData();
  };
  const readInputGenre = (event) => {
    document.querySelector(".genre").textContent = event.target.id;
    setGenre(`&category=${event.target.id}`);
    fetchData();
  };
  return (
    <div className="wrraper">
      <header>
        <iframe
          className="image"
          width="80%"
          height="534"
          src="https://www.youtube.com/embed/oJca6zoI50E?autoplay=0"
          title="Warzone 2.0 Launch Trailer | Call of Duty: Warzone 2.0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        {/* <div
          id="img"
          className="image"
          style={{
            backgroundImage: `url(./images/league.png)`,
          }}
        >
          <h2>All Games</h2>
        </div> */}
      </header>
      <main>
        <form className="filter">
          <div className="dropdown">
            <div className="dropbtn">
              <h2 className="platform">Platform</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="all"
                  value="1"
                />
                <label htmlFor="all">All Platforms</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="pc"
                  value="1"
                />
                <label htmlFor="windwos">Windwos (pc)</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputPlatform}
                  className="platform"
                  type="radio"
                  name="1"
                  id="browser"
                  value="1"
                />
                <label htmlFor="browser">Browser (Web)</label>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2 className="genre">Genre/Tag</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="mmorpg"
                  value="MMOPRG"
                />
                <label htmlFor="mmoprg">MMORPG</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="shooter"
                />
                <label htmlFor="schooter">Shooter</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="strategy"
                />
                <label htmlFor="strategy">Strategy</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputGenre}
                  type="radio"
                  name="1"
                  id="moba"
                />
                <label htmlFor="moba">Moba</label>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2 className="sort">Sort by</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="dropdown-content">
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="relevance"
                />
                <label htmlFor="all">Relevance</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="popularity"
                />
                <label>Popularity</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="release-date"
                />
                <label htmlFor="all">Release Date</label>
              </div>
              <div className="choice">
                <input
                  onChange={readInputSort}
                  type="radio"
                  name="all"
                  id="alphabetical"
                />
                <label htmlFor="all">Alphabetical</label>
              </div>
            </div>
          </div>
        </form>

        <div className="gridd">
          {data.map((elt, index) => (
            <GameCard
              key={index}
              id={elt.id}
              title={elt.title}
              platform={elt.platform}
              genre={elt.genre}
              thumbnail={elt.thumbnail}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllGames;
