import React, { Component } from 'react'

export class FutureBottom extends Component {
    render() {
        return (
            <div className='future__bottom'>
                {/* Future box1 */}
                <div className='future__box'>
                    {/* Future circle1 */}
                    <div className='future__circle'></div>
                    {/* Future title1 */}
                    <h4 className='future__title'>Modern machinery</h4>
                    {/* Future text1 */}
                    <p className='future__text'>Skydrones are designed for large-scale farming operations, so that you can always stay on top of your farm's health.</p>
                </div>
                {/* Future box2 */}
                <div className='future__box'>
                    {/* Future circle2 */}
                    <div className='future__circle'></div>
                    {/* Future title2 */}
                    <h4 className='future__title'>Save time and money</h4>
                    {/* Future text2 */}
                    <p className='future__text'>With easy-to-use and cost-effective aerial data collection, Skydrone makes it easy to monitor crops and livestock.</p>
                </div>
            </div>
        )
    }
}

export default FutureBottom