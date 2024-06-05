import React from 'react'
import './style.css'
// import ReactDOM from 'react-dom/client'
const Nav = () => {
    return(
        <nav>
            <div className="logo"></div>
            <div className="list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catagories</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;