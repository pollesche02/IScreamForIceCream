import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Title from "./components/title"
import SavedFlavors from "./pages/saved"
import Specials from "./pages/specials"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
function App() {
  return (
    <Router>
        <Navbar />

<Title title = "Ice Cream Flavors"/> 
      <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/savedflavors">
          <SavedFlavors />
        </Route>
        <Route exact path = "/specials">
          <Specials />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/signup">
          <Signup />
        </Route>
    </Router>

  );
}

export default App;
