import React from "react";

function Flavor(props){
    return (
        <div class="container4">
         <div class="row">
             <div class="col s12 m7">
                 <div class="card">
                    <div class="card-image">
                         <span class="card-title">{props.name}</span>
                     </div>
                    <div class="card-content">
                     <p>This is everyones favorite.</p>
                    </div>
                 </div>
            </div>
        </div>
       </div>
    )
}
export default Flavor;