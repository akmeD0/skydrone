import React, { Component } from 'react'
import featuresImg from '../../img/features/features.png'

export class FeaturesImg extends Component {
    render() {
        return (
            <img src={featuresImg} alt='field' className='features__img' />
        )
    }
}

export default FeaturesImg