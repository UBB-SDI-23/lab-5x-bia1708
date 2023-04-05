import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../constants";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Movie } from "../models/Movie";
import { Director } from "../models/Director";

export const MovieEdit = () => {
	const [directors, setDirectors] = useState<Director[]>([]);

	useEffect(() => {
		fetch(`${BACKEND_API_URL}/directors`)
			.then((response) => response.json())
			.then((data) => {
				setDirectors(data);
			});
	}, []);

	const { movieId } = useParams();
	const [movie, setMovie] = useState<Movie>();

	const getDirectorById = (id: number | undefined) => {
		return directors.find((director) => director.id === id) || directors[0];
	};

	useEffect(() => {
		const fetchMovie = async () => {
			const response = await fetch(`${BACKEND_API_URL}/movies/${movieId}`);
			const movie = await response.json();
			setMovie(movie);
		};
		fetchMovie();
	}, [movieId]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/movies/`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>Movie Details</h1>
					<p>Movie Title: {movie?.movie_text}</p>
					<p>Movie Release Date: {movie?.release_date}</p>
					<p>Movie Director: {getDirectorById(movie?.director_id)?.director_name}</p>
					<p>Movie Imdb Score: {movie?.imdb_score}</p>
                    <p>Movie Votes: {movie?.votes}</p>
				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/movies/${movieId}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/movies/${movieId}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};