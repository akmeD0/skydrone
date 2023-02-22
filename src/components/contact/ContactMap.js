import React, { Component } from 'react'

export class ContactMap extends Component {
    render() {
        return (
            <div className='contact__map'>
                <iframe title='Google Map' loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5941.7724298012245!2d-87.8401304!3d41.8737945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e356c784c6399%3A0x9c370ffbc39515d2!2zNDUxIFF1aW5jeSBTdCwgTWF5d29vZCwgSUwgNjAxNTMsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1675976124752!5m2!1sru!2sua" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    }
}

export default ContactMap