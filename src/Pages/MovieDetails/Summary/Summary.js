import React from 'react'
import './Summary.css'

const Summary=(props)=> (
    <div id='Overview-container'>
        <div className="circle">
            <i className="fas fa-exclamation"></i>
        </div>
        <h1>Summary</h1>
        <p>{props.overview}</p>
    </div>
);

export default Summary