import React, { Component } from 'react'
import FutureBlock from './FutureBlock'
import FutureImg from './FutureImg'

export class Future extends Component {
    render() {
        return (
            <section className='future'>
                {/* Future container */}
                <div className='future__cont cont'>
                    {/* Future Image */}
                    <FutureImg />
                    {/* Future Block */}
                    <FutureBlock />
                </div>
            </section>
        )
    }
}

export default Future