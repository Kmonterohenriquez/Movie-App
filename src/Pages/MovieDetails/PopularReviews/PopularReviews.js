import React, { Component } from 'react'
import './PopularReviews.css'
class PopularReviews extends Component {
    state = {  }
    render() {
        // console.log("test: ", this.props.reviews)
        return (
            <div className='Review-container'>

                <h1>Popular Reviews</h1>
                {this.props.reviews.length !== 0?
                    <div>
                        {this.props.reviews.map(review=>(
                            <div className='Review'>
                                <div className='Review-user-info'>
                                    <i class="User-icon fas fa-user-circle"></i>
                                    <p className='Review-author'>{review.author}</p>
                                </div>
                                <p className='Review-content' >{review.content}</p>
                                <a className='Review-full-review'>See full review <i class="fas fa-angle-right"></i></a>
                            </div>
                    ))}
                    </div>:
                    <div className='Review'>
                        <p className='Review-content'>There is no review.</p>
                    </div>
                }
            </div>
        );
    }
}

export default PopularReviews;