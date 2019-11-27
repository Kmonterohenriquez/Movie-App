import React, { Component } from 'react'
import './Search.css'
import axios from 'axios'

import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Search/Header/Header'

class Search extends Component {
    state={
        movies:[]
    }
    componentDidMount(){
        axios.get('')
        .then( res =>{
            let movies = res.data;
            this.setState({ movies})
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className='Search'>
                <Navbar/>
                <Header/>
            </div>
        );
    }
}

export default Search;