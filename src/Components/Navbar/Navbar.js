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
					<Fade left delay={1200}>
						<div className='logo'>
							<Link to='/'>
								<img src={logo} alt='Logo' />
							</Link>
						</div>
					</Fade>
					<Fade top delay={1200} >
						<div className='search'>
							<input type='text' placeholder='Search' />
							<i className='fas fa-search'></i>
						</div>
					</Fade>
					<nav>
						<Fade right delay={1200}>
							<ul>
								<li>
									<Link to='/'>
										<i className='fas fa-home'></i>
									</Link>
								</li>
								<li>
									<Link to='/login'>
										<i className='fas fa-user-circle'></i>
									</Link>
								</li>
								<li>
									<Link to='/search'>
										<i className='fas fa-search'></i>
									</Link>
								</li>
							</ul>
						</Fade>
					</nav>
					<i className="fas fa-bars menu-icon"></i>
					
				</div>
			</div>
		);
	}
}

export default Navbar;
