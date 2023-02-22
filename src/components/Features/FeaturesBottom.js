import React, { Component } from 'react'

export class FeaturesBottom extends Component {
    render() {
        return (
            <div className='features__bottom'>
                {/* Features box1 */}
                <div className='features__box'>
                    {/* Features circle1 */}
                    <div className='features__circle'><span></span></div>
                    {/* Features title1 */}
                    <h4 className='features__title'>Pest control</h4>
                    {/* Features text1 */}
                    <p className='features__text'>We provide all the data you need to know about your crops in just a few clicks.</p>
                </div>
                {/* Features box2 */}
                <div className='features__box'>
                    {/* Features circle2 */}
                    <div className='features__circle'><span></span><span className='features__circle--last'></span></div>
                    {/* Features title2 */}
                    <h4 className='features__title'>AI-powered scanning</h4>
                    {/* Features text2 */}
                    <p className='features__text'>Skydrone uses AI, machine learning and computer vision for real-time crop scanning.</p>
                </div>
            </div>
        )
    }
}

export default FeaturesBottom