import React from 'react';


function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Google Books</a>
            </nav>
            <ul className="nav-navbar-left">
                <li className="nav-line">
                    <a classname="nav-link" href="/search">Search</a>
                </li>
                <li className="nav-line">
                    <a className="nav-link " href="/saved">Saved</a>
                </li>
            </ul>
        </div>
    );
}
export default Nav;