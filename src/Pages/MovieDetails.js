import React, { Component } from 'react';
import axios from 'axios';

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
              console.log(res.data);
            const movie = res.data;
            this.setState({ movie });
          })
      }
    render() {
        const {title, backdrop_path, overview, poster_path, tagline, vote_average}= this.state.movie;
        // console.log(this.props)
        
        return (
            <div>
                <img src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={`${backdrop_path} backdrop`}/>
                <h1>{ title }</h1>
                <p>{ overview }</p>
                <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={`${title} poster`}/>
                <h2>{ tagline }</h2>
                <p>{ vote_average }</p>
            </div>
        );
    }
}

export default MovieDetails;