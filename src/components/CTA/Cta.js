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
                <a name="Download App" href='index.html' className='archo'>asd</a>
            </section>
        )
    }
}

export default Cta