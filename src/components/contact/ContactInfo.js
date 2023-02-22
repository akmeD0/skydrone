import React, { Component } from 'react'
import ContactMap from './ContactMap';

export class ContactInfo extends Component {
    contacts = this.props.contacts;
    render() {
        return (
            <div className='contact__info'>
                <div className='contact__links'>
                    {this.contacts.map((el) => (
                        <div className='contact__block' key={el.id}>
                            <img src={el.img} alt='icon' className='contact__ico'/>
                            <div className='contact__text'>
                                <h5 className='contact__type'>{el.title}</h5>
                                <a href={el.linkTo} target="_blank" rel='noreferrer' className='contact__link'>{el.link}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <ContactMap />
            </div>
        )
    }
}

export default ContactInfo