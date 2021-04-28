import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" compnent={Home} />
        <Route exact path="/movies" compnent={Movies} />
        <Route exact path="/directors" compnent={Directors} />
        <Route exact path="/actors" compnent={Actors} />
      </div>
    </Router>
  );
};

export default App
