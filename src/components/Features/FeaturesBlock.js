import React, { Component } from 'react'
import FeaturesBottom from './FeaturesBottom'
import FeaturesTop from './FeaturesTop'

export class FeaturesBlock extends Component {
    render() {
        return (
            <div className='features__block'>
                {/* Features top */}
                <FeaturesTop />
                {/* Features bottom */}
                <FeaturesBottom />
            </div>
        )
    }
}

export default FeaturesBlock