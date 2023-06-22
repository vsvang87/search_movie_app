import React from 'react'

function MovieCard({movie}) {
    
  return (
    <div className="card">
                <img className="card-image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}/>
                <div className="card-content">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>{movie.overview}</p>
              </div>
              </div>
  )
}

export default MovieCard