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
    <div className='movie-container'>
     <div className="movie-search">
      <div className="wrapper">
        <div className="movie-search-content">
        <h1>Search <span className='red-text'>Movies</span></h1>
        <form>        
                <input type='text' name="query" className='input' placeholder="Search Movie..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button type='submit' onClick={searchMovies}><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
      </div>
      
     </div>
     
        <div className="movie-content">
        <div className="wrapper">
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => {
                  return(
                    <MovieCard movie={movie} key={movie.id}/>
                  )
                })}
              </div>
              </div>
          </div>
    </div>
  )
}

export default SearchMovie