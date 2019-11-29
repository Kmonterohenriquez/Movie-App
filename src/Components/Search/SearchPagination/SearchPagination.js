import React from 'react';
import './SearchPagination.css';

class SearchPagination extends React.Component {
	clickHandle = button => {
		if (button === 'prev') {
			this.props.handlePagination('-');
		} else if (button === 'next') {
			this.props.handlePagination('+');
		}
	};
	render() {
		return (
			<div className='SearchPagination container'>
				<button onClick={() => this.clickHandle('prev')} className='prev-btn'>
					<i className='fas fa-caret-left'></i>Prev
				</button>
				<p className='currentPage'> {this.props.page}</p>
				<button onClick={() => this.clickHandle('next')} className='next-btn'>
					Next<i class='fas fa-caret-right'></i>
				</button>
			</div>
		);
	}
}

export default SearchPagination;
