import React, { Component } from 'react'
import ContactButton from '../ContactButton'

export class HeroText extends Component {
    render() {
        return (
            <div className='hero__block'>
                {/* Hero info */}
                <h1 className='hero__title'>Saving the world and growing crops</h1>
                <p className='hero__desc'>Skydrone's innovative drone technology is bringing the latest farming innovations to farms around the world.</p>
                {/* Hero button */}
                <ContactButton />
            </div>
        )
    }
}

export default HeroText