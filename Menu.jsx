import React from 'react';

import { BrowserRouter as Router , Link , Route , Switch } from 'react-router-dom';
import './layout.css'
import Landing from './Landing';
import About from './About'
import Profile from './Profile';
import Users from './Users';
const Menu = () => {
    return(
        
        <Router>

         <div className="box-area">
            <header>
                 <div className = "wrapper">
                     <div className = "logo">
                         <h1>Lovers</h1>
                     </div>
             <nav className = "navigator">
                     <ul>
                         <li>
                             <Link to ="/Landing">Home</Link>
                         </li>
                         <li>
                             <Link to ="/Profile">Profile</Link>
                         </li>
                         <li>
                             <Link to ="/About">About</Link>
                         </li>
                         <li>
                             <Link to ="/Users">Users</Link>
                         </li>
                     </ul>
                 </nav>
                 </div>
            </header>
       </div>
                 <Switch>
                     <Route path = "/Profile" >
                     <Profile/>
                     </Route>
                     <Route path = "/About">
                         <About/>
                     </Route>
                     <Route path = "/Users">
                         <Users/>
                     </Route>
                     <Route path = "/Landing">
                         <Landing/>
                     </Route>
                 </Switch> 
     </Router> )
}
export default Menu;