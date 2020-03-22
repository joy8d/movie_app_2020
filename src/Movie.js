import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ id, title, year, summary, poster, trailer, genres}) {
    return (
      <div className = "movie">
          <img src={poster} alt={title} title={title}></img>
        <div className = "movie__data">
          <h3 className = "movie__title"> {title} </h3>
          <h5 className = "movie__year">  {year}  </h5>
          <ul className = "movie__genres">
            {genres.map(( genres, index ) => (
              <li key={index} className="genres_genre">{genres}</li>
            ))}
          </ul>
          <p className = "movie__summary"> {summary} </p>
        </div>
      
      </div>
    );
}

/*  🙆‍♀️ Proper Type Check 🙆‍♀️ */
// Check info ➡️ https://reactjs.org/docs/typechecking-with-proptypes.html
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,    // Movie poster:        medium_cover_image
    trailer: PropTypes.string,              // Youtube trailer:     yt_trailer_code
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default Movie;