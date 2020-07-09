import React, { Component } from "react"
import Flavor from "./flavor"
import api from "../utils/api"
class Specials extends Component {
  state={
    flavors:[]
  }
  
  componentDidMount(){
    api.getbestIceCream().then(flavors => {
      console.log(flavors.data)
      this.setState({
        flavors:flavors.data
      })
    }
    )}

  
    render (){
        return (
            <div class="container3"> 
              <label for="specials"> Specials </label>
           
              {this.state.flavors.map(flavor=>(
               <Flavor 
               name = {flavor.icecream_flavor}/>
              ))}
            </div>
        )
    }
}; 

export default Specials