import React, {Component}from 'react';

 import api from "../utils/api"

import "../assets/style.css";
class Saved extends Component {
state={
  favoriteIceCreams:[], 
  icecream_flavor: "",
  bestIceCream: []
}
handleSubmit = event => {
  event.preventDefault()
console.log(this.state.icecream_flavor)
const iceCreamData = {
  icecream_flavor:this.state.icecream_flavor,
  devoured:false
}

api.savedFavorites(iceCreamData).then(results => {
  console.log(results)
  window.location.reload()
})

}

handleChange = event => {
   const {name, value} = event.target

   this.setState({
     [name]:value
   })
   console.log(value)
}
handleUpdate = id => {
  alert("You have successfully choose your favorite flavor")
  api.updatebestIceCream(id).then(results => {
    window.location.reload()
  })
}
componentDidMount(){
api.getFlavors().then(flavors => {
  console.log(flavors.data)
  this.setState({
    favoriteIceCreams:flavors.data
  })
})
api.getbestIceCream().then(icecream => {
  this.setState({
    bestIceCream:icecream.data
  })
})
}
 render() {
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



<div class="container">

  <div >

    <h3>Add Your Favorite Flavors</h3> <br />
    {/* <br> */}
    <form class="create-form">

      <div class="form-group">
       
        <input placeholder="icecream Name" type="text" id="ice" value = {this.state.icecream_flavor} name="icecream_flavor"
        onChange = {this.handleChange}
        ></input>  &nbsp; &nbsp;
          <button class="btn" onClick = {this.handleSubmit} type="submit">Lets Add It To The List Of The Greats !</button>
      </div>
      
    </form>
  </div>
  {/* </div> */}
{/* <br> */}
  <div class="row">
    <div class="col-6">
      <h3>Your Favorite IceCream Flavors!</h3>
      <ul class="col-6">
       {this.state.favoriteIceCreams.length > 0 ?  this.state.favoriteIceCreams.map(icecream => {
         return (  
          <li className="row">
         
            {icecream.icecream_flavor}
         </li>
         
         )}): ""}


       
      </ul>

    </div>

    <div class="col-6">
      <h3>Best IceCream!</h3>
      <ul>

{this.state.bestIceCream.length > 0 ? this.state.bestIceCream.map((icecream,index) =>{
  return ( 
  <li className="row">
         
  {icecream.icecream_flavor}  &nbsp; &nbsp;
  <button   onClick = {() =>  this.handleUpdate(icecream.id)}   class="change-devoured col-2" data-id={icecream.id} style = {{backgroundColor:"#e7bd42"}}>Save</button> 
</li>
)
}) : ""}

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

 
}

export default Saved;
