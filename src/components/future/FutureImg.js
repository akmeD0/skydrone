import React, { Component } from 'react'
import futureImg from '../../img/future/future.png'

export class FutureImg extends Component {
    render() {
        return (
            <img src={futureImg} alt='field' className='future__img'/>
        )
    }
}

export default FutureImg