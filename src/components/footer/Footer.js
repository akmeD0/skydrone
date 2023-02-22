import React, { Component } from 'react'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

export class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__cont cont'>
                    <FooterTop footerNav={this.props.footerNav} />
                    <FooterBottom />
                </div>
            </footer>
        )
    }
}

export default Footer