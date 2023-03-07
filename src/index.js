// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store'

// ReactDOM.render(

//   <Provider store={store}>
//     <BrowserRouter>    
//       <App />    
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react';
import { createRoot } from 'react-dom/client'; // Importar createRoot en React 18 o superior
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

// Utilizar createRoot en lugar de ReactDOM.render en React 18 o superior
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>    
      <App />    
    </BrowserRouter>
  </Provider>
);