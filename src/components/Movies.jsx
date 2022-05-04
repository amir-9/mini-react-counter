import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    let moviesCount = this.state.movies.length;
    if (moviesCount === 0) return <p>there is no movies in database.</p>;
    return (
      <React.Fragment>
        <p>
          there {moviesCount === 1 ? "is" : "are"} {moviesCount}{" "}
          {moviesCount === 1 ? "movie" : "movies"} in database.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key="{movie._id}">
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock} </td>
                  <td>{movie.dailyRentalRate} </td>
                  <td>
                    <button
                      id={movie._id}
                      onClick={() => {
                        this.deleteMovieHandler(movie);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  deleteMovieHandler(movie) {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  }
}

export default Movies;
