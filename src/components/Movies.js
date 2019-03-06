import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/Like';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { paginate } from '../utils/paginate';

class Movies extends Component {

  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  //imperative vs declarative
  handleDelete(movie) {
    this.setState(prevState => {
      const movies = prevState.movies.filter(m => m._id !== movie._id);
      return {
        movies
      }
    });
  }

  handleLike = (movie) => {
    this.setState(prevState => {
      const movies = prevState.movies;
      const index = movies.indexOf(movie);
      movies[index].liked = !movies[index].liked;
      return { movies };
    })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre
    });
  };

  render() {
    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;

    if (allMovies.length === 0) return <p>There are no movies in the database;</p>;

    const filtered = selectedGenre
      ? allMovies.filter(m => m.genre.name === selectedGenre.name)
      : allMovies;

    const paginatedMovies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <aside className="col-2">
          <ListGroup items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </aside>
        <section className="col">
          <p> Showing {filtered.length} movies in the DB</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>

              { paginatedMovies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate} </td>
                  <td>
                    <Like liked={movie.liked}
                      onLikeClicked={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          <Pagination itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </section>
      </div>
    );
  }
}

export default Movies;
