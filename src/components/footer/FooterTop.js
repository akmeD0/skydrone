import React, { Component } from 'react'
import logo from '../../img/footer/footer__logo.svg'
import inst from '../../img/footer/1inst.svg'
import facebook from '../../img/footer/2facebook.svg'
import ytb from '../../img/footer/3ytb.svg'


export class FooterTop extends Component {
    footerNav = this.props.footerNav;
    render() {
        return (
            <div className='footer__top'>
                <a href='index.html' className='footer__logo'>
                    <img src={logo} alt='Home page' />
                </a>
                <ul className='footer__media'>
                    <li className='footer__link'>
                        <a href='instagram.com'>
                            <img src={inst} alt="Footer icons"/>
                        </a>
                    </li>
                    <li className='footer__link'>
                        <a href='instagram.com'>
                            <img src={facebook} alt="Footer icons"/>
                        </a>
                    </li>
                    <li className='footer__link'>
                        <a href='instagram.com'>
                            <img src={ytb} alt="Footer icons"/>
                        </a>
                    </li>
                </ul>
                <nav className='footer__nav'>
                    {this.footerNav.map((el) => (
                        <a href={`#`+el} className='footer__nav--link' key={el}>{el}</a>
                    ))}
                </nav>
            </div>
        )
    }
}

export default FooterTop