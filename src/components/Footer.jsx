import React from 'react'
import {BiCameraMovie} from "react-icons/bi"
import {BiMoviePlay} from "react-icons/bi"
function Footer() {
  return (
    <div className='footer-container'>
        <div className="wrapper">
            <div className="footer-content">
                <div className="footer-inner-content">
                <BiCameraMovie className='icon'/>
                <h4>Search Your Favorite Movies</h4>
                <BiMoviePlay className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer