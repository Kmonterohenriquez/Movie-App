import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/MovieDetails.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { movie:[] };
    }
// Get Movie Infora
    componentDidMount() {
        const {match} = this.props;
        const key_API='dd36eee247f144ba66fce886e88c3fa7';
        axios.get(`
        https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${key_API}&language=en-US`)
          .then(res => {
            //   console.log(res.data.genres)

              console.log(res.data);
              console.log(res.data.genres)
            const movie = res.data;
            this.setState({ movie });
        })
      }
    render() {
        const {title, backdrop_path, overview, poster_path, vote_average, original_language, genres} =    this.state.movie;

        let pageContent =  genres ?     
        <div id='MovieDetails-container'>
            <div className='test'>
            <div className='Bg-pic'>
                <img src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={`${backdrop_path} backdrop`}/>
            </div>
            <div className='info-container'>
                <img className='Poster-pic' src={`http://image.tmdb.org/t/p/w154/${poster_path}`} alt={`${title} poster`}/>
                <div className='info'>
                    <div className='info-left'>
                        <h1>{ title }</h1>
                        <p id='rate'>{ vote_average }</p>
                        <p>Released | <span>{original_language}</span></p>
                        <div>{ genres[0].name} | {{title}?{title}:{title}}</div>
                    </div>
                    <div className='info-right'>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
            </div>
            <p id='overview'>{ overview }</p>
            </div> : <div>OtherStuff</div>
    return (
        pageContent
        

        )
    }
}

export default MovieDetails;