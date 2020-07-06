import React, { Component } from "react"
class Signup extends Component {
    render (){
        return (
            <div class="container">
<form id="signup" name="signup" method="post" action="/signup">
    <label for="email">Email Address</label>
    <input class="text" name="email" type="email" />
    <label for="firstname">Firstname</label>
    <input name="firstname" type="text" />
    <label for="lastname">Lastname</label>
    <input name="lastname" type="text" />
    <label for="password">Password</label>
    <input name="password" type="password" />
    <input class="btn btn-warning" type="submit" value="Sign Up" />
</form>

</div>

        )
    }
}

export default Signup 