import { Director } from "./Director";

export interface Movie {
    id?: number;
    movie_text: string;
    release_date: number;
    director: Director;
    imdb_score: number;
    votes: number;
}