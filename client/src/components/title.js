import React from "react"
// props{
//     title="Ice Cream Flavors",
//     name:"phil"
// }
function Title(props){
    return (
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{props.title}</h1>

  </div>
</div>

    )
}

export default Title