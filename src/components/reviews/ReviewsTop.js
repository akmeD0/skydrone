import React, { Component } from 'react'

export class ReviewsTop extends Component {
    render() {
        return (
            <div className='reviews__top'>
                {/* Reviews photo */}
                <img src={this.props.elPhoto} alt="Avatar" className='reviews__avatar' />
                {/* Reviews information */}
                <div className='reviews__info'>
                    {/* Reviews name */}
                    <h5 className='reviews__name'>{this.props.elName}</h5>
                    {/* Reviews company */}
                    <p className='reviews__comp'>{this.props.elComp}</p>
                </div>
            </div>
        )
    }
}

export default ReviewsTop