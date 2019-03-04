import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesService';



class Movies extends Component {

    state = {
        movies: getMovies(),
        isLiked: false
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

    handleLike(index) {
        this.setState({
            isLiked: !this.state.isLiked
        });

        console.log(index);
    }

    render() {
        const { length : count } = this.state.movies;

        if (count === 0) {
            return <p>There are no movies in the database;</p>;
        }

        return (
        <React.Fragment>
            <p> Showing { count } movies in the DB</p>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate} </td>

                                <td>
                                    <i onClick={() => this.handleLike(movie)}
                                        className={(this.state.isLiked) ? ' fa fa-heart' : 'fa fa-heart-o'}></i>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)}
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
