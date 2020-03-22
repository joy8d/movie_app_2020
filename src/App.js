/* 📁 Document Property */
// React Practice Mar 2020
// NomadCoder Youtube 강의 (니꼴라스 Tr) 

/* 🗂 Imported Libraries */
// how to install library?
// on termial, npm install ______
// then import
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

/*  🙆‍♀️ Proper Type Check 🙆‍♀️ */
// Check info ➡️ https://reactjs.org/docs/typechecking-with-proptypes.html

/* 🏃‍♂️ Run!  */
class App extends React.Component {
  
  state = { /* 앞으로 사용할 변수에 대해 state에서 먼저 정의하는 습관 */
    isLoading: true,
    movies: []
  };

  /* 🗄 Data  */
  getMovies = async () => {  // async: 비동기함수. 넌 기다려야해
    const { 
      data: { 
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // await: await에 걸려있는 함수 시행을 기다려야 해
    this.setState({ movies: movies, isLoading: false })
  };
  
  componentDidMount(){
    this.getMovies();
  }
  
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key      = {movie.id}
                  id       = {movie.id}
                  title    = {movie.title}
                  year     = {movie.year}
                  summary  = {movie.summary}
                  poster   = {movie.medium_cover_image}
                  trailer  = {movie.yt_trailer_code}
                  genres   = {movie.genres}
                />
              ))}
            </div>
            )}
      </section>
    );
  }
}

export default App;
