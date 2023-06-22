import {useState} from 'react'
import MovieCard from './MovieCard'

function SearchMovie() {
// set state
const [query, setQuery] = useState("")
const [movies, setMovies] = useState([])
// update the value of the movie state

// to prevent default
const searchMovies = async(e) => {
    e.preventDefault();
    
    const queryName = "Avengers"
//setting api key
const url = `https://api.themoviedb.org/3/search/movie?api_key=27cfceb94b2a2f64551cbbe6dfefc6e2&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    //fetch api url
    const res = await fetch(url);
    const data = await res.json()
    //update movie state
    console.log(data.results)
    setMovies(data.results)
  } catch(err){
    //catch and console log any error
    console.error(err);
  }
}

  return (
    <div>
        <form>
            <label htmlFor="query">Search Movie</label>
            <input type='text' name="query" className='input' placeholder="Search Movie..." value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type='submit' onClick={searchMovies}>Search</button>
        </form>

        <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => {
            return(
              // <div className="card" key={movie.id}>
              //   <img className="card--image"
              //               src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}/>
              //   <div className="card-content">
              //   <h3>{movie.title}</h3>
              //   <p>Release Date: {movie.release_date}</p>
              //   <p>Rating: {movie.vote_average}</p>
              //   <p>{movie.overview}</p>
              // </div>
              // </div>
              <MovieCard movie={movie} key={movie.id}/>
            )
          })}
        </div>
       
    </div>
  )
}

export default SearchMovie