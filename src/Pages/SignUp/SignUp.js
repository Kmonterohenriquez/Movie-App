import React, { Component } from 'react'
import './SignUp.css'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='Signup-container'>
                <div className='container Signup-content'>    
                    <form>
                        <label>Username</label>
                        <input type='text'/>
                        <label>Name</label>
                        <input type='text'/>
                        <label>Username</label>
                        <input type='text'/>
                        <label>Password</label>
                        <input type='password'/>
                        <label>Repeat Password</label>
                        <input type='password'/>
                    </form>
                </div>                
            </div>
        );
    }
}

export default Signup;