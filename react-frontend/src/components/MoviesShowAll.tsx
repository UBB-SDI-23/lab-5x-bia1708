import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";

export const MoviesShowAll = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://16.170.169.198/movies/")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    if (movies.length == 0) {
        return <div>No Movies</div>;
    }

    return (
        <div className="App">
            <h1>Movies List</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Release Date</th>
                    <th>Director</th>
                    <th>Imdb Score</th>
                    <th>Votes</th>
                </tr>
                {movies.map((movie: Movie, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{movie.movie_text}</td>
                        <td>{movie.release_date}</td>
                        <td>{movie.director.director_name}</td>
                        <td>{movie.imdb_score}</td>
                        <td>{movie.votes}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
