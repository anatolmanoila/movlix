import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesService';
import Like from './common/Like';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {

    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };


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
        this.setState({ currentPage: page});
    }

    render() {
        const { length : count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        if (count === 0) return <p>There are no movies in the database;</p>;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
        <React.Fragment>
            <p> Showing { count } movies in the DB</p>
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

                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate} </td>
                                <td>
                                    <Like liked={movie.liked}
                                            onLikeClicked={ () => this.handleLike(movie) }
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
                <Pagination itemsCount={ count }
                            pageSize={ pageSize }
                            currentPage={currentPage }
                            onPageChange={ this.handlePageChange }
                />
        </React.Fragment>
        );
    }
}

export default Movies;
