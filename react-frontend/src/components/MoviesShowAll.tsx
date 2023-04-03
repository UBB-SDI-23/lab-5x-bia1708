import { useState } from "react"
import { Movie } from "../models/Movie";

function App() {
    const [movies, setMovies] = useState([]);

    fetch("http://http://ec2-13-50-231-92.eu-north-1.compute.amazonaws.com/movies/")
        .then((res) => res.json())
        .then((data) => setMovies(data));

    return (
      <div className="App">
        <h1>Movies List</h1>
        <table>
            <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Director</th>
            <th>Imdb Score</th>
            <th>Votes</th>
            </tr>
            {movies.map((movie : Movie, index) => (
                <tr>
                    <td>(index)</td>
                    <td>(movie.movie_text)</td>
                    <td>(movie.release_date)</td>
                    <td>(movie.director.director_name)</td>
                    <td>(movie.imdb_score)</td>
                    <td>(movie.votes)</td>
                </tr>
            ))}
        </table>
      </div>
    )
  }

  export default App