import React from "react";
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";

import "./Home.css";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount() {}
  // componentDidUpdate() {}
  // componentWillUnmount() {}
  // render() {}

  state = {
    isLoaded: false,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating",
    );
    //console.log(movieList);
    //this.setState({ movies: movies });
    this.setState({ movies, isLoaded: true });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoaded, movies } = this.state;
    return (
      <section className="container">
        {isLoaded ? (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        ) : (
          <div className="loader">
            <span className="loader__text">Loading ...</span>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
