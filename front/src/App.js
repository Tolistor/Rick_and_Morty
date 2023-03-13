import './App.css'
// import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
// import SearchBar from './components/SearchBar/SearchBar'
// import characters, { Rick } from './data.js'
import { useEffect  } from 'react';
import { useState } from "react";
//? importamos los elementos Routes y Route
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav' //? importamos "Nav"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';
//----------------------------------------------------------------

function App () {
  //funcion hace la peticion y la informacion de los personajes
  
  const location = useLocation();
  const navigate = useNavigate();
  
  //estados
  const [characters, setCharacters] = useState([]);

  //estado local access
  const [access, setAccess] = useState(false);

//cuenta simulacion de seguridad
  const username = "correo@gmail.com";
  const password = "prueba123" 

  //si los datos ingresados coniciden le daremos acceso y lo enviaremos a "/Home"
  const login = (userData)=> {
    if (userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home")
    }
  }

  //Esto no nos dejará navegar por la aplicación, al menos que ingresemos la información correcta!
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

//https://rickandmortyapi.com/api/character/
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
      
      {/* mostramos el formulario de primero antes de todo en "/" y la barra de busqieda */}
      {/* le pasamos la funcion "logion" a form como props */}
      {location.pathname === "/" ? <Form login={login}/> : <Nav  onSearch={onSearch}/> }


      <Routes>
        
        
        <Route path='/home' element={<Cards characters={characters}  onClose={onClose}  />} />
        <Route path='/about' element={<About />} />
                
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
        

        
      </Routes>
      {/* <div id='titulo'>Rick and Morty</div> */}      
      
      
    </div>
  )
}

export default App

