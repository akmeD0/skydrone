import React, { Component } from 'react'
import ContactButton from '../ContactButton'

export class CtaContent extends Component {
    render() {
        return (
            <div className='cta__block'>
                <div className='cta__top'>
                    <h3 className='cta__title'>Drones are the future of agriculture</h3>
                    <p className='cta__desc'>Get a bird's eye view of your fields and get a more accurate estimation of crop yield.</p>
                </div>
                <ContactButton />
            </div>
        )
    }
}

export default CtaContent