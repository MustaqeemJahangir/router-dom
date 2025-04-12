import React from "react";
import { Link } from "react-router-dom";
function Navbar() {

    return(
    <>
   <li><Link to="home">home</Link></li>
   <li><Link to="contact">contact</Link></li>
   <li><Link to="product">product</Link></li>

    </>
    )
    
}

export default Navbar