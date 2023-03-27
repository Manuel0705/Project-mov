import "./FilterPage.css";
const FilterPage = () => {
  const [loading, setLoading] = useState(true);
  const [btnValue, setBtnValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleInput = (e) => {
    setBtnValue(e.target.value);
  };

  useEffect(() => {
    if (btnValue.length !== 0) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/type/${btnValue}`)
        .then((response) => response.json())
        .then((types) => {
          setFilteredPokemons(types.pokemon);
          setLoading(false);
        });
    }
  }, [btnValue]);

  const [filter, setFilter] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c9819d6f1ebaa2ac8cd26baddb2dd923&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilter(data.results);
      });
  }, []);

  return <>FilterPage</>;
};

export default FilterPage;
