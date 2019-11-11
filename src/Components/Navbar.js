import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='Navbar-container'>
            <div className='container'>
                <div className='logo'>
                    <img src='' alt='Logo'/>
                </div>
                <div className='search'>
                    <input type='text' />
                </div>
                <nav>
                    <ul>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;