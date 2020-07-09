import React, { Component } from "react"
import Flavor from "./flavor"
import api from "../utils/api"
class Specials extends Component {
  state={
    flavors:[]
  }
  
//   componentDidMount(){
//     api.getbestIceCream().then(flavors => {
//       console.log(flavors.data)
//       this.setState({
//         flavors:flavors.data
//       })
//     }
//     )}

    render (){
        return (
            <div class="container5"> <br /> 
            <div class="container6"> <br />
            <h2 class="rainbow">I Scream For Ice Cream </h2>
            </div>
           
              {this.state.flavors.map(flavor=>(
               <Flavor 
               name = {flavor.icecream_flavor}/>
              ))}
            </div>
        )
    }
}; 

export default Specials