import { useState } from 'react'
import SearchMovie from './components/SearchMovie'
import Footer from './components/Footer'
import "./sass/style.scss"

function App() {
 
  return (
   <div className='app-container'>
   
    <SearchMovie/>
    <Footer/>
   </div>
  )
}

export default App
