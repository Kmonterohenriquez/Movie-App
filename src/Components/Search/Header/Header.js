import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    state = {  }
    render() {
        return (
            <div className='Header'>
                <h1>Discover</h1>
                <hr/>
                <form>
                    <div className='search-filter'>
                    <select placeholder>
                        <option value=''>Popularity Ascending</option>
                        <option value=''>Popularity descending</option>
                        <option value=''>Release Date Ascending</option>
                        <option value=''>Release Date Descending</option>
                        <option value=''>Revenue Ascending</option>
                        <option value=''>Revenue Descending</option>
                        <option value=''>Vote Average Ascending</option>
                        <option value=''>Vote Average Descending</option>
                    </select>
                    <input type='numeric' placeholder='Rate' min='0' max='5'/>
                    <input type='text' placeholder='People involved'/>

                    <select placeholder='Genres'>
                        <option value=''>Drama</option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                    </select>
                    <input type='text' placeholder='Keywords'/>
                    <input type='numeric' placeholder='Rate' min='1700'/>
                    </div>
                    <button> Search </button>
                </form>
            </div>
        );
    }
}

export default Header;