import React from 'react';
const Navbar = ()=> {
    return (
        <div> 
<nav class="navbar navbar-expand-sm bg- navbar-dark">

<a class="navbar-brand"></a>

<ul>
  <li><button><a href="/">Home</a></button></li>
  <li><button><a href="/savedflavors">Saved Flavors</a></button></li>
  <li><button><a href="/specials">Specials</a></button></li>
  <li><button><a href="/login">Login</a></button></li>
  <li><button><a href="/signup">Sign Up</a></button></li>
</ul>
</nav>

        </div>
    )

} 

export default Navbar;