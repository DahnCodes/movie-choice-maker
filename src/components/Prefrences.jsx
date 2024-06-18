import { useState, useEffect } from "react";
import ProjectVid2 from "../assets/ProjectVid2.mp4";

const Prefrences = (apikey) => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (genre && year) {
      setLoading(true);
      fetch(` http://www.omdbapi.com/?s=${genre}&y=${year}&apikey=9a623030`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setSuggestions(data.Search);
            setLoading(false);
          } else {
            setSuggestions([]);
            setLoading(true);
          }
        })
        .catch((error) => alert("Error:", error));
    }
  }, [genre, year, apikey]);

  return (
    <>
      <div className="video-container2">
        <video
          src={ProjectVid2}
          autoPlay
          loop
          muted
          className="bg-video1"
        ></video>
      </div>
      <div className="content-container">
        <div className="genre">
          <label htmlFor="">
            <b>Pick a Genre</b>
          </label>
          <input
            type="text"
            placeholder="Enter genre"
            value={genre}
            className="genre-input"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="year">
          <label htmlFor="">
            <b>Pick a year</b>
          </label>
          <input
            type="text"
            placeholder="Enter year"
            className="year-input"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <ul className="movie-list">
          <div>
            <h2>Results:</h2>
          </div>

          {loading ? (
            <div className="loader">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          ) : (
            <>
              {suggestions.map((movie) => (
                <li key={movie.imdbID}>{movie.Title}</li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Prefrences;
