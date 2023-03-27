import "./IntroPage.css";
import moviedblogo from "../imgs/ThemovieDBlogo.svg";
import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";

const IntroPage = () => {
  const [fadeClass, setFadeClass] = useState("appear");
  useEffect(() => {
    // const logoSpan = document.querySelectorAll(".logo");
    const timeout = setInterval(() => {
      if (fadeClass === "appear") {
        setFadeClass("fade");
      } else {
        setFadeClass("appear");
      }
    }, 3000);
    return () => clearInterval(timeout);
  }, []);
  return (
    <div className="wrapper">
      <div className={`intro ${fadeClass}`}>
        <img
          src={moviedblogo}
          alt=""
          className={`movie-db-logo ${fadeClass}`}
        />
        <h1 className="logo-header waviy">
          <span className="welcome">WELCOME TO</span>

          <br />
          <span className={`logo ${fadeClass}`} style={{ "--i": 1 }}>
            .
          </span>
          <span className={`logo ${fadeClass}`} style={{ "--i": 2 }}>
            M
          </span>
          <span className={`logo ${fadeClass}`} style={{ "--i": 3 }}>
            O
          </span>
          <span className={`logo ${fadeClass}`} style={{ "--i": 4 }}>
            V
          </span>
        </h1>
        <div id="container">
          your
          <div id="flip">
            <div>
              <div>latest release</div>
            </div>
            <div>
              <div>top rated</div>
            </div>
            <div>
              <div>trending</div>
            </div>
          </div>
          Movies!
        </div>
      </div>
      <LandingPage />
    </div>
  );
};

export default IntroPage;
