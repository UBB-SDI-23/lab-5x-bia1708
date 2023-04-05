import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { MoviesShowAll } from './components/MoviesShowAll'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppMenu } from './components/AppMenu'
import { MovieDetails } from './components/MovieDetails'
import { MovieAdd } from './components/MovieAdd'
import { AllMovies } from './components/AllMovies'


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
					{/* <Route path="/courses/:courseId/delete" element={<CourseDelete />} /> */}
					<Route path="/movies/add" element={<MovieAdd />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App
