import React from 'react'

function SearchInput({query}) {
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
    <div className="movie-search">
    <h2>Movie Search</h2>
      <form className='form'>
              
              <input type='text' name="query" className='input' placeholder="Search Movie..." value={query} onChange={(e) => setQuery(e.target.value)}/>
              <button type='submit' onClick={searchMovies}>Search</button>
          </form>
   </div>
  )
}

export default SearchInput