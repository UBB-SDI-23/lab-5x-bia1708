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


function App() {
  const [count, setCount] = useState(0)

  return (
		<React.Fragment>
			<Router>
				<AppMenu />

				<Routes>
					{/* <Route path="/" element={<AppHome />} /> */}
					<Route path="/movies" element={<AllMovies />} />
					<Route path="/movies/:movieId/details" element={<MovieDetails />} />
					<Route path="/movies/:movieId/edit" element={<MovieDetails />} />
					<Route path="/movies/:movieId/delete" element={<MovieDelete />} />
					<Route path="/movies/add" element={<MovieAdd />} />
					<Route path="/movies/filter" element={<FilterMovies />} />

				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App
