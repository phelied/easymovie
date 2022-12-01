import React, { useState } from 'react';
import Home from './components/home';
import New from './components/newproject';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import logo from './images/easymovie-logo.jpeg';
import { Context } from "./components/context.js";


function App() {
  const [context, setContext] = useState();
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <div className='navbar__image-size'>
            <img src={logo} alt='logo easymovie' />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Create</Link>
            </li>
          </ul>
        </nav>
        <div className='app__wrapper'>
          <Context.Provider value={[context, setContext]}>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/new' element={< New />}></Route>
            </Routes>
          </Context.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;