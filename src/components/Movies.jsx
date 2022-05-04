import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <React.Fragment>
        {/* {this.getLog()} */}
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
                    <button className="btn btn-danger btn-sm">delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  getLog = () => {
    console.log(this.state.movies);
  };
}

export default Movies;
