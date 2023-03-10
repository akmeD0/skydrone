import React from 'react'

function ContactButton() {
    return (
        <button className='button' onClick={() => {
            window.location.href = '#contact'
        }}>
            Contact Us
        </button>
    )
}

export default ContactButton