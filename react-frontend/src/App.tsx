import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppMenu } from './components/AppMenu'
import { MovieDetails } from './components/MovieDetails'
import { MovieAdd } from './components/MovieAdd'
import { AllMovies } from './components/AllMovies'
import { FilterMovies } from './components/FilterMovies'
import { MovieDelete } from './components/MovieDelete'
import { MovieEdit } from './components/MovieEdit'
import { SortMovies } from './components/MoviesSort'


function App() {
  const [count, setCount] = useState(0)

  return (
		<React.Fragment>
			<Router>
				<AppMenu />

				<Routes>
					{/* <Route path="/" element={<AppHome />} /> */}
					<Route path="/movies/" element={<AllMovies />} />
					<Route path="/movies/:movieId/details" element={<MovieDetails />} />
					<Route path="/movies/:movieId/edit" element={<MovieEdit />} />
					<Route path="/movies/:movieId/delete" element={<MovieDelete />} />
					<Route path="/movies/add" element={<MovieAdd />} />
					<Route path="/movies/filter" element={<FilterMovies />} />
					<Route path="/movies/sort" element={<SortMovies />} />

				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App
