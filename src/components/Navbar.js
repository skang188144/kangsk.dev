import './Navbar.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='Navbar'>
                    <div className='NavbarContainer'>
                        <Link to='/' className='navbar-logo'>
                            <img src='.../public/logo192.png'/>
                        </Link>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;