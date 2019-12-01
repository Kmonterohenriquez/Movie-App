import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sal from '../../../node_modules/sal.js/dist/sal';
import '../../../node_modules/sal.js/dist/sal.css';
import Fade from 'react-reveal/Fade';
import './Navbar.css';
import logo from '../../img/logo.png';

class Navbar extends Component {
	render() {
		sal();
		return (
			<div className='Navbar-container'>
				<div className='lg-container inside-header'>
					<div className='logo'>
						<Link to='/'>
							<img src={logo} alt='Logo' />
						</Link>
					</div>
					<Fade bottom delay={1000} >
					<div className='search'>
						<input type='text' placeholder='Search' />
						<i class='fas fa-search'></i>
					</div>
					</Fade>
					<nav>
						<ul>
							<li>
								<Link to='/'>
									<i class='fas fa-home'></i>
								</Link>
							</li>
							<li>
								<Link to='/login'>
									<i class='fas fa-user-circle'></i>
								</Link>
							</li>
							<li>
								<Link to='/search'>
									<i class='fas fa-search'></i>
								</Link>
							</li>
						</ul>
					</nav>
					<i className="fas fa-bars menu-icon"></i>
					
				</div>
			</div>
		);
	}
}

export default Navbar;
