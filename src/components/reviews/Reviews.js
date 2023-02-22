import React, { Component } from 'react'
import ReviewsTop from './ReviewsTop';

export class Reviews extends Component {
    reviews = this.props.reviews;
    render() {
        return (
            <section className='reviews'>
                {/* Reviews container */}
                <div className='reviews__cont cont'>
                    {/* Reviews */}
                    {this.reviews.map((el) => (
                        <div className='reviews__block' key={el.id} >
                            {/* Reviews top */}
                            <ReviewsTop elPhoto={el.photo} elName={el.name} elComp={el.positionCompany} />
                            {/* Reviews text */}
                            <p className='reviews__text'>{el.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Reviews