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
        this.setState( prevState => {
            const movies = prevState.movies.filter(m => m._id !== movie._id);
            return {
                movies
            }
        });
    }

    handleLike(movie) {
        this.setState( prevState => {
            const movies = prevState.movies; //copy
            const index = movies.indexOf(movie);
            movies[index].liked = !movies[index].liked;
            return { movies };
        });
    }

    handlePageChange() {
        console.log('on page change ');
    }

    render() {

        const { pageSize, currentPage, movies } = this.state;

        if (movies.length === 0) return <p className="text-warning">There are no movies in the db</p>;

        const paginatedMovies = paginate(movies, currentPage, pageSize);
        //console.log(paginatedMovies);

        return (
            <React.Fragment>
            <p> There are {movies.length} movies in the DB.</p>
            <div>
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

                     { paginatedMovies.map( movie => (
                        <tr key={movie._id}>
                            <td>{ movie.title }</td>
                            <td>{ movie.genre.name }</td>
                            <td>{ movie.numberInStock }</td>
                            <td>{ movie.dailyRentalRate } </td>
                            <td>
                                <Like liked={ movie.liked }
                                      onClick={ () => this.handleLike(movie) } />
                            </td>
                            <td>
                                <button onClick={ () => this.handleDelete(movie) }
                                        className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                     ))}
                    </tbody>
                </table>
            </div>
            <Pagination itemsCount={ movies.length }
                        pageSize={ pageSize }
                        currentPage={ currentPage }
                        onPageChange={ this.handlePageChange }
            />
            </React.Fragment>
        );
    }

}

export default Movies;
