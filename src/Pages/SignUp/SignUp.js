import React, { Component } from 'react'
import './SignUp.css';
// import bgLight from '../../img/lights.jpg'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='Signup-container'>
                <div className='xms-container Signup-content'>
                    {/* <div className='ligths-img'>
                        <img src={bgLight} alt='bgLight'/> 
                    </div>    */}
                    <h1> Welcome</h1>
                    <p> To our expectacular cinema where you can have a unique e</p>
                    <form>
                        {/* <label>First Name</label> */}
                        <input type='text'/>
                        {/* <label>Last Name</label> */}
                        <input type='text'/>
                        {/* <label>Email</label> */}
                        <input type='password'/>
                        {/* <label>Password</label> */}
                        <input type='password'/>
                    </form>

                    
                </div>                
            </div>
        );
    }
}

export default Signup;