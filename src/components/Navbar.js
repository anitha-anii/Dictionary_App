import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="navbar">
        <h2>Dictionary App</h2>
        <div>
         <Link to={'/'}>Home</Link>
         <Link to={'/history'}>History</Link>
         </div>
        </div>
    )
}
export default Navbar; 