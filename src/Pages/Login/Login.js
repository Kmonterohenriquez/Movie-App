import React, { Component } from 'react'
import './Login.css'
import cinema from  '../../img/cinema.png';
import lights from '../../img/lights.jpg'
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='Login-container'>
                <img className='ligths-img' src={lights} alt='lights'/>
                <Link to='/'><i className="arrow fas fa-chevron-left"></i></Link>
                <div className='Login-content xsm-container'>
                    <img className='cinema-img'src={cinema} alt='cinema'/>
                    <h1 id='Login-title'> Login</h1>
                    <form>
                     <div className='Username-input'>
                        <i class="fas fa-user"></i>
                        <input placeholder='Username'/>
                     </div>
                     <div className='Password-input'>
                        <i class="fas fa-lock"></i>
                        <input placeholder='Password'/>
                    </div>
                        <button>Sign In</button>
                        <p>Not a member? <Link to='/signup'>Register</Link></p>
                        <p><Link>Forgot Password?</Link></p>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;