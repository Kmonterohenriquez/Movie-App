import React, { Component } from 'react'

class PopularReviews extends Component {
    state = {  }
    render() {
        // console.log("test: ", this.props.reviews)
        return (
            <div>
                {this.props.reviews.map(review=>(
                    
                    <div className='Review-container'>
                        {/* <p>Reviews working</p> */}
                        {/* <p id='Review-author'>{review.author}</p>
                        <p id='Review-content'>{review.content}</p> */}
                    </div>
                ))}
            </div>
        );
    }
}

export default PopularReviews;