import React, { Component } from 'react'

export class ContactHeader extends Component {
    render() {
        return (
            <div className='contact__header'>
                <h4 className='contact__title'>contact</h4>
                <p className='contact__title--sub'>Talk to Us</p>
            </div>
        )
    }
}

export default ContactHeader