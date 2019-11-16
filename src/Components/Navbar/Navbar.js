import React, { Component }from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../img/logo.png';


class Navbar extends Component{
    render() {
        return(
            <div className='Navbar-container'>
                <div className='container inside-header'>
                    <div className='logo'>
                        <Link to='/'><img src={logo} alt='Logo' /></Link>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Search' /><i class="fas fa-search"></i>
                    </div>
                    <nav> 
                        <ul>
                            <li><Link to='/'><i class="fas fa-home"></i></Link></li>
                            <li><Link to='/login'><i class="fas fa-user"></i></Link></li>
                            <li><Link to='/search'><i class="fas fa-search"></i></Link></li>
                        </ul>
                    </nav> 
                </div>
            </div>
        )
    }
}

export default Navbar;