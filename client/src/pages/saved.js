import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../components/Navbar";
function App() {
  return (
    <div>
    {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <a class="navbar-brand"></a>

    <ul>
      <li><button><a href="/">Home</a></button></li>
      <li><button><a href="/reviews">Reviews</a></button></li>
      <li><button><a href="/myreviews">My Reviews</a></button></li>
      <li><button><a href="/login">Login</a></button></li>
      <li><button><a href="/signup">Sign Up</a></button></li>
    </ul>
  </nav> */}
  <Navbar> </Navbar>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Ice Cream Flavors</h1>

  </div>
</div>



<div class="container">

  <div >

    <h3>Add Your Favorite Flavors</h3>
    {/* <br> */}
    <form class="create-form">

      <div class="form-group">
       
        <input placeholder="icecream Name" type="text" id="ice" name="name"></input>
          <button class="btn" type="submit">Lets Add It To The List Of The Greats !</button>
      </div>
      
    </form>
  </div>
  {/* </div> */}
{/* <br> */}
  <div class="row">
    <div class="col-6">
      <h3>Your Favorite IceCream Flavors!</h3>
      <ul class="col-6">
        {/* {{#each icecream}}
        {{#unless devoured}} */}
         <li class="row">
         {/* <h5 class="col-5"> {{icecream_flavor}}</h5> */}
    
        </li>
        {/* {{/unless}}
        {{/each}} */}
      </ul>

    </div>

    <div class="col-6">
      <h3>Best IceCream!</h3>
      <ul>
        {/* {{#each icecream}}
        {{#if devoured}} */}
        <li class="row">
         {/* <h5 class="col-5"> {{icecream_flavor}}</h5> */}
          {/* <button class="change-devoured col-2" data-id={{id}} style ="background-color: #e7bd42;">Save</button> */}
        </li>
        {/* {{/if}}
        {{/each}} */}
      </ul>
    </div>

  </div>

</div>
</div>
  );
}

export default App;
