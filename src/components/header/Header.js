import React, { Component } from 'react'
import logo from '../../img/logo.svg';
import ContactButton from '../ContactButton';
import HeaderAside from './HeaderBurger';

export class Header extends Component {
    headerNav = this.props.headerNav;
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div id='header' className='header'>
                {/* Header container */}
                <div className='header__cont cont'>
                    {/* Header Logo */}
                    <a className='header__logo' href='index.html' ><img src={logo} alt="Home page" /></a>
                    {/* Header Left Side */}
                    <div className='header__left'>
                        {/* Header Nav */}
                        <nav className='header__nav'>
                            {this.headerNav.map((el) => (
                                <a href={`#`+el} className='header__link' key={el}>{el}</a>
                            ))}
                        </nav>
                        {/* Header Button */}
                        <ContactButton />
                    </div>
                    <div id='burger' className='header__burger' onClick={() => {
                        document.getElementById('burger').classList.toggle('active')
                        document.getElementById('aside').classList.toggle('active')
                        document.querySelector('body').classList.toggle('lock');
                        if (window.scrollY <= 350) {
                            document.getElementById('header').classList.toggle('active')
                        }
                    }}><span></span></div>
                    <HeaderAside headerNav={this.headerNav} />
                </div>
            </div>
        )
    }
    handleScroll() {
        const point = 350;
        if (window.scrollY >= point) {
            document.getElementById('header').classList.add('active');
        } else {
            document.getElementById('header').classList.remove('active');
        }
    }
}

export default Header