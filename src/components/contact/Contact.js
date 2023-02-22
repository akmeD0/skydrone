import React, { Component } from 'react'
import ContactHeader from './ContactHeader'
import ContactInfo from './ContactInfo'

export class Contact extends Component {
    render() {
        return (
            <section className='contact'>
                <div className='contact__cont cont'>
                    <ContactHeader />
                    <ContactInfo contacts={this.props.contacts} />
                </div>
            </section>
        )
    }
}

export default Contact