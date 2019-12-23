import React, {Component} from 'react';

import { connect } from 'react-redux';
import getUpcomingMovies  from '../../../../redux/actions/getUpcomingMovies';
import SectionSwiper from '../../../SectionSwiper/SectionSwiper';



class UpcomingAPI extends Component {
    componentDidMount() {
		this.props.getUpcomingMovies()
	}
    render(){
        console.log('testing...',this.props.upcomingMovies)
        return(
            <div className='UpcomingAPI'>
				<SectionSwiper moviesData={this.props.upcomingMovies.upcomingMovies} titleSection='Upcoming'/>
			</div>
        )
    }
}
const mapStateToProps = state => ({
	upcomingMovies: state.getUpcomingMovies
});
export default connect(mapStateToProps, {getUpcomingMovies})(UpcomingAPI)