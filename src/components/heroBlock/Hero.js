import React, { Component } from 'react'
import HeaderText from './HeroText'

export class Hero extends Component {
    render() {
        return (
            <section className='hero'>
                {/* Hero container */}
                <div className='hero__cont cont'>
                    {/* Hero circle */}
                    <div className='hero__circle'></div>
                    {/* Hero block */}
                    <HeaderText />
                </div>
            </section>
        )
    }
}

export default Hero