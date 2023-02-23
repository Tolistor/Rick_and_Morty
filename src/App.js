import './App.css'
// import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
// import SearchBar from './components/SearchBar/SearchBar'
// import characters, { Rick } from './data.js'
import Nav from './components/Nav/Nav' //? importamos "Nav"
import { useState } from "react";

function App () {

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
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div id='titulo'>Rick and Morty</div>

      
        <Nav onSearch={onSearch}/>
      
      
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      {/* <hr /> */}
      <div>
        <Cards
          characters={characters}
        />
      </div>
      {/* <hr /> */}
      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
      
    </div>
  )
}

export default App
