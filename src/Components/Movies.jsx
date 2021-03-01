import React, { Component } from "react";
import { getMovies } from "../service/fakeMovieService";
import Pagination from "./Pagination";
import { getGenres } from "../service/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import ListGroup from "../Components/ListGroup";
import MoviesTable from "./Moviestable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColumn: { path: "title", order: "asc" },
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    console.log("Called", movie);
    const movies = this.state.movies.filter((movi) => movi._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    //console.log("Liked Clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleSort = (path) => {
    // console.log(path);

    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      console.log("if check order");
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      //if the path is different then, below code
    } else {
      console.log("else check order");
      sortColumn.path = path;
      sortColumn.order = "desc";
    }
    this.setState({ sortColumn });
    console.log(sortColumn);
  };

  render() {
    const count = this.state.movies.length;

    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allmovies,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in Database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : allmovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <p> Showing {filtered.length} movies in the DataBase</p>
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col-2">
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            genres={this.handleGenreSelect}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
