import React, { Component } from 'react'
import AplicationRight from './AplicationRight'
import AplicationBtns from './AplicationBtns'

export class Aplication extends Component {
    render() {
        return (
            <section className='aplication'>
                {/* Aplication container */}
                <div className='aplication__cont cont'> 
                    {/* Aplication right */}
                    <AplicationRight />
                    {/* Aplication buttons */}
                    <AplicationBtns />
                </div>
            </section>
        )
    }
}

export default Aplication