import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
  return (
    <div className='movie-list grid grid-cols-1 sm:grid-cols-2 gap-4 md:rid-cols'>
        {movies.map((movie, index)=> (
            <MovieCard key={index} movie={movie}/>
        ))}
    </div>
  );
};

export default MovieList