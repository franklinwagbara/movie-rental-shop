import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import paginate from "./../utilities/paginate";
import ListGroup from "./listGroup";
import "./css/movies.css";
import { genres } from "./../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    selected: { _id: 0, name: "All Genres" },
    orderBy: { column: "title", order: "asc" },
  };

  handleSort = (column) => {
    const { orderBy } = this.state;

    if (orderBy.column === column) {
      orderBy.order = orderBy.order === "asc" ? "desc" : "asc";
    } else {
      orderBy.column = column;
      orderBy.order = "asc";
    }

    this.setState({ orderBy });
  };

  handleSelect = (genre) => {
    const selected = { ...genre };
    this.setState({ selected, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);

    movie.liked = !movie.liked;
    movies[index] = { ...movie };

    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m !== movie);
    console.log(movies);
    this.setState({ movies });
  };

  displayTable(movies) {
    if (!movies || movies.length === 0)
      return (
        <div>
          <h5>There are no movies in our database</h5>
        </div>
      );

    return (
      <div className="movies-table">
        <h5>Showing {movies.length} movies in the database. </h5>
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => this.handleSort("title")}>Title</th>
              <th onClick={() => this.handleSort("genre.name")}>Genre</th>
              <th onClick={() => this.handleSort("numberInStock")}>Stock</th>
              <th onClick={() => this.handleSort("dailyRentalRate")}>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onLike={() => this.handleLike(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { movies, genres, pageSize, currentPage, selected, orderBy } =
      this.state;
    const filtered =
      selected._id !== 0
        ? movies.filter((movie) => movie.genre._id === selected._id)
        : movies;
    const sorted = _.orderBy(filtered, [orderBy.column], [orderBy.order]);
    let paged_movies = paginate(sorted, pageSize, currentPage);
    return (
      <div className="movies">
        <ListGroup
          items={genres}
          selected={selected ? selected : { _id: 1 }}
          onSelect={this.handleSelect}
        />
        <div className="table-pagination">
          {this.displayTable(paged_movies)}
          <Pagination
            total={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
