import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  const light = document.querySelector("nav .tubelight");
  const handleClickNavBar = (e) => {
    light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
  };
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/home" onClick={handleClickNavBar}>
              <i className="lni lni-home"></i>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={handleClickNavBar}>
              <i className="lni lni-bookmark"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={handleClickNavBar}>
              <i className="lni lni-circle-plus"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={handleClickNavBar}>
              <i className="lni lni-user"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={handleClickNavBar}>
              <i className="lni lni-cart"></i>
            </a>
          </li>
        </ul>

        <div className="tubelight">
          <div className="light-ray"></div>
        </div>
      </nav>
    </footer>
  );
};

export default NavBar;
