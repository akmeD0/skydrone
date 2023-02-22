import React, { Component } from 'react'
import CtaContent from './CtaContent'

export class Cta extends Component {
    render() {
        return (
            <section className='cta'>
                {/* CTA container */}
                <div className='cta__cont cont'>
                    <CtaContent />
                </div>
            </section>
        )
    }
}

export default Cta