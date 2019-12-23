import React, {Component} from 'react';

import { connect } from 'react-redux';
import getPopularMovies  from '../../../../redux/actions/getPopularMovies';
import SectionSwiper from '../../../SectionSwiper/SectionSwiper';



class PopularAPI extends Component {
    componentDidMount() {
		this.props.getPopularMovies()
	}
    render(){
        console.log('popular movies testing...',this.props.popularMovies)

        return(
            <div className='PopularAPI'>
				<SectionSwiper moviesData={this.props.popularMovies.popularMovies} titleSection='Popular'/>
			</div>
        )
    }
}
const mapStateToProps = state => ({
	popularMovies: state.getPopularMovies
});
export default connect(mapStateToProps, {getPopularMovies})(PopularAPI)