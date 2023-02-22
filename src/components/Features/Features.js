import React, { Component } from 'react'
import FeaturesBlock from './FeaturesBlock'
import FeaturesImg from './FeaturesImg'

export class Features extends Component {
    render() {
        return (
            <section className='features'>
                {/* Features container */}
                <div className='features__cont cont'>
                    {/* Features block */}
                    <FeaturesBlock />
                    {/* Features Image */}
                    <FeaturesImg />
                </div>
            </section>
        )
    }
}

export default Features