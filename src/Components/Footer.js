import React from 'react';
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

function Footer(){
    return(
        <div className='Footer-container'>
            <div className='Footer-content container'>
                <img src={logo} alt='Website Logo'/>
                <nav>
                    <ul>
                        <li><span>Portfolio:</span> <a href='https://kevinmontero.netlify.com/'>kevinmontero.netlify.com</a></li>
                        <li><span>Phone:</span> <a href="tel:4076806814">(407) 680-6814</a></li>
                        <li><Link to=''></Link></li>
                        <li><Link to=''></Link></li>
                    </ul>
                </nav>
                <div className='social-media'>
                    <div class='social-media-circle'><i class="fab fa-facebook-f"></i></div>
                    <div class='social-media-circle'><i class="fab fa-instagram"></i></div>
                    <div class='social-media-circle'><i class="fas fa-code"></i></div>
                </div>
            </div>
            <div className='copyright'><p>© 2019 Copyright: <a href='https://kevinmontero.netlify.com/' >Kevin Montero</a></p></div>
        </div>
    )
}
export default Footer;
