import React, { Component } from 'react'

export class FooterBottom extends Component {
    render() {
        return (
            <div className='footer__credits'>
                <div className='footer__cookies'>
                    <a href='google.com' className='footer__credits--text'>Privacy Policy</a>
                    <a href='google.com' className='footer__credits--text'>Terms of Service</a>
                    <a href='google.com' className='footer__credits--text'>Cookies Settings</a>
                </div>
                <div className='footer__copyright'>
                    <p className='footer__credits--text'>Copyright © 2022. SkyDrone by @apta.agency</p>
                </div>
            </div>
        )
    }
}

export default FooterBottom