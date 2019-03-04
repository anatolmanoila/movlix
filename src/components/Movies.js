import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesService';
import Like from './common/Like';


class Movies extends Component {

    state = {
        movies: getMovies()
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

    render() {
        const { length } = this.state.movies;

        if (length === 0) return <p className="text-warning">There are no movies in the db</p>;

        return (
            <React.Fragment>
            <p> There are {length} movies in the DB.</p>
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

                     { this.state.movies.map( movie => (
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
            </React.Fragment>
        );
    }
}

export default Movies;
