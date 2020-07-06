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
//   <div>
//     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

//     <a className="navbar-brand"></a>

//     <ul>
//       <li><button><a href="/">Home</a></button></li>
//       <li><button><a href="/savedflavors">Saved Flavors</a></button></li>
//       <li><button><a href="/specials">Specials</a></button></li>
//       <li><button><a href="/login">Login</a></button></li>
//       <li><button><a href="/signup">Sign Up</a></button></li>
//     </ul>
//   </nav>

// <div className="jumbotron jumbotron-fluid">
//   <div className="container">
    
//     <h1 className="display-4">Ice Cream Flavors</h1>
    

//   </div>
// </div>



// <div className="container">

//   <div >

//     <h3>Add Your Favorite Flavors</h3>
//     {/* <br> */}
//     <form className="create-form">

//       <div className="form-group">
       
//         <input placeholder="icecream Name" type="text" id="ice" name="name"></input>
//           <button className="btn" type="submit">Lets Add It To The List Of The Greats !</button>
//       </div>
      
//     </form>
//   </div>
//   {/* </div> */}
// {/* <br> */}
//   <div className="row">
//     <div className="col-6">
//       <h3>Your Favorite IceCream Flavors!</h3>
//       <ul className="col-6">
//         {/* {{#each icecream}}
//         {{#unless devoured}} */}
//          <li className="row">
//          {/* <h5 className="col-5"> {{icecream_flavor}}</h5> */}
    
//         </li>
//         {/* {{/unless}}
//         {{/each}} */}
//       </ul>

//     </div>

//     <div className="col-6">
//       <h3>Best IceCream!</h3>
//       <ul>
//         {/* {{#each icecream}}
//         {{#if devoured}} */}
//         <li className="row">
//          {/* <h5 className="col-5"> {{icecream_flavor}}</h5> */}
//           {/* <button className="change-devoured col-2" data-id={{id}} style ="background-color: #e7bd42;">Save</button> */}
//         </li>
//         {/* {{/if}}
//         {{/each}} */}
//       </ul>
//     </div>

//   </div>

// </div>
// </div>
  );
}

export default App;
