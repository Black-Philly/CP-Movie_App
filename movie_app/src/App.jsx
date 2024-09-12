import React, { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filtered from "./components/Filtered";
import MovieList from "./components/MovieList";
import abegGetOut from "./assets/abegGetOut.jpeg";
import family_affairs from "./assets/family_affairs.jpeg";
import hospital from "./assets/hospital.jpeg"
import mumulove from "./assets/mumulove.jpeg"

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Mumu Love",
      description: "The intense love between two young ignorant fellows",
      posterURL: mumulove,
      rating: 5,
    },
    {
      title: "Abeg, Get Out",
      description:
        "The fight for supremacy in the dark kingdoms of middle earth",
      posterURL: abegGetOut,
      rating: 3,
    },
    {
      title: "Family Affairs",
      description:
        "When the struggle for the family business threaten to tear the famiily apart, only the youngest can unite them back.",
      posterURL: family_affairs,
      rating: 4,
    },
    {
      title: "Hospital",
      description:
        "While admitted in a health facility, a serial killer indulge in his hobby of murdering innocent people. Who can stop him?",
      posterURL: hospital,
      rating: 1,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filter) => {
    const { title, rating } = filter;
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= (rating || 0)
    );
    setFilteredMovies(filtered)
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="app container mx-auto p-4 ">
      <h1 className="text-4xl font-bold text-center mb-6">Favourite Movies</h1>
      <Filtered onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
