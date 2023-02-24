import './App.css'
// import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
// import SearchBar from './components/SearchBar/SearchBar'
// import characters, { Rick } from './data.js'

import { useState } from "react";
//? importamos los elementos Routes y Route
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav' //? importamos "Nav"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
//----------------------------------------------------------------

function App () {

  //funcion hace la peticion y la informacion de los personajes
  //estado
  const [characters, setCharacters] = useState([]);

  const onSearch = (characters) => {

    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = id => {
    //[ 4,  5, 7]
    setCharacters(characters.filter((char) => char.id !== id))
  }

  //----------------------------------------------------------------
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        
        <Route path='/home' element={<Cards characters={characters}  onClose={onClose}  />} />
        <Route path='/about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        
        
      </Routes>
      {/* <div id='titulo'>Rick and Morty</div> */}      
      
      
    </div>
  )
}

export default App
