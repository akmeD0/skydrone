import React, { Component } from 'react'
import FutureBottom from './FutureBottom'
import FutureTop from './FutureTop'

export class FutureBlock extends Component {
    render() {
        return (
            <div className='future__block'>
                {/* Future top */}
                <FutureTop />
                {/* Future bottom */}
                <FutureBottom />
            </div>
        )
    }
}

export default FutureBlock