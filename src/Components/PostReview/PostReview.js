import React from 'react';
import './PostReview.css';
import profileImg from '../../img/profile-placeholder.jpg';

const PostReview = () => {
	return (
		<div className='PostReview '>
			<h1 className='PostReview-title'>My Reviews</h1>
			<div className='PostReview-content'>
				<img src={profileImg} alt='#' />
				<input name='review' type='text' placeholder='Write a comment...' />
				<button>Post</button>
			</div>
		</div>
	);
};

export default PostReview;
