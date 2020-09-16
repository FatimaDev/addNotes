import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const showNavbar = () => {
      let template = null;
      template = <div className="header">
               <div className="logo">
                      <h3>Notes App</h3>
               </div>
               <nav>
                   <Link to="/"> Home</Link>
                   <Link to="/add"> Add Notes</Link>
               </nav>
      </div>;
      return template;
  }


    return(
       <div>
           {showNavbar()}
       </div>
    )
}
export default Navbar;