import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import TheMovieDB_logo from '../../img/TheMovieDB.png'

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
                <img className='API-logo' src={TheMovieDB_logo} alt='TheMovieDB_logo'/>
                <div className='social-media'>
                    <div class='social-media-circle'><a href='https://www.facebook.com/themoviedb/'><i class="fab fa-facebook-f"></i></a></div>
                    <div class='social-media-circle'><i class="fab fa-instagram"></i></div>
                    <div class='social-media-circle'><a href='https://www.themoviedb.org/'><i class="fas fa-code"></i></a></div>
                </div>
                <a href="https://www.freepik.com/free-photos-vectors/frame">Frame vector created by freepik - www.freepik.com</a>
            </div>
            <div className='copyright'><p>© 2019 Copyright: <a href='https://kevinmontero.netlify.com/' >Kevin Montero</a></p></div>
        </div>
    )
}
export default Footer;
