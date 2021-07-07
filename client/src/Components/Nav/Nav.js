import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


const Nav = () => {
    return (
        <div>
            <nav className="navbar_container">
                <Link to="/"> <h2>Google Books</h2></Link>
                <ul className="navbar-right">
                    <Link to="/search"><li>Search</li></Link>
                    <Link to="/saved"><li>Saved</li></Link>
                </ul>
            </nav>
        </div>
    );
}
export default Nav;