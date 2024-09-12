import React from 'react'

function MovieCard() {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 m-4 max-w-xs'>
        <img src='image' alt='Poster_Image'/>
        <h3>Title</h3>
        <p>Description</p>
        <span>Rating</span>
    </div>
  )
}

export default MovieCard